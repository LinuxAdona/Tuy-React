/**
 * Date Formatting Utilities
 */

/**
 * Format an ISO 8601 date string to a readable format
 * @param isoDate - ISO 8601 date string (e.g., "2026-01-20T10:00:00Z")
 * @returns Formatted date string (e.g., "January 20, 2026")
 */
export const formatDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};

/**
 * Format an ISO 8601 date string to a short format
 * @param isoDate - ISO 8601 date string (e.g., "2026-01-20T10:00:00Z")
 * @returns Formatted date string (e.g., "Jan 20, 2026")
 */
export const formatDateShort = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};

/**
 * Get relative time from now (e.g., "2 days ago")
 * @param isoDate - ISO 8601 date string
 * @returns Relative time string
 */
export const getRelativeTime = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
  } catch (error) {
    console.error("Error calculating relative time:", error);
    return "Unknown";
  }
};
