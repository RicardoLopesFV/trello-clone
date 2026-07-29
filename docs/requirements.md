# Kan-ban System - Trello Clone

## Objective

Develop a kanban board web application inspired by Trello, aimed at academic learning and skill development.

---

## System Users

- **Standard User:** Can create, edit, move and delete boards, columns and cards.

---

### Functional Requirements

- **RF01:** The system must allow the user to create, edit, and delete Kanban boards.
- **RF02:** The system must allow the user to create, rename, and delete columns (lists) within a board.
- **RF03:** The system must allow the user to create, edit the content of, and delete cards within a column.
- **RF04:** The system must allow the user to drag and drop cards to reorder them within the same column.
- **RF05:** The system must allow the user to drag and drop cards to move them between different columns.
- **RF06:** The system must automatically save the board state (card and column positions) so data is not lost upon page reload.

---

### Non-Functional Requirements

- **RNF01 (Performance):** The drag-and-drop interactions must be highly responsive and operate smoothly at 60 FPS without visual lag.
- **RNF02 (Usability):** The application interface must be fully responsive, adapting seamlessly to desktop, tablet, and mobile viewports.
- **RNF03 (Design System):** The user interface must strictly adhere to the Catppuccin Macchiato color palette for visual and aesthetic consistency.
- **RNF04 (Maintainability):** The frontend architecture must be built using isolated, modular ES6+ components (import/export) to ensure code reusability.
- **RNF05 (Efficiency):** The initial application load time must be under 2 seconds on a standard broadband connection.

---

### Business Rules

- **BR01 (Hierarchy):** A card cannot exist outside of a column; it must always be structurally associated with a valid parent column.
- **BR02 (Data Integrity):** Deleting a column must automatically and irreversibly delete all cards contained within it (Cascade Delete).
- **BR03 (Validation):** Boards, columns, and cards cannot be created or saved with completely empty titles or content.
- **BR04 (State Consistency):** A card's position index must be recalculated seamlessly when moved to a new column to maintain the exact display order.
