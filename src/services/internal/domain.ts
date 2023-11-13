const JJAN_URL = import.meta.env.DEV
  ? import.meta.env.VITE_JJAN_DEV_URL
  : import.meta.env.VITE_JJAN_PROD_URL;

export { JJAN_URL };
