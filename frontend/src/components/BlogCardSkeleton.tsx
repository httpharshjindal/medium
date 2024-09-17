export const BlogCardSkeleton = () => {
  return (
    <div className="w-2/3 h-full p-5 border-b-2 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 rounded-full h-10 w-10"></div>
        <div className="bg-gray-200 h-5 w-1/3"></div>
      </div>
      <div className="flex pt-2">
        <div className="w-3/4">
          <div className="bg-gray-200 h-6 w-3/4 mt-1"></div>
          <div className="bg-gray-200 h-4 w-3/5 mt-1"></div>
          <div className="bg-gray-200 h-4 w-2/4 mt-1"></div>
        </div>
        <div className="w-1/4 object-contain">
          <div className="bg-gray-200 h-24"></div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-gray-200 h-5 w-5 rounded-full"></div>
        <div className="bg-gray-200 h-4 w-1/3"></div>
      </div>
    </div>
  );
};

