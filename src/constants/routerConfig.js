import {HomePageAsync} from "../pages/HomePage/HomePage.async";
import {AboutUsPageAsync} from "../pages/AboutUsPage/AboutUsPage.async";
import {EquipmentPageAsync} from "../pages/EquipmentPage/EquipmentPage.async";
import {ContactsPageAsync} from "../pages/ContactsPage/ContactsPage.async";
import {PricesPageAsync} from "../pages/PricesPage/PricesPage.async";
import React from "react";

export const routeConfig = {
    main: {
        path: '/',
        element: <HomePageAsync />
    },
    aboutUs: {
        path: '/about',
        element: <AboutUsPageAsync />
    },
    equipment: {
        path: '/equipment',
        element: <EquipmentPageAsync />
    },
    contacts: {
        path: '/contacts',
        element: <ContactsPageAsync />
    },
    prices: {
        path: '/prices',
        element: <PricesPageAsync />
    }
};