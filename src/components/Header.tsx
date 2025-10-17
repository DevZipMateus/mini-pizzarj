
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521997075667?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20mini%20pizzas%20da%20Mini%20Pizza%20RJ.', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-nav ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-20 flex items-center space-x-3">
            <img 
              src="/lovable-uploads/be0e2bdd-f1b3-419c-b83a-790e3709ddfd.png" 
              alt="Mini Pizza RJ - Logo"
              className="h-12 w-12 md:h-14 md:w-14"
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                <span className="text-primary">Mini Pizza</span> 
                <span className="text-accent font-script"> RJ</span>
              </h1>
              <span className="text-xs text-muted-foreground hidden md:block">
                Prático, Rápido e Gostoso
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLinks />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground cta-button"
            >
              Fazer Pedido
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4 cta-button"
                    >
                      Fazer Pedido
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile 
              ? 'text-xl text-foreground hover:text-primary mb-2 w-full text-center py-3' 
              : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'
            }`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
