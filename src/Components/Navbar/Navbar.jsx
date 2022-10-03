import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAdmin = useSelector((state) => state.adminAuth.adminToken);
  return isAdmin ? (
    <Container
      height="62px"
      bg="white"
      maxW="100%"
      shadow={"md"}
      position="fixed"
      top="0"
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="space-between" mt={1}>
        <Flex align="center" justify="center" gap={2}>
          <Heading>
            <Link to="/">LOGO</Link>
          </Heading>
        </Flex>

        <RightContent />
      </Flex>
    </Container>
  ) : null;
};

export default Navbar;
