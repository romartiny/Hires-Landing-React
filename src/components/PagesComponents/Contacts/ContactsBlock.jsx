import React from 'react';
import {contactsData} from "../../../constants/homeData";
import Container from "../../Container.jsx";
import {Link} from "react-router-dom";
import ContactsBlocks from "../Home/Contacts/ContactsBlocks.jsx";

const ContactsBlock = () => {
    return (
        <section id="contacts" className="bg-black">
            <Container className="py-12 sm:py-16">
                <h2 className="text-3xl font-bold text-white tracking-tight text-center">Контакты</h2>
                <div className="flex justify-center items-center pt-8 pb-7 md:mt0">
                    <Link to={contactsData.runMove.link} target="_blank" rel="noopener noreferrer"
                          className="text-white border rounded-3xl px-5 py-2 ml-0 hover:bg-white hover:text-black transition duration-300">{contactsData.runMove.title}</Link>
                    <Link to={contactsData.driveMove.link} target="_blank" rel="noopener noreferrer"
                          className="text-white border rounded-3xl px-5 py-2 ml-5 hover:bg-white hover:text-black transition duration-300">{contactsData.driveMove.title}</Link>
                </div>
                <div className="relative h-[26rem] w-full">
                    <iframe
                        src={contactsData.mapLink}
                        title={contactsData.title}
                        width="560"
                        style={{width: '100%', height: '100%'}}
                        className="rounded-3xl"
                    ></iframe>
                </div>
                <ContactsBlocks />
            </Container>
        </section>
    );
};

export default ContactsBlock;