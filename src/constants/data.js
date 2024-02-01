import micro from '../app/assets/images/micro.png';
import studio from '../app/assets/images/studio.png'
import color from '../app/assets/images/color.png'

export const mainData = {
    title: 'Hires Studio',
    description: 'Студия подкастов в Санкт-Петербурге',
    buyButton: 'Забронировать',
    buyIframe: 'https://n1025717.yclients.com',
    priceButton: 'Цены',
    telegramLink: 'https://t.me/hiresstud',
    vkLink: 'https://vk.com/hires.studio',
    number: 'tel:+79939731212'
};

export const navigationData = [
    {
        title: 'О нас',
        link: '/about'
    },
    {
        title: 'Аренда студии',
        link: '/studio'
    },
    {
        title: 'Оборудование',
        link: '/equipment'
    },
    {
        title: 'Цены',
        link: '/prices'
    },
    {
        title: 'Контакты',
        link: '/contacts'
    },
];

export const mobileNavigationData = {
    telegram: {
        title: 'Hires Telegram',
        link: 'https://t.me/hiresstud'
    },
    whatsapp: {
        title: 'Hires WhatsApp',
        link: 'https://api.whatsapp.com/send?phone=79939731212'
    },
    phone: {
        title: '+7 (993) 973-12-12',
        link: 'tel:+79939731212'
    }
}

export const podcastsKey = {
    title: 'Подкасты под ключ 🔥',
    description: 'Подкасты набирают все большую популярность и показали себя как эффективный инструмент продвижения бизнеса и экспертности.',
}

export const contactsData = {
    title: 'Наши контакты',
    runMove: {
        title: 'Как пройти',
        link: 'https://www.youtube.com/watch?v=mgaCjo1LAFc'
    },
    driveMove: {
        title: 'Как проехать',
        link: 'https://www.youtube.com/watch?v=30uR3XZfDwI'
    },
    contacts: {
        connect: {
            title: 'Связь',
            telegram: {
                title: 'Hires Telegram',
                link: 'https://t.me/hiresstud'
            },
            whatsapp: {
                title: 'Hires WhatsApp',
                link: 'https://api.whatsapp.com/send?phone=79939731212'
            },
            phone: {
                title: '+7 (993) 973-12-12',
                link: 'tel:+79939731212'
            }
        },
        social: {
            title: 'Соцсети',
            vk: {
                title: 'ВКонтакте',
                link: 'https://vk.com/hires.studio'
            },
            telegram: {
                title: 'Телеграм',
                link: 'https://t.me/hiresst'
            }
        },
        address: {
            title: 'Адрес',
            add: {
                time: 'ПН-ВС 10:00 - 21:00',
                road: 'МОСКОВСКИЙ ПРОСП., 22М, САНКТ-ПЕТЕРБУРГ ЭТАЖ 2, ОФИС 4Н',
                link: 'https://yandex.ru/maps/-/CDuYNKN4'
            }
        }
    }
}

export const clientsData = {
    title: 'Наши услуги',
    allServices: 'Все услуги',
    services: {
        online: {
            title: 'Прямая трансляция',
            description: 'Откройте для себя новое качество прямых трансляций, используя нашу студию подкастов. У нас вы получаете уникальную возможность создавать контент высокого качества для своих прямых эфиров с нашей студией подкастов.',
            video: 'https://www.youtube.com/embed/lSYx-LODN1A?si=jHip650EtfOQYTQy'
        },
        interview: {
            title: 'Запись видео-интервью',
            description: 'Опыт видео-интервью на новом уровне с нашей качечественной студией подкастов. Познавайте уникальные возможности нашей студии и премиальных услуг записи видео для качественных видео-интервью прямо сейчас.',
            video: 'https://www.youtube.com/embed/gxS4uwpi7QQ?si=-3Oiw42GF4oGRg3N'
        },
        podcast: {
            title: 'Запись видео-подкаста',
            description: 'Наша студия предоставляет вам возможность создать нечто уникальное с индивидуальным подходом. Начните свой творческий процесс с нашей студии и оставайтесь впечатляющими в мире видео-контента!',
            video: 'https://www.youtube.com/embed/cHcdBXYnRc4?si=l_wQcrSQqRCBEpSF'
        }
    },
}

export const prosData = {
    title: 'Мы оказываем услуги аренды',
    services: [
        {
            title: 'Студии для записи подкастов',
            image: micro
        },
        {
            title: 'Интерьерных студий',
            image: studio
        },
        {
            title: 'Студии с цветным фоном',
            image: color
        }
    ]
}

export const faqsHome = [
    {
        question: "Подкасты под ключ",
        answer: "Наши услуги охватывают полный цикл – от идеи до готового продукта, обеспечивая вам всё необходимое для успешного подкастинга. Мы создаем идеальное сочетание ваших творческих замыслов и наших профессиональных ресурсов, чтобы достичь высокого качества контента.",
    },
    {
        question: "Создадим концепцию",
        answer: "Наши опытные креативные специалисты помогут вам выработать уникальную концепцию подкаста, отражающую ваш стиль и встречающую интересы вашей аудитории. Мы стремимся сделать ваш подкаст неповторимым и привлекательным для широкой аудитории.",
    },
    {
        question: "Напишем сценарий",
        answer: "Профессиональные сценаристы в нашей команде создадут скрипты, которые не только структурируют ваш контент, но и делают его увлекательным и информативным. Каждый эпизод подкаста станет уникальным и интересным для вашей аудитории.",
    },
    {
        question: "Проведем съемку",
        answer: "Наша современная студия оборудована по последнему слову техники, обеспечивая высококачественные съемки. Мы создаем визуально привлекательный контент, который не только удовлетворяет высоким стандартам, но и подчеркивает уникальность вашего подкаста.",
    },
    {
        question: "Сведем материал",
        answer: "Звукооператоры и звукорежиссеры нашей команды гарантируют высококачественное звучание вашего подкаста, добавляя профессиональности и уровня звукового воспроизведения.",
    },
    {
        question: "Монтируем полноценный подкаст",
        answer: " Наши монтажные специалисты тщательно обрабатывают и монтируют ваш материал, создавая гармоничный и качественный подкаст. Наша цель - предоставить вам готовый продукт, который отличается выдающимся качеством и привлекательностью.",
    },
    {
        question: "Нарежем короткие фрагменты",
        answer: "Наша команда работает над выделением самых захватывающих моментов вашего подкаста, создавая короткие фрагменты, идеально подходящие для продвижения в социальных сетях. Это позволяет эффективно рекламировать ваш контент и привлекать новых слушателей.",
    }
];

export const subfooter = {
    title: 'Hires Studio © 2024',
    creator: 'ИП Меренков Денис Игоревич'
}