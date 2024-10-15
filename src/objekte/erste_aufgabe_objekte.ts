type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];
//   greife auf die werte nala und droopy zu und console sie 
console.log("Nala:", unsereHaustiere[0].namen[1]);
console.log("Droopy:", unsereHaustiere[1].namen[2]);
// lasse dir alle hundenamen anzeigen
console.log("Hundenamen:", unsereHaustiere[1].namen);
// änderung von namen
unsereHaustiere[1].namen[2] = "Snoopy"
unsereHaustiere[0].namen[2] = "Pinky"
// ausgabe aller namen und die veränderung anzuzeigen
console.log("Aktualisierte Hundenamen", unsereHaustiere[1].namen);
console.log("Aktualisierte Katzennamen", unsereHaustiere[0].namen);
// wir sehen die aktualisierten namen oben 
// nun erstellen wir ein neues objekt
const hamster: Pet = {
    tiertyp: 'Hamster',
    namen: ['lupo', 'scotty', 'jekko']
};
// jetzt fügen wir das objekt im array hinzu
unsereHaustiere.push(hamster);
// abschließend zeigen wir das aktualisierte array mit dem neuen objekt
console.log("neueUnsereHaustiere", unsereHaustiere);

