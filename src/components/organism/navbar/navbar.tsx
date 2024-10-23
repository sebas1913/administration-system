"use client";
import { usePathname } from 'next/navigation';
import NavLink from "../../atoms/NavLink";
import Input from "../../atoms/Input";
import { icons } from "../../atoms/Icons";
import styles from './navbar.module.scss';

const links = [
    { path: "/vacancies", title: "Vacantes", icon: icons.suitcase },
    { path: "/companies", title: "Compañías", icon: icons.companie },
];

const Navbar: React.FC = () => {
    const pathname = usePathname(); 

    return (
        <nav className={styles.nav}>
            <div className={styles.linksContainer}>
                {links.map((item, key) => {
                    const isActive = pathname === item.path;
                    return (
                        <NavLink
                            key={key}
                            path={item.path}
                            title={item.title}
                            className={`${styles.icon} ${isActive ? (item.path === '/vacancies' ? styles.activeVacancies : styles.activeCompanies) : ''}`}
                            icon={item.icon}
                        />
                    );
                })}
            </div>
            <div className={styles.inputsContainer}>
                {icons.search}
                <Input placeholder="Buscar" className={styles.input} />
            </div>
        </nav>
    );
};

export default Navbar;
