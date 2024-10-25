import { usePathname } from 'next/navigation';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import styles from './InputWithLabel.module.scss';
import { LabelProps } from '@/components/atoms/Label';
import { InputProps } from '@/components/atoms/Input';

interface InputWithLabelProps {
    labelProps: LabelProps;
    inputProps: InputProps;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ labelProps, inputProps }) => {
    const pathname = usePathname();

    const getPathColor = () => {
        if (pathname === '/vacancies') {
            return styles.pathVacancies;
        } else if (pathname === '/companies') {
            return styles.pathCompanies;
        }
        return '';
    };

    return (
        <div className={`${styles.inputField} ${getPathColor()}`}>
            <Label className={styles.label} {...labelProps} />
            <Input className={styles.input} {...inputProps} />
        </div>
    );
};

export default InputWithLabel;
