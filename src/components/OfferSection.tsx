<div className="flex-1 text-center lg:text-left">
  <h2 className="text-3xl font-black mb-4 text-foreground text-center lg:text-left">
    App <span className="text-primary">NutriBebê Pro</span>
  </h2>

  <div className="mb-6 space-y-2 text-sm font-semibold text-muted-foreground">
    <p className="flex items-center gap-2 justify-center lg:justify-start">
      ✅ Guia Visual de Cortes Seguros (Passo a Passo)
    </p>
    <p className="flex items-center gap-2 justify-center lg:justify-start">✅ Cardápios e Receitas Exclusivas</p>
    <p className="flex items-center gap-2 justify-center lg:justify-start">✅ Acesso Vitalício (Sem Mensalidade)</p>
  </div>

  <div className="mb-6 text-center lg:text-left">
    <span className="line-through text-muted-foreground italic text-lg">R$ 97,00</span>
    <div className="text-5xl font-black text-primary">R$ 29,90</div>
  </div>

  <button
    onClick={() => window.open("https://pay.kiwify.com.br/9j0V7DB", "_blank")}
    className="w-full lg:w-auto bg-primary text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-transform"
  >
    QUERO O APP AGORA
  </button>
</div>;
