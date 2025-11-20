import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { t, language } = useLanguage();
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-6 animate-in fade-in duration-1000">
            <ShoppingBag className="h-24 w-24 mx-auto text-gray-300" />
            <h2 className="text-3xl font-bold text-black">{t('emptyCart')}</h2>
            <Link to="/products">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-black"
              >
                {t('continueShopping')}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 animate-in slide-in-from-top duration-1000">
          <span className="bg-gradient-to-r from-black to-[#D4AF37] bg-clip-text text-transparent">
            {t('shoppingCart')}
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={item.product.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#D4AF37] transition-all duration-300 animate-in slide-in-from-left duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      src={item.product.image}
                      alt={item.product.name[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-black">
                          {item.product.name[language]}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {item.product.description[language]}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 py-2 font-semibold text-black">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-xl font-bold text-[#D4AF37]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24 animate-in slide-in-from-right duration-1000">
              <h2 className="text-2xl font-bold mb-6 text-black">
                {t('orderSummary')}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>{t('subtotal')}</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-bold">
                  <span className="text-black">{t('total')}</span>
                  <span className="text-[#D4AF37]">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button
                  size="lg"
                  className="w-full bg-black hover:bg-[#D4AF37] text-white hover:text-black transition-all duration-300 mb-4"
                >
                  {t('proceedToCheckout')}
                </Button>
              </Link>

              <Link to="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  {t('continueShopping')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
