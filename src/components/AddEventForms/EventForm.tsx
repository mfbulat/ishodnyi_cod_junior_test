import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addEvent, deleteAllEvents, EType, readAllEvents} from '../../state/event-reducer'
import {AppRootStateType} from '../../state/store'
import style from './EventForm.module.css'
import {showHideEvent} from '../../state/app-reducer'

const EventForm = () => {
    const [eventTitle, setEventTitle] = useState('')
    const events = useSelector<AppRootStateType, Array<EType>>(state => state.even)
    const showEventListToggle = useSelector<AppRootStateType, any>(state => state.app.showEventListToggle)
    const [count, setCount] = useState(events.length + 1)
    const dispatch = useDispatch()

    useEffect(() => {
        const id = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 3000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        dispatch(addEvent(`Новое событие ${count}`))
    }, [count])

    const handleSubmit = (event: React.SyntheticEvent | React.KeyboardEvent) => {
        eventTitle !== '' &&
        dispatch(addEvent(eventTitle))
        event.preventDefault()
        event.stopPropagation()
        setEventTitle('')
    }

    const onReadAllEvents = () => {
        dispatch(readAllEvents())
    }

    const onRemoveAllEvents = () => {
        dispatch(deleteAllEvents())
    }

    const onShowHideEventList = () => {
        dispatch(showHideEvent(!showEventListToggle))
    }

    const onKeyPressHandler = (e: React.KeyboardEvent) => {
        e.key === 'Enter' && handleSubmit(e)
    }

    return (
        <div className={style.eFormContainer}>
            <div className={style.eForm}>
                <form onSubmit={handleSubmit} className={style.formItem}>
                    <input
                        type='text'
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        onKeyPress={onKeyPressHandler}
                    />
                    <button type={'submit'}>Отправить</button>
                </form>
                <button className={style.formItem} onClick={onReadAllEvents}>Пометить все события прочитанными</button>
                <button className={style.formItem} onClick={onRemoveAllEvents}>Удалить все события</button>
                <button className={style.formItem} onClick={onShowHideEventList}>
                    {!showEventListToggle ? 'Показать попап нотификаций' : 'Скрыть попап нотификаций'}
                </button>
            </div>
        </div>
    );
};

export default EventForm;