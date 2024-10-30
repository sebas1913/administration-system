import React from 'react';
import CardCompanies from '@/components/organism/cards-page/Card-companies';
import { CompanyService } from '@/services/company.service';

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
      title: `Companías página ${page}`,
      description: 'Gestion de compañias'
    }
  }

  async function page({ searchParams }: IProps) {
    const companyService = new CompanyService();
    const page = searchParams.page ? parseInt(searchParams.page) : 0;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;
    const data = await companyService.find(page, size);

    return (
        <>
            <CardCompanies data={data} />
        </>
    );
}


export default page;
