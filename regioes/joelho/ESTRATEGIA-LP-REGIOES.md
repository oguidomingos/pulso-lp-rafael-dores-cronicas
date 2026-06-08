# Estratégia de LPs por região do corpo — Dr. Rafael Rocha

Documento de apoio para criar variações de Landing Page focadas em conversão de Google Ads, por região do corpo, dentro das diretrizes do CFM.

---

## 1. Princípios de copy para conformidade CFM

Evitar (sempre):
- "Especialista em joelho/ombro/coluna/quadril"
- "Cirurgião de joelho/ombro"
- "Melhor", "número 1", "líder", "referência absoluta"
- Promessas de resultado ("cura garantida", "alívio em 1 sessão")
- Sensacionalismo, fotos antes/depois, exibição de pacientes
- Garantias, "100%", "definitivo"
- Comparação com outros médicos
- Captação de pacientes via descontos/sorteios

Permitido (e usado nesta LP):
- "Ortopedista e Traumatologista para Dor no Joelho"
- "Atendimento Ortopédico para Dor no Joelho"
- "Avaliação Ortopédica para Dor no Joelho"
- "Tratamento Ortopédico para Dor no Joelho"
- "Dor no Joelho?" (foco no sintoma do paciente)
- Lista de áreas de atuação informativa (sem hierarquização de qualidade)
- Disclaimer: "Resultados podem variar conforme cada caso"

---

## 2. Recomendações de CRO usadas nesta LP (e por LPs médicas top de mercado)

### Above the fold
- **Headline + dor do paciente** ("Dor no Joelho?") + benefício ("Atendimento Ortopédico em Brasília")
- **Foto profissional do médico** com badge CRM (sinal de autoridade médica imediato)
- **Formulário curto no hero** (apenas nome + telefone) — reduz fricção
- **Selo de avaliação** (Doctoralia 5.0 com estrelas) — prova social no primeiro paint
- **CTA fixo mobile** com WhatsApp sempre visível (sticky footer verde)

### Confiança e autoridade
- CRM e RQE sempre visíveis
- Stats com números absolutos verificáveis (procedimentos, pacientes, anos)
- Depoimentos verificados Doctoralia (com nome + plataforma de origem)
- Formação acadêmica destacada na seção "Sobre"
- Schema.org Physician/MedicalProcedure no HTML

### Persuasão sem sensacionalismo
- Seção **Sintomas** (você se reconhece aqui?) — gera identificação
- Seção **Causas** — educa o paciente e demonstra domínio técnico
- Seção **Quando procurar** — cria urgência baseada em sinais clínicos reais (não medo)
- Seção **Como funciona a consulta** — reduz objeção do "não sei como será"
- Seção **Diferenciais** — racionaliza a escolha
- FAQ extenso — reduz dúvidas comuns que travam o agendamento

### Redução de fricção até o WhatsApp
- Formulário hero envia o lead direto para uma página de obrigado que abre WhatsApp já com mensagem pronta
- Todos os CTAs apontam para `#hero` (forma) — uma única conversão central
- WhatsApp sticky no mobile (a maior parte do tráfego de Google Ads vem de mobile)
- Form com `inputMode="tel"` no telefone — abre teclado numérico no celular
- Mínimo de campos (nome, telefone) — quanto menos campos, maior a taxa de submit

### Conformidade CFM aplicada
- Disclaimer no rodapé do form: "Seus dados são usados apenas para entrar em contato"
- Disclaimer abaixo dos procedimentos sobre variação de resultado
- Disclaimer abaixo dos depoimentos
- Disclaimer final no footer sobre caráter informativo do conteúdo

### Performance & SEO técnico
- Preconnect para Google Fonts
- Schema.org Physician
- Meta description otimizada para CTR (com a dor + cidade)
- Canonical
- `lang="pt-BR"` correto

---

## 3. Recomendações adicionais de CRO (sugestões para iterar)

Próximos testes/elementos que costumam mover ponteiro em LPs médicas:

1. **Selo de tempo de resposta**: "Respondemos em até 30min em horário comercial"
2. **Mini-vídeo de 15-30s no hero** do médico se apresentando (aumenta confiança forte)
3. **Botão "Verificar se meu convênio é aceito"** abrindo modal com lista — reduz objeção #1
4. **Calculadora de risco / quiz** ("Sua dor no joelho está num estágio leve, moderado ou grave?") — alto engajamento, mas precisa de copy MUITO cuidadosa para não violar CFM (não diagnosticar)
5. **Microcompromisso**: "Receber o guia gratuito sobre dor no joelho" como entrada de funil paralela ao WhatsApp
6. **Botão de chamada telefônica direta** ao lado do WhatsApp para o público 55+
7. **Selo de Geração Lead**: contador de "X pacientes agendaram este mês" (precisa ser real, atualizado)
8. **Heatmap (Hotjar/Clarity)** para descobrir onde o usuário desiste
9. **A/B test de cor do CTA** — verde já é alta conversão, mas pode-se testar amarelo/laranja para urgência
10. **Pixel + remarketing** Meta/Google para reativar visitantes que não converteram
11. **FAQ Schema.org** marcado para aparecer em rich snippets do Google

---

## 4. SEO On-Page para esta LP de Joelho

### Já implementado
- `<title>`: "Dor no Joelho? Ortopedista em Brasília — Dr. Rafael Rocha"
- Meta description com palavra-chave + cidade + CTA
- Meta keywords (peso reduzido, mas inofensivo)
- Canonical
- Open Graph + Twitter Card
- Schema.org Physician + MedicalProcedure
- `lang="pt-BR"`
- H1 único: "Dor no Joelho? Atendimento Ortopédico em Brasília"
- Hierarquia H1 → H2 → H3 limpa
- Alt text descritivo nas imagens

### Sugestões para iterar
- Adicionar FAQ Schema.org no `<head>` para rich snippets
- Adicionar `BreadcrumbList` Schema se houver navegação entre LPs irmãs
- Criar `sitemap.xml` listando todas as LPs por região
- Linkar internamente entre as LPs (footer: "Veja também: Dor no Ombro, Dor na Coluna, Dor no Quadril")
- Adicionar imagens otimizadas WebP (reduz LCP)
- Lazy load nas imagens da galeria (já está implícito por estarem abaixo da dobra)
- Servir fonts com `font-display: swap` (Google Fonts já faz)
- Comprimir e converter `IMG_1990.jpg` (1.3MB!) para WebP — vai reduzir LCP em mobile

---

## 5. Regiões do corpo que justificam LP própria

Critério: volume de busca + intenção comercial alta + disponibilidade do médico em tratar.

### Prioridade 1 — Alto ROI esperado (criar primeiro)
| Região | Headline sugerida | Termos principais |
|--------|-------------------|-------------------|
| **Joelho** ✅ | "Dor no Joelho? Atendimento Ortopédico em Brasília" | dor no joelho, ortopedista joelho, médico para dor no joelho, artrose joelho, lesão de menisco |
| **Coluna (lombar/cervical)** | "Dor na Coluna? Avaliação Ortopédica em Brasília" | dor na coluna, dor lombar, dor cervical, hérnia de disco, lombalgia, dor nas costas |
| **Ombro** | "Dor no Ombro? Atendimento Ortopédico em Brasília" | dor no ombro, ortopedista ombro, manguito rotador, tendinite ombro, bursite ombro |
| **Quadril** | "Dor no Quadril? Atendimento Ortopédico em Brasília" | dor no quadril, ortopedista quadril, artrose quadril, bursite trocantérica |

Esses 4 representam a maior fatia de busca por dor articular no Brasil e têm CPCs Google Ads relativamente competitivos mas com alta intenção.

### Prioridade 2 — Volume moderado
| Região | Termos principais |
|--------|-------------------|
| **Tornozelo / Pé** | dor no tornozelo, dor no pé, fascite plantar, esporão de calcâneo |
| **Cotovelo** | dor no cotovelo, epicondilite, cotovelo de tenista |
| **Punho / Mão** | dor no punho, túnel do carpo, dor na mão |

### Prioridade 3 — Dor difusa / "guarda-chuva"
Páginas temáticas que capturam buscas mais amplas:
- **Dor crônica** — dor crônica, dor que não passa, dor há meses
- **Lesão esportiva** — lesão esportiva, dor após treino, voltar a correr sem dor
- **Artrose** — artrose, desgaste articular, dor nas articulações
- **Infiltração guiada por ultrassom** — termo técnico que captura paciente já informado

### O que NÃO criar como LP separada (ainda)
- Procedimentos isolados (viscossuplementação, PRP) — buscas mais baixas e mais técnicas. Melhor manter como seção dentro das LPs de região.
- Especialidades genéricas ("ortopedia geral") — disputar "ortopedista perto de mim" exige SEO local + Google Business, não LP.

---

## 6. Termos de pesquisa que justificam página individual

Critério para campanha Google Ads: agrupar termos com **mesma intenção** em **um único ad group** apontando para a **mesma LP**.

### Ad Group sugerido para a LP de Joelho

**Termos de alta intenção (priorizar)**
- "dor no joelho"
- "ortopedista para dor no joelho"
- "médico para dor no joelho brasília"
- "dor no joelho ao subir escada"
- "dor no joelho ao agachar"
- "dor no joelho quando dobra"
- "tratamento para dor no joelho"
- "infiltração joelho brasília"

**Termos de média intenção (testar)**
- "artrose joelho tratamento"
- "lesão menisco brasília"
- "dor patelofemoral"
- "joelho estala"
- "ortopedista joelho brasília"

**Termos a evitar / negativar**
- "dor no joelho remédio caseiro"
- "dor no joelho exercícios"
- "fisioterapia para joelho"
- "tratamento natural joelho"
- "sus joelho"
- Qualquer combinação com nomes de medicamentos

### Modelo do ad group para outras regiões

Aplicar a mesma lógica:
- 1 LP por região = 1 ad group
- Headlines responsivos com a palavra-chave da região
- Descrições destacando: avaliação ortopédica + cidade + procedimentos minimamente invasivos
- Sitelinks: "Sintomas", "Causas", "FAQ", "Localização"
- Callouts: "Aceita convênios", "Agendamento via WhatsApp", "Avaliação personalizada"
- Estruturados (snippet): "Tratamentos: infiltração guiada, viscossuplementação, terapia regenerativa"

---

## 7. Próximos passos sugeridos

1. **Validar a LP de joelho** localmente e em deploy de teste
2. **Decidir estratégia de URLs**:
   - Subdomínio (`joelho.drrafaelrocha.com.br`)
   - Subpasta (`drrafaelrocha.com.br/dor-no-joelho/`) — **recomendado** para SEO compartilhado
3. **Configurar GTM events** específicos por LP (lead_source = "joelho", "ombro", etc.)
4. **Criar variação seguinte** (sugestão: **Coluna**, é o de maior volume após joelho)
5. **Estruturar Google Ads** com 1 campanha por região, ad groups internos por intenção
6. **Implementar Pixel + Conversions API** Meta para remarketing
7. **Conectar Google Apps Script** já presente para captura de leads em Sheets

---

**Última atualização:** 2026-06-03
