import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0">
              <h1 className="text-4xl lg:text-5xl font-black mb-6 text-foreground leading-tight">
                Introdução Alimentar <span className="text-primary">Segura e Sem Medo</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 font-medium">
                Tenha na palma da mão o passo a passo completo para o seu bebê comer de tudo, com saúde e segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank")}
                  className="inline-flex items-center justify-center px-8 py-4 text-white bg-primary font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  QUERO O APP AGORA
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1596265910586-4444530018d7?q=80&w=600&auto=format&fit=crop"
              alt="Bebê comendo de forma saudável durante introdução alimentar"
              className="rounded-3xl shadow-xl max-w-sm w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
