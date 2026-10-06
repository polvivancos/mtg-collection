# Scanner v3.13.3

Aquesta versió integra el worker oficial de CollectorVision directament des del seu origen.

- La càmera continua sent local via getUserMedia.
- El worker visual es crea directament amb la URL oficial, no com a Blob, perquè els seus imports i assets relatius es resolguin correctament.
- El reconeixement exigeix coincidència entre diversos frames abans d’acceptar una carta.
- Si no hi ha prou confiança, no selecciona cap carta automàticament.
- La selecció posterior d’impressió exacta continua utilitzant Scryfall.

CollectorVision: https://github.com/HanClinto/CollectorVision
