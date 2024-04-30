import { Loader } from 'components/ui/loader';
import { FC, LazyExoticComponent, Suspense } from "react";

export const WithSuspense = (Component: LazyExoticComponent<FC>) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};
