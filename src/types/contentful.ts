import { Entry, EntrySkeletonType } from "contentful";

// Define content type IDs
export const CONTENT_TYPE = {
  HEADER: "header",
  ABOUT: "about",
  PROJECT: "projects",
  TESTIMONIAL: "testimonials",
  EXPERIENCE: "experiences",
} as const;

type Media = {
  fields: {
    description: string;
    file: {
      url: string;
    };
  };
};

// Header content type
export interface HeaderFields {
  name: string;
  role: string;
  description: string;
  photo: Media;
  avatar: Media;
}

export interface HeaderSkeleton extends EntrySkeletonType {
  contentTypeId: typeof CONTENT_TYPE.HEADER;
  fields: HeaderFields;
}

// Project content type
export interface ProjectFields {
  title: string;
  description: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  technologies: string[];
  link?: string;
  githubLink?: string;
}

export interface AboutFields {
  title: string;
  description: string;
  highlights: {
    fields: {
      name: string;
      numbers: string;
      isActive: boolean;
    };
  }[];
}

export interface ProjectSkeleton extends EntrySkeletonType {
  contentTypeId: typeof CONTENT_TYPE.PROJECT;
  fields: ProjectFields;
}

export interface AboutSkeleton extends EntrySkeletonType {
  contentTypeId: typeof CONTENT_TYPE.ABOUT;
  fields: AboutFields;
}

// Testimonial content type
export interface TestimonialFields {
  name: string;
  role: string;
  text: string;
  avatar?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface TestimonialSkeleton extends EntrySkeletonType {
  contentTypeId: typeof CONTENT_TYPE.TESTIMONIAL;
  fields: TestimonialFields;
}

// Experience content type
export interface ExperienceFields {
  company: string;
  title: string;
  period: string;
  description: string;
}

export interface ExperienceSkeleton extends EntrySkeletonType {
  contentTypeId: typeof CONTENT_TYPE.EXPERIENCE;
  fields: ExperienceFields;
}

// Content types mapping
export interface ContentfulData {
  header: Entry<HeaderSkeleton>[];
  projects: Entry<ProjectSkeleton>[];
  about: Entry<AboutSkeleton>[];
  testimonials: Entry<TestimonialSkeleton>[];
  experiences: Entry<ExperienceSkeleton>[];
}
