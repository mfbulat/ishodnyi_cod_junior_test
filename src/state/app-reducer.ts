export  type AppType = {
    showEventListToggle: boolean
}

const initialState: AppType = {
    showEventListToggle: true,
}

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case 'SHOW-HIDE-EVENT':
            return {...state, showEventListToggle: action.showEvent}
        default:
            return state
    }
}

export const showHideEvent = (showEvent: boolean) => {
    return ({type: 'SHOW-HIDE-EVENT', showEvent} as const)
}

type ActionsType =
    | ReturnType<typeof showHideEvent>



