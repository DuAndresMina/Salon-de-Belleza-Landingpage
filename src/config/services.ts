// src/config/services.ts
export type ServiceCategory = 'hair' | 'nails' | 'beauty';

export interface Service {
  title: string;
  description: string;
  icon: string;
  price: string;
  category: ServiceCategory;
}

export const services: Record<ServiceCategory, Service[]> = {
    hair: [
        {
          title: "Trenzas Artísticas",
          description: "Diseños únicos y creativos para todo tipo de cabello",
          icon: "/braids.webp",
          price: "$50",
          category: "hair"
        },
        {
          title: "Peinados Exclusivos",
          description: "Para eventos especiales y ocasiones memorables",
          icon: "/hair.webp",
          price: "$45",
          category: "hair"
        },
        {
          title: "Planchado Profesional",
          description: "Alisado perfecto con protección térmica",
          icon: "/ironing.webp",
          price: "$35",
          category: "hair"
        },
        {
          title: "Tintes y Coloración",
          description: "Colores vibrantes y tendencias actuales",
          icon: "/dyehair.webp",
          price: "$70",
          category: "hair"
        },
        
      ],
      nails: [
        {
          title: "Manicura Básica",
          description: "Cuidado esencial para tus manos",
          icon: "/manicure.webp",
          price: "$25",
          category: "nails"
        },
        {
          title: "Manicura Gel",
          description: "Duración extendida y brillo excepcional",
          icon: "/manicure-gel.webp",
          price: "$40",
          category: "nails"
        },
        {
          title: "Nail Art Premium",
          description: "Diseños exclusivos y pedrería",
          icon: "/manicure-premium.webp",
          price: "$55",
          category: "nails"
        },
        {
          title: "Pedicure",
          description: "Tratamiento completo para pies",
          icon: "/pedicure.webp",
          price: "$35",
          category: "nails"
        }
      ],
      beauty: [
        {
          title: "Pestañas Postizas",
          description: "Extensiones naturales y duraderas",
          icon: "/eyelash.webp",
          price: "$45",
          category: "beauty"
        },
        {
          title: "Diseño de Cejas",
          description: "Perfilado y tinte profesional",
          icon: "/eyebrow.webp",
          price: "$30",
          category: "beauty"
        }
      ]
};