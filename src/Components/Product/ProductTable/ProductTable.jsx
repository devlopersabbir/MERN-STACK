import React from "react";
import {
  Box,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Avatar,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { BsPencil, BsTrash, BsExclamationCircle } from "react-icons/bs";
import { useState } from "react";
import ModalEdite from "../../Modal/Modal";
import { useEffect } from "react";
import { apiRequest } from "../../../apiRequst/apiRequest";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import moment from "moment";
import { created } from "../../../redux/slice/productSlice";
import ProductSlider from "./productSlider/ProductSlider";

const ProductTable = () => {
  const token = useSelector((state) => state.adminAuth.adminToken);
  const datas = useSelector((state) => state.product?.createProduct);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSerach] = useState("");

  useEffect(() => {
    const getAllProduct = async () => {
      setLoading(true);
      try {
        const response = await apiRequest.get("/api/ecom/v1/product");
        dispatch(created(response.data));

        if (datas) {
          setData(datas);
        } else {
          setData(response?.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getAllProduct();
  }, [dispatch]);

  console.log(data);
  return (
    <Box w={"full"} rounded={"sm"} shadow={"lg"} h={"auto"}>
      <Box as="div" position={"relative"}>
        <ModalEdite open={open} setOpen={setOpen} type={"product"} />
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backdropFilter="blur(10px) hue-rotate(90deg)" mt={"52"}>
            <ModalHeader
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              py={"6"}
              color={"red.500"}
            >
              <BsExclamationCircle size={"4rem"} />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px={10}>
              <Text textAlign={"center"} fontSize={"1.3rem"}>
                Are you sure you want to delete this user?
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} fontSize={"1rem"}>
                I'm sure
              </Button>
              <Button onClick={onClose} fontSize={"1rem"}>
                No, Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box as="div">
        <Text fontSize={"2xl"} fontWeight={"bold"} pl={"3"}>
          All products
        </Text>
        <Flex justifyContent={"space-between"} py={"3"} px={"2"}>
          <Flex>
            <Box display={"flex"} flexDir={"row"} w={"sm"}>
              <Input
                type={"text"}
                name={"search"}
                id={"search"}
                placeholder={"Query with product title"}
                onChange={(e) => setSerach(e.target.value)}
              />
            </Box>
          </Flex>
          <Box as="div">
            <Button
              type="button"
              bg={"green.300"}
              gap={2}
              onClick={() => setOpen(true)}
            >
              <MdAdd /> Add product
            </Button>
          </Box>
        </Flex>
      </Box>
      <TableContainer>
        <Box overflowX={"scroll"}>
          <Table variant="simple" overflow={"hidden"} w={"full"}>
            <Thead bg={"orange.100"} w="full">
              <Tr fontWeight={"bold"} color={"gray.900"} w="full">
                <Th>id</Th>
                <Th>Image</Th>
                <Th>name</Th>
                <Th>category</Th>
                <Th>brand</Th>
                <Th>stock</Th>
                <Th>price</Th>
                <Th>Color</Th>
                <Th>Tags</Th>
                <Th>Date</Th>
                <Th>description</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            {loading || !data.length ? (
              <Tbody overflow={"scroll"}>
                <Tr>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                </Tr>
                <Tr>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                </Tr>
                <Tr>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                  <Td>- - - - -</Td>
                </Tr>
              </Tbody>
            ) : (
              <Tbody overflow={"scroll"}>
                {data &&
                  data
                    .filter((value, index) => {
                      if (search === "") {
                        return value;
                      }
                      return value.name
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((item, index) => (
                      <Tr key={index}>
                        <Td>
                          {item?._id ? (
                            item?._id
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          <ProductSlider imag={item?.images} />
                        </Td>
                        <Td>
                          {item?.name ? (
                            item?.name
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          {item?.category ? (
                            item?.category
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          {item?.brand ? (
                            item?.brand
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          {item?.stock ? (
                            item?.stock
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          {item?.price ? (
                            item?.price
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          {item?.color ? (
                            item?.color
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>
                        <Td>
                          {item?.tags ? (
                            item?.tags
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>

                        <Td>
                          {moment(item?.createdAt).startOf("seconds").fromNow()}
                        </Td>
                        <Td
                          style={{
                            width: "100px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item?.description ? (
                            item?.description
                          ) : (
                            <Text textColor={"red.400"}>not set</Text>
                          )}
                        </Td>

                        <Td>
                          <Flex
                            direction={"row"}
                            justifyContent={"space-between"}
                            gap={"2"}
                          >
                            <Button
                              bg={"green.500"}
                              gap={2}
                              onClick={() => setOpen(true)}
                            >
                              <BsPencil /> Edit user
                            </Button>
                            <Button
                              onClick={onOpen}
                              bg={"red.500"}
                              gap={2}
                              _hover={{
                                backgroundColor: "#E6B0AA",
                                transition: "all 0.3s",
                              }}
                            >
                              <BsTrash /> Delete user
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
              </Tbody>
            )}
          </Table>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
