import { log } from "console"

type Item = {
    name : string,
    price : number
}

const products : Item[] = [
    {
        name : 'SHOES',
        price : 1000
    }
]



const ProductReducer = (state : Item[] = products, action : { type : string, item? : Item }) => {
    
    switch(action.type) {
        case 'ADD_PRODUCT' : {
            
            let arr = [...state]
            if(action.item)
            {
                
                arr.push(action.item)
                return arr
            }
            break
        }
        case 'DELETE_PRODUCT' : {
            let arr = [...state]
            arr.pop()
            return arr
        }
        default : {
            return state
        }
    }
}
 
export default ProductReducer