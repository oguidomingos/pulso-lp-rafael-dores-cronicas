# LPs por região — Dr. Rafael Rocha

LPs específicas por região do corpo, derivadas da LP geral. Servidas no mesmo domínio `https://www.drrafaelrochaortopedia.com.br/`, cada uma sob seu path:

| LP | URL de produção | Pasta | Porta dev |
|---|---|---|---|
| Coluna | `/coluna/` | `regioes/coluna/` | 5186 |
| Joelho | `/joelho/` | `regioes/joelho/` | 5183 |
| Mão e Punho | `/mao-punho/` | `regioes/mao-punho/` | 5187 |
| Ombro | `/ombro/` | `regioes/ombro/` | 5184 |
| Pé e Tornozelo | `/pe-tornozelo/` | `regioes/pe-tornozelo/` | 5185 |
| Quadril | `/quadril/` | `regioes/quadril/` | 5188 |

A LP geral (`/`) continua na raiz do repo, intacta.

## Build e deploy no Hostinger

Cada LP é um projeto Vite independente. Para cada região:

```bash
cd regioes/<regiao>
npm install
npm run build
```

O `vite.config.js` já está com `base: "/<regiao>/"`, então o `dist/` gerado tem todos os paths absolutos corretos (`/coluna/assets/...`, `/coluna/obg-wpp/...`, etc.).

No Hostinger, suba o conteúdo de `dist/` para:

```
public_html/<regiao>/
```

Ex.: `regioes/coluna/dist/*` → `public_html/coluna/`.

A LP geral em `public_html/` (raiz) **não é tocada**.

## Fluxo de lead

Cada LP herdou o mesmo padrão da LP geral:

1. Form hero (nome + telefone) → `handleSubmit`
2. `dataLayer.push({ event: 'lead_submit', lead_source: 'hero_form_<regiao>', ... })`
3. Redireciona para `/<regiao>/obg-wpp/index.html?name=...&phone=...&utm_*`
4. `obg-wpp/index.html` carrega GTM (`GTM-WBZZM9NX`) e redireciona para `https://wa.me/5561999190221?text=...`

GTM container é o mesmo da LP geral (`GTM-WBZZM9NX`) — basta filtrar por `lead_source` para diferenciar conversões por região no Google Ads.

## Pendência: integração com planilha (webhook Apps Script)

O `handleSubmit` atual **não envia** o lead para o Apps Script — só dispara GTM e redireciona. Para gravar leads em planilha:

1. Em cada `regioes/<regiao>/google-apps-script/`, deploy do `Code.gs` como Web App (ou criar 1 Web App centralizado).
2. Adicionar no `handleSubmit` (antes do `window.location.href`):

```js
fetch(APPS_SCRIPT_URL, {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({ name, phone, source: `hero_form_${REGION.slug}`, page_url: currentUrl.toString() }),
})
```

Recomendado: 1 Apps Script Web App único + 1 planilha com coluna `lead_source` para separar regiões.

## Observações

- `node_modules/` e `dist/` ficam fora do git (já no `.gitignore` da raiz)
- Cada região tem porta `dev` e `preview` próprias — dá pra rodar várias em paralelo
- Os dados específicos de cada região (sintomas, causas, FAQ, etc.) ficam em `src/region.jsx`
- A estratégia de copy/CFM está em `regioes/<regiao>/ESTRATEGIA-LP-REGIOES.md`
