import React from 'react';
import Container from "../Container.jsx";
import micro from '../../app/assets/images/micro.jpeg';
import studio from '../../app/assets/images/studio.jpeg'
import color from '../../app/assets/images/color.jpeg'

const Pros = () => {
    return (
        <section id="pros">
            <Container className="py-12 sm:py-16">
                <h2 className="text-3xl font-bold tracking-tight">Мы оказываем услуги аренды</h2>
                <div className="flex pt-12 flex-col md:flex-row">
                    <div className="flex flex-col items-center px-4">
                        <img src={micro ?? undefined} alt="" loading="lazy" className="w-[26rem] h-[20rem] object-cover filter brightness-75 hover:brightness-100 rounded-3xl hover:scale-105 transition duration-500"/>
                        <h3 className="text-xl font-semibold text-center pt-3">Студии для записи подкастов</h3>
                    </div>
                    <div className="flex flex-col items-center px-4 py-5 md:py-0">
                        <img src={studio ?? undefined} alt="" loading="lazy" className="w-[26rem] h-[20rem] object-cover filter brightness-75 hover:brightness-100 rounded-3xl hover:scale-105 transition duration-500"/>
                        <h3 className="text-xl font-semibold text-center pt-3">Интерьерной студии фотосъемки и видео-интервью</h3>
                    </div>
                    <div className="flex flex-col items-center px-4">
                        <img src={color ?? undefined} alt="" loading="lazy" className="w-[26rem] h-[20rem] object-cover filter brightness-75 hover:brightness-100 rounded-3xl hover:scale-105 transition duration-500"/>
                        <h3 className="text-xl font-semibold text-center pt-3">Студии с цветным фоном</h3>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Pros;