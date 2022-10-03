import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdMoreVert } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <Flex
      w={"38%"}
      maxW={"full"}
      shadow={"lg"}
      py={5}
      px={4}
      rounded={"md"}
      flexDir={"column"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        mb={7}
      >
        <Heading textTransform={"capitalize"} color={"gray.600"}>
          Total revenue
        </Heading>
        <MdMoreVert size={30} />
      </Flex>
      <Flex
        justifyContent={"center"}
        textAlign={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={5}
        px={5}
      >
        <Box as="div" w={"150px"} h={"150px"}>
          <CircularProgressbar value={77} text={"77%"} strokeWidth={5} />
        </Box>

        <Box>
          <Heading as={"h3"} fontSize={24} color={"gray.600"}>
            Lorem, ipsum dolor.
          </Heading>
          <Heading
            as={"h1"}
            fontSize={30}
            color={"gray.900"}
            py={3}
            fontWeight={"bold"}
          >
            $223
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem,
            ipsum.
          </Text>
          <Flex justifyContent={"space-between"} my={3}>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                as={"p"}
                color={"gray.900"}
                fontWeight={"semibold"}
                fontSize={19}
                pb={1}
              >
                Target
              </Text>
              <Text
                as={"span"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"red.600"}
              >
                <FiChevronDown size={28} />
                $233.3k
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                as={"p"}
                color={"gray.900"}
                fontWeight={"semibold"}
                fontSize={19}
                pb={1}
              >
                Last Week
              </Text>
              <Text
                as={"span"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"green.600"}
              >
                <FiChevronUp size={28} />
                $257.3k
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                as={"p"}
                color={"gray.900"}
                fontWeight={"semibold"}
                fontSize={19}
                pb={1}
              >
                Last Month
              </Text>
              <Text
                as={"span"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"red.600"}
              >
                <FiChevronDown size={28} />
                $233.3k
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Featured;
