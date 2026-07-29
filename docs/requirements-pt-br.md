# Sistema Kanban - Clone do Trello

## Objetivo

Desenvolver uma aplicação web de quadro Kanban inspirada no Trello, voltada para aprendizado acadêmico e desenvolvimento de habilidades.

---

## Usuários do Sistema

- **Usuário Padrão:** Pode criar, editar, mover e excluir quadros, colunas e cartões.

---

### Requisitos Funcionais

- **RF01:** O sistema deve permitir ao usuário criar, editar e excluir quadros Kanban.
- **RF02:** O sistema deve permitir ao usuário criar, renomear e excluir colunas (listas) dentro de um quadro.
- **RF03:** O sistema deve permitir ao usuário criar, editar o conteúdo e excluir cartões dentro de uma coluna.
- **RF04:** O sistema deve permitir ao usuário arrastar e soltar cartões para reordená-los dentro da mesma coluna.
- **RF05:** O sistema deve permitir ao usuário arrastar e soltar cartões para movê-los entre colunas diferentes.
- **RF06:** O sistema deve salvar automaticamente o estado do quadro (posições de cartões e colunas) no armazenamento do navegador, para que os dados não sejam perdidos ao recarregar a página.

---

### Requisitos Não Funcionais

- **RNF01 (Performance):** As interações de arrastar e soltar devem ser altamente responsivas e operar de forma fluida a 60 FPS, sem lag visual.
- **RNF02 (Usabilidade):** A interface da aplicação deve ser totalmente responsiva, adaptando-se perfeitamente a telas de desktop, tablet e mobile.
- **RNF03 (Design System):** A interface do usuário deve aderir estritamente à paleta de cores Catppuccin Macchiato para consistência visual e estética.
- **RNF04 (Manutenibilidade):** A arquitetura do front-end deve ser construída usando componentes ES6+ isolados e modulares (import/export) para garantir a reutilização de código.
- **RNF05 (Eficiência):** O tempo de carregamento inicial da aplicação deve ser inferior a 2 segundos em uma conexão de banda larga padrão.

---

### Regras de Negócio

- **RN01 (Hierarquia):** Um cartão não pode existir fora de uma coluna; ele deve sempre estar estruturalmente associado a uma coluna pai válida.
- **RN02 (Integridade de Dados):** Excluir uma coluna deve excluir automática e irreversivelmente todos os cartões contidos nela (Exclusão em Cascata).
- **RN03 (Validação):** Quadros, colunas e cartões não podem ser criados ou salvos com títulos ou conteúdos completamente vazios.
- **RN04 (Consistência de Estado):** O índice de posição de um cartão deve ser recalculado perfeitamente quando movido para uma nova coluna para manter a ordem exata de exibição.
