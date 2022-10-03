import {
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const List = () => {
  return (
    <Box w={"full"} mt={10} rounded={"sm"} shadow={"lg"}>
      <Text py={2} px={3} color={"gray.500"}>
        Latest Transactions
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr fontWeight={"bold"} color={"gray.900"}>
              <Th>Traking ID</Th>
              <Th>Customer</Th>
              <Th>Date</Th>
              <Th>Payment Method</Th>
              <Th>Price</Th>
              <Th isNumeric>Product</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>3784753756</Td>
              <Td>Jhon deo</Td>
              <Td>1 Month</Td>
              <Td>Cash on Delivery</Td>
              <Td>120</Td>
              <Td>
                <Flex
                  flexDir={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Image
                    src="https://thumbs.dreamstime.com/b/new-product-stamp-round-grunge-sign-label-181920855.jpg"
                    borderRadius="full"
                    boxSize="50px"
                    objectFit={"cover"}
                    alt={"image"}
                  />
                  <Text fontWeight={"semibold"}>Lorem, ipsum dolor.</Text>
                </Flex>
              </Td>
              <Td isNumeric>Pending</Td>
            </Tr>
            <Tr>
              <Td>3784753756</Td>
              <Td>Jhon deo</Td>
              <Td>1 Month</Td>
              <Td>Cash on Delivery</Td>
              <Td>120</Td>
              <Td>product details</Td>
              <Td isNumeric>Pending</Td>
            </Tr>
            <Tr>
              <Td>3784753756</Td>
              <Td>Jhon deo</Td>
              <Td>1 Month</Td>
              <Td>Cash on Delivery</Td>
              <Td>120</Td>
              <Td>product details</Td>
              <Td isNumeric>Pending</Td>
            </Tr>
            <Tr>
              <Td>3784753756</Td>
              <Td>Jhon deo</Td>
              <Td>1 Month</Td>
              <Td>Cash on Delivery</Td>
              <Td>120</Td>
              <Td>product details</Td>
              <Td isNumeric>Pending</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;
