

## Plano: Atualizar Link de Pagamento em Todos os Botões

### Resumo
Atualizar o link de pagamento Kiwify de `https://pay.kiwify.com.br/vrYjxFv` para `https://pay.kiwify.com.br/9j0V7DB` em todos os botões CTA (Call-to-Action) da landing page.

---

### Alterações Necessárias

Serão atualizados **2 arquivos** que contêm botões de compra:

| Arquivo | Localização | Alteração |
|---------|-------------|-----------|
| `src/components/HeroSection.tsx` | Linha 5 | Atualizar URL no `handleCTAClick` |
| `src/components/OfferSection.tsx` | Linha 5 | Atualizar URL no `handleCTAClick` |

---

### Detalhes Técnicos

**1. HeroSection.tsx** - Botão "Quero o Guia Agora"
```tsx
// De:
window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank");

// Para:
window.open("https://pay.kiwify.com.br/9j0V7DB", "_blank");
```

**2. OfferSection.tsx** - Botão "Sim! Quero o Guia por R$ 14,90"
```tsx
// De:
window.open("https://pay.kiwify.com.br/vrYjxFv", "_blank");

// Para:
window.open("https://pay.kiwify.com.br/9j0V7DB", "_blank");
```

---

### Observação
O botão flutuante do WhatsApp não será alterado, pois ele é para suporte ao cliente e não para pagamento.

