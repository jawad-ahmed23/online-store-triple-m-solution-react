import React, { useEffect, useState } from "react";
import { Header, Layout, CHome, Footer } from "../../components";
import { Product } from "../../interfaces";
import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      avgRating
      imageUrl
      price
      totalReviews
    }
  }
`;

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const [products, setProducts] = useState<Product[] | []>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    setProducts(data?.products || []);
  }, [data]);

  const onSearchProduct = (title: string) => {
    const filteredProds = products.filter((prod) => {
      return prod.title.toLowerCase().includes(title.toLowerCase());
    });

    setFilteredProducts(filteredProds);
  };

  const onAddToCard = (prod: Product) => {
    dispatch(addItem(prod));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Layout Header={<Header />} Footer={<Footer />}>
      <CHome
        products={products}
        filteredProducts={filteredProducts}
        onSearchProduct={onSearchProduct}
        onAddToCard={onAddToCard}
      />
    </Layout>
  );
}
