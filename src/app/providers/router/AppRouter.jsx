import React, { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLogoLoader} from "../../../components/PageLoader/PageLoader.jsx";
import HomePage from "../../../pages/HomePage.jsx";
import StudioLayout from "../../../components/StudioLayout.jsx";


const routeConfig = {
    main: {
        path: '/',
        element: <HomePage />
    }
};


const AppRouter = () => {
    return (
        <Suspense fallback={<PageLogoLoader/>}>
            <Routes>
                <Route path={'/'} element={<StudioLayout />}>
                    {
                        Object.values(routeConfig).map(({element, path}) => (
                            <Route key={path} path={path} element={
                                <Suspense fallback={<PageLogoLoader />}>
                                    {element}
                                </Suspense>
                            }
                            />
                        ))
                    }
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;