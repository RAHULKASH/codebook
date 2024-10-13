function getSession(){
    const token=JSON.parse(sessionStorage.getItem("token"));
    const cbid=JSON.parse(sessionStorage.getItem("cbid")); 
    return {token,cbid};
}
 
export async function getUser(params){
    const {token ,cbid}=getSession();
    const requestOption={
        method:"GET",
        headers:{"content-type":"application/json",Authorization:`Bearer ${token}`}
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, requestOption); 
    if(!response.ok){
        throw { message:response.statusText, status:response.status }; //eslint-disable-line
    }
    const data = response.json();
    return data;
}

export async function createOrders(cartList,total,user) {
    const {token ,cbid}=getSession();
    const order = {
        cartList:cartList,
        amount_paid:total,
        quantity:cartList.length,
        user:{
            id:cbid,
            name:user.name,
            email:user.email
        }
    }

    const requestOption={
        method:"POST",
        headers:{"Content-Type":"application/json", Authorization: `Bearer ${token}`},
        body:JSON.stringify(order)
    }

    const response=await fetch(`${process.env.REACT_APP_HOST}/660/orders`,requestOption)
    if(!response.ok){
        throw { message:response.statusText, status:response.status }; //eslint-disable-line
    }
    const data = response.json();
    return data;
 
}

export async function getOrders() {
    const {token ,cbid}=getSession();
    const requestOption={
        method:"GET",
        headers:{"Content-Type":"application/json", Authorization: `Bearer ${token}`}
    };
    const response=await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,requestOption,);

    if(!response.ok){
        throw { message:response.statusText, status:response.status }; //eslint-disable-line
    }
    const data = response.json();
    return data;
}