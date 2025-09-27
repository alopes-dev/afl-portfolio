"use client";
import { useContentfulStore } from "@/store/contentful";
import { AboutFields, HeaderFields } from "@/types/contentful";
import {
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

type AppContentfulContextData = {
  header: HeaderFields | null;
  about: AboutFields | null;
  isLoading: boolean;
  error: Error | null;
};

const AppContentfulContext = createContext<AppContentfulContextData | null>(
  null
);

export const useAppContentful = (): AppContentfulContextData => {
  const context = useContext(AppContentfulContext);
  if (!context) {
    throw new Error(
      "useAppContentful must be used within a AppContentfulContext"
    );
  }
  return context;
};

export const AppContentfulProvider = (props: { children: ReactNode }) => {
  const {
    fetchAllContent,
    isLoading,
    error,
    data: dataResponse,
  } = useContentfulStore();

  useEffect(() => {
    fetchAllContent();
  }, [fetchAllContent]);

  const headerFields = useMemo(() => {
    if (!dataResponse?.header?.[0]?.fields) return null;

    return dataResponse.header[0].fields as HeaderFields;
  }, [dataResponse]);

  const aboutFields = useMemo(() => {
    if (!dataResponse?.about?.[0]?.fields) return null;

    return dataResponse.about[0].fields as AboutFields;
  }, [dataResponse]);

  const memoizedValue = useMemo(
    () => ({
      header: headerFields || null,
      about: aboutFields || null,
      isLoading,
      error,
    }),
    [isLoading, error, aboutFields, headerFields]
  );
  return <AppContentfulContext.Provider value={memoizedValue} {...props} />;
};
