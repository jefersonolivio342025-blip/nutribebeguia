import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { openCheckout } from "@/lib/checkout";

const MobileStickyBuy = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-bottom transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={openCheckout}
        className="w-full text-cta-foreground font-black py-3.5 rounded-xl text-base inline-flex items-center justify-center gap-2"
        style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
      >
        COMPRAR POR R$ 29,90
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MobileStickyBuy;
