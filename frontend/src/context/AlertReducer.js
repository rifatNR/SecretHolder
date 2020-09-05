export const alertReducer = (state, action) => {
    switch(action.type){
        case "SET_ALERT":
            return {
                ...state,
                alerts: [...state.alerts, action.payload]
            }
        case "REMOVE_ALERT":
            return {
                ...state,
                alerts: state.alerts.filter((i) => i.id !== action.payload)
            }
        default:
            return state
    }
}