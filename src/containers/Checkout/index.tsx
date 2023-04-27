import React from "react";
import { Header, Layout, CCheckout, Footer } from "../../components";

export default function Checkout() {
  return (
    <Layout Header={<Header />} Footer={<Footer />}>
      <CCheckout />
    </Layout>
  );
}
