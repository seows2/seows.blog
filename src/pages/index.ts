import { lazyImportWithSuspense } from '@/utils/lazyImport';

export const HomePage = lazyImportWithSuspense({
  loader: () => import('./Home'),
});

export const AboutPage = lazyImportWithSuspense({
  loader: () => import('./About'),
});

export const PostPage = lazyImportWithSuspense({
  loader: () => import('./Post'),
});

export const ResumePage = lazyImportWithSuspense({
  loader: () => import('./Resume'),
});
