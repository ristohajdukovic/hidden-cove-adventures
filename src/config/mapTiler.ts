export const mapTilerApiKey =
  import.meta.env.VITE_MAPTILER_API_KEY?.trim() ?? "";

export const hasMapTilerApiKey = mapTilerApiKey.length > 0;
