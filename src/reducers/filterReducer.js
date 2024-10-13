export const filterReducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case 'PRODUCT_LIST':
            return{...state,products:payload.products};

        case 'SORT_BY':
            return{...state,sortBy:payload.sortBy};

        case 'RATING':
            return{...state,ratings:payload.ratings};
        
        case 'BEST_SELLER_ONLY':
            return{...state,bestSellerOnly:payload.bestSellerOnly};
        
        case 'ONLY_IN_STOCK':
            return{...state,onlyInStock:payload.onlyInStock};
        
        case 'CLEAR_ALL':
            return{...state,sortBy:payload.sortBy,ratings:payload.ratings,bestSellerOnly:payload.bestSellerOnly,onlyInStock:payload.onlyInStock};

        default:
           throw new Error("Case not found!");
    }
}