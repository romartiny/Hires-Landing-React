import React from 'react';
import {Outlet} from "react-router-dom";

const StudioLayout = () => {
    return (
        <div className="awomy-container max-h-max overflow-y-scroll">
            <Outlet/>
        </div>
    );
};

export default StudioLayout;