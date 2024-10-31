"use client";
import React, { useState } from 'react';
import Card from '@/components/molecules/card/Card';
import styles from './card-page.module.scss';
import { IVacancy, IVacanciesResponse } from '@/models/vacancie.model';
import { VacancieService } from '@/services/vacancie.service';
import { useRouter } from 'next/navigation';
import Head from '../header/Header';
import ButtonAdd from '@/components/molecules/button-add/ButtonAdd';
import Paragraph from '@/components/atoms/Paragraph';
import PaginationVacancie from '../paginations/Pagination-vacancie';

interface IProps {
    data: IVacanciesResponse;
}

const CardVacancies: React.FC<IProps> = ({ data }) => {
    const [vacancieToEdit, setVacantToEdit] = useState<IVacancy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const vacancieService = new VacancieService();
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEdit = (vacancie: IVacancy) => {
        setVacantToEdit(vacancie);
        openModal();
    };

    const handleDelete = async (id: number) => { 
        try {
            await vacancieService.destroy(id);
            router.refresh();
        } catch (error) {
            console.error("Error al eliminar la vacante:", error);
        }
    };

    return (
        <>
            <Head
                title="Vacantes"
                vacantToEdit={vacancieToEdit}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            >
                <ButtonAdd
                    text='Agregar vacante'
                    onClick={() => {
                        setVacantToEdit(null);
                        openModal();
                    }}
                />
            </Head>

            <div className={styles.cardsContainer}>
                {data.content.map((vacant) => (
                    <Card
                    key={vacant.id}
                    onDelete={() => handleDelete(vacant.id)}
                    onEdit={() => handleEdit(vacant)}
                    title={vacant.title} 
                >
                    <Paragraph>{vacant.description}</Paragraph>
                    <Paragraph>Estado: {vacant.status}</Paragraph> 
                    <Paragraph>Compañía: {vacant.company?.name}</Paragraph>
                </Card>
                ))}
                <div className={styles.containerPagination}>
                    <PaginationVacancie data={data} />
                </div>
            </div>
        </>
    );
};

export default CardVacancies;
