import { IVacancy, IVacanciesResponse } from "@/models/vacancie.model";
import { ClientHTTP } from "@/utils/client-http";

export class VacancieService {
    private httpClient: ClientHTTP;

    constructor() {
        this.httpClient = new ClientHTTP();
    }

    async find(page: number = 0, size: number = 0) {
        try {
            const vacancies = await this.httpClient.get<IVacanciesResponse>(`vacants?page=${page}&size=${size}`);
            return vacancies;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async create(body: IVacancy) {
        try {
            const newVacancie = await this.httpClient.post<IVacanciesResponse, IVacancy>('vacants', body);
            return newVacancie;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async put(id: number, body: IVacancy) {
        try {
            const updatedVacancie = await this.httpClient.put<IVacanciesResponse, IVacancy>(`vacants/${id}`, body);
            return updatedVacancie;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id: number) {
        try {
            await this.httpClient.delete(`vacants/${id}`);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
