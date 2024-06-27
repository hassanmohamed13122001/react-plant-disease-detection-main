import Navigator from "./components/Navigator.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import UploadPage from "./pages/UploadPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import GuidPage from "./pages/GuidPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

function App() {

  return (
    <>
        <Navigator/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/upload-image" element={<ProtectedRoute><UploadPage/></ProtectedRoute>}  />
            <Route path="/guide" element={<GuidPage/>}/>
            <Route path="/categories" element={<CategoriesPage/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default App
