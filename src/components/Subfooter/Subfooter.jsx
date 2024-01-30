import React from 'react';
import Container from "../Container.jsx";

const Subfooter = () => {
    return (
        <section id="subfooter" className="bg-black">
            <Container className="flex justify-between items-center flex-col md:flex-row py-4 sm:py-5">
                <span className="text-white text-sm hover:text-white/80 transition duration-300 cursor-default">Hires Studio © 2024</span>
                <span className="text-white text-sm hover:text-white/80 transition duration-300 pt-2 pb-3 md:pt-0 md:pb-0 cursor-default">ИП Меренков Денис Игоревич</span>
            </Container>
        </section>
    );
};

export default Subfooter;