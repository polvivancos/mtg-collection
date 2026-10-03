# MTG Collection v3 — Scanner local gratuït

- No utilitza OpenAI, Gemini ni cap API d'IA de pagament.
- La foto es processa localment al navegador amb Tesseract.js.
- Fa diverses lectures de la zona del nom i de la línia inferior.
- Quan pot recuperar codi de set + número de col·leccionista, prova d'identificar directament la impressió exacta a Scryfall.
- Si no pot, usa el nom com a fallback i mostra totes les impressions perquè l'usuari triï.
- Requereix internet per consultar Scryfall i per descarregar Tesseract.js la primera vegada; els escanejos no s'envien a un servei d'IA.
- Interfície adaptada a iPhone 14 Plus i altres pantalles mòbils amb safe-area.
