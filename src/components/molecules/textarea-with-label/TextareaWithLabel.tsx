import { usePathname } from 'next/navigation';
import styles from './TextareaWithLabel.module.scss';
import Label, { LabelProps } from '@/components/atoms/Label';
import Textarea, { TextAreaProps } from '@/components/atoms/Textarea';
import React from 'react';

interface TextareaWhithLabelProps{
    labelProps: LabelProps;
    textareaProps: TextAreaProps;
}

const TextareaWithLabel: React.FC<TextareaWhithLabelProps> = ({labelProps, textareaProps}) => {
    const pathname = usePathname();

    const getPathColor = () => {
        if (pathname === '/vacancies') {
            return styles.pathVacancies;
        } else if (pathname === '/companies') {
            return styles.pathCompanies;
        }
        return '';
    };

    return(
        <div className={`${styles.textareaField} ${getPathColor()}`}>
            <Label className={styles.label} {...labelProps} />
            <Textarea className={styles.textarea} {...textareaProps}/>
        </div>
    )
}

export default TextareaWithLabel;