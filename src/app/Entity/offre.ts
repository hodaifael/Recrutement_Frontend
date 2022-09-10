import { Company } from "./company";
import { OffreLike } from "./offre-like";
import { Postulation } from "./postulation";
import { ResponsableRH } from "./responsable-rh";

export class Offre {
    id: any;
    type_contrat: string = "";
    agence: string = "";
    metier: any;
    intitule_post: any;
    description_poste: any;
    date_start_visibilite: any;
    date_end_visibilite: any;
    niveau_d_experience_requise: any;
    niveau_d_etude_demande: any;
    nbrPostulation: Number = 0;
    responsableRH = new ResponsableRH();
    company = new Company();
    postulations: Postulation[] = [];
    likes: OffreLike[] = [];

    load(args: any = {}) {
        this.id = args.id;
        this.type_contrat = args.type_contrat;
        this.agence = args.agence;
        this.metier = args.metier;
        this.intitule_post = args.intitule_post;
        this.description_poste = args.description_poste;
        this.date_start_visibilite = args.date_start_visibilite;
        this.date_end_visibilite = args.date_end_visibilite;
        this.nbrPostulation = args.nbrPostulation;
    }

}


