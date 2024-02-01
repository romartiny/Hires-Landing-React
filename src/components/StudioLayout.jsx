import React from 'react';
import {Outlet} from "react-router-dom";

const StudioLayout = () => {
    return (
        <div className="bg-black">
            <Outlet/>
        </div>

    );
};

export default StudioLayout;