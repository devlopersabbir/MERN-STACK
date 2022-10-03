import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Widget from "../../Components/Widget/Widget";
import Charts from "../../Components/Charts/Charts";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";

const Home = () => {
  return (
    <Container maxW={"full"} bg={"white"} py={2}>
      <Flex justifyContent={"space-between"} gap={6}>
        <Widget type={"user"} />
        <Widget type={"order"} />
        <Widget type={"earning"} />
        <Widget type={"balance"} />
      </Flex>
      <Flex mt={7} justifyContent={"space-between"} gap={2}>
        <Featured />
        <Charts />
      </Flex>
      <Flex>
        <List />
      </Flex>
    </Container>
  );
};

export default Home;
