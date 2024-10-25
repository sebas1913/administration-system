"use client";
import React from 'react';
import Card from '@/components/molecules/card/Card';
import styles from './card-page.module.scss';

const CardVacancies: React.FC = () => {
    const handleEdit = () => {
        console.log('Actualizado');
    };

    const handleDelete = () => {
        console.log('Eliminado');

    };

    return (
        <div className={styles.cardsContainer}>
            <Card title="Vacante" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Infoo</p>
                <p>Descripcioooon</p>
            </Card>
            <Card title="Vacante" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Infoo</p>
                <p>Descripcioooon</p>
            </Card>
            <Card title="Vacante" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Infoo</p>
                <p>Descripcioooon</p>
            </Card>
            <Card title="Vacante" onEdit={handleEdit} onDelete={handleDelete}>
                <p>Infoo</p>
                <p>Descripcioooon</p>
            </Card>
        </div>
    );
};

export default CardVacancies;
