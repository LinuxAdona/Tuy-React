import type { FacebookAPIResponse, FacebookPostData, FacebookAPIPost } from './types';

/**
 * Facebook Graph API Client
 * 
 * Handles fetching posts from Facebook, caching, and data transformation.
 */

/**
 * Unicode to ASCII mapping for styled mathematical characters
 * Maps Unicode styled characters back to their ASCII equivalents
 */
const UNICODE_TO_ASCII_MAP: Record<string, string> = {
  // Mathematical Sans-Serif Bold (𝗔-𝗭, 𝗮-𝘇, 𝟬-𝟵) - Most common in social media
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D5D4 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D5EE + i), String.fromCharCode(97 + i)])), // a-z
  ...Object.fromEntries([...Array(10)].map((_, i) => [String.fromCodePoint(0x1D7EC + i), String.fromCharCode(48 + i)])), // 0-9
  
  // Mathematical Bold (𝐀-𝐙, 𝐚-𝐳, 𝟎-𝟗)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D400 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D41A + i), String.fromCharCode(97 + i)])), // a-z
  ...Object.fromEntries([...Array(10)].map((_, i) => [String.fromCodePoint(0x1D7CE + i), String.fromCharCode(48 + i)])), // 0-9
  
  // Mathematical Italic (𝐴-𝑍, 𝑎-𝑧)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D434 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D44E + i), String.fromCharCode(97 + i)])), // a-z
  
  // Mathematical Bold Italic (𝑨-𝒁, 𝒂-𝒛)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D468 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D482 + i), String.fromCharCode(97 + i)])), // a-z
  
  // Mathematical Sans-Serif (𝖠-𝖹, 𝖺-𝗓, 𝟢-𝟫)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D5A0 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D5BA + i), String.fromCharCode(97 + i)])), // a-z
  ...Object.fromEntries([...Array(10)].map((_, i) => [String.fromCodePoint(0x1D7E2 + i), String.fromCharCode(48 + i)])), // 0-9
  
  // Mathematical Sans-Serif Italic (𝘈-𝘡, 𝘢-𝘻)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D608 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D622 + i), String.fromCharCode(97 + i)])), // a-z
  
  // Mathematical Sans-Serif Bold Italic (𝘼-𝙕, 𝙖-𝙯)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D63C + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1D656 + i), String.fromCharCode(97 + i)])), // a-z
  
  // Circled letters (Ⓐ-Ⓩ, ⓐ-ⓩ, ⓪-⑨)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x24B6 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x24D0 + i), String.fromCharCode(97 + i)])), // a-z
  ...Object.fromEntries([...Array(10)].map((_, i) => [String.fromCodePoint(0x24EA + i), String.fromCharCode(48 + i)])), // 0-9
  
  // Fullwidth Latin (ＡＢＣ → ABC, ａｂｃ → abc, ０１２ → 012)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0xFF21 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0xFF41 + i), String.fromCharCode(97 + i)])), // a-z
  ...Object.fromEntries([...Array(10)].map((_, i) => [String.fromCodePoint(0xFF10 + i), String.fromCharCode(48 + i)])), // 0-9
  
  // Squared Latin (🄰-🅉, 🅰-🆉)
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1F130 + i), String.fromCharCode(65 + i)])), // A-Z
  ...Object.fromEntries([...Array(26)].map((_, i) => [String.fromCodePoint(0x1F170 + i), String.fromCharCode(65 + i)])), // A-Z
};

/**
 * Normalize Unicode styled text to plain ASCII
 * Converts mathematical/styled Unicode characters while preserving emojis and hashtags
 * 
 * @param text - Original text with potential Unicode styled characters
 * @returns Normalized text with plain ASCII characters
 * 
 * @example
 * normalizeUnicodeText("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗯𝗼𝗹𝗱 #test 🎉") → "This is bold #test 🎉"
 */
function normalizeUnicodeText(text: string): string {
  if (!text) return text;

  // Convert styled Unicode characters to ASCII
  return Array.from(text)
    .map(char => UNICODE_TO_ASCII_MAP[char] || char)
    .join('');
}

// Environment configuration
const PAGE_ID = import.meta.env.VITE_FACEBOOK_PAGE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
const POST_LIMIT = Number(import.meta.env.VITE_FACEBOOK_POST_LIMIT) || 4;
const CACHE_DURATION = Number(import.meta.env.VITE_FACEBOOK_CACHE_DURATION) || 900000; // 15 minutes

// Cache keys
const CACHE_KEY = 'tuy_facebook_posts_cache';
const CACHE_TIMESTAMP_KEY = 'tuy_facebook_posts_timestamp';

/**
 * Check if cached data is still valid
 */
function isCacheValid(): boolean {
  try {
    const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!timestamp) return false;

    const now = Date.now();
    const cached = parseInt(timestamp, 10);
    return (now - cached) < CACHE_DURATION;
  } catch {
    return false;
  }
}

/**
 * Get cached posts from localStorage
 */
function getCachedPosts(): FacebookPostData[] | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    return JSON.parse(cached) as FacebookPostData[];
  } catch (error) {
    console.error('[Facebook Cache] Failed to parse cached posts:', error);
    return null;
  }
}

/**
 * Save posts to localStorage cache
 */
function setCachedPosts(posts: FacebookPostData[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.error('[Facebook Cache] Failed to cache posts:', error);
  }
}

/**
 * Clear cached posts (useful for debugging)
 */
export function clearCache(): void {
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    console.log('[Facebook Cache] Cache cleared');
  } catch (error) {
    console.error('[Facebook Cache] Failed to clear cache:', error);
  }
}

/**
 * Parse Facebook post message into title and excerpt
 */
function parsePostMessage(message: string): { title: string; excerpt: string } {
  if (!message || message.trim().length === 0) {
    return {
      title: 'Announcement',
      excerpt: 'View this post on Facebook for more details.',
    };
  }

  // Normalize Unicode styled characters to plain text
  const normalizedMessage = normalizeUnicodeText(message);

  const lines = normalizedMessage.split('\n').filter(line => line.trim().length > 0);

  // Title: First line or first 60 chars
  let title = lines[0] || message;
  if (title.length > 60) {
    title = title.substring(0, 60).trim() + '...';
  }

  // Excerpt: Remaining text or continuation
  let excerpt = '';
  if (lines.length > 1) {
    excerpt = lines.slice(1).join(' ');
  } else if (message.length > title.length) {
    excerpt = message.substring(title.length);
  }

  // Limit excerpt to 150 chars
  if (excerpt.length > 150) {
    excerpt = excerpt.substring(0, 150).trim() + '...';
  }

  // Fallback if no excerpt
  if (!excerpt || excerpt.trim().length === 0) {
    excerpt = 'Click to read more on Facebook.';
  }

  return { title, excerpt };
}

/**
 * Extract image URL from Facebook post
 * Priority: attachments.media.image.src → full_picture
 * 
 * @param post - Facebook API post object
 * @returns Image URL or null if no image available
 */
function extractImageUrl(post: FacebookAPIPost): string | null {
  // Strategy 1: Check attachments first (most reliable)
  if (post.attachments?.data && post.attachments.data.length > 0) {
    for (const attachment of post.attachments.data) {
      // Check if attachment has media with an image
      if (attachment.media?.image?.src) {
        return attachment.media.image.src;
      }
    }
  }

  // Strategy 2: Fallback to full_picture
  if (post.full_picture) {
    return post.full_picture;
  }

  // No image available
  return null;
}

/**
 * Check if post is an unavailable shared post
 * These are posts where the original shared content was deleted/made private
 * 
 * @param post - Facebook API post object
 * @returns true if post content is unavailable
 */
function isUnavailableSharedPost(post: FacebookAPIPost): boolean {
  if (!post.attachments?.data) return false;

  return post.attachments.data.some(attachment => 
    attachment.type === 'native_templates' && 
    attachment.title?.toLowerCase().includes("content isn't available")
  );
}

/**
 * Fetch posts from Facebook Graph API
 */
async function fetchFacebookPosts(): Promise<FacebookPostData[]> {
  if (!PAGE_ID || !ACCESS_TOKEN) {
    throw new Error('Facebook API credentials not configured. Please check your .env file.');
  }

  const url = `https://graph.facebook.com/v21.0/${PAGE_ID}/posts`;
  const params = new URLSearchParams({
    fields: 'id,created_time,message,full_picture,permalink_url,attachments{media,type,title,description}',
    limit: POST_LIMIT.toString(),
    access_token: ACCESS_TOKEN,
  });

  const response = await fetch(`${url}?${params.toString()}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Facebook API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  const data: FacebookAPIResponse = await response.json();

  // Check if we have data
  if (!data.data || data.data.length === 0) {
    console.warn('[Facebook API] No posts returned from API');
    return [];
  }
  
  // Filter out unavailable shared posts and transform to internal format
  const transformedPosts = data.data
    .filter(post => !isUnavailableSharedPost(post))
    .map((post) => {
      const { title, excerpt } = parsePostMessage(post.message || '');
      const imageUrl = extractImageUrl(post);

      return {
        id: post.id,
        date: post.created_time,
        title,
        excerpt,
        postUrl: post.permalink_url,
        imageUrl: imageUrl || undefined, // null → undefined for consistency
      };
    });

  return transformedPosts;
}

/**
 * Get Facebook posts (with caching)
 * 
 * This is the main function to use from components/hooks.
 * It checks the cache first, then fetches from API if needed.
 * 
 * @param forceRefresh - Skip cache and force fresh API call
 */
export async function getFacebookPosts(forceRefresh = false): Promise<FacebookPostData[]> {
  // If force refresh, clear cache first
  if (forceRefresh) {
    console.log('🔄 [Facebook API] Hard refresh detected - clearing cache and fetching fresh data');
    clearCache();
  }

  // Check cache first (unless force refresh)
  if (!forceRefresh && isCacheValid()) {
    const cached = getCachedPosts();
    if (cached && cached.length > 0) {
      console.log('💾 [Facebook API] Using cached posts (cache valid for', Math.round((CACHE_DURATION - (Date.now() - parseInt(localStorage.getItem(CACHE_TIMESTAMP_KEY) || '0', 10))) / 60000), 'more minutes)');
      return cached;
    }
  }

  // Fetch from API
  try {
    console.log('🌐 [Facebook API] Fetching fresh posts from Facebook Graph API...');
    const posts = await fetchFacebookPosts();

    if (posts.length > 0) {
      setCachedPosts(posts);
      console.log(`✅ [Facebook API] Successfully fetched and cached ${posts.length} posts`);
      return posts;
    }

    // API returned empty array
    console.warn('[Facebook API] No posts returned from API');
    return [];
  } catch (error) {
    console.error('[Facebook API] Failed to fetch posts:', error);
    clearCache(); // Clear potentially corrupted cache
    throw error; // Let hook handle fallback
  }
}
