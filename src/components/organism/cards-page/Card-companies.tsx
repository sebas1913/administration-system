"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from '@/components/molecules/card/Card';
import styles from './card-page.module.scss';
import Paragraph from '@/components/atoms/Paragraph';
import { ICompany, IGetCompanyResponse } from '@/models/companie.model';
import { CompanyService } from '@/services/company.service';
import PaginationCompany from '../paginations/Pagination-company';
import Head from "../header/Header";
import ButtonAdd from "@/components/molecules/button-add/ButtonAdd";

interface IProps {
    data: IGetCompanyResponse;
}

const CompaniesCard: React.FC<IProps> = ({ data }) => {
    const [companyToEdit, setCompanyToEdit] = useState<ICompany | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const companyService = new CompanyService();
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEdit = (company: ICompany) => {
        setCompanyToEdit(company);
        openModal();
    };

    const handleDelete = (id: string) => async () => {
        await companyService.destroy(id);
        router.refresh();
    };

    return (
        <>
            <Head
                title="Compañías"
                companyToEdit={companyToEdit}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            >

                <ButtonAdd
                    text='Agregar compañía'
                    onClick={() => {
                        setCompanyToEdit(null);
                        openModal();
                    }}
                />
            </Head>


            <div className={styles.cardsContainer}>
                {data.content.map((company) => (
                    <Card
                        key={company.id}
                        onDelete={handleDelete(company.id)}
                        onEdit={() => handleEdit(company)}
                        title={company.name}
                    >
                        <Paragraph classname={styles.paragraph}>{company.location}</Paragraph>
                        <Paragraph classname={styles.paragraph}>Contacto: {company.contact}</Paragraph>
                    </Card>
                ))}
                <div className={styles.containerPagination}>
                    <PaginationCompany data={data} />
                </div>
            </div>


        </>
    );
};

export default CompaniesCard;
