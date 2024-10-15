type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};
// wir greifen jetzt auf den Wert 'Geheimnisse' zu 
console.log("Zugriff auf Geheimnisse:", unserLager.schrank["Obere Schublade"].Ordner2);
// wir greifen auf cola zu
console.log("Zugriff auf die Coke", unserLager.schrank["Untere Schublade"]);
// wir greifen uns die hefter 
console.log("Zugriff auf die Hefter:", unserLager.schreibtisch['schublade']);




