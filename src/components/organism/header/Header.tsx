"use client";
import React, { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import Title from '@/components/atoms/Title';
import Modal from '../modal/Modal';
import FormVacancies from '../form-vacancies/Form-vacancies';
import FormCompanies from '../form-companies/Form-companies';
import { ICompany } from '@/models/companie.model';
import { ICreateVacancie } from '@/models/vacancie.model';

interface HeaderProps {
    children: ReactElement<{ onClick?: () => void }>;
    title: string;
    companyToEdit?: ICompany | null;
    vacantToEdit?: ICreateVacancie | null;
    isModalOpen: boolean;    
    closeModal: () => void;  
}

const Head: React.FC<HeaderProps> = ({ children, vacantToEdit, title, companyToEdit, isModalOpen, closeModal }) => { 
    const pathname = usePathname();

    const renderForm = () => {
        if (pathname === '/vacancies') {
            return <FormVacancies closeModal={closeModal} />;
        } else if (pathname === '/companies') {
            return <FormCompanies closeModal={closeModal} companyEdit={companyToEdit} companyCreat={!companyToEdit} />; 
        }
        return null;
    };

    return (
        <div className={styles.headContainer}>
            <div>
                <Title level={2} className={styles.title}>{title}</Title>
            </div>
            <div>
                {children}
            </div>
            {isModalOpen && (
                <Modal isVisible={isModalOpen} onClose={closeModal}>
                    {renderForm()}
                </Modal>
            )}
        </div>
    );
};

export default Head;
