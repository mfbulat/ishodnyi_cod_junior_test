export  type AppType = {
   showEventList: boolean
}

const initialState: AppType = {
    showEventList: true
}

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case "SHOW-HIDE-EVENT":
           return {...state, showEventList: action.showEvent}
        default:
            return state
    }
}

export const showHideEvent = (showEvent: boolean) =>{
    return ({type: 'SHOW-HIDE-EVENT', showEvent} as const)
}

type ActionsType =
    | ReturnType<typeof showHideEvent>



