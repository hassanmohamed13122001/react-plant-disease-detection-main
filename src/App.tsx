import Navigator from "./components/Navigator.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import UploadPage from "./pages/UploadPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import GuidPage from "./pages/GuidPage.tsx";

function App() {

  return (
    <>
        <Navigator/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/upload-image" element={<UploadPage/>} />
            <Route path="/guide" element={<GuidPage/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default App
