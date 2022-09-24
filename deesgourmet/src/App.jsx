import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import AppetizerPage from "./pages/AppetizerPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<PopularPage />}></Route>
            <Route path="/appetizer" element={<AppetizerPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
