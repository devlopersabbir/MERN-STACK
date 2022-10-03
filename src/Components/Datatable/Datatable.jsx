import * as React from "react";
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
import ModalEdite from "../Modal/Modal";
import { useEffect } from "react";
import { apiRequest } from "../../apiRequst/apiRequest";
import { useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";

const List = () => {
  const token = useSelector((state) => state.adminAuth.adminToken);
  // console.log(token);
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSerach] = useState("");
  const [id, setId] = useState(0);
  // console.log(data);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await apiRequest.get("/api/ecom/v1/users/get", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const resData = response.data;
        setData(resData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token]);

  const deleteUser = async () => {
    try {
      const res = await apiRequest.delete(`/api/ecom/v1/users/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const resData = res?.data;
      window.location.reload(false);
      toast.success(resData.message);
    } catch (error) {
      const mess = error.response?.data;
      toast.error(mess.message);
    }
  };

  return (
    <>
      <Box w={"full"} rounded={"sm"} shadow={"lg"}>
        <Box as="div" position={"relative"}>
          <ModalEdite open={open} setOpen={setOpen} type={"user"} id={id} />
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              backdropFilter="blur(10px) hue-rotate(90deg)"
              mt={"52"}
            >
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
                <Button
                  colorScheme="red"
                  mr={3}
                  fontSize={"1rem"}
                  onClick={deleteUser}
                >
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
            All users
          </Text>
          <Flex justifyContent={"space-between"} py={"3"} px={"2"}>
            <Flex>
              <Box display={"flex"} flexDir={"row"} w={"sm"}>
                <Input
                  type={"text"}
                  name={"search"}
                  id={"search"}
                  placeholder={"Query with name"}
                  onChange={(e) => setSerach(e.target.value)}
                />
              </Box>
            </Flex>
            <Box as="div">
              <Button type="button" bg={"green.300"} gap={2}>
                <MdAdd /> Add users
              </Button>
            </Box>
          </Flex>
        </Box>
        <TableContainer>
          <Box overflowX={"scroll"}>
            <Table variant="simple" overflow={"hidden"} w={"full"}>
              <Thead bg={"orange.100"}>
                <Tr fontWeight={"bold"} color={"gray.900"}>
                  <Th>ID</Th>
                  <Th>Defination</Th>
                  <Th>Date</Th>
                  <Th>Email</Th>
                  <Th>Name</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              {loading ? (
                <Tbody overflow={"scroll"}>
                  <Tr>
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
                            {item?.superDefind ? (
                              item?.superDefind
                            ) : (
                              <Text textColor={"red.400"}>not set</Text>
                            )}
                          </Td>

                          <Td>
                            {moment(item?.createdAt)
                              .startOf("seconds")
                              .fromNow()}
                          </Td>
                          <Td>
                            {item?.email ? (
                              item?.email
                            ) : (
                              <Text textColor={"red.400"}>not set</Text>
                            )}
                          </Td>
                          <Td>
                            <Flex
                              flexDir={"row"}
                              justifyContent={"start"}
                              alignItems={"center"}
                              gap={2}
                            >
                              <Avatar
                                name={item?.name && item?.name}
                                src={item.image?.url && item.image?.url}
                              />
                              <Text fontWeight={"semibold"}>
                                {item?.name ? (
                                  item?.name
                                ) : (
                                  <Text textColor={"red.400"}>not set</Text>
                                )}
                              </Text>
                            </Flex>
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
                                <Text
                                  onClick={() => setId(item?._id)}
                                  style={{ display: "flex", gap: "5px" }}
                                >
                                  <BsPencil /> Edit user
                                </Text>
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
                                <Text
                                  onClick={() => setId(item?._id)}
                                  style={{ display: "flex", gap: "5px" }}
                                >
                                  <BsTrash /> Delete user
                                </Text>
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
    </>
  );
};

export default List;
