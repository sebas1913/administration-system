"use client";
import React, { useState } from 'react';
import Card from '@/components/molecules/card/Card';
import styles from './card-page.module.scss';
import { ICreateVacancie, IVacanciesResponse } from '@/models/vacancie.model';
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
    const [vacancieToEdit, setVacantToEdit] = useState<ICreateVacancie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const vacancieService = new VacancieService();
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEdit = (vacancie: ICreateVacancie) => {
        setVacantToEdit(vacancie)
        openModal();
    };

    const handleDelete = () => {
        console.log('Eliminado');

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
                        onDelete={handleDelete}
                        title={vacant.title}>
                        <Paragraph>{vacant.description}</Paragraph>
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
