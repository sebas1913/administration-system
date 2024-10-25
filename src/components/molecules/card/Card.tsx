import { usePathname } from 'next/navigation';
import styles from './Card.module.scss';
import Button from '@/components/atoms/button/Button';
import { icons } from '@/components/atoms/Icons';
import Title from '@/components/atoms/Title';

interface CardProps {
    title: string;
    onEdit: () => void;
    onDelete: () => void;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, onEdit, onDelete, children }) => {
    const pathname = usePathname();

    const getButtonColor = () => {
        if (pathname === '/vacancies') {
            return styles.buttonVacancies;
        } else if (pathname === '/companies') {
            return styles.buttonCompanies;
        }
        return '';
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <Title level={2}>{title}</Title>
                <div className={styles.content}>
                    {children}
                </div>
            </div>

            <div className={styles.actions}>
                <Button onClick={onEdit} className={`${styles.editButton} ${getButtonColor()}`}>{icons.edit}</Button>
                <Button onClick={onDelete} className={styles.deleteButton}>{icons.delete}</Button>
            </div>
        </div>
    );
};

export default Card;
