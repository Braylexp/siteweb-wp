import { Routes } from '@angular/router';

/**
 * Configuración de rutas principales del sitio
 * Angular 19 usa standalone components por defecto
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'HOMEPAGE'
  },
  {
    path: 'noticias/:id',
    loadComponent: () => import('./pages/news-detail/news-detail').then(m => m.NewsDetail),
    title: 'Detalle de Noticia'
  },
  {
    path: 'somos',
    loadComponent: () => import('./pages/somos/somos').then(m => m.Somos),
    title: 'SOMOS MARCHA'
  },
  {
    path: 'derechos',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    title: 'DERECHOS HUMANOS'
  },
  {
    path: 'denuncias',
    loadComponent: () => import('./pages/denuncias/denuncias').then(m => m.Denuncias),
    title: 'Denuncias'
  },
  {
    path: 'informes',
    loadComponent: () => import('./pages/informes/informes').then(m => m.Informes),
    title: 'Informes'
  },
  {
    path: 'acciones-urgentes',
    loadComponent: () => import('./pages/acciones-urgentes/acciones-urgentes').then(m => m.AccionesUrgentes),
    title: 'Acciones Urgentes'
  },
  {
    path: 'comunicacion',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
    title: 'COMUNICACIÓN'
  },
  {
    path: 'declaraciones',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Declaraciones'
  },
  {
    path: 'opinion-comunicacion',
    loadComponent: () => import('./pages/opinion-comunicacion/opinion-comunicacion').then(m => m.OpinionComunicacion),
    title: 'Opinión y Análisis'
  },
  {
    path: 'internacional',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'INTERNACIONAL'
  },
  {
    path: 'opinion',
    loadComponent: () => import('./pages/opinion-comunicacion/opinion-comunicacion').then(m => m.OpinionComunicacion),
    title: 'OPINIÓN Y ANÁLISIS'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];