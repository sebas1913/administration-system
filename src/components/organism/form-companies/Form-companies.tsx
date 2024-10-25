import FormBase from '@/components/molecules/form/Form';
import styles from '../form-vacancies/form.module.scss';

const FormCompanies: React.FC = () => {
    const fields = [
        {
            labelProps: { htmlFor: 'name', children: 'Nombre' },
            inputProps: { id: 'name', type: 'text', name: 'name' }
        },
        {
            labelProps: { htmlFor: 'ubication', children: 'Ubicación' },
            inputProps: { id: 'ubication', type: 'text', name: 'ubication' }
        },
        {
            labelProps: { htmlFor: 'contact', children: 'Contacto' },
            inputProps: { id: 'contact', type: 'text', name: 'contact' }
        }
    ];

    const handleSubmit = (data: any) => {
        console.log('Datos del formulario:', data);
    };

    return (
        <FormBase
            classname={styles.form}
            title='Agregar compañía'
            fields={fields}
            onSubmit={handleSubmit}
            submitButtonText="Agregar Vacante"
        />
    );
};

export default FormCompanies;
