export  type EType = {
    id: string,
    title: string,
    date: any,
    isRead: boolean,
}

const initialState: Array<EType> = [

]

export const eventsReducer = (state: Array<EType> = initialState, action: ActionsType): Array<EType> => {
    switch (action.type) {
        case "ADD-EVENT":
            return [{id: '12', title: action.title, date: action.date, isRead: false}, ...state]
        case "READ-ALL-EVENTS":
            return state.map(el=>({...el, isRead: true}))
        case "DELETE-ALL-EVENTS":
            return state=[]
        default:
            return state
    }
}

export const addEvent = (title: string) =>{
    const nowDate = new Date().toString().split(' ').splice(1,4).join(' ')
    return ({type: 'ADD-EVENT', title, date: nowDate} as const)
}


export const readAllEvents = () =>
    ({type: 'READ-ALL-EVENTS'} as const)

export const deleteAllEvents = () =>
    ({type: 'DELETE-ALL-EVENTS'} as const)


type ActionsType =
    | ReturnType<typeof addEvent>
    | ReturnType<typeof readAllEvents>
    | ReturnType<typeof deleteAllEvents>


