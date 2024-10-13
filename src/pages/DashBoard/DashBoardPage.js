import { useEffect , useState } from "react";
import {DashBoardCard} from "./components/DashBoardCard";
import {DashBoardEmpty} from "./components/DashBoardEmpty";
import { getOrders } from "../../services";
import { toast } from "react-toastify";
import { useTitle} from "../../hooks/useTitle";

export const DashBoardPage = () => {

  const [orders,setOrders]=useState([]);

  useTitle("CodeBook-DashBoard");

  useEffect(()=>{
    async function fetchOrders(){
    try{
    const data= await getOrders();
    setOrders(data);
     }catch(error){
      toast.error(error.message);
     }
    }
    fetchOrders();
  },[])

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>

        <section>
            { orders.length && orders.map((order)=>(
             <DashBoardCard key={order.id} order={order}/>
            ))}  
        </section>

        <section>
            {!orders.length && <DashBoardEmpty/>}
        </section>
      </main>
    )
  }