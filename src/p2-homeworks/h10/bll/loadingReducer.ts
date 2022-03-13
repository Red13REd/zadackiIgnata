const initState = {
isLoading: false
}

export const loadingReducer = (state = initState, action: loadingAC): {isLoading: boolean} => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type loadingAC = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading:boolean): any => {
    return{
        type:"IS-LOADING",
        isLoading:isLoading,
    } as const
}