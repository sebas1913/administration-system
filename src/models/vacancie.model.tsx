import { ICreateCompany } from "./companie.model";

export interface IVacancy {
    id: number; 
    title: string;
    description: string;
    status: string;
    companyId: string;
    company?: ICreateCompany;
}

export interface IVacanciesResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          IVacancy[]; 
    number:           number;
    sort:             Sort;
}



export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
    offset:     number;
    sort:       Sort;
}

export interface Sort {
    unsorted: boolean;
    sorted:   boolean;
    empty:    boolean;
}
