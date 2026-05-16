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
  title?: string;
  titleKey?: string;     // Dùng cho i18n
  author?: string;
  publishedDate?: string; 
  date?: string;         // Dùng cho i18n (tuỳ chọn)
  thumbnail?: string;
  coverImage?: string;   // Dùng cho ảnh bìa i18n
  summary?: string;
  excerptKey?: string;   // Dùng cho i18n
  content?: string;
  contentKey?: string;   // Dùng cho i18n
  tags?: string[];
  slidesUrl?: string;    // Link file Google Drive Slide-show đính kèm
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
