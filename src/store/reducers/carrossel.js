import {refs} from '../../data/sobre'

const INITIAL_STATE = {
    dados: refs[1],
    active: false
}

export default function carrossel(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "Alura":
            
            return {dados: action.payload}
        
        case "Recode":
            
            return {dados: action.payload}

        case "SoloLearn":
            
            return {dados: action.payload}
    
        default:
            return state
    }
}