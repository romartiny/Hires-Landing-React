import React from 'react';
import {contactsData} from "../../../../constants/homeData";
import {Link} from "react-router-dom";

const ContactsBlocks = () => {
    return (
        <div className="flex justify-around flex-col md:flex-row pt-7">
            <div
                className="group flex-1 min-w-0 py-7 px-7 border border-gray-300 drop-shadow-xl rounded-3xl hover:bg-white transition duration-300">
                <h3 className="text-2xl text-white font-medium group-hover:text-black transition duration-300 cursor-default">{contactsData.contacts.connect.title}</h3>
                <div className="flex flex-col pt-3">
                    <Link to={contactsData.contacts.connect.telegram.link} target="_blank"
                          rel="noopener noreferrer"
                          className="w-max text-sm text-white group-hover:text-black duration-300">{contactsData.contacts.connect.telegram.title}</Link>
                    <Link to={contactsData.contacts.connect.whatsapp.link} target="_blank"
                          rel="noopener noreferrer"
                          className="w-max text-sm pt-2 text-white group-hover:text-black duration-300">{contactsData.contacts.connect.whatsapp.title}</Link>
                    <Link to={contactsData.contacts.connect.phone.link} target="_blank"
                          rel="noopener noreferrer"
                          className="w-max text-sm pt-2 text-white group-hover:text-black duration-300">{contactsData.contacts.connect.phone.title}</Link>
                </div>
            </div>
            <div
                className="group flex-1 min-w-0 py-7 px-7 border mx-0 my-5 md:mx-8 md:my-0 border-gray-300 drop-shadow-xl rounded-3xl hover:bg-white transition duration-300">
                <h3 className="text-2xl text-white font-medium group-hover:text-black transition duration-300 cursor-default">{contactsData.contacts.social.title}</h3>
                <div className="flex flex-col pt-3">
                    <Link to={contactsData.contacts.social.vk.link} target="_blank" rel="noopener noreferrer"
                          className="w-max text-sm text-white group-hover:text-black duration-300">{contactsData.contacts.social.vk.title}</Link>
                    <Link to={contactsData.contacts.social.telegram.link} target="_blank"
                          rel="noopener noreferrer"
                          className="w-max text-sm pt-2 text-white group-hover:text-black duration-300">{contactsData.contacts.social.telegram.title}</Link>
                </div>
            </div>
            <div
                className="group flex-1 min-w-0 py-7 px-7 border border-gray-300 drop-shadow-xl rounded-3xl hover:bg-white transition duration-300">
                <h3 className="text-2xl text-white font-medium group-hover:text-black transition duration-300 cursor-default">{contactsData.contacts.address.title}</h3>
                <div className="flex flex-col pt-3">
                            <span
                                className="w-max text-sm pt-2 text-white group-hover:text-black duration-300 cursor-default">{contactsData.contacts.address.add.time}</span>
                    <Link to={contactsData.contacts.address.add.link} target="_blank" rel="noopener noreferrer"
                          className="text-sm pt-2 text-white group-hover:text-black duration-300">{contactsData.contacts.address.add.road}</Link>
                </div>
            </div>
        </div>
    );
};

export default ContactsBlocks;