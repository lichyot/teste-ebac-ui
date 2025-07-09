# teste-ebac-ui

Projeto de automação de testes UI utilizando Cypress - Módulo 11

## 🚀 Configuração do Projeto

### Pré-requisitos
- Node.js instalado
- Git instalado

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd teste-ebac-ui
   ```

2. **Inicialize o projeto Node.js:**
   ```bash
   npm init -y
   ```

3. **Instale o Cypress:**
   ```bash
   npm install cypress@13.6.0
   ```

## 📋 Como executar os testes

### Abrir o Cypress Test Runner
```bash
npx cypress open
```

### Executar testes em modo headless
```bash
npx cypress run
```

## 📁 Estrutura do Projeto

```
teste-ebac-ui/
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── cypress.config.json
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **Cypress** v13.6.0 - Framework de testes end-to-end
- **Node.js** - Ambiente de execução JavaScript

## 📚 Recursos Adicionais

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)