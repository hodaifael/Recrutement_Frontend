import { Company } from "./company";
import { Utilisateur } from "./utilisateur";

export class ResponsableRH extends Utilisateur {
    company: Company = new Company();


}
