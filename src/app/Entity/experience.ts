import { Candidat } from "./candidat";

export class Experience {
    id: any;
    company: string = "";
    field_job: string = "";
    description: string = "";
    start_date: any;
    end_date: any;
    candidat = new Candidat();
}
