# Pulso LP — Dr. Rafael Rocha | Medicina da Dor

Landing page do Dr. Rafael Rocha (ortopedista/medicina da dor, Lanner Especialidades, Brasília-DF).

Migrado para **Vite + React** em [DES-419](https://paperclip.icebergcompany.com.br/DES/issues/DES-419) para compatibilidade com Hostinger.

## Preview

- GitHub Pages: https://oguidomingos.github.io/pulso-lp-rafael-dores-cronicas/

## Stack

- **Framework:** React 18 + Vite 5
- **Estilos:** Tailwind CSS (via CDN inline) + CSS custom
- **Build:** `vite build` → `dist/` com `base: "./"` (paths relativos para Hostinger)

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
# Gera dist/ pronto para upload no Hostinger
```

## Deploy — GitHub Pages (preview)

```bash
# Build local
npm run build

# Enviar dist/ para branch gh-pages
git checkout gh-pages || git checkout -b gh-pages
cp -r dist/. .
git add -A
git commit -m "deploy: update"
git push origin gh-pages
git checkout main
```

> **Automação CI:** Para ativar deploy automático via GitHub Actions, o token precisa ter escopo `workflow`.
> Adicionar `.github/workflows/deploy.yml` quando o token for atualizado com esse escopo.

## Deploy — Hostinger

1. Rode `npm run build` localmente
2. Faça upload do conteúdo da pasta `dist/` via FTP/Gerenciador de Arquivos do Hostinger
3. Aponte o domínio para a pasta raiz onde os arquivos foram enviados

## Estrutura do projeto

```
src/
  App.jsx      — Componente principal da LP
  App.css      — Estilos globais
  main.jsx     — Entry point React
dist/          — Build de produção (gerado pelo vite build)
  index.html
  assets/
  img/
public/
  img/         — Imagens estáticas
vite.config.js — Config Vite (base: "./")
```

---

**Origem:** [DES-180](/DES/issues/DES-180) | **Migração:** [DES-419](/DES/issues/DES-419) (Pulso — Assessoria de Marketing para Clínicas)
