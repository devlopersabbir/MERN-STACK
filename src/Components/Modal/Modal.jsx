import {
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Select,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown, MdUpload } from "react-icons/md";
import { apiRequest } from "../../apiRequst/apiRequest";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getDetails } from "../../redux/slice/userDetailsSlice";
import { created } from "../../redux/slice/productSlice";

const ModalEdite = ({ open, setOpen, type, id }) => {
  const token = useSelector((state) => state.adminAuth.adminToken);
  const deatils = useSelector((state) => state.userDetails.details);

  const dispatch = useDispatch();
  // console.log(userData?.name);
  const [name, setName] = useState(deatils?.name);
  const [username, setUsername] = useState(deatils?.username);
  const [email, setEmail] = useState(deatils?.email);
  const [superDefind, setSuperDefind] = useState("");
  const [loading, setLoading] = useState(false);

  // for product
  const [images, setImages] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [color, setColor] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await apiRequest.get(
          `/api/ecom/v1/users/get/single/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const resData = response.data?.user;
        console.log(resData);
        // dispatch(getDetails(resData));
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails();
  }, [id, token, open, dispatch]);

  const updateUser = async () => {
    setLoading(true);
    const data = {
      name: name,
      username: username,
      email: email,
      superDefind: superDefind,
    };
    console.log("from user data", data);
    try {
      const res = await apiRequest.delete(
        `/api/ecom/v1/users/update/${id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return console.log(res);
      const resData = res?.data;
      window.location.reload(false);
      toast.success(resData.message);
    } catch (error) {
      return console.log(error);
      const mess = error.response?.data;
      toast.error(mess.message);
    }
  };

  // for product

  // product image hadler
  const productImageHandler = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));

    const file = e.target.files[0];
    convertProductImage(file);
  };

  // convert image
  const convertProductImage = (file) => {
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setImages(render.result);
    };
  };

  const submitHandlerForProduct = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      name: title,
      description,
      images,
      price,
      brand,
      category,
      stock,
      color,
      tags,
    };
    try {
      const response = await apiRequest.post(
        "/api/ecom/v1/product/new/create",
        data
      );
      const resData = response.data;
      setOpen(false);
      toast.success(resData?.message);
      dispatch(created(resData?.createProduct));
    } catch (error) {
      console.log(error);
      const mess = error.response.data;
      toast.error(mess?.message);
    }
    setLoading(false);
  };

  return open ? (
    <Box
      w={"3xl"}
      h={"auto"}
      m={"auto"}
      shadow={"lg"}
      rounded={"md"}
      position={"absolute"}
      top={5}
      left={"28"}
      px={5}
      zIndex={"99999"}
      py={7}
      backdropFilter="blur(40px) hue-rotate(90deg)"
    >
      {type === "product" ? (
        // for product
        <Box as="div">
          <Flex
            justifyContent={"start"}
            borderBottom={"1px"}
            borderBottomColor={"blackAlpha.100"}
          >
            <CloseButton
              onClick={() => setOpen(false)}
              position={"absolute"}
              right={0}
              top={0}
              bg={"yellow.100"}
              p={2}
            />
            <Heading as="h2" size={"md"} pb={4}>
              Create a new product
            </Heading>
          </Flex>

          <Flex
            py={4}
            direction={"column"}
            justifyContent={"space-between"}
            gap={7}
          >
            <Flex w={"full"}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  padding: "0.4rem 1rem",
                  width: "100%",
                }}
                onSubmit={submitHandlerForProduct}
              >
                <Flex gap={7}>
                  <FormControl>
                    <FormLabel fontSize={15}>Product title/name</FormLabel>
                    <Input
                      type={"text"}
                      name={"name"}
                      id={"name"}
                      placeholder="Product name/title..."
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={7}>
                  <FormControl>
                    <FormLabel fontSize={15}>Category</FormLabel>
                    <Input
                      type={"text"}
                      name={"category"}
                      id={"category"}
                      placeholder="Product category"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={15}>Price</FormLabel>
                    <Input
                      type={"number"}
                      name={"price"}
                      id={"price"}
                      placeholder="Product price"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={7}>
                  <FormControl>
                    <FormLabel fontSize={15}>Color</FormLabel>
                    <Input
                      type={"text"}
                      name={"color"}
                      id={"color"}
                      placeholder="Red; Blue; White; Green"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={15}>Tags</FormLabel>
                    <Input
                      type={"text"}
                      name={"tags"}
                      id={"tags"}
                      placeholder="computer; books; mobile; products;"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={7}>
                  <FormControl>
                    <FormLabel fontSize={15} htmlFor="brand">
                      Product Brand
                    </FormLabel>
                    <Input
                      type={"text"}
                      name={"brand"}
                      id={"brand"}
                      placeholder="Product brand"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={15} htmlFor={"stock"}>
                      Product stock
                    </FormLabel>
                    <Input
                      type={"number"}
                      name={"stock"}
                      id={"stock"}
                      placeholder="Product stock"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={7} flexDir={"column"}>
                  <FormControl>
                    <FormLabel fontSize={15}>Product images</FormLabel>
                    <Box
                      w={"full"}
                      height={"120px"}
                      border={"2px"}
                      borderColor={"gray.300"}
                      position={"relative"}
                    >
                      <Box
                        as="div"
                        position={"absolute"}
                        top={"0"}
                        right={"0"}
                        m="0"
                      >
                        <IconButton
                          as={"button"}
                          cursor="pointer"
                          overflow={"hidden"}
                          w={"25px"}
                        >
                          <FormLabel
                            fontSize={15}
                            htmlFor="file"
                            position={"relative"}
                            display="flex"
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <MdUpload
                              size={"25px"}
                              style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                              }}
                            />
                            <Input
                              onChange={productImageHandler}
                              type={"file"}
                              border="none"
                              id="file"
                              name="file"
                              w={"full"}
                              opacity={"0"}
                              multiple
                              // style={{ display: "none" }}
                              cursor="pointer"
                            />
                          </FormLabel>
                        </IconButton>
                      </Box>
                    </Box>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={15}>Product description</FormLabel>
                    <Textarea
                      isInvalid
                      placeholder="Product description"
                      bg={"white"}
                      py={"5"}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                {loading ? (
                  <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    gap={2}
                    disabled
                  >
                    <Spinner /> Uploading...
                  </Button>
                ) : (
                  <Button mt={4} colorScheme="teal" type="submit">
                    Upload
                  </Button>
                )}
              </form>
            </Flex>
          </Flex>
        </Box>
      ) : (
        // for user
        <Box as="div">
          <Flex
            justifyContent={"start"}
            borderBottom={"1px"}
            borderBottomColor={"blackAlpha.100"}
          >
            <CloseButton
              onClick={() => setOpen(false)}
              position={"absolute"}
              right={0}
              top={0}
              bg={"yellow.100"}
              p={2}
            />
            <Heading as="h2" size={"md"} pb={4}>
              Edit User
            </Heading>
          </Flex>

          <Flex
            py={4}
            direction={"column"}
            justifyContent={"space-between"}
            gap={7}
          >
            <Flex w={"full"}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  padding: "0.4rem 1rem",
                  width: "100%",
                }}
              >
                <Flex gap={7}>
                  <FormControl>
                    <FormLabel fontSize={15}>Name</FormLabel>
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type={"text"}
                      name={"name"}
                      id={"name"}
                      placeholder="Jhon deo"
                      bg={"white"}
                      py={"5"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={15}>Username</FormLabel>
                    <Input
                      onChange={(e) => setUsername(e.target.value)}
                      type={"text"}
                      name={"username"}
                      id={"username"}
                      placeholder="username"
                      bg={"white"}
                      py={"5"}
                      value={username}
                    />
                  </FormControl>
                </Flex>
                <Flex gap={7}>
                  <FormControl>
                    <FormLabel fontSize={15}>Email</FormLabel>
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      type={"email"}
                      name={"email"}
                      id={"email"}
                      placeholder="example@example.com"
                      bg={"white"}
                      py={"5"}
                      value={email}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={15}>Defination</FormLabel>
                    <Select
                      icon={<MdArrowDropDown />}
                      bg={"white"}
                      onChange={(e) => setSuperDefind(e.target.value)}
                    >
                      <option value="user" bg={"white"}>
                        User
                      </option>
                      <option value="admin" bg={"white"}>
                        Admin
                      </option>
                    </Select>
                  </FormControl>
                </Flex>
                {loading ? (
                  <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    gap={2}
                    disabled
                  >
                    <Spinner /> Submiting...
                  </Button>
                ) : (
                  <Button mt={4} colorScheme="teal" type="submit">
                    Submit
                  </Button>
                )}
              </form>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  ) : null;
};

export default ModalEdite;
