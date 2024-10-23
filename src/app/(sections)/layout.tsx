import { ReactNode } from 'react';
import Title from '@/components/atoms/Title';
import Navbar from '@/components/organism/navbar';
import styles from './layout.module.scss'; 

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layoutContainer}>
            <Title className={styles.title} level={1}>Panel de administración</Title>
            <Navbar></Navbar>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
