import { create } from "zustand";
import { createClient, Entry } from "contentful";
import { ContentfulData } from "@/types/contentful";

interface ContentfulStore {
  data: ContentfulData | null;
  isLoading: boolean;
  error: Error | null;
  fetchAllContent: () => Promise<void>;
  fetchContentByType: (
    contentType: keyof ContentfulData
  ) => Promise<Entry<any>[]>;
}

// Create Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const useContentfulStore = create<ContentfulStore>((set, get) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchAllContent: async () => {
    try {
      set({ isLoading: true, error: null });

      // Fetch all content types in parallel
      const [
        header,
        about,
        // projects, testimonials, experiences
      ] = await Promise.all([
        get().fetchContentByType("header"),
        get().fetchContentByType("about"),
        // get().fetchContentByType("projects"),
        // get().fetchContentByType("testimonials"),
        // get().fetchContentByType("experiences"),
      ]);

      set({
        data: {
          header,
          about,
          // projects,
          // testimonials,
          // experiences,
        } as ContentfulData,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching Contentful data:", error);
      set({ error: error as Error, isLoading: false });
    }
  },

  fetchContentByType: async (contentType: keyof ContentfulData) => {
    try {
      const response = await client.getEntries({
        content_type: contentType,
        include: 2, // Include 2 levels of linked entries
      });
      return response.items;
    } catch (error) {
      console.error(`Error fetching ${contentType}:`, error);
      throw error;
    }
  },
}));
