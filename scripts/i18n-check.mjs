import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrEntry = path.join(rootDir, "dist-ssr", "entry-server.js");
const { DEFAULT_LOCALE, supportedLocales, translations, pageContent } = await import(
  pathToFileURL(ssrEntry).href
);

const localeKeys = Object.keys(supportedLocales);
const allowedEmptyPaths = new Set(["tours.private.duration"]);
const identicalWhitelist = [
  /^Hidden Cove Ulcinj$/,
  /^Valdanos$/,
  /^Valdanos Bay$/,
  /^Ulcinj$/,
  /^Ulcinj, Montenegro$/,
  /^Montenegro$/,
  /^Vucja jazbina$/,
  /^Our Hidden Beach$/,
  /^Hidden Beach$/,
  /^Classic Tour$/,
  /^BBQ Tour$/,
  /^Sunset Tour$/,
  /^Moonlight Tour$/,
  /^Moonlight Tour \| Hidden Cove Ulcinj$/,
  /^WhatsApp$/,
  /^SUP$/,
  /^MapTiler/,
  /^WebGL/,
  /^FAQ$/,
  /^€?\d/,
  /^\d/,
];
const ignoredIdenticalPathPatterns = [
  /\.id$/,
  /\.target$/,
  /\.name$/,
  /\.from$/,
  /^nav\.route$/,
  /^footer\.bottomPlaces$/,
];

function isPlainObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function placeholders(value) {
  return [...String(value).matchAll(/{{\s*[\w.-]+\s*}}/g)].map((match) =>
    match[0].replace(/\s+/g, ""),
  );
}

function compareShape(reference, candidate, locale, currentPath = "") {
  const errors = [];

  if (Array.isArray(reference)) {
    if (!Array.isArray(candidate)) {
      return [`${locale}:${currentPath} should be an array`];
    }

    if (reference.length !== candidate.length) {
      errors.push(
        `${locale}:${currentPath} array length ${candidate.length} does not match ${reference.length}`,
      );
    }

    reference.forEach((entry, index) => {
      errors.push(
        ...compareShape(entry, candidate[index], locale, `${currentPath}[${index}]`),
      );
    });

    return errors;
  }

  if (isPlainObject(reference)) {
    if (!isPlainObject(candidate)) {
      return [`${locale}:${currentPath} should be an object`];
    }

    const referenceKeys = Object.keys(reference);
    const candidateKeys = Object.keys(candidate);

    referenceKeys
      .filter((key) => !(key in candidate))
      .forEach((key) => errors.push(`${locale}:${currentPath}.${key} is missing`));

    candidateKeys
      .filter((key) => !(key in reference))
      .forEach((key) => errors.push(`${locale}:${currentPath}.${key} is unexpected`));

    referenceKeys.forEach((key) => {
      errors.push(
        ...compareShape(
          reference[key],
          candidate[key],
          locale,
          currentPath ? `${currentPath}.${key}` : key,
        ),
      );
    });

    return errors;
  }

  const normalizedPath = currentPath.replace(/\[\d+\]/g, "");

  if (
    typeof candidate === "string" &&
    candidate.trim() === "" &&
    !allowedEmptyPaths.has(normalizedPath)
  ) {
    errors.push(`${locale}:${currentPath} is empty`);
  }

  if (typeof reference === "string" && typeof candidate === "string") {
    const expectedPlaceholders = placeholders(reference).sort().join(",");
    const actualPlaceholders = placeholders(candidate).sort().join(",");

    if (expectedPlaceholders !== actualPlaceholders) {
      errors.push(`${locale}:${currentPath} placeholder mismatch`);
    }
  }

  return errors;
}

function collectStrings(value, currentPath = "", output = []) {
  if (typeof value === "string") {
    output.push({ path: currentPath, value });
    return output;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => collectStrings(entry, `${currentPath}[${index}]`, output));
    return output;
  }

  if (isPlainObject(value)) {
    Object.entries(value).forEach(([key, entry]) =>
      collectStrings(entry, currentPath ? `${currentPath}.${key}` : key, output),
    );
  }

  return output;
}

const errors = [];
const suspicious = [];

function checkLocalizedObject(name, localizedObject) {
  const reference = localizedObject[DEFAULT_LOCALE];

  localeKeys.forEach((locale) => {
    errors.push(...compareShape(reference, localizedObject[locale], `${locale}:${name}`));

    if (locale === DEFAULT_LOCALE) {
      return;
    }

    const englishStrings = new Map(
      collectStrings(reference).map((entry) => [entry.path, entry.value]),
    );

    collectStrings(localizedObject[locale]).forEach((entry) => {
      const english = englishStrings.get(entry.path);

      if (
        english &&
        english === entry.value &&
        entry.value.length > 3 &&
        !ignoredIdenticalPathPatterns.some((pattern) => pattern.test(entry.path)) &&
        !identicalWhitelist.some((pattern) => pattern.test(entry.value))
      ) {
        suspicious.push(`${locale}:${name}.${entry.path} matches English: "${entry.value}"`);
      }
    });
  });
}

checkLocalizedObject("translations", translations);
checkLocalizedObject("pageContent", pageContent);

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (suspicious.length > 0) {
  console.warn(`Suspicious identical strings:\n${suspicious.join("\n")}`);
}

console.log(
  `i18n parity check passed for ${localeKeys.length} locales with ${collectStrings(translations[DEFAULT_LOCALE]).length} translation leaves and ${collectStrings(pageContent[DEFAULT_LOCALE]).length} page-content leaves.`,
);
