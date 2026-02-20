import { SiteContent } from '../../core/models/content.model';

/**
 * Contenido del sitio extraído del PDF
 * Corporación Colectivo de Abogados del Occidente Colombiano (CAOC)
 */
export const SITE_CONTENT: SiteContent = {
  general: {
    name: 'RAMÍREZ & HERNÁNDEZ ABOGADOS Y ASOCIADOS S.A.S.',
    shortName: 'Ramírez y Hernández abogados',
    tagline: 'Trabajamos con seriedad, transparencia y vocación de servicio, porque creemos que la confianza se construye con resultados, claridad y un ejercicio profesional responsable del derecho.',
    nit: '901.926.476',
    legalStatus: 'Sociedad por Acciones Simplificada - S.A.S.'
  },
  
  contact: {
    address: 'CL 11 NORTE 11 - 64 SANTA CLARA',
    city: 'Popayán - Cauca',
    email: 'ramirezhernandezabogadosa@outlook.com',
    phone: '323 406 9575'
  },
  
  mission: `Brindar servicios jurídicos de alta calidad, fundamentados en el conocimiento técnico, la ética profesional y el compromiso con los intereses de nuestros clientes, ofreciendo asesoría y representación legal confiable, clara y oportuna.
   Nos enfocamos en comprender a fondo cada situación jurídica, aportando soluciones responsables y estratégicas que generen confianza, seguridad jurídica y valor real para quienes depositan en nosotros la defensa de sus derechos.`,
  
  vision: 'Consolidarnos como un bufete de referencia en la región, reconocido por la seriedad, transparencia y efectividad de nuestros servicios legales, fortaleciendo relaciones de largo plazo con nuestros clientes '+
        'A mediano y largo plazo, aspiramos a ampliar nuestra presencia y posicionamiento en el mercado legal colombiano, manteniendo siempre un ejercicio profesional ético, actualizado y alineado con las necesidades cambiantes de la sociedad y el entorno jurídico.',
  
  objetoSocial: `Somos una entidad que tiene como objeto principal la prestación de servicios profesionales de asesoría, consultoría y representación judicial y extrajudicial a personas naturales y jurídicas, en las áreas del derecho penal, constitucional, civil y administrativo.

La firma desarrolla todas las actividades necesarias para el cumplimiento de su labor profesional, incluyendo la celebración de contratos y la ejecución de actos jurídicos relacionados con la protección de los intereses de sus clientes y el adecuado ejercicio de sus derechos y obligaciones, dentro del marco legal vigente en Colombia.`,
  
  services: [
    {
      title: 'Asesoría Jurídica y Acompañamiento Legal',
      description: 'Brindamos acompañamiento legal especializado a víctimas de violaciones de derechos humanos, garantizando acceso a la justicia en condiciones de igualdad.',
      icon: 'scale'
    },
    {
      title: 'Investigación y Documentación',
      description: 'Realizamos investigaciones rigurosas sobre casos relacionados con derechos fundamentales y publicamos informes que visibilizan las problemáticas.',
      icon: 'file-text'
    },
    {
      title: 'Formación y Sensibilización',
      description: 'Desarrollamos programas educativos sobre derechos humanos y justicia social dirigidos a comunidades y autoridades.',
      icon: 'book-open'
    },
    {
      title: 'Incidencia Política',
      description: 'Participamos activamente en la formulación de políticas públicas y leyes de protección a los derechos humanos con enfoque territorial.',
      icon: 'users'
    },
    {
      title: 'Apoyo Psicológico y Social',
      description: 'Ofrecemos atención integral a víctimas y comunidades vulnerables, apoyándolas en su proceso de recuperación y reivindicación.',
      icon: 'heart'
    },
    {
      title: 'Proyectos de Inclusión y Desarrollo Sostenible',
      description: 'Impulsamos programas de desarrollo económico y social que fomentan la equidad y la sostenibilidad ambiental.',
      icon: 'trending-up'
    }
  ],
  
  activities: [
    'Proveer servicios legales a individuos y grupos de víctimas de violaciones de derechos humanos',
    'Desarrollar programas de sensibilización sobre derechos humanos dirigidos a comunidades y autoridades',
    'Realizar investigaciones sobre violaciones a los derechos humanos y publicar informes que visibilicen las problemáticas',
    'Participar en la formulación de políticas públicas y leyes de protección a los derechos humanos',
    'Establecer alianzas con organizaciones nacionales e internacionales afines',
    'Promover la inclusión política, económica, social y cultural de todos los sectores',
    'Contribuir a la paz estable y duradera mediante el diálogo y la reconciliación',
    'Desarrollar proyectos sobre condiciones de personas privadas de libertad y sus derechos fundamentales',
    'Impulsar la visibilización y prevención de violaciones a los derechos humanos',
    'Brindar acompañamiento humanitario y asistencia legal integral a víctimas y grupos vulnerables',
    'Trabajar en la búsqueda de verdad, justicia y reparación, especialmente para personas judicializadas por razones políticas o sociales'
  ]
};