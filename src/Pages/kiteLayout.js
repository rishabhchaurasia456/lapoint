import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const KiteLayout = ({ children, selectedLanguage, setSelectedLanguage }) => {
    return (
        <div>
            <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                <div>{children}</div>
            <Footer selectedLanguage={selectedLanguage} />
        </div>
    );
}

export default KiteLayout;
