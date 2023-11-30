'use client';

import { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // TODO: log with Vercel
    console.error(error);
  }, [error]);

  // You can add any UI inside Loading, including a Skeleton.
  return (
    <ErrorBoundary
      title={'An Unexpected Error Occurred'}
      description={`Oops! Looks like we encountered an error processing your request...`}
    />
  );
}
