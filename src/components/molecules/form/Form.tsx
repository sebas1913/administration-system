import React from 'react';
import InputWithLabel from '../Input-with-label/InputWithLabel';
import Title from '../../atoms/Title';
import Button from '@/components/atoms/Button/Button';
import { InputProps } from '@/components/atoms/Input';
import { LabelProps } from '@/components/atoms/Label';
import { usePathname } from 'next/navigation';
import styles from './form.module.scss'

interface FormField {
    labelProps: LabelProps;
    inputProps: InputProps;
}

interface FormBaseProps {
    classname: string;
    title: string;
    fields: FormField[];
    onSubmit: (data: any) => void;
    submitButtonText: string;
}

const FormBase: React.FC<FormBaseProps> = ({ title, fields, onSubmit, submitButtonText, classname }) => {
    const pathname = usePathname();

    const getButtonColor = () => {
        if (pathname === '/vacancies') {
            return styles.buttonVacancies;
        } else if (pathname === '/companies') {
            return styles.buttonCompanies;
        }
        return '';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className={classname}>
            <Title className={styles.title} level={2}>{title}</Title>
            {fields.map((field, index) => (
                <InputWithLabel
                    key={index}
                    labelProps={field.labelProps}
                    inputProps={field.inputProps}
                />
            ))}
            <Button type="submit" className={`${styles.button} ${getButtonColor()}`}>
                {submitButtonText}
            </Button>
        </form>
    );
};

export default FormBase;
