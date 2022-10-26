import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import AppetizerPage from "./pages/AppetizerPage";
import AboutPage from "./pages/AboutPage";

import BeefPage from "./pages/BeefPage";
import ChickenPage from "./pages/ChickenPage";
import DessertsPage from "./pages/DessertsPage";
import NoodlesPage from "./pages/NoodlesPage";
import PorkPage from "./pages/PorkPage";
import SeafoodsPage from "./pages/SeafoodsPage";
import VegetablesPage from "./pages/VegetablesPage";
import RicePage from "./pages/RicePage";
import LoginPage from "./pages/admin/Login/LoginPage";
 
import ManageInfoPage from "./pages/admin/ManageInfoPage";

import ManageFoodPage from "./pages/admin/ManageFoodPage";
import ManageAppetizerPage from "./pages/admin/ManageAppetizerPage";
import ManageBeefPage from "./pages/admin/ManageBeefPage";
import ManageChickenPage from "./pages/admin/ManageChickenPage";
import ManageDessertPage from "./pages/admin/ManageDessertPage";
import ManageNoodlesPage from "./pages/admin/ManageNoodlesPage";
import ManagePorkPage from "./pages/admin/ManagePorkPage";
import ManageRicePage from "./pages/admin/ManageRicePage";
import ManageSeafoodPage from "./pages/admin/ManageSeafoodPage";
import ManageVegetablePage from "./pages/admin/ManageVegetablePage";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<PopularPage />}></Route>
            <Route path="/appetizer" element={<AppetizerPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>

            <Route path="/beef" element={<BeefPage />}></Route>
            <Route path="/chicken" element={<ChickenPage />}></Route>
            <Route path="/desserts" element={<DessertsPage />}></Route>
            <Route path="/noodles" element={<NoodlesPage />}></Route>
            <Route path="/pork" element={<PorkPage />}></Route>
            <Route path="/seafoods" element={<SeafoodsPage />}></Route>
            <Route path="/vegetables" element={<VegetablesPage />}></Route>
            <Route path="/rice" element={<RicePage />}></Route>
          </Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/manage-info" element={<ManageInfoPage/>}></Route>

          <Route path="/manage-food" element={<ManageFoodPage/>}></Route>
          <Route path="/manage-appetizer" element={<ManageAppetizerPage/>}></Route>
          <Route path="/manage-beef" element={<ManageBeefPage/>}></Route>
          <Route path="/manage-chicken" element={<ManageChickenPage/>}></Route>
          <Route path="/manage-desserts" element={<ManageDessertPage/>}></Route>
          <Route path="/manage-noodles" element={<ManageNoodlesPage/>}></Route>
          <Route path="/manage-pork" element={<ManagePorkPage/>}></Route>
          <Route path="/manage-rice" element={<ManageRicePage/>}></Route>
          <Route path="/manage-seafoods" element={<ManageSeafoodPage/>}></Route>
          <Route path="/manage-vegetables" element={<ManageVegetablePage/>}></Route>
          
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
