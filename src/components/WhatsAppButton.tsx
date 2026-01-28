import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5547991158519";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o NutriBebê."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C]"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
