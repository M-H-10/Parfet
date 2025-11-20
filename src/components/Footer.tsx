import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
              Parfet
            </h3>
            <p className="text-gray-400 text-sm">
              {t('heroDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#D4AF37]">{t('aboutUs')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                {t('aboutUs')}
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                {t('contactUs')}
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                {t('products')}
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#D4AF37]">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#D4AF37] hover:bg-white/10 transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#D4AF37] hover:bg-white/10 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#D4AF37] hover:bg-white/10 transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#D4AF37]">{t('newsletter')}</h4>
            <p className="text-sm text-gray-400">{t('subscribeText')}</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder={t('email')}
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
              />
              <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold">
                {t('subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Parfet. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
