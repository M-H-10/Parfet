import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Index() {
  const { t } = useLanguage();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D4AF37]/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full animate-in fade-in duration-1000 delay-300">
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#D4AF37]">Premium Collection</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-black via-[#D4AF37] to-black bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000 delay-500">
                  {t('heroTitle')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-in slide-in-from-bottom duration-1000 delay-700">
                {t('heroDescription')}
              </p>
              
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-black hover:bg-[#D4AF37] text-white hover:text-black transition-all duration-500 group animate-in slide-in-from-bottom duration-1000 delay-1000 text-lg px-8 py-6"
                >
                  {t('shopNow')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative animate-in slide-in-from-right duration-1000 delay-500">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/hero-perfume-luxury_variant_4.jpg"
                  alt="Luxury Perfume"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-in zoom-in duration-1000 delay-1500">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="/assets/product-perfume-rose_variant_2.jpg"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black">Rose Elegance</p>
                    <p className="text-[#D4AF37] font-bold">$299</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-black to-[#D4AF37] bg-clip-text text-transparent">
                {t('allProducts')}
              </span>
            </h2>
            <p className="text-gray-600 text-lg">{t('heroSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in fade-in duration-1000 delay-1000">
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                {t('allProducts')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
