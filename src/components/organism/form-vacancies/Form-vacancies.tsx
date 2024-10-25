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
            textareaProps: { id: 'description', name: 'description' }
        },
        {
            labelProps: { htmlFor: 'country', children: 'Estado' },
            selectProps: {
                id: 'country',
                name: 'country',
                options: [
                    { label: 'Open', value: 'open' }
                ],
            }
        },
        {
            labelProps: { htmlFor: 'country', children: 'Compañía' },
            selectProps: {
                id: 'country',
                name: 'country',
                options: [
                    { label: 'Selecciona una compañía', value: '' },
                    { label: 'SoftwareONE', value: 'SoftwareONE' }
                ],
            }
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
