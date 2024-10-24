import React from 'react';
import Head from '@/components/organism/header/Header';
import ButtonAdd from '@/components/molecules/Button-add/ButtonAdd';

function page() {
    return (
        <Head title='Compañías'>
            <ButtonAdd text='Agregar compañía'></ButtonAdd>
        </Head>
    )
}

export default page;
