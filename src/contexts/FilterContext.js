import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../reducers";

const filterInitialState={
    products:[],
    onlyInStock: false,
    bestSellerOnly: false,
    ratings : null,
    sortBy: null
}

export const FilterContext=createContext(filterInitialState);

export const FilterProvider=({children})=>{
    
    const [state,dispatch]=useReducer(filterReducer,filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload:{
                products:products
            }
        });
    }

    function bestSeller(products){
        return state.bestSellerOnly?products.filter(product=>product.best_seller===true):products;
    }

    function inStock(products){
        return state.onlyInStock?products.filter(product=>product.in_stock===true):products;
    }

    function sortBy(products){
        if(state.sortBy==="lowtohigh"){
            return products.sort((a,b)=>a.price-b.price);
        }
        if(state.sortBy==="hightolow"){
            return products.sort((a,b)=>b.price-a.price);
        }
        return products;
    }

    function rating(products){
        if(state.ratings===4){
            return products.filter(product=>product.rating>=4);
        }
        if(state.ratings===3){
            return products.filter(product=>product.rating>=3);
        }
        if(state.ratings===2){
            return products.filter(product=>product.rating>=2);
        } 
        if(state.ratings===1){
            return products.filter(product=>product.rating>=1);
        }
        return products;
    }

    const filteredProductList=rating(sortBy(inStock(bestSeller(state.products))));

    const value={
        state,
        dispatch,
        products:filteredProductList,
        initialProductList
    }
    return <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
}

export const useFilter=()=>useContext(FilterContext);