# MTG Collection Pro v3.13 — Scanner visual MTG

L’escàner utilitza CollectorVision com a motor de reconeixement visual: detecció de cantonades, dewarping i nearest-neighbour contra el catàleg MTG. El reconeixement es fa al navegador; Scryfall només s’utilitza després per recuperar les dades i les impressions exactes.

Aquesta integració aplica una política conservadora: la carta només s’accepta quan hi ha prou confiança i, amb càmera, diversos frames coincideixen. Si la confiança o el marge respecte de la segona candidata són baixos, l’app mostra “No identificada” en lloc d’inventar una carta.

CollectorVision és un projecte AGPL-3.0 de HanClinto: https://github.com/HanClinto/CollectorVision

L’app necessita internet la primera vegada per descarregar el motor/catàleg visual des del distribuïdor oficial de CollectorVision i per consultar Scryfall. Els actius es poden guardar en IndexedDB del navegador.
