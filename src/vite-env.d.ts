/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPTILER_API_KEY?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
