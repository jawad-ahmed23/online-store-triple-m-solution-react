import React from "react";
import { Header, Layout, CCartPage, Footer } from "../../components";

export default function CartPage() {
  return (
    <Layout Header={<Header />} Footer={<Footer />}>
      <CCartPage />
    </Layout>
  );
}
