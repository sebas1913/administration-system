"use client";
import React, { useEffect, useState } from 'react';
import FormBase from '@/components/molecules/form/Form';
import styles from './form.module.scss';
import { IVacancy } from '@/models/vacancie.model'; // Importa la interfaz IVacancy
import { useRouter } from 'next/navigation';
import { CompanyService } from '@/services/company.service';
import { VacancieService } from '@/services/vacancie.service';

interface IProps {
    vacancieEdit?: IVacancy | null; // Cambia ICreateVacancie a IVacancy
    closeModal: () => void;
}

const FormVacancies: React.FC<IProps> = ({ vacancieEdit, closeModal }) => {
    const router = useRouter();
    const vacancieService = new VacancieService();
    const companyService = new CompanyService();

    const [companies, setCompanies] = useState<{ id: string; name: string }[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('ACTIVE');
    const [companyId, setCompanyId] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await companyService.findAll();
                setCompanies(response.map(company => ({ id: company.id, name: company.name })));
            } catch (error) {
                console.error("Error al cargar las compañías:", error);
            }
        };
        fetchCompanies();

        if (vacancieEdit) {
            setTitle(vacancieEdit.title);
            setDescription(vacancieEdit.description);
            setStatus(vacancieEdit.status);
            setCompanyId(vacancieEdit.companyId);
        } else {
            setTitle('');
            setDescription('');
            setStatus('ACTIVE');
            setCompanyId('');
        }
    }, [vacancieEdit]);

    const handleSubmit = async () => {
        const data: IVacancy = { id: vacancieEdit?.id || 0, title, description, status, companyId };

        try {
            if (vacancieEdit) {
                await vacancieService.put(vacancieEdit.id, data);
            } else {
                await vacancieService.create(data);
            }
            closeModal();
            router.refresh();
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    const fields = [
        {
            labelProps: { htmlFor: 'title', children: 'Título' },
            inputProps: {
                id: 'title',
                type: 'text',
                name: 'title',
                value: title,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
            }
        },
        {
            labelProps: { htmlFor: 'description', children: 'Descripción' },
            textareaProps: {
                id: 'description',
                name: 'description',
                value: description,
                onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)
            }
        },
        {
            labelProps: { htmlFor: 'state', children: 'Estado' },
            selectProps: {
                id: 'state',
                name: 'state',
                value: status,
                onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value),
                options: [
                    { label: 'Activo', value: 'ACTIVE' },
                    { label: 'Inactivo', value: 'INACTIVE' }
                ]
            }
        },
        {
            labelProps: { htmlFor: 'company', children: 'Compañía' },
            selectProps: {
                id: 'company',
                name: 'company',
                value: companyId,
                onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setCompanyId(e.target.value),
                options: [
                    { label: 'Selecciona una compañía', value: '' },
                    ...companies.map(c => ({ label: c.name, value: c.id }))
                ]
            }
        },
    ];

    return (
        <FormBase
            classname={styles.form}
            title='Agregar vacante'
            fields={fields}
            onSubmit={handleSubmit}
            submitButtonText='Agregar vacante'
        />
    );
};

export default FormVacancies;
