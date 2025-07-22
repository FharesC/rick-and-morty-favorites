import { BrowserRouter, Route, Routes } from "react-router-dom"
import CharacterList from "./components/CharacterList"
import CharacterDetail from "./components/CharacterDetail"
import FavoritesPages from "./components/FavoritesPages"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<CharacterList />} ></Route>
      <Route path="/character/:id" element={<CharacterDetail />}></Route>
      <Route path="/favorites" element={<FavoritesPages/>}></Route>
      <Route path="*" element={<h1 className="text-danger vw-100 mt-5  fs-1 d-flex justify-content-center align-items-center">Page not found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
