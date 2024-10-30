export interface IVacanciesResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          Content[];
    number:           number;
    sort:             Sort;
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface ICreateVacancie {
    title: string;
    description: string;
    status: string;
    companyId: string;
}

export interface Content {
    id:          number;
    title:       string;
    description: string;
    status:      string;
    company:     Company;
}

export interface Company {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
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
