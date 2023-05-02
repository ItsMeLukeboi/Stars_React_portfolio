import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./header.js";

import "./style.css";



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import Cv from "./pages/cv.js";
import Contact from "./pages/contact.js";
import NoPage from "./pages/NoPage.js";


const myPage = <div>
<Header/>
<BrowserRouter>
<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cv" element={<Cv />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
