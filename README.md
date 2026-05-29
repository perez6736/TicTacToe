# Tic-Tac-Toe (Full-Stack Learning Project)

## Overview
This project is a portfolio-focused Tic-Tac-Toe application designed to demonstrate practical software engineering skills beyond basic implementation.

It focuses on:
- Clean architecture and separation of concerns
- Algorithm implementation (Minimax)
- Test automation (unit + E2E)
- CI/CD pipelines
- Frontend and backend integration
- Scalability for future features (multiplayer, accounts, etc.)

The goal of this project is to expand beyond a QA automation focus and develop a well-rounded understanding of software engineering practices, including application design, algorithms, frontend and backend development, and deployment workflows.

---

## Project Roadmap (Next Steps)

### Phase 1 — Unit Testing (Current Next Step)

Add unit tests to validate and protect existing game logic:

- Win detection  
- Draw detection  
- Valid move generation  
- Easy AI returns a valid move  
- Medium AI:
  - Takes winning moves  
  - Blocks opponent wins  
  - Prioritizes center  
- Hard AI (Minimax):
  - Takes winning moves  
  - Blocks opponent wins  
  - Avoids losing positions  

This ensures stability before integrating with a UI.

---

### Phase 2 — Vue UI

#### Menu Page
- Select game mode: Player vs Player (PvP) or Player vs Computer (PvC)  
- Select difficulty:
  - Easy — random moves  
  - Medium — heuristic-based (win/block/center/random)  
  - Hard — Minimax (unbeatable)  
- Select player mark: X or O  
  - X always goes first  

#### Game Page
- Interactive game board  
- Display current turn  
- Display result (win/draw)  
- Restart button  
- Return to menu option  

---

### Phase 3 — Automation Testing (E2E)

Use WebdriverIO to validate key user flows:

- Start a PvP game  
- Start a PvC game (easy difficulty)  
- Select player mark (X/O)  
- Verify hard AI blocks and takes winning moves  
- Verify game ends correctly (win/draw)  
- Verify restart functionality  

---

### Phase 4 — CI/CD Pipeline

Set up GitHub Actions to automate:

- Dependency installation  
- Linting and type checking  
- Running unit tests  
- Building the application  
- Running E2E tests  

---

### Phase 5 — Localization Support

Add multi-language support to simulate real-world production requirements.

Goals:
- Support multiple languages (e.g., English / Japanese)  
- Externalize UI text into translation files  
- Ensure UI renders correctly across languages  
- Adapt automated tests to handle localization  

---

### Phase 6 — Optional Backend Enhancements

#### Initial Feature
- Persist completed game results  

#### Future Enhancements
- User accounts and authentication  
- Player statistics (wins/losses/draws)  
- Real-time multiplayer using WebSockets  

---

## Future Direction

This project can evolve into:
- A full-stack multiplayer game platform  
- A testing showcase (automation + CI/CD)  
