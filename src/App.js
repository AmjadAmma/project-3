// import HomeCategory from "./Components/Home/HomeCategory";
// import Slider from "./Components/Home/Slider";
import  NavBarLogin  from "./Components/Utility/NavBarLogin";
// import Homepage from "./Pages/Home/HomePage";
// import CardProductsContainer   from "./Components/Category/CategoryCard";
import Homepage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import Footer from "./Components/Utility/Footer";
import  Rigester  from "./Pages/Auth/RigesterPage";
import  AllCategoryPage  from "./Pages/Category/AllCategoryPage";
import  AllBrandPage from "./Pages/Brand/AllBrandPage";
import  ShopProducsPage  from "./Pages/Products/ShopProducsPage";

function App() {
  return (
    <div  className="font" >
          <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<Rigester />}></Route>
          <Route path="/allcategory" element={<AllCategoryPage />}></Route>
          <Route path="/allbrands" element={<AllBrandPage />}></Route>
          <Route path="/products" element={<ShopProducsPage/>}></Route>





          {/* <Route path="/products" element={<ShopProducsPage/>}></Route> */}
          {/* <Route path="/products/:id" element={<ProductDetalisPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/register" element={<Rigester />}></Route>
          <Route path="/allbrands" element={<AllBrandPage />}></Route>
          <Route path="/allcategory" element={<AllCategoryPage />}></Route>
          <Route
            path="/admin/allorders"
            element={<AdminAllOrdersPage />}></Route>
          <Route
            path="/admin/allproducts"
            element={<AdminAllProductsPage />}></Route>
          <Route path="/admin/addbrand" element={<AdminAddrandPage />}></Route>
          <Route
            path="/admin/addcategory"
            element={<AdminAddCategoryPage />}></Route>
          <Route
            path="/admin/addsubcategory"
            element={<AdminSubCategoryPage />}></Route>
          <Route
            path="/admin/addproducts"
            element={<AdminAddProductsPage />}></Route>
          <Route path="/user/allOrders" element={<UserAllOrdersPage />}></Route>
          <Route
            path="/user/favorite"
            element={<UserFavoriteProductPage />}></Route>
          <Route path="/user/address" element={<UserAllAddressPage />}></Route>
          <Route
            path="/user/add-address"
            element={<UserAddAddressPage />}></Route>
          <Route
            path="/user/edit-address"
            element={<UserEditAddressPage />}></Route>
          <Route path="user/user-profile" element={<UserProfilePage />}></Route>
          <Route
            path="/order/paymethoud"
            element={<ChoosePayMethoudPage />}></Route>
          <Route
            path="/admin/orders/23"
            element={<AdminOrderDetalisPage />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
