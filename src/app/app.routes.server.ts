import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    // Use SSR at runtime to support dynamic routes like "details/:id" without
    // needing to list all param values ahead of time.
    renderMode: RenderMode.Server,
  },
];
