import { ACTION_TYPES } from "../CONSTANTS/actionTypes";
type Item = {
    name : string,
    price : number
}
export const addProduct = (product : Item) => {
    
    return {
        type : ACTION_TYPES.ADD_PRODUCT,
        item : product
    }
}

export const deleteProduct = () => {
    console.log(ACTION_TYPES.DELETE_PRODUCT);
    
    return {
        type : ACTION_TYPES.DELETE_PRODUCT,
    }
}