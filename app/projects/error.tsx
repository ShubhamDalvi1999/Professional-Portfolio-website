'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Projects page error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-text-dim mb-8 text-center max-w-md">
        We couldn't load the projects at this time. Please try again later.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="btn-primary py-2 px-6"
        >
          Try again
        </button>
        <Link href="/" className="py-2 px-6 border border-border rounded-lg hover:bg-black/20 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
} 