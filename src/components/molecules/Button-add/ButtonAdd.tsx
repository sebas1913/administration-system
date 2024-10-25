"use client";
import { usePathname } from 'next/navigation';
import Button from "@/components/atoms/button/Button";
import styles from './ButtonAdd.module.scss';
import { icons } from "@/components/atoms/Icons";

interface ButtonAddProps {
    text: string;
    onClick?: () => void; 
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ text, onClick }) => {
    const pathname = usePathname();

    const isVacancies = pathname === '/vacancies';
    const isCompanies = pathname === '/companies';

    return (
        <Button className={`${styles.button} ${isVacancies ? styles.activeVacancies : ''} ${isCompanies ? styles.activeCompanies : ''}`} onClick={onClick}>
            {icons.add}{text}
        </Button>
    );
}
6
export default ButtonAdd;
