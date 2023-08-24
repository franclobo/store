import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./inicio/index";
import { Products } from "./products/index";
import { ProductoDetalle } from "./products/productoDetalle";

export const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductoDetalle />} />
      </Routes>
    </section>
  );
};
