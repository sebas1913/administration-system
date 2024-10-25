import React, { ReactNode } from 'react';
import styles from './modal.module.scss';
import Button from '../../atoms/button/Button';
import { icons } from '@/components/atoms/Icons';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={styles.modalContainer}
            onClick={handleOutsideClick}
            aria-hidden={!isVisible}
            role="dialog"
            aria-labelledby="modalTitle" // Le asiganos el id a 'modalTitle' al título del modal para lectores de pantalla
        >
            <div className={styles.modalContent}>
                <div className={styles.containerButton}>
                    <Button className={styles.closeButton} onClick={onClose}>
                        {icons.close}
                    </Button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
