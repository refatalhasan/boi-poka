import React from 'react';
import HomeBanner from './HomeBanner';
import BooksLists from './BooksLists';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BooksLists></BooksLists>
        </div>
    );
};

export default Home;