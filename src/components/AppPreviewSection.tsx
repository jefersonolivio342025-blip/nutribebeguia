import mockupCardapioDia from "@/assets/mockup-cardapio-dia.png";
import mockupReceitas from "@/assets/mockup-receitas.png";
import mockupCardapioSemana from "@/assets/mockup-cardapio-semana.png";
import mockupOrganizacao from "@/assets/mockup-organizacao.png";

const screens = [
  { src: mockupCardapioDia, label: "Cardápio do Dia", alt: "Tela do cardápio diário do bebê no aplicativo NutriBebê" },
  { src: mockupReceitas, label: "Receitas", alt: "Tela de receitas para bebês no aplicativo NutriBebê" },
  { src: mockupCardapioSemana, label: "Cardápio da Semana", alt: "Tela do cardápio semanal no aplicativo NutriBebê" },
  { src: mockupOrganizacao, label: "Organização", alt: "Tela de organização de refeições no aplicativo NutriBebê" },
];

const AppPreviewSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            👀 Conheça o App
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-4">
            Veja o aplicativo por dentro
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo organizado para você saber o que oferecer ao seu bebê a cada refeição.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {screens.map((screen, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-background mb-3">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-semibold text-foreground">{screen.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
