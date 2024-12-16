import { ComponentType, ReactNode, Suspense, lazy } from 'react';

export function lazyImport<T extends Record<string, any>>(
  loader: () => Promise<T>,
  namedExport?: keyof T
) {
  return lazy(() =>
    loader().then((module) => ({
      default: namedExport ? module[namedExport] : module.default,
    }))
  );
}

export function lazyImportWithSuspense<T extends Record<string, any>>({
  loader,
  namedExport,
  fallback = null,
}: {
  loader: () => Promise<T>;
  namedExport?: keyof T;
  fallback?: ReactNode;
}): ComponentType {
  const LazyComponent = lazyImport(loader, namedExport);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
