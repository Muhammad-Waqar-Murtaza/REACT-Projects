import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Sections/Cart";
import { DynamicAbout, DynamicContact, DynamicHome } from "./Dynamic Routes";
import { Suspense } from "react";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<h1>Loading......</h1>}>
          <DynamicHome />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<h1>Loading......</h1>}>
          <DynamicAbout />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback ={<h1>Loading......</h1>}>
          <DynamicContact />
          </Suspense>
        } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
