/**
 * Facebook Posts Data
 * 
 * This file contains the latest announcements from the Municipality of Tuy Facebook page.
 * 
 * To update:
 * 1. Visit https://www.facebook.com/MunicipalityOfTuy
 * 2. Find the latest posts
 * 3. Click on a post to view it in full
 * 4. Copy the URL from the browser address bar
 * 5. Add or update the post data below
 * 
 * Note: Keep the posts in reverse chronological order (newest first)
 */

export interface FacebookPost {
  id: string;
  date: string; // ISO 8601 date string (YYYY-MM-DDTHH:mm:ssZ)
  title: string;
  excerpt: string; // Short description (2-3 sentences)
  postUrl: string; // Full URL to the Facebook post
  imageUrl?: string; // Optional image URL from Facebook post
}

/**
 * Latest Facebook posts from Municipality of Tuy
 * Update this array with new posts as they are published
 */
export const facebookPosts: FacebookPost[] = [
  {
    id: "post_2026_01_20",
    date: "2026-01-20T10:00:00Z",
    title: "Public Consultation for 2026 Annual Investment Plan",
    excerpt:
      "The Municipality invites all stakeholders to participate in the consultation meeting for the 2026 Annual Investment Plan. Your input is valuable in shaping our community's future development.",
    postUrl: "https://www.facebook.com/MunicipalityOfTuy/posts/123456789",
  },
  {
    id: "post_2026_01_15",
    date: "2026-01-15T14:30:00Z",
    title: "New Business Permit Application Process Now Available Online",
    excerpt:
      "Starting this month, business owners can now apply for permits through our streamlined online portal. Enjoy faster processing and convenient access to all business-related services.",
    postUrl: "https://www.facebook.com/MunicipalityOfTuy/posts/987654321",
  },
  {
    id: "post_2026_01_10",
    date: "2026-01-10T09:00:00Z",
    title: "Community Health and Wellness Program Schedule",
    excerpt:
      "Free health screening and wellness activities will be conducted in all barangays throughout February. Don't miss this opportunity to prioritize your health with our healthcare team.",
    postUrl: "https://www.facebook.com/MunicipalityOfTuy/posts/555666777",
  },
];

/**
 * Municipality of Tuy Official Facebook Page URL
 */
export const FACEBOOK_PAGE_URL = "https://www.facebook.com/MunicipalityOfTuy";
