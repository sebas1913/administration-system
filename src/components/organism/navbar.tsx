import NavLink from "../atoms/NavLink";
import { icons } from "../atoms/Icons";

const links = [
    { path: "/vacancies", title: "Vacantes", icon: icons.suitcase },
    { path: "/companies", title: "Compañías", icon: icons.companie }, 
];

const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                {links.map((item, key) => (
                    <NavLink
                        key={key}
                        path={item.path}
                        title={item.title}
                        className=""
                        icon={item.icon}
                    />
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
