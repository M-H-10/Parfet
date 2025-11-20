import { Product } from '@/types/product';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-gray-200 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-xl hover:shadow-[#D4AF37]/20">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white hover:bg-[#D4AF37] text-black font-semibold"
          >
            {t('viewDetails')}
          </Button>
        </div>
      </Link>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-[#D4AF37] transition-colors duration-300">
          {product.name[language]}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description[language]}
        </p>
        <p className="text-2xl font-bold text-[#D4AF37]">
          ${product.price}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-black hover:bg-[#D4AF37] text-white hover:text-black transition-all duration-300 group/btn"
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
          {t('addToCart')}
        </Button>
      </CardFooter>
    </Card>
  );
}
