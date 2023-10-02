"use client"

import { create } from 'zustand';

interface Credentials {
  subdomain: string;
  apiKey: string;
}

interface useApiStore {
  credentials: Credentials;
  isLogged: boolean;
  isTestUser: boolean;
  setIsLogged: (isLogged: boolean) => void;
  setCredentials: (credentials: Credentials) => void;
}

export const useApiStore = create<useApiStore>((set) => ({
  credentials: { subdomain: '', apiKey: '' },
  isLogged: false,
  isTestUser: false,
  setIsLogged: (isLogged: boolean) => set({ isLogged }),
  setCredentials: (credentials: Credentials) => set({ credentials }),
}));

// Access subdomain and apiKey from the Zustand store
export const getSubdomain = () => useApiStore.getState().credentials.subdomain;
export const getApiKey = () => useApiStore.getState().credentials.apiKey;