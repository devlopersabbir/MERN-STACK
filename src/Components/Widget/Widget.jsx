import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsPerson, BsShop } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";

const Widget = ({ type }) => {
  let data;
  const ammount = 1120;
  const deff = 23;
  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: "See All users",
        icon: (
          <BsPerson
            size={30}
            style={{
              backgroundColor: "#F9EBEA",
              padding: "5px",
              color: "#C0392B",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "order ",
        isMoney: false,
        link: "View all orders ",
        icon: (
          <BsShop
            size={30}
            style={{
              backgroundColor: "#F8F9F9",
              padding: "5px",
              color: "#CACFD2",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "earning",
        isMoney: true,
        link: "View net earning",
        icon: (
          <RiMoneyDollarCircleLine
            size={30}
            style={{
              backgroundColor: "#FBEEE6",
              padding: "5px",
              color: "#DC7633",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: "See All deatils",
        icon: (
          <MdAccountBalance
            size={30}
            style={{
              backgroundColor: "#EAFAF1",
              padding: "5px",
              color: "#2ECC71",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <Flex
      w={"sm"}
      rounded={"md"}
      justifyContent={"space-between"}
      shadow={"md"}
      p={3}
    >
      <Box>
        <Text textTransform={"uppercase"} color={"gray.500"}>
          {data.title}
        </Text>
        <Text fontSize={35} py={2}>
          {data.isMoney && "$"}
          {ammount}
        </Text>
        <Text decoration={"underline"} color={"gray.600"} fontSize={15}>
          {data.link}
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        alignItems={"self-end"}
      >
        <Box as="div">
          <Text
            display={"flex"}
            color={"green"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <AiOutlineArrowUp />
            {deff && deff} %
          </Text>
        </Box>
        {data.icon}
      </Box>
    </Flex>
  );
};

export default Widget;
