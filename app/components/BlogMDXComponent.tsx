'use client';

import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export function BlogMDXComponent({ code }: { code: string }) {
  const BlogPost = useMemo(() => getMDXComponent(code), []);
  return <BlogPost />;
}
