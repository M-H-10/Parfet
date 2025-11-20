import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="text-black hover:text-[#D4AF37] hover:bg-white/10 transition-all duration-300"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'en' ? 'AR' : 'EN'}
    </Button>
  );
}
