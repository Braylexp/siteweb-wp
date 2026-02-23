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
  ],
  
  news: [
    {
      id: '1',
      title: '¡NO A LA GUERRA EN AMÉRICA LATINA Y EL CARIBE!',
      date: '23 de diciembre de 2025',
      category: 'COMUNICADOS, DENUNCIAS, DERECHOS HUMANOS',
      featured_image: '../assets/images/guerra.png',
      excerpt: 'La Coordinación Social y Política Marcha Patriótica expresa su más enérgico rechazo a cualquier escalada militar en la región.',
      content: `La Coordinación Social y Política Marcha Patriótica expresa su más enérgico rechazo a cualquier escalada militar en la región latinoamericana y caribeña. 

En un contexto de tensiones geopolíticas crecientes, reafirmamos nuestro compromiso inquebrantable con la paz, la soberanía de los pueblos y el respeto a los derechos humanos.

Consideramos que la guerra no es la solución a los conflictos. Por el contrario, genera sufrimiento, pobreza, desplazamiento forzado y violaciones masivas de derechos fundamentales que recaen, principalmente, sobre las poblaciones más vulnerables.

Desde la Marcha Patriótica, hacemos un llamado a:

1. La comunidad internacional para que respete el principio de no intervención en asuntos internos de los Estados.
2. Los gobiernos de la región a fortalecer los mecanismos de diálogo y negociación pacífica.
3. Los pueblos latinoamericanos a unirse en defensa de la paz y la integración regional auténtica.
4. Los organismos multilaterales a garantizar el cumplimiento del Derecho Internacional Humanitario.

Confiamos en que la diplomacia, el diálogo y el respeto mutuo son los únicos caminos viables hacia la estabilidad y desarrollo sostenible de nuestros pueblos.

¡La paz es un derecho de todos! ¡No a la guerra en América Latina y el Caribe!`,
      author: 'Marcha Patriótica',
      tags: ['paz', 'derechos humanos', 'américa latina', 'política internacional']
    },
    {
      id: '2', 
      title: 'La paz de Venezuela es la paz de Colombia, y la soberanía del continente',
      date: '16 de octubre de 2025',
      category: 'COMUNICADOS, DENUNCIAS, DERECHOS HUMANOS',
      featured_image: '../assets/images/ven.png',
      excerpt: 'Pronunciamiento sobre la situación en Venezuela y su impacto en la región.',
      content: `La Coordinación Social y Política Marcha Patriótica hace un llamado urgente a la comunidad internacional y a los gobiernos de la región respecto a la crítica situación en Venezuela.

Reconocemos que la estabilidad política y la paz en Venezuela son fundamentales para la paz en Colombia y para toda América Latina. No podemos pretender construir paz en un territorio mientras en nuestros vecinos se violan derechos humanos y se niega la autodeterminación de los pueblos.

Aspectos clave de nuestro pronunciamiento:

SOBERANÍA Y NO INTERVENCIÓN
Los pueblos tienen derecho a elegir libremente sus gobiernos sin injerencia externa. Nos oponemos rotundamente a cualquier forma de intervención militar o presión geopolítica que viole la soberanía venezolana.

DERECHOS HUMANOS
Exigimos el respeto integral a los derechos fundamentales de todos los venezolanos, independientemente de sus posiciones políticas. Esto incluye libertad de expresión, de asociación y garantías procesales.

DIÁLOGO Y NEGOCIACIÓN
El único camino viable es el diálogo sincero, el respeto mutuo y la negociación política sin exclusiones. La violencia y la represión solo profundizan las divisiones.

RESPONSABILIDAD INTERNACIONAL
Los organismos multilaterales deben actuar con imparcialidad, promoviendo soluciones inclusivas que respeten la soberanía venezolana.

Creemos firmemente que la paz en Venezuela contribuye directamente a la paz en Colombia y al fortalecimiento de la integración latinoamericana basada en principios de justicia, igualdad y respeto mutuo.

¡La paz de Venezuela es la paz de Colombia! ¡Respeto a la soberanía y los derechos de los pueblos!`,
      author: 'Marcha Patriótica',
      tags: ['venezuela', 'soberanía', 'derechos humanos', 'paz regional']
    },
    {
      id: '3',
      title: 'Después de 77 años de ocupación y genocidio infame, desde el río hasta el mar, Palestina vencerá',
      date: '7 de octubre de 2025',
      category: 'COMUNICADOS, DENUNCIAS, DERECHOS HUMANOS',
      featured_image: '../assets/images/palestina.png',
      excerpt: 'Declaración de solidaridad con el pueblo palestino ante el conflicto israelí-palestino.',
      content: `La Coordinación Social y Política Marcha Patriótica expresa su solidaridad incondicional con el pueblo palestino, quien después de 77 años de ocupación, desplazamiento forzado y genocidio sistemático, continúa luchando por su libertad, dignidad y derecho a la autodeterminación.

HISTORIA DE OCUPACIÓN Y VIOLENCIA
Durante casi ocho décadas, el pueblo palestino ha sufrido:
- Ocupación militar y control territorial
- Colonización y confiscación de tierras
- Desplazamiento forzado de poblaciones
- Bloqueos económicos y restricciones a la libertad de movimiento
- Violaciones masivas y sistemáticas de derechos humanos
- Asesinatos de civiles, incluidos niños y mujeres

VIOLACIONES AL DERECHO INTERNACIONAL
Los crímenes perpetrados contra Palestina constituyen:
- Crímenes de lesa humanidad
- Violaciones del Derecho Internacional Humanitario
- Políticas de apartheid
- Genocidio según los estándares internacionales

NUESTRO POSICIONAMIENTO
1. Exigimos el cese inmediato de la violencia y la represión contra civiles.
2. Demandamos el reconocimiento del derecho de Palestina a la autodeterminación.
3. Reclamamos reparación y justicia para las víctimas del conflicto.
4. Apoyamos la creación de un Estado palestino independiente, soberano y democrático.
5. Condenamos el bloqueo económico y las políticas de castigo colectivo.

RESPONSABILIDAD INTERNACIONAL
Hacemos un llamado urgente a:
- Las Naciones Unidas a actuar de forma decisiva en defensa de los derechos palestinos
- La comunidad internacional a presionar por un alto al fuego y negociaciones de paz
- Los gobiernos democráticos a reconocer el Estado palestino
- Los organismos de derechos humanos a investigar crímenes de guerra

Desde "el río hasta el mar", el pueblo palestino merece vivir en paz, libertad y dignidad. Su lucha por la justicia es la lucha de todos los pueblos oprimidos del mundo.

¡Palestina libre! ¡Libre de la ocupación! ¡Justicia para Palestina!`,
      author: 'Marcha Patriótica',
      tags: ['palestina', 'derechos humanos', 'conflicto internacional', 'justicia']
    },
    {
      id: '4',
      title: 'Acciones Urgentes: Marco de Protección a Defensoras y Defensores de Derechos Humanos',
      date: '12 de septiembre de 2025',
      category: 'ACCIONES URGENTES, DERECHOS HUMANOS',
      featured_image: '../assets/images/home2.jpg',
      excerpt: 'Iniciativa para fortalecer la protección de defensores de derechos humanos en Colombia.',
      content: `En el contexto de crecientes amenazas y agresiones contra defensoras y defensores de derechos humanos en Colombia, la Coordinación Social y Política Marcha Patriótica presenta un marco integral de protección y prevención.

SITUACIÓN CRÍTICA
Las y los defensores de derechos humanos en Colombia enfrentan:
- Amenazas de muerte
- Desplazamiento forzado
- Estigmatización y calumnias
- Criminalización de la protesta social
- Detenciones arbitrarias
- Violencia selectiva

MARCO DE PROTECCIÓN PROPUESTO

1. MEDIDAS DE PROTECCIÓN INSTITUCIONAL
- Creación de protocolos específicos de protección para defensoras y defensores
- Asignación de recursos suficientes para programas de seguridad
- Coordinación interinstitucional para responder a amenazas

2. ACCIONES PREVENTIVAS
- Fortalecimiento de la presencia estatal en zonas afectadas
- Campañas de sensibilización sobre el valor del trabajo de defensa de derechos
- Promoción de una cultura de paz y reconciliación

3. ACCESO A LA JUSTICIA
- Investigación rápida y efectiva de amenazas y agresiones
- Garantías de debido proceso
- Reparación integral a víctimas

4. APOYO INTEGRAL
- Apoyo psicológico
- Protección familiar
- Reubicación cuando sea necesario
- Apoyo económico temporal

RESPONSABILIDAD DEL ESTADO
Exhortamos al Estado colombiano a:
1. Cumplir sus obligaciones internacionales de proteger defensores
2. Despenalizar la protesta social
3. Investigar amenazas de forma prioritaria
4. Asegurar que el aparato de seguridad no sea fuente de violencia

COMPROMISO DE LA MARCHA PATRIÓTICA
Nos comprometemos a acompañar y apoyar a defensoras y defensores en sus luchas legítimas por un país más justo y respetuoso de los derechos humanos.

¡Defender derechos humanos no es delito! ¡Protección para defensoras y defensores!`,
      author: 'Marcha Patriótica',
      tags: ['defensores de derechos', 'protección', 'seguridad', 'acciones urgentes']
    },
    {
      id: '5',
      title: 'Declaración: Justicia Social y Reforma Tributaria',
      date: '28 de agosto de 2025',
      category: 'COMUNICADOS, DERECHOS HUMANOS, DECLARACIONES',
      featured_image: '../assets/images/home2.jpg',
      excerpt: 'Análisis y propuestas sobre la justicia fiscal en Colombia.',
      content: `La Coordinación Social y Política Marcha Patriótica, en el contexto de los debates sobre reforma tributaria, presenta una declaración enfocada en la justicia social y fiscal.

CONTEXTO ECONÓMICO Y SOCIAL
Colombia enfrenta:
- Desigualdad extrema
- Pobreza multidimensional
- Desempleo creciente
- Acceso limitado a servicios básicos
- Concentración de riqueza en pocas manos

El sistema tributario actual reproduce y profundiza estas desigualdades.

PRINCIPIOS DE JUSTICIA FISCAL
1. PROGRESIVIDAD: Quien más tiene debe contribuir más
2. SUFICIENCIA: Los ingresos tributarios deben financiar servicios públicos de calidad
3. TRANSPARENCIA: Conocimiento público de dónde viene y a dónde va cada peso
4. LUCHA CONTRA LA EVASIÓN: Persecución efectiva del fraude fiscal
5. EQUIDAD: Eliminar privilegios fiscales injustificados

PROPUESTAS CONCRETAS
- Aumento de tasas impositivas para grandes fortunas y corporaciones
- Cierre de brechas de evasión fiscal
- Impuesto a la especulación financiera
- Reforma de la institucionalidad tributaria
- Auditoría a beneficiarios de paraísos fiscales

FINANCIAMIENTO DE DERECHOS
Los ingresos tributarios justamente distribuidos deben garantizar:
- Educación pública de calidad
- Salud universal y gratuita
- Vivienda digna
- Pensiones justas
- Protección ambiental

PARTICIPACIÓN DEMOCRÁTICA
Exigimos que cualquier reforma tributaria sea:
- Debatida públicamente
- Consultada con sociedad civil
- Basada en datos e investigación rigurosa
- Aprobada democráticamente

¡Justicia fiscal para prosperidad compartida! ¡Impuestos justos para todos!`,
      author: 'Marcha Patriótica',
      tags: ['justicia fiscal', 'tributación', 'desigualdad', 'política social']
    }
  ]
};