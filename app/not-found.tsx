'use client';

import ErrorBoundary from './components/ErrorBoundary';

export default function NotFound() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <ErrorBoundary
      title={'404 Page Not Found'}
      description={`Oops! Looks like the page you're looking for doesn't exist...`}
    />
  );
}
