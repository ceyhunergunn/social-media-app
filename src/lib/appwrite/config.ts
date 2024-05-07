import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "663a05c800157da4ac67",
  databaseId: "663a1d26002ea5013dcb",
  storageId: "663a1ce4002edd8e83b9",
  userCollectionId: "663a1ddc00021140d94c",
  postCollectionId: "663a1d90001cc4e3d7dc",
  savesCollectionId: "663a1df4002cba26a48d",
  //   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
