import { Company } from "./company";
import { Utilisateur } from "./utilisateur";

export class Admin extends Utilisateur {
    company: Company = new Company();
}
