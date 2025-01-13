'use client';

import { Button } from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[rgba(10,15,25,1)] text-white">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <Button
            onClick={() => reset()}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
} 