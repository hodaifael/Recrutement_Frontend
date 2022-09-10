import { Entretien } from "./entretien";

export class Commentaire {
    id: any;
    objet: any;
    date: any;
    time: any;
    entretien = new Entretien();


    load(args: any = {}) {
        this.id = args.id;
        this.objet = args.objet;
        this.date = args.date;
        this.time = args.time;
    }
}
