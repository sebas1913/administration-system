"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ICompany, ICreateCompany } from '@/models/companie.model';
import { CompanyService } from '@/services/company.service';
import FormBase from '@/components/molecules/form/Form';
import styles from '../form-vacancies/form.module.scss';

interface IProps {
    companyEdit?: ICompany | null;
    companyCreat: boolean;
    closeModal: () => void;
}

const FormCompanies: React.FC<IProps> = ({ closeModal, companyEdit }) => {
    const router = useRouter();
    const companyService = new CompanyService();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        if (companyEdit) {
            setName(companyEdit.name);
            setLocation(companyEdit.location);
            setContact(companyEdit.contact);
        } else{
            setName('');
            setLocation('');
            setContact('');
        }
    }, [companyEdit])

    const handleSubmit = async (data: ICreateCompany) => {

        if (companyEdit) {
            await companyService.put(companyEdit.id, data)
        }else{
            await companyService.create(data);
        }

        setName('');
        setLocation('');
        setContact('');

        closeModal();
        router.refresh();
    };

    const fields = [
        {
            labelProps: { htmlFor: 'name', children: 'Nombre' },
            inputProps: { id: 'name', type: 'text', name: 'name', value: name, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value) }
        },
        {
            labelProps: { htmlFor: 'location', children: 'Ubicación' },
            inputProps: { id: 'location', type: 'text', name: 'location', value: location, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value) }
        },
        {
            labelProps: { htmlFor: 'contact', children: 'Contacto' },
            inputProps: { id: 'contact', type: 'text', name: 'contact', value: contact, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value) }
        }
    ];

    return (
        <FormBase
            classname={styles.form}
            title='Agregar compañía'
            fields={fields}
            onSubmit={handleSubmit}
            submitButtonText='Agregar Compañía'
        />
    );
};

export default FormCompanies;
