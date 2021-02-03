
// constantes
const InitialState = {
    array: [],
    
}

//types
const MOSTRAR_TABLA = 'MOSTRAR_TABLA';
const AGREGAR_DATA = 'AGREGAR_DATA';


// reducer
export default function apiReducer(state = InitialState, action) {
    switch (action.type) {
        case MOSTRAR_TABLA:
            
            return {...state, 
                array: action.payload
            } 
            
        case AGREGAR_DATA: 
            return {
                ...state,
                array: action.payload
            }            
        
        default:
            return state;
    }
}


// acciones
export const AddData = (nombre, fechalta, fechmodif) => (dispatch, getState) => {

    const array1 = getState().Personajes.array; 
    array1.push({nombre, fechalta, fechmodif});

    try {
        dispatch({
            type: AGREGAR_DATA,
            payload: array1
        })
    } catch (error) {
        
    }
}

export const ShowData = () => (dispatch, getState) => {

    const array1 = getState().Personajes.array;  
    try {
        dispatch({
            type: AGREGAR_DATA,
            payload: array1
        })
    } catch (error) {
        
    }
}












