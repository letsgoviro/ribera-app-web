export {};

declare global {
  interface ImportMetaEnv {
    readonly VITE_APPWRITE_ENDPOINT?: string;
    readonly VITE_APPWRITE_PROJECT_ID?: string;
    readonly VITE_APPWRITE_DATABASE_ID?: string;
    readonly VITE_APPWRITE_BUCKET_ID?: string;
    readonly VITE_APPWRITE_CONTACT_COLLECTION_ID?: string;
    readonly VITE_APPWRITE_LEADS_COLLECTION_ID?: string;
    readonly VITE_APPWRITE_TESTIMONIALS_COLLECTION_ID?: string;
    readonly VITE_APPWRITE_METRICS_COLLECTION_ID?: string;
    readonly VITE_APPWRITE_DOWNLOADS_COLLECTION_ID?: string;
    readonly VITE_APPWRITE_DOWNLOADS_DOCUMENT_ID?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

