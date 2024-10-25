"use client"
import Card from '@/components/molecules/card/Card';
import styles from '../card-vacancies/card-page.module.scss';

const CompaniesCard: React.FC = () => {
    const handleEdit = () => {
        console.log('Compañía actualizada');
    };

    const handleDelete = () => {
        console.log('Compañía eliminada');
    };

    return (
        <div className={styles.cardsContainer}>
            <Card title="Compañía" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Detalle de la compañía 1</p>
                <p>Más detalles sobre la compañía...</p>
            </Card>
            <Card title="Compañía" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Detalle de la compañía 1</p>
                <p>Más detalles sobre la compañía...</p>
            </Card>
            <Card title="Compañía" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Detalle de la compañía 1</p>
                <p>Más detalles sobre la compañía...</p>
            </Card>
            <Card title="Compañía" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Detalle de la compañía 1</p>
                <p>Más detalles sobre la compañía...</p>
            </Card>
        </div>
    );
};

export default CompaniesCard;
