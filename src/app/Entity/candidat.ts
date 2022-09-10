import { Experience } from "./experience";
import { Formation } from "./formation";
import { Utilisateur } from "./utilisateur";

export class Candidat extends Utilisateur {
    formations: Formation[] = [];
    experiences: Experience[] = [];
    specialite: any;
    niveau_d_etude: any;
    niveau_d_experience: any;


}
