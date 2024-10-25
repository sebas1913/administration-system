import { usePathname } from 'next/navigation';
import styles from './SelectWithLabel.module.scss';
import Label, { LabelProps } from '@/components/atoms/Label';
import Select, { SelectProps } from '@/components/atoms/Select';
import React from 'react';

interface SelectWhithLabelProps{
    labelProps: LabelProps;
    selectProps: SelectProps;
}

const SelectWithLabel: React.FC<SelectWhithLabelProps> = ({labelProps, selectProps}) => {
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
        <div className={`${styles.selectField} ${getPathColor()}`}>
            <Label className={styles.label} {...labelProps} />
            <Select className={styles.select} {...selectProps}/>
        </div>
    )
}

export default SelectWithLabel;