import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Datatable from "../../Components/Datatable/Datatable";

const List = () => {
  // const [open, setOpen] = useState(false);
  return (
    <Container w={"full"} maxW={"full"} pt={"10"}>
      <Flex w={"100%"} h={"100%"}>
        <Datatable />
      </Flex>
    </Container>
  );
};

export default List;
