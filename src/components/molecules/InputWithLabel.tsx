import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import styles from './InputWithLabel.module.scss';

const InputWithLabel: React.FC = () => {
    return (
        <div className={styles.inputField}>
            <Label className={styles.label}>Hola</Label>
            <Input className={styles.input}/>
        </div>
    );
};

export default InputWithLabel;
