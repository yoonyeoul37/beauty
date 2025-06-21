import React from 'react';

const ShimmerCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <div className="w-full pt-[75%] bg-gray-200 animate-pulse" />
    <div className="p-6">
      <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
      <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-3" />
      <div className="border-t border-gray-100 my-4" />
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export default function TimeSpecialSkeleton() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-3" />
            <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      </div>
    </section>
  );
} 