import React from 'react';
import style from "./Header.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {EType} from "../../state/event-reducer";
import BellIcon from "./../../assets/images/bell-icon.svg"

const Header = () => {

    const iconStyle = {
        backgroundImage: `url(${BellIcon})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const events = useSelector<AppRootStateType, Array<EType>>(state => state.even)

    const getReadEventsCount = () => {
        let readEventsCount = 0
        events.forEach(el => !el.isRead && (readEventsCount += 1))
        return readEventsCount
    }

    return (
        <div className={style.header}>
            <div className={style.iconBlock} style={iconStyle}>
                {getReadEventsCount() > 0 &&
                <div className={style.newEventsCount}>
                    <span>{getReadEventsCount()}</span>
                </div>}
            </div>

        </div>
    );
};

export default Header;