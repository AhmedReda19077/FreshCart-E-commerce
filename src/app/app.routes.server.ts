import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'order/:cartId',
    renderMode: RenderMode.Server,
  },
  {
    path: 'spec-cat/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'spec-brand/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'details/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
