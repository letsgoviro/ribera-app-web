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

export const getEnv = (key: keyof ImportMetaEnv) => {
  const value = import.meta.env[key];
  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
  }
  return value;
};

