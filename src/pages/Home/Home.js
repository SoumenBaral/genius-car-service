import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Baner from './Banar/Baner';
import Experts from './Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <Baner></Baner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;