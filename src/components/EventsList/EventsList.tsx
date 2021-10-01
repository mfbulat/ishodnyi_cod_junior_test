import React, from 'react';
import style from "./EventsList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {EType} from "../../state/event-reducer";
import {showHideEvent} from "../../state/app-reducer";
import {CSSTransition} from "react-transition-group";
import "./event-list-styles.css"

const EventsList = () => {
    const events = useSelector<AppRootStateType, Array<EType>>(state => state.even)
    const showEventList = useSelector<AppRootStateType, any>(state => state.app.showEventList)

    const dispatch = useDispatch()

    const getFirstFourEvents = () => {
        const eventsCopy = [...events]
        eventsCopy.length = 5
        return eventsCopy
    }

    const showAllEvents = () => {
        dispatch(showHideEvent(false))
    }

    return (
        <div className={style.eventsListContainer}>
            <CSSTransition
                in={showEventList}
                timeout={2000}
                classNames="alert"
                unmountOnExit
            >
                <div className={style.eventsListWrapper}>
                    <div className={style.eventsList}>
                        {getFirstFourEvents().map((el, id) => {
                            return (
                                <div className={style.eventBlock} key={id}>
                                    <span className={style.tittle}>{el.title}</span>
                                    <span className={style.date}>{el.date}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <span onClick={showAllEvents} className={style.showAllEvents}>посмотреть все...</span>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default EventsList;