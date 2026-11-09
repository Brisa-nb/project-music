
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
  }
]
