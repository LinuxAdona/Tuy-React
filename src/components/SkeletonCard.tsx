/**
 * Skeleton loader component for Facebook post cards
 *
 * Displays animated placeholder matching the design of actual post cards
 * while Facebook API data is being fetched.
 */
export default function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Date header skeleton */}
      <div className="bg-gray-300 p-4 animate-pulse">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-400 rounded mr-3"></div>
          <div className="h-4 bg-gray-400 rounded w-32"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title skeleton (2 lines) */}
        <div className="space-y-2 animate-pulse">
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-4/5"></div>
        </div>

        {/* Excerpt skeleton (3 lines) */}
        <div className="space-y-2 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* Read more link skeleton */}
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
    </div>
  );
}
