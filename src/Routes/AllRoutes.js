import { Routes,Route } from "react-router-dom";
import { HomePage,ProductsList,ProductDetail,Login,Register, CartPage , OrderPage ,DashBoardPage, PageNotFound } from '../pages';
import { CartCard } from "../"
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="product/:id" element={<ProductDetail/>}/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}></Route>
            <Route path="order-summary" element={<ProtectedRoute><OrderPage/></ProtectedRoute>}></Route>
            <Route path="dashboard" element={<ProtectedRoute><DashBoardPage/></ProtectedRoute>}></Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
