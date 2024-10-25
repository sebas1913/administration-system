import React from 'react';
import Head from '@/components/organism/header/Header';
import ButtonAdd from '@/components/molecules/button-add/ButtonAdd';
import CardCompanies from '@/components/organism/cards-page/Card-companies';

function page() {
    return (
        <>
            <Head title='Compañías'>
                <ButtonAdd text='Agregar compañía'></ButtonAdd>
            </Head>
            <CardCompanies />
        </>
    )
}

export default page;
