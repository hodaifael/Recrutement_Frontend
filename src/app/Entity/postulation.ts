import { Candidat } from "./candidat";
import { Offre } from "./offre";

export class Postulation {
    id: any;
    date: any;
    Time: any;
    lettreMotivation: String = '';
    candidat = new Candidat();
    offre = new Offre();

}
