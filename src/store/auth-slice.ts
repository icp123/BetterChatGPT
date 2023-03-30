import { defaultAPIEndpoint } from '@constants/auth';
import { StoreSlice } from './store';

type AuthData = {
  address: string
  message: string
  signature: string
}
export interface AuthSlice {
  authData?: AuthData;
  apiKey?: string;
  apiEndpoint: string;
  firstVisit: boolean;
  setApiKey: (apiKey: string) => void;
  setApiEndpoint: (apiEndpoint: string) => void;
  setFirstVisit: (firstVisit: boolean) => void;
  setAuthData: (data: AuthData) => void
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  apiEndpoint: defaultAPIEndpoint,
  firstVisit: true,
  setAuthData: (data: AuthData) => {
    set((prev: AuthSlice) => ({
      ...prev,
      authData: data
    }))
  },
  setApiKey: (apiKey: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiKey: apiKey,
    }));
  },
  setApiEndpoint: (apiEndpoint: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiEndpoint: apiEndpoint,
    }));
  },
  setFirstVisit: (firstVisit: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      firstVisit: firstVisit,
    }));
  },
});
