import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DEFAULT_LOCALE, getLocaleFromPath, localizedPath } from "@/i18n/locales";
import { translations } from "@/i18n/translations";

const NotFound = () => {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname)?.key ?? DEFAULT_LOCALE;
  const t = translations[locale].notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.append(robots);
    }

    robots.content = "noindex, follow";
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.title}</p>
        <p className="mb-6 text-muted-foreground">{t.body}</p>
        <a href={localizedPath(DEFAULT_LOCALE)} className="text-primary underline hover:text-primary/90">
          {t.home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
