export async function getProductList(query) {
    const response=await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${query?query:""}`);
    if(!response.ok){
        throw { message:response.statusText, status:response.status }; //eslint-disable-line
    }
    const data=response.json();
    return data;
}

export async function getProduct(id) {
    const response =await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`); 
    if(!response.ok){
        throw { message:response.statusText, status:response.status }; //eslint-disable-line
    }
    const data = response.json();
    return data;
}

export async function getFeaturedProducts() {
    const response=await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        throw { message:response.statusText, status:response.status }; //eslint-disable-line
    }
    const data= await response.json();
    return data;
}