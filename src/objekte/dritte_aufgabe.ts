type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];
// zugriff beatles 
console.log("ZugriffBeatles", meineTopVier[0].kunstler);
// zugriff auf download format 
console.log("zugriff auf Download_Pink", meineTopVier[1].formate[3]);
// aus dem objekt pink floyd: true
console.log("zugriff auf pink:", meineTopVier[1].gold);
// die releasejahre 1971 und 1983
console.log("zugriff auf das jahr", meineTopVier[2].release_jahr);
console.log("zugriff auf das jahr", meineTopVier[3].release_jahr);
// von metallica: mc
console.log("zugriff auf metallica,mc:", meineTopVier[3].formate[2]);
// aus dem objekt metallica das wort "ride"
console.log("zugriff auf das wort", meineTopVier[3].title.split(' ')[4]);
// lege ein neues objekt vom typ musik an 
const newAlbum: Musik = {
    kunstler: 'Hooo',
    title: 'huhu',
    release_jahr: 1986,
    formate: ['Download'],
    gold: false
}
// oben haben wir ein neues objekt vom typ musik hinzugefügt und jetzt fügen wir es zum array 
meineTopVier.push(newAlbum);
// jetzt prüfen wir ob das neue objekt hinzugefügt wurde
console.log(meineTopVier);
















