import { ICreateCompany, IGetCompanyResponse } from "@/models/companie.model";
import { ICompany } from "@/models/companie.model";
import { ClientHTTP } from "@/utils/client-http";

export class CompanyService {
    private httpClient: ClientHTTP;

    constructor() {
        this.httpClient = new ClientHTTP();
    }

    async find(page: number = 0, size: number = 0): Promise<IGetCompanyResponse> {
        try {
            const response = await this.httpClient.get<IGetCompanyResponse>(`company?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async findAll(): Promise<ICompany[]> {
        try {
            const companies = await this.httpClient.get<ICompany[]>('company/all');
            return companies;
        } catch (error) {
            console.error("Error al obtener las compañías:", error);
            throw error;
        }
    }

    async create(body: ICreateCompany) {
        try {
            const newCompany = this.httpClient.post<IGetCompanyResponse, ICreateCompany>('company', body);
            return newCompany;
        } catch (error) {
            console.log(error);

        }
    }

    async put(id: string, body: ICreateCompany) {
		try {
			const coders = this.httpClient.put<ICompany, ICreateCompany>(`company/${id}`, body);
			return coders;

		} catch (error) {
			console.log(error);
			throw error;
		}
	}
    

    async destroy(id: string){
        try {
            const company =  await this.httpClient.delete(`company/${id}`);
            return company;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}
