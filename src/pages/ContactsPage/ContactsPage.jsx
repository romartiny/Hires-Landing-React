import React from 'react';
import Header from "../../components/Header/Header.jsx";
import ContactsBlock from "../../components/PagesComponents/Contacts/ContactsBlock.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Subfooter from "../../components/Subfooter/Subfooter.jsx";

const ContactsPage = () => {
    return (
        <>
            <Header classNames={'relative bg-black'}/>
            <ContactsBlock />
            <Footer />
            <Subfooter />
        </>
    );
};

export default ContactsPage;