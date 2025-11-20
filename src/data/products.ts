import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: {
      en: 'Rose Elegance',
      ar: 'أناقة الورد',
    },
    description: {
      en: 'A luxurious floral fragrance with notes of rose, jasmine, and vanilla. Perfect for evening wear.',
      ar: 'عطر زهري فاخر بنفحات الورد والياسمين والفانيليا. مثالي للمساء.',
    },
    price: 299,
    category: 'perfume',
    image: '/assets/product-perfume-rose.jpg',
    images: ['/assets/product-perfume-rose_variant_1.jpg', '/assets/hero-perfume-luxury.jpg'],
  },
  {
    id: '2',
    name: {
      en: 'Amber Mystique',
      ar: 'غموض العنبر',
    },
    description: {
      en: 'An oriental fragrance with warm amber, oud, and spices. A signature scent for special occasions.',
      ar: 'عطر شرقي بالعنبر الدافئ والعود والتوابل. عطر مميز للمناسبات الخاصة.',
    },
    price: 349,
    category: 'perfume',
    image: '/assets/product-perfume-amber.jpg',
    images: ['/assets/product-perfume-amber_variant_1.jpg', '/assets/hero-perfume-luxury_variant_1.jpg'],
  },
  {
    id: '3',
    name: {
      en: 'Luxury Face Cream',
      ar: 'كريم الوجه الفاخر',
    },
    description: {
      en: 'Premium anti-aging face cream with gold particles and hyaluronic acid. Hydrates and rejuvenates.',
      ar: 'كريم وجه فاخر مضاد للشيخوخة مع جزيئات الذهب وحمض الهيالورونيك. يرطب ويجدد.',
    },
    price: 199,
    category: 'cosmetic',
    image: '/assets/product-cream-luxury.jpg',
    images: ['/assets/product-cream-luxury_variant_1.jpg', '/assets/hero-cosmetics-collection.jpg'],
  },
  {
    id: '4',
    name: {
      en: 'Gold Lipstick',
      ar: 'أحمر الشفاه الذهبي',
    },
    description: {
      en: 'Long-lasting matte lipstick in a luxurious gold case. Rich pigmentation and moisturizing formula.',
      ar: 'أحمر شفاه مطفي طويل الأمد في علبة ذهبية فاخرة. تصبغ غني وتركيبة مرطبة.',
    },
    price: 149,
    category: 'cosmetic',
    image: '/assets/product-lipstick-gold.jpg',
    images: ['/assets/product-lipstick-gold_variant_1.jpg', '/assets/hero-cosmetics-collection_variant_1.jpg'],
  },
  {
    id: '5',
    name: {
      en: 'Citrus Fresh',
      ar: 'انتعاش الحمضيات',
    },
    description: {
      en: 'A refreshing citrus fragrance with bergamot, lemon, and mint. Perfect for daily wear.',
      ar: 'عطر حمضيات منعش بالبرغموت والليمون والنعناع. مثالي للاستخدام اليومي.',
    },
    price: 249,
    category: 'perfume',
    image: '/assets/hero-perfume-luxury_variant_2.jpg',
    images: ['/assets/hero-perfume-luxury_variant_3.jpg'],
  },
  {
    id: '6',
    name: {
      en: 'Night Serum',
      ar: 'سيروم الليل',
    },
    description: {
      en: 'Intensive night serum with retinol and vitamin C. Reduces fine lines and brightens skin.',
      ar: 'سيروم ليلي مكثف بالريتينول وفيتامين سي. يقلل الخطوط الدقيقة ويفتح البشرة.',
    },
    price: 229,
    category: 'cosmetic',
    image: '/assets/hero-cosmetics-collection_variant_2.jpg',
    images: ['/assets/hero-cosmetics-collection_variant_3.jpg'],
  },
];
