import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { CreditCard, Banknote, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { t, language } = useLanguage();
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center space-y-6 animate-in zoom-in duration-1000">
            <CheckCircle className="h-24 w-24 mx-auto text-green-500" />
            <h2 className="text-3xl font-bold text-black">Order Confirmed!</h2>
            <p className="text-gray-600">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            <div className="animate-pulse">
              <p className="text-sm text-gray-500">Redirecting to homepage...</p>
            </div>
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
            {t('checkout')}
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 animate-in slide-in-from-left duration-1000">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  {t('customerInformation')}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-black">
                      {t('fullName')} *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">
                      {t('email')} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-black">
                      {t('phone')} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-black">
                      {t('city')}
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address" className="text-black">
                      {t('address')} *
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode" className="text-black">
                      {t('postalCode')}
                    </Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 animate-in slide-in-from-left duration-1000 delay-300">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  {t('paymentMethod')}
                </h2>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#D4AF37] transition-colors cursor-pointer">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex items-center cursor-pointer flex-1">
                      <Banknote className="h-5 w-5 mr-2 text-[#D4AF37]" />
                      {t('cashOnDelivery')}
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg hover:border-[#D4AF37] transition-colors cursor-pointer mt-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 mr-2 text-[#D4AF37]" />
                      {t('creditCard')}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24 animate-in slide-in-from-right duration-1000">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  {t('orderSummary')}
                </h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.name[language]} x {item.quantity}
                      </span>
                      <span className="font-semibold text-black">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="border-t border-gray-300 pt-4 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>{t('subtotal')}</span>
                      <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-2">
                      <span className="text-black">{t('total')}</span>
                      <span className="text-[#D4AF37]">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black hover:bg-[#D4AF37] text-white hover:text-black transition-all duration-300"
                >
                  {t('placeOrder')}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
