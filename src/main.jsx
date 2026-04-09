import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import UpdateTodo from "./UpdateTodo";
import "./index.css"; // PENTING: Pastikan baris ini ada

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AddStudent />} />
          <Route path="/list" element={<ListStudent />} />
          <Route path="/update/:id" element={<UpdateTodo />} />
          <Route path="*" element={<AddStudent />} />
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);