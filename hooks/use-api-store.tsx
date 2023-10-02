"use client"

import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"; 

// https://docs.pmnd.rs/zustand/integrations/persisting-store-data

export type Credentials = {
  subdomain: string;
  apiKey: string;
}

export type User = {
  isAdmin: boolean;
  email: string;
  name: string;
}

interface apiStore {
  user: User;
  credentials: Credentials;
  isLogged: boolean;
  isTestUser: boolean;
  logout: () => void;
  login: (credentials: Credentials, user: User, isTestUser: boolean) => void;
}

export const useApiStore = create(
  persist<apiStore>((set, get) => ({
    user: { isAdmin: false, email: '', name: '' },
    credentials: { subdomain: '', apiKey: '' },
    isLogged: false,
    isTestUser: false,
    logout: () => {
      set({
        isLogged: false,
        isTestUser: false,
        credentials: {
          subdomain: '',
          apiKey: '',
        },
        user: {
          isAdmin: false,
          email: '',
          name: ''
        }
      });
    },
    login: (credentials: Credentials, user: User, isTestUser: boolean) => { 
      set({
        isLogged: true,
        isTestUser: isTestUser,
        user: user,
        credentials: credentials,
      });
    }
  }), {
    name: 'api-storage', 
    storage: createJSONStorage(() => localStorage),
  })
);
