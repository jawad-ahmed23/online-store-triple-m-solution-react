import React from "react";
import { Header, Layout, CThankYouPage, Footer } from "../../components";

export default function ThankYouPage() {
  return (
    <Layout Header={<Header />} Footer={<Footer />}>
      <CThankYouPage />
    </Layout>
  );
}
