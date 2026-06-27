# ts-utils

Biblioteca utilitária em TypeScript com funções helper para 
manipulação de arrays, objetos e strings.

## 🚀 Tecnologias

- TypeScript
- Jest (testes)

## 📦 Funções disponíveis

### Array
- `unique<T>(arr)` — remove duplicatas de um array
- `groupBy<T>(arr, key)` — agrupa itens por uma chave
- `chunk<T>(arr, size)` — divide array em chunks

## 🧪 Rodando os testes

```bash
npm test
```

## 📁 Estrutura

```
ts-utils/
├── src/
│   ├── __tests__/
│   │   └── array.test.ts
│   ├── array.ts
│   └── index.ts
├── jest.config.js
├── tsconfig.json
└── package.json
```