import { ICreateVacancie, IVacanciesResponse } from "@/models/vacancie.model";
import { ClientHTTP } from "@/utils/client-http";

export class VacancieService {
    private httpClient: ClientHTTP;

    constructor(){
        this.httpClient = new ClientHTTP;
    }

    async find(page: number = 0, size: number = 0){
        try {
            const vacancies = this.httpClient.get<IVacanciesResponse>(`vacants?page=${page}&size=${size}`);
            return vacancies;

        } catch (error) {
            console.log(error);
            throw error;   
        }
    }

    async create(body: ICreateVacancie) {
        try {
            const newVacancie = this.httpClient.post<IVacanciesResponse, ICreateVacancie>('vacants', body);
            return newVacancie;
        } catch (error) {
            console.log(error);
        }
    }




} 