import React from 'react';
import Head from '@/components/organism/header/Header';
import ButtonAdd from '@/components/molecules/button-add/ButtonAdd';
import CardVacancies from '@/components/organism/card-vacancies/card-vacancies';

function Page() {
    return (
        <>
            <Head title="Vacantes">
                <ButtonAdd text="Agregar vacantes" />
            </Head>
            <CardVacancies />
        </>
    );
}

export default Page;
