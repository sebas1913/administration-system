import React from 'react';
import CardVacancies from '@/components/organism/cards-page/Card-vacancies';
import { VacancieService } from '@/services/vacancie.service';

interface IProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    }
}

export const generateMetadata = async ({ searchParams}: IProps)=> {
    const page = searchParams.page ?? 1;
    return {
      title: `Vacantes página ${page}`,
      description: 'Gestión de vacantes'
    }
  }

async function Page({ searchParams }: IProps) {
    const vacancieService = new VacancieService();
    const page = searchParams.page ? parseInt(searchParams.page) : 0;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;
    const data = await vacancieService.find(page, size);

    return (
        <>
            <CardVacancies data={data}/>
        </>
    );
}

export default Page;
