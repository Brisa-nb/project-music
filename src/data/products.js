
export const products = [
  // KALI UCHIS · EDITION 01
  {
    id: 1,
    artistId: 1,
    artistName: 'Kali Uchis',
    name: 'Divinely Guided',
    category: 'Bolsos',
    price: 1299,
    edition: '01',
    editionName: 'Kali Uchis Collection',
    limited: true,

    description: 'Una pieza de colección con detalles botánicos, cerezas y acabados premium.',
    materials: 'Lona heavyweight, forro satinado y detalles en piel vegana.',
    capacity: 'Compartimento acolchado para laptop de hasta 13.5 pulgadas.',

    variants: [
      {
        id: 1,
        name: 'Ivory',
        image: '/images/bolsoIVORY.jpg',
        gallery: [
          '/images/bolsoIVORY2.jpg',
          '/images/bolsoIVORY3.jpg'
        ]
      },
      {
        id: 2,
        name: 'Noir Cherry',
        image: '/images/bolsoNOIR1.jpg',
        gallery: [
          '/images/bolsoNOIR2.jpg',
          '/images/bolsoNOIR3.jpg'
        ]
      }
    ]
  },
  {
    id: 2,
    artistId: 1,
    artistName: 'Kali Uchis',
    name: 'Cherry Necklace',
    category: 'Accesorios',
    price: 449,
    edition: '01',
    editionName: 'Kali Uchis Collection',
    limited: true,

    description: 'Un accesorio especial inspirado en la estética romántica y nostálgica de Kali Uchis.',
    materials: 'Diseño de edición especial.',
    capacity: 'Accesorio de uso personal.',

    variants: [
      {
        id: 1,
        name: 'Único',
        image: '/images/Collar1.jpg',
        gallery: [
          '/images/collar2.jpg',
          '/images/collar3.jpg'
        ]
      }
    ]
  },

  
{
  id: 7,
  artistId: 1,
  artistName: 'Kali Uchis',
  name: 'Top Satinado Orquídea',
  category: 'Ropa',
  price: 429,
  edition: '01',
  editionName: 'Kali Uchis Collection',
  limited: true,

  description: 'Una blusa satinada de inspiración romántica, con detalles de encaje negro y una silueta femenina y delicada.',
  materials: 'Satín de poliéster premium de acabado brillante y suave, encaje negro delicado y forro interno color vino.',
  capacity: 'Tallas disponibles: XS, S, M y L. Tirantes finos ajustables y corte femenino ligeramente entallado.',

  variants: [
    {
      id: 1,
      name: 'Orquídea Vino',
      image: '/images/blusa1.jpg',
      gallery: [
        '/images/blusa2.jpg',
        '/images/blusa3.jpg'
      ]
    }
  ]
},

{
  id: 8,
  artistId: 1,
  artistName: 'Kali Uchis',
  name: 'Pinza Orquídea Real',
  category: 'Accesorios',
  price: 179,
  edition: '01',
  editionName: 'Kali Uchis Collection',
  limited: true,

  description: 'Una pinza para el cabello inspirada en la belleza de las orquídeas, con pétalos de acabado mate y un pequeño detalle dorado.',
  materials: 'Flor de resina premium con acabado mate, centro dorado y base metálica plateada resistente.',
  capacity: 'Tamaño mediano-grande de aproximadamente 9 cm. Diseñada para cabello lacio, ondulado y rizado.',

  variants: [
    {
      id: 1,
      name: 'Morado Orquídea',
      image: '/images/pinza1.jpg',
      gallery: [
        '/images/pinza2.jpg',
        '/images/pinza3.jpg'
      ]
    }
  ]
},

  // A$AP ROCKY · EDITION 02
  {
    id: 3,
    artistId: 2,
    artistName: 'A$AP Rocky',
    name: 'Punk Bling Cap',
    category: 'Accesorios',
    price: 850,
    edition: '02',
    editionName: 'A$AP Rocky Collection',
    limited: true,

    description: 'Una gorra de estética punk con detalles metálicos y acabados dorados envejecidos.',
    materials: 'Cuerpo de lona de algodón pesado color negro lavado. Visera estructurada de gamuza sintética efecto desgastado color café camello. Ojales metálicos extragrandes, tachuelas de acero y cadena lateral de aleación de zinc con dijes de calavera y estrella.',
    capacity: 'Accesorio de uso personal.',

    variants: [
      {
        id: 1,
        name: 'Black / Camel',
        image: '/images/gorra1.jpg',
        gallery: [
          '/images/gorra2.jpg',
          '/images/gorra3.jpg',
          '/images/gorra4.jpg'
        ]
      }
    ]
  },
  {
    id: 4,
    artistId: 2,
    artistName: 'A$AP Rocky',
    name: 'Rocky / Harlem Trucker',
    category: 'Chaquetas',
    price: 2450,
    edition: '02',
    editionName: 'A$AP Rocky Collection',
    limited: true,

    description: 'Una chaqueta trucker de mezclilla con una estética urbana, detalles vintage y acabados exclusivos.',
    materials: 'Mezclilla de algodón rígido de alta densidad (14 oz) en tono negro lavado con tratamiento de deslavado artesanal. Forro interno de sarga rojo sangre. Botones metálicos con baño dorado vintage, cierre metálico en bolsillo, costuras reforzadas y parche frontal de cuero con estrella bordada.',
    capacity: 'Prenda de corte trucker.',

    variants: [
      {
        id: 1,
        name: 'Washed Black',
        image: '/images/chaqueta1.jpg',
        gallery: [
          '/images/chaqueta2.jpg',
          '/images/chaqueta3.jpg'
        ]
      }
    ]
  },



  {
    id: 9,
    artistId: 2,
    artistName: 'A$AP Rocky',
    name: 'Bandana Punk Bling Star',
    category: 'Accesorios',
    price: 750,
    edition: '02',
    editionName: 'A$AP Rocky Collection',
    limited: true,

    description: 'Una bandana de inspiración punk y streetwear, con una estrella roja bordada al centro y estampados gráficos que complementan la colección Punk Bling.',
    materials: 'Confeccionada en algodón y mezclilla suave. Incluye bordado de estrella roja, estampado paisley azul y verde, estrellas blancas, detalles de grafiti blanco, pequeñas tachuelas plateadas y una cadena dorada delgada.',
    capacity: 'Medidas de 55 x 55 cm. Diseño unisex y versátil: puede utilizarse en la cabeza, cuello, bolsillo de una chaqueta o como top.',

    variants: [
      {
        id: 1,
        name: 'Punk Bling Star',
        image: '/images/banda1.jpg',
        gallery: [
          '/images/banda2.jpg',
          '/images/banda3.jpg'
        ]
      }
    ]
  },
  {
    id: 10,
    artistId: 2,
    artistName: 'A$AP Rocky',
    name: 'Bolso Denim Bling Star',
    category: 'Bolsos',
    price: 1450,
    edition: '02',
    editionName: 'A$AP Rocky Collection',
    limited: true,

    description: 'Un bolso de mezclilla oscura con una estética punk y urbana. Su estrella roja bordada y sus detalles metálicos lo convierten en una pieza distintiva de la colección.',
    materials: 'Mezclilla oscura gruesa, detalles de cuerito café premium, tachuelas plateadas en los bordes, cadena dorada gruesa y cierre dorado. Interior con forro rojo y un bolsillo interno con cierre.',
    capacity: 'Medidas de 28 x 20 cm. Cuenta con espacio para celular, cartera y llaves. Correa ajustable de cuerito café y cadena dorada para llevar cruzado o al hombro. Diseño unisex.',

    variants: [
      {
        id: 1,
        name: 'Dark Denim',
        image: '/images/bolsoAS1.jpg',
        gallery: [
          '/images/bolsoAS2.jpg',
          '/images/bolsoAS3.jpg'
        ]
      }
    ]
  },

  // KANYE WEST · EDITION 03
  {
    id: 5,
    artistId: 3,
    artistName: 'Kanye West',
    name: 'Futuristic Minimalist Glasses',
    category: 'Accesorios',
    price: 1100,
    edition: '03',
    editionName: 'Kanye West Collection',
    limited: true,

    description: 'Lentes futuristas de silueta envolvente y estética minimalista.',
    materials: 'Armazón frontal y patillas de acetato mate de alta resistencia con acabado soft-touch. Micas envolventes de policarbonato con protección UV400 y acabado espejado humo plateado. Bisagras reforzadas de acero inoxidable.',
    capacity: 'Accesorio de uso personal.',

    variants: [
      {
        id: 1,
        name: 'Smoke Silver',
        image: '/images/lentes1.jpg',
        gallery: [
          '/images/lentes2.jpg',
          '/images/lentes3.jpg'
        ]
      }
    ]
  },
  {
    id: 6,
    artistId: 3,
    artistName: 'Kanye West',
    name: 'Donda Oversized Hoodie',
    category: 'Ropa',
    price: 1950,
    edition: '03',
    editionName: 'Kanye West Collection',
    limited: true,

    description: 'Una sudadera oversize de silueta estructurada y estética minimalista.',
    materials: 'Algodón francés de felpa pesada (heavyweight French terry) de 500 GSM en color negro lavado. Corte boxy con hombros caídos y capucha de doble capa con costuras expuestas de alta durabilidad.',
    capacity: 'Prenda de corte oversize.',

    variants: [
      {
        id: 1,
        name: 'Washed Black',
        image: '/images/hoddie1.jpg',
        gallery: [
          '/images/hoddie2.jpg'
        ]
      }
    ]
  },

  {
    id: 11,
    artistId: 3,
    artistName: 'Kanye West',
    name: 'Donda Cargo Oversized',
    category: 'Ropa',
    price: 1750,
    edition: '03',
    editionName: 'Kanye West Collection',
    limited: true,

    description: 'Un pantalón cargo oversized inspirado en la estética minimalista y futurista de Donda. Su diseño completamente negro combina una silueta amplia con detalles funcionales y discretos.',
    materials: 'Confeccionado en una mezcla de algodón grueso y poliéster mate, con acabado opaco y tejido que no transparenta. Cintura elástica con cordón negro ajustable.',
    capacity: 'Corte oversized unisex, disponible en tallas S, M, L y XL. Cuenta con seis bolsillos: dos cargo laterales con tapa, dos frontales y dos traseros. Pierna recta con puño inferior. Lavar a mano con agua fría, no usar cloro y secar a la sombra.',

    variants: [
      {
        id: 1,
        name: 'Total Black',
        image: '/images/pants1.jpg',
        gallery: [
          '/images/pants2.jpg',
          '/images/pants3.jpg'
        ]
      }
    ]
  },
  {
    id: 12,
    artistId: 3,
    artistName: 'Kanye West',
    name: 'Mochila Donda Minimal',
    category: 'Bolsos',
    price: 1350,
    edition: '03',
    editionName: 'Kanye West Collection',
    limited: true,

    description: 'Una mochila de diseño minimalista y futurista inspirada en la estética Donda. Su silueta cuadrada y completamente negra ofrece funcionalidad sin elementos visuales innecesarios.',
    materials: 'Fabricada con tela técnica mate premium resistente al agua y a las manchas. Cuenta con cierre negro mate reforzado, correas anchas acolchadas y ajustables, forro interior negro y una bolsa pequeña con cierre.',
    capacity: 'Medidas de 42 x 30 x 12 cm. Incluye un compartimento para laptop de hasta 15 pulgadas y espacio para llevar una sudadera doblada, lentes y celular. Diseño unisex. Limpiar con un trapo húmedo, no meter a la lavadora.',

    variants: [
      {
        id: 1,
        name: 'Total Black',
        image: '/images/mochila1.jpg',
        gallery: [
          '/images/mochila2.jpg',
          '/images/mochila3.jpg'
        ]
      }
    ]
  },

]


