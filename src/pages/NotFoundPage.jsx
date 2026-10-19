import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center pt-28 pb-16">
      <span className="font-serif-heading text-7xl font-bold text-[#C58940]">
        404
      </span>
      <h1 className="font-serif-heading text-3xl sm:text-4xl font-medium text-gray-900 mt-3">
        Page Not Found
      </h1>
      <p className="text-gray-500 max-w-md mt-2 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 h-11 px-7 bg-[#244337] hover:bg-[#1a3329] text-white text-sm font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}

