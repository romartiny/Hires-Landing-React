import React, { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from "../../../components/PageLoader/PageLoader.jsx";
import StudioLayout from "../../../components/StudioLayout.jsx";
import {routeConfig} from "../../../constants/routerConfig";
import {IntakeAsync} from "../../../components/Intake/Intake.async";

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                <Route path={'/'} element={<StudioLayout />}>
                    {
                        Object.values(routeConfig).map(({element, path}) => (
                            <Route key={path} path={path} element={
                                <Suspense fallback={<PageLoader />}>
                                    {element}
                                </Suspense>
                            }
                            />
                        ))
                    }
                </Route>
            </Routes>
            <IntakeAsync />
        </Suspense>
    );
};

export default AppRouter;