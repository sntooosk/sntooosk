# QA Automation Engineer Portfolio

Portfólio premium moderno para um **QA Automation Engineer Junior** focado em automação de testes web/mobile, Cypress, WebdriverIO, Appium, emuladores Android, API Testing e QA para e-commerce VTEX.

## Stack

- React + Vite
- TypeScript
- TailwindCSS
- Framer Motion
- GitHub API
- GitHub Pages

## Funcionalidades

- Dark mode premium com glassmorphism, glow, spotlight seguindo o mouse e gradients animados.
- Seções de Hero, About, Tech Stack, GitHub API, Featured Projects, Experience, QA Dashboard, Contact e Footer.
- Integração automática com `https://api.github.com/users/USERNAME/repos`.
- Skeleton loading, tratamento de erro e filtros por tecnologia QA.
- Responsivo para mobile, tablet, desktop e ultra-wide.
- Workflow de deploy automático para GitHub Pages.

## Configuração local

```bash
npm install
cp .env.example .env
npm run dev
```

Configure seu usuário do GitHub:

```env
VITE_GITHUB_USERNAME=seu-usuario
```

## Build

```bash
npm run build
```

## Deploy GitHub Pages

O deploy automático está configurado em `.github/workflows/deploy.yml` e roda ao fazer push na branch `main`.

Também existe o script manual:

```bash
npm run deploy
```

## Estrutura

```text
src/
  components/
  sections/
  hooks/
  services/
  animations/
  utils/
  assets/
```

## Frase

> Quality is engineered, not inspected.
