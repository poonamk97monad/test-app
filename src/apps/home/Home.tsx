import React from "react";
import { Container } from "react-bootstrap";
import { Layout } from "@shared/components";
import { PopularAssets } from "./components";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Layout title={"Home | Assets Store"}>
      <Container>
        <PopularAssets />
      </Container>
    </Layout>
  );
};
