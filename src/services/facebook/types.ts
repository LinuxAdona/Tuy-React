/**
 * Facebook Graph API Response Types
 */

// Raw response from Facebook Graph API
export interface FacebookAPIPost {
  id: string;
  created_time: string; // ISO 8601: "2026-01-17T11:51:48+0000"
  message?: string; // Some posts might not have message
  full_picture?: string; // Image URL (optional)
  permalink_url: string; // Link to Facebook post
  attachments?: FacebookAttachmentsWrapper; // Post attachments (photos, videos, etc.)
}

/**
 * Facebook Attachment Media Structure
 */
export interface FacebookAttachmentMedia {
  image?: {
    height: number;
    src: string;
    width: number;
  };
}

/**
 * Facebook Attachment Structure
 */
export interface FacebookAttachment {
  type: string; // "photo", "video", "native_templates", "share", etc.
  media?: FacebookAttachmentMedia;
  title?: string; // Used to detect unavailable content
  description?: string;
  target?: {
    id: string;
    url: string;
  };
  url?: string;
}

/**
 * Facebook Attachments Wrapper
 */
export interface FacebookAttachmentsWrapper {
  data: FacebookAttachment[];
}

export interface FacebookAPIResponse {
  data: FacebookAPIPost[];
  paging?: {
    cursors?: {
      before: string;
      after: string;
    };
    next?: string;
    previous?: string;
  };
}

/**
 * Internal Application Types
 * (Compatible with existing FacebookPost interface)
 */
export interface FacebookPostData {
  id: string;
  date: string; // ISO 8601 date string
  title: string; // Extracted from first line or first 50 chars of message
  excerpt: string; // Remaining message (max 200 chars)
  postUrl: string; // permalink_url from API
  imageUrl?: string; // full_picture from API (optional)
}

/**
 * Hook Return Type
 */
export interface UseFacebookPostsResult {
  posts: FacebookPostData[];
  loading: boolean;
  error: Error | null;
}

/**
 * Cache Storage Types
 */
export interface FacebookPostsCache {
  posts: FacebookPostData[];
  timestamp: number;
}
