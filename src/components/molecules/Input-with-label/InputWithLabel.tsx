import React from 'react';
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
    return (
        <div className={styles.inputField}>
            <Label className={styles.label} {...labelProps} />
            <Input className={styles.input} {...inputProps} />
        </div>
    );
};

export default InputWithLabel;
