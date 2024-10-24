import React from 'react';
import Head from '@/components/organism/header/Header';
import ButtonAdd from '@/components/molecules/Button-add/ButtonAdd';

function Page() {
    return (
        <Head title="Vacantes">
            <ButtonAdd text="Agregar vacantes" />
        </Head>
    );
}

export default Page;
