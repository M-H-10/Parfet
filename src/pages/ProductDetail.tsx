import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Minus, Plus } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>{t('backToProducts')}</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/products">
          <Button variant="ghost" className="mb-8 hover:text-[#D4AF37] animate-in slide-in-from-left duration-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToProducts')}
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 animate-in slide-in-from-left duration-1000">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
              <img
                src={images[selectedImage]}
                alt={product.name[language]}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-[#D4AF37] scale-105'
                        : 'border-gray-200 hover:border-[#D4AF37]'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name[language]} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-in slide-in-from-right duration-1000">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-black">
                {product.name[language]}
              </h1>
              <p className="text-3xl font-bold text-[#D4AF37]">
                ${product.price}
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <h2 className="text-lg font-semibold mb-3 text-black">
                {t('productDetails')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description[language]}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="text-sm font-semibold text-black">
                {t('quantity')}
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 py-2 font-semibold text-black">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-[#D4AF37] text-white hover:text-black transition-all duration-300 group text-lg py-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              {t('addToCart')}
            </Button>

            {/* Product Features */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <span className="text-sm text-gray-700">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <span className="text-sm text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <span className="text-sm text-gray-700">30-Day Return Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
