import { AppwriteException, Query } from 'appwrite';
import { createDocumentId, databases, getEnv } from '../lib/appwrite';

type EnvKey =
  | 'VITE_APPWRITE_DATABASE_ID'
  | 'VITE_APPWRITE_CONTACT_COLLECTION_ID'
  | 'VITE_APPWRITE_LEADS_COLLECTION_ID'
  | 'VITE_APPWRITE_TESTIMONIALS_COLLECTION_ID'
  | 'VITE_APPWRITE_METRICS_COLLECTION_ID'
  | 'VITE_APPWRITE_DOWNLOADS_COLLECTION_ID'
  | 'VITE_APPWRITE_DOWNLOADS_DOCUMENT_ID';

const requireEnv = (key: EnvKey) => {
  const value = getEnv(key);
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const databaseId = () => requireEnv('VITE_APPWRITE_DATABASE_ID');

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  language: 'en' | 'sw';
}

export const submitContactMessage = async (payload: ContactPayload) => {
  const collectionId = requireEnv('VITE_APPWRITE_CONTACT_COLLECTION_ID');

  return databases.createDocument(databaseId(), collectionId, createDocumentId(), {
    ...payload,
    createdAt: new Date().toISOString(),
    status: 'new',
  });
};

export interface OrganizerLeadPayload {
  fullName: string;
  email: string;
  organization?: string;
  phone?: string;
  planInterest?: string;
  source: 'hero' | 'pricing' | 'footer';
}

export const submitOrganizerLead = async (payload: OrganizerLeadPayload) => {
  const collectionId = requireEnv('VITE_APPWRITE_LEADS_COLLECTION_ID');

  return databases.createDocument(databaseId(), collectionId, createDocumentId(), {
    ...payload,
    createdAt: new Date().toISOString(),
    status: 'new',
  });
};

export interface DownloadLinks {
  googlePlayUrl?: string;
  appStoreUrl?: string;
  directApkFileId?: string;
  directApkUrl?: string;
  lastUpdatedAt?: string;
}

export const fetchDownloadLinks = async (): Promise<DownloadLinks | null> => {
  const collectionId = requireEnv('VITE_APPWRITE_DOWNLOADS_COLLECTION_ID');
  const documentId = requireEnv('VITE_APPWRITE_DOWNLOADS_DOCUMENT_ID');

  try {
    const document = await databases.getDocument(databaseId(), collectionId, documentId);

    return {
      googlePlayUrl: document.googlePlayUrl,
      appStoreUrl: document.appStoreUrl,
      directApkFileId: document.directApkFileId,
      directApkUrl: document.directApkUrl,
      lastUpdatedAt: document.lastUpdatedAt,
    };
  } catch (error) {
    if (error instanceof AppwriteException && error.code === 404) {
      console.warn('Download links document not found.');
      return null;
    }
    throw error;
  }
};

export interface TestimonialRecord {
  name: string;
  role: string;
  event: string;
  text: string;
  rating: number;
  image?: string;
}

export const fetchTestimonialsByLanguage = async (
  language: 'en' | 'sw'
): Promise<TestimonialRecord[]> => {
  const collectionId = requireEnv('VITE_APPWRITE_TESTIMONIALS_COLLECTION_ID');

  const response = await databases.listDocuments(databaseId(), collectionId, [
    Query.equal('language', language),
    Query.orderDesc('publishedAt'),
  ]);

  return response.documents.map((doc) => ({
    name: doc.name,
    role: doc.role,
    event: doc.event,
    text: doc.text,
    rating: doc.rating ?? 5,
    image: doc.image,
  }));
};

export interface SiteMetrics {
  eventsCreated?: number;
  ticketsSold?: number;
  happyUsers?: number;
  updatedAt?: string;
}

export const fetchSiteMetrics = async (): Promise<SiteMetrics | null> => {
  const collectionId = requireEnv('VITE_APPWRITE_METRICS_COLLECTION_ID');

  try {
    const response = await databases.listDocuments(databaseId(), collectionId, [
      Query.limit(1),
    ]);

    const [latest] = response.documents;
    if (!latest) {
      return null;
    }

    return {
      eventsCreated: latest.eventsCreated,
      ticketsSold: latest.ticketsSold,
      happyUsers: latest.happyUsers,
      updatedAt: latest.updatedAt ?? latest.$updatedAt,
    };
  } catch (error) {
    if (error instanceof AppwriteException && error.code === 404) {
      return null;
    }
    throw error;
  }
};

