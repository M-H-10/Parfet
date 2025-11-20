import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

export default function Products() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'perfume' | 'cosmetic'>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-in slide-in-from-top duration-1000">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-black to-[#D4AF37] bg-clip-text text-transparent">
              {t('allProducts')}
            </span>
          </h1>
          <p className="text-gray-600 text-lg">{t('heroSubtitle')}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12 animate-in slide-in-from-bottom duration-1000 delay-300">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={`transition-all duration-300 ${
              filter === 'all'
                ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black'
                : 'border-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            {t('allProducts')}
          </Button>
          <Button
            variant={filter === 'perfume' ? 'default' : 'outline'}
            onClick={() => setFilter('perfume')}
            className={`transition-all duration-300 ${
              filter === 'perfume'
                ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black'
                : 'border-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            {t('perfumes')}
          </Button>
          <Button
            variant={filter === 'cosmetic' ? 'default' : 'outline'}
            onClick={() => setFilter('cosmetic')}
            className={`transition-all duration-300 ${
              filter === 'cosmetic'
                ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black'
                : 'border-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            {t('cosmetics')}
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-in fade-in duration-1000">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
