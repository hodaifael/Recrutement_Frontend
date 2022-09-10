import { Admin } from "./admin";
import { ResponsableRH } from "./responsable-rh";

export class Company {
    id: any;
    name: any;
    secteur: any;
    nbrEmployees: any;
    address: any;
    responsableRHS: ResponsableRH[] = [];
    admins: Admin[] = [];
}
