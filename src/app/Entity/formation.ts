import { Candidat } from "./candidat";

export class Formation {
    id: any;
    school: string = "";
    degree: string = "";
    field_study: string = "";
    grade: string = "";
    description: string = "";
    start_date: any;
    end_date: any;
    candidat = new Candidat();
}




