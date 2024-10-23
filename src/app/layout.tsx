import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import '../styles/globals.scss';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sistema de Administración",
    description: "Sistema de Administración de Vacantes y compañías",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={raleway.className}>
                {children}
            </body>
        </html>
    );
}
