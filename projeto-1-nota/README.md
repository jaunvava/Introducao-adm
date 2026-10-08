# Meu Controle Financeiro

Projeto da 1ª nota da disciplina de React.

É um sistema de controle financeiro pessoal onde dá pra cadastrar receitas e despesas e ver o saldo.

## Funcionalidades

- Menu lateral (sidebar) com 3 telas: **Início**, **Histórico** e **Categorias**
- **Início:** cards de saldo, receitas e despesas + gráficos
- **Histórico:** lista das movimentações com busca, filtro de receitas/despesas e exclusão
- **Categorias:** cadastro e exclusão de categorias de receita e de despesa
- Botão "Nova movimentação" que abre um modal com o formulário (descrição, valor, tipo e categoria)
- Validações e confirmações com SweetAlert2 (campos vazios, categoria repetida, saldo negativo, excluir...)
- Não deixa excluir uma categoria que está sendo usada em alguma movimentação
- Receitas aparecem em verde e despesas em vermelho
- Os dados ficam salvos no navegador (localStorage)

## Tecnologias

- React + Vite
- React Router (navegação entre as telas)
- Tailwind CSS (estilização)
- shadcn/ui (componentes: button, card, input, label, select, badge, table)
- SweetAlert2 (alertas, validações e confirmações)
- Chart.js + react-chartjs-2 (gráficos)

## Como rodar

```bash
npm install
npm run dev
```

Depois é só abrir o link que aparecer no terminal (<http://localhost:5173>).