import React from 'react';
import FormBase from '@/components/molecules/form/Form';
import styles from './form.module.scss';

const FormVacancies: React.FC = () => {
    const fields = [
        {
            labelProps: { htmlFor: 'title', children: 'Título' },
            inputProps: { id: 'title', type: 'text', name: 'title' }
        },
        {
            labelProps: { htmlFor: 'description', children: 'Descripción' },
            inputProps: { id: 'description', type: 'text', name: 'description' }
        }
    ];

    const handleSubmit = (data: any) => {
        console.log('Datos del formulario:', data);
    };

    return (
        <FormBase
            classname={styles.form}
            title='Agregar vacante'
            fields={fields}
            onSubmit={handleSubmit}
            submitButtonText="Agregar Vacante"
        />
    );
};

export default FormVacancies;
