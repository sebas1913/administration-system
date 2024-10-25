"use client";
import React, { useState, ReactElement } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';
import Title from '@/components/atoms/Title';
import Modal from '../modal/Modal';
import FormVacancies from '../form-vacancies/Form-vacancies';
import FormCompanies from '../form-companies/Form-companies';

interface HeaderProps {
    children: ReactElement<{ onClick?: () => void }>;
    title: string;
}

const Head: React.FC<HeaderProps> = ({ children, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const renderForm = () => {
        if (pathname === '/vacancies') {
            return (
                <FormVacancies />
            );
        } else if (pathname === '/companies') {
            return (
                <FormCompanies />
            );
        }
        return null;
    };

    return (
        <div className={styles.headContainer}>
            <div>
                <Title level={2} className={styles.title}>{title}</Title>
            </div>
            <div>
                {React.isValidElement(children) && React.cloneElement(children, { onClick: openModal })}
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
