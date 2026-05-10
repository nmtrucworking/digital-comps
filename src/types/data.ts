export interface VideoChapter {
  time: string; // e.g. "00:02:15"
  title: string;
  keyTakeaways?: string[];
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  duration?: string; // human readable
  viewCount?: number;
  speakers?: string[];
  videoUrl?: string;
  thumbnailUrl?: string;
  chapters?: VideoChapter[];
  resources?: { title: string; url: string }[];
}

export interface ImageItem {
  id: string;
  url: string;
  altText: string;
  category?: string;
  caption?: string;
  subImages?: { 
    id: string; 
    url: string;
    altText: string; 
    caption?: string 
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  author?: string;
  publishedDate?: string; // ISO date
  thumbnail?: string;
  summary?: string;
  content?: string;
  tags?: string[];
}

export interface TeamMember {
  id: string;
  fullName?: string;
  fullNameKey?: string;
  role?: string;
  roleKey?: string;
  affiliation?: string;
  bio?: string;
  bioKey?: string;
  avatarUrl?: string;
  socialLinks?: { label: string; url: string }[];
}

export interface OpportunityCard {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  actionLink?: string;
}
