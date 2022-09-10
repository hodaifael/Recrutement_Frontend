import { Candidat } from "./candidat";
import { Commentaire } from "./commentaire";
import { Offre } from "./offre";
import { Postulation } from "./postulation";
import { ResponsableRH } from "./responsable-rh";

export class Entretien {
    id: any;
    type: any;
    etat: any;
    date: any;
    start_heure: any;
    end_heure: any;
    responsableRH = new ResponsableRH();
    candidat = new Candidat();
    offre = new Offre();
    commentaires: Commentaire[] = [];

    load(args: any = {}) {
        this.id = args.id;
        this.type = args.type;
        this.etat = args.etat;
        this.date = args.date;
        this.start_heure = args.start_heure;
        this.end_heure = args.end_heure;
        this.candidat = args.candidat;
        this.offre = args.offre;
        this.commentaires = args.commentaires;

    }
}
