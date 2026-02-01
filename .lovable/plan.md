

# Plano: Seção "Para Quem é Este Guia"

## Objetivo
Criar uma seção que ajude as mães a se identificarem com o produto, mostrando claramente quem vai se beneficiar do guia e, opcionalmente, para quem ele NÃO é indicado (criando exclusividade e filtrando expectativas).

---

## Design Visual

A seção terá dois blocos lado a lado (em desktop) ou empilhados (mobile):

```text
┌─────────────────────────────────────────────────────────────────┐
│                    🎯 Este Guia é Para Você?                    │
├──────────────────────────┬──────────────────────────────────────┤
│     ✅ IDEAL PARA        │        ❌ NÃO É PARA                 │
│                          │                                      │
│ ● Mães de primeira       │ ● Quem busca receitas para           │
│   viagem inseguras       │   crianças maiores de 2 anos         │
│                          │                                      │
│ ● Quem tem medo de       │ ● Quem prefere papinhas              │
│   engasgos               │   industrializadas                   │
│                          │                                      │
│ ● Mães que querem        │ ● Quem não está disposta             │
│   receitas práticas      │   a preparar refeições               │
│                          │                                      │
│ ● Bebês de 6 a 12 meses  │                                      │
│                          │                                      │
│ ● Quem quer economizar   │                                      │
│   tempo na cozinha       │                                      │
└──────────────────────────┴──────────────────────────────────────┘
```

---

## Implementacao

### 1. Criar componente `TargetAudienceSection.tsx`

**Estrutura do componente:**
- Header com badge e titulo principal
- Dois cards lado a lado:
  - Card verde (ideal para) com lista de checkmarks
  - Card vermelho/cinza (nao e para) com lista de X
- Animacoes de entrada usando `AnimatedSection`

**Conteudo do card "Ideal Para":**
- Maes de primeira viagem que querem comecar a IA com seguranca
- Quem tem medo de engasgos e nao sabe os cortes corretos
- Maes que buscam receitas praticas prontas em 15 minutos
- Familias com bebes de 6 a 12 meses iniciando a IA
- Quem quer economizar tempo e ter um guia visual completo

**Conteudo do card "Nao e Para":**
- Quem busca receitas para criancas maiores de 2 anos
- Maes que preferem papinhas industrializadas
- Quem nao esta disposta a preparar refeicoes caseiras

### 2. Atualizar `Index.tsx`

- Importar o novo componente
- Posicionar apos `TestimonialsSection` e antes de `FAQSection`

---

## Detalhes Tecnicos

**Arquivo a criar:**
- `src/components/TargetAudienceSection.tsx`

**Arquivo a editar:**
- `src/pages/Index.tsx` (adicionar import e posicionar componente)

**Dependencias utilizadas:**
- Componente `AnimatedSection` existente
- Icones do `lucide-react` (CheckCircle, XCircle ou similar)
- Classes CSS existentes (card styles, colors, etc.)

**Responsividade:**
- Desktop: cards lado a lado com `lg:grid-cols-2`
- Mobile: cards empilhados com `grid-cols-1`

**Animacoes:**
- Card esquerdo: `animation="left"`
- Card direito: `animation="right"`
- Delays escalonados para cada item da lista

