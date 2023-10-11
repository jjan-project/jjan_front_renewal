const JJAN_URL = import.meta.env.DEV
  ? import.meta.env.VITE_JJAN_DEV_URL
  : "production-url";

export { JJAN_URL };
