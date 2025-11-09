import { Client, Databases, ID, Storage } from 'appwrite';

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  console.warn(
    'Missing Appwrite configuration. Please set VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID in your environment variables.'
  );
}

const client = new Client();

client.setEndpoint(endpoint ?? '').setProject(projectId ?? '');

export const databases = new Databases(client);
export const storage = new Storage(client);
export const appwriteClient = client;
export const createDocumentId = () => ID.unique();

export type EnvVarKey =
  | 'VITE_APPWRITE_ENDPOINT'
  | 'VITE_APPWRITE_PROJECT_ID'
  | 'VITE_APPWRITE_DATABASE_ID'
  | 'VITE_APPWRITE_BUCKET_ID'
  | 'VITE_APPWRITE_CONTACT_COLLECTION_ID'
  | 'VITE_APPWRITE_LEADS_COLLECTION_ID'
  | 'VITE_APPWRITE_TESTIMONIALS_COLLECTION_ID'
  | 'VITE_APPWRITE_METRICS_COLLECTION_ID'
  | 'VITE_APPWRITE_DOWNLOADS_COLLECTION_ID'
  | 'VITE_APPWRITE_DOWNLOADS_DOCUMENT_ID';

export const getEnv = (key: EnvVarKey) => {
  const value = import.meta.env[key];
  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
  }
  return value;
};

