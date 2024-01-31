import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectBuy, setBuyOpen} from "../../redux/slices/buySlice";

const Intake = () => {
    const dispatch = useDispatch();
    const {buy} = useSelector(selectBuy);

    const closeBuyMenu = (action) => {
        dispatch(setBuyOpen(action));
    }

    return (
        <>
            {buy && (
                <modal id="hires-buy" className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black z-40">
                    <div className="h-full flex items-center justify-center">
                        <iframe className="w-full h-full" scrolling="yes" allowTransparency="true"
                                id="ms_booking_iframe" src="https://n1025717.yclients.com"></iframe>
                        <button className="absolute flex items-center justify-center w-12 h-12 bg-white bottom-7 rounded-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] z-40" onClick={() => closeBuyMenu(false)}>
                            <div className="w-5 h-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path
                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </modal>
            )}
        </>
    );
};

export default Intake;