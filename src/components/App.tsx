import React from 'react'
import style from './App.module.css'
import EventForm from './AddEventForms/EventForm'
import Header from './Header/Header'
import EventsList from './EventsList/EventsList'


function App() {



    return (
        <div className={style.appContainer}>
            <div className={style.app}>
                <Header/>
                <div className={style.body}>
                    <EventForm/>
                    <EventsList/>
                </div>
            </div>
        </div>

    );
}

export default App;
