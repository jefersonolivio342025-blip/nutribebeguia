import { useState, useEffect } from "react";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🥗</span>
          <span className="font-heading font-bold text-foreground text-sm sm:text-base">
            Guia NutriBebê
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 bg-destructive/10 text-destructive text-xs font-semibold rounded-full">
            -68% OFF
          </span>
        </div>

        <button
          onClick={handleCTAClick}
          className="btn-cta px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base whitespace-nowrap text-white"
        >
          Comprar por R$ 29,90
        </button>
      </div>
    </header>
  );
};

export default StickyHeader;
