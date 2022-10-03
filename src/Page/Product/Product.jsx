import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProductTable from "../../Components/Product/ProductTable/ProductTable";

const Product = () => {
  return (
    <Container w={"full"} maxW={"full"} pt={"10"}>
      <Flex w={"100%"} h={"100%"}>
        <ProductTable />
      </Flex>
    </Container>
  );
};

export default Product;
