"use client"

import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"; 

// https://docs.pmnd.rs/zustand/integrations/persisting-store-data

interface Credentials {
  subdomain: string;
  apiKey: string;
}

interface User {
  isAdmin: boolean;
  email: string;
  name: string;
}

interface apiStore {
  user: User;
  credentials: Credentials;
  isLogged: boolean;
  isTestUser: boolean;
  setUser: (user: User) => void;
  setIsTestUser: (isTestUser: boolean) => void;
  setIsLogged: (isLogged: boolean) => void;
  setCredentials: (credentials: Credentials) => void;
  logout: () => void;
}

export const useApiStore = create(
  persist<apiStore>((set, get) => ({
    user: { isAdmin: false, email: '', name: '' },
    credentials: { subdomain: '', apiKey: '' },
    isLogged: false,
    isTestUser: false,
    setIsTestUser: (isTestUser) => set({ isTestUser }),
    setIsLogged: (isLogged) => set({ isLogged }),
    setUser: (user) => set({ user }),
    setCredentials: (credentials) => set({ credentials }),
    logout: () => {
      set({
        isLogged: false,
        isTestUser: false,
        user: {
          isAdmin: false,
          email: '',
          name: ''
        }
      });
    }
  }), {
    name: 'api-storage', 
    storage: createJSONStorage(() => localStorage),
  })
);
