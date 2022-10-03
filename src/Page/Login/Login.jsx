import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  // GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { apiRequest } from "../../apiRequst/apiRequest";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const github = new GithubAuthProvider();
  const google = new GoogleAuthProvider();

  /*
  const githubLogin = async () => {
    try {
      const response = await signInWithPopup(auth, github);
      if (!response) {
        console.log("something went worng");
        throw new Error("can't complate");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  */
  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, google);
      if (!response) {
        console.log("something went worng");
        throw new Error("can't complate");
      }
      const resData = response?.user?.reloadUserInfo;
      // console.log(resData);
      const data = {
        email: resData.email,
        name: resData.displayName,
        image: resData.photoUrl,
        id: resData.localId,
      };
      // console.log(data);
      try {
        const res = await apiRequest.post(
          "/api/ecom/v1/user/auth/social",
          data
        );
        const ressData = res.data;
        const message = ressData?.message;
        dispatch(login(ressData));
        navigate("/");
        // console.log(ressData);
        toast.success(message);
      } catch (error) {
        // console.log(error);
        const mess = error.response.data?.message;
        toast.error(mess);
      }
    } catch (error) {
      console.log("from main condition", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    try {
      const res = await apiRequest.post(
        "/api/ecom/v1/user/auth/admin/login",
        data
      );
      const resData = res.data;
      dispatch(login(resData));
      // console.log(resData);
      navigate("/");
      toast.success(resData.message);
      // console.log(resData);
      setLoading(false);
    } catch (error) {
      const mess = error.response.data;
      toast.error(mess?.message);
      setLoading(false);
      if (error.response.status === 404) {
        navigate("/authentication/sing-up");
      }
    }
  };
  return (
    <Container className="singup" position={"absolute"} left={"32%"}>
      <Flex justifyContent={"center"} flexDir={"column"}>
        <Text textAlign={"center"} mb={"6"}>
          <Heading>LOGO</Heading>
        </Text>
        <Box
          w={"full"}
          h={"auto"}
          shadow={"lg"}
          bg={"facebook.100"}
          py={6}
          px={4}
          rounded={"2xl"}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            borderBottom={"1px"}
            borderBottomColor={"white"}
            pb={4}
          >
            <Text pb={4}>Sign up with</Text>

            <Box gap={4} display={"flex"}>
              <Button
                textTransform={"uppercase"}
                flex
                gap={2}
                onClick={googleLogin}
              >
                <FcGoogle />
                Google
              </Button>
              <Button textTransform={"uppercase"} flex gap={2}>
                <FaGithub />
                github
              </Button>
            </Box>
          </Flex>
          <Box my={5}>
            <Text pb={4} textAlign={"center"}>
              Or sign up with credentials
            </Text>
            <form
              onSubmit={submitHandler}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                padding: "0.4rem 1rem",
              }}
            >
              <FormControl>
                <FormLabel fontSize={15}>Email</FormLabel>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type={"email"}
                  placeholder="Email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  title="Invalid email address"
                  name="email"
                  id="email"
                  required
                  bg={"white"}
                  py={"5"}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={15}>Password</FormLabel>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  minLength={"6"}
                  maxLength={"18"}
                  title="Very week password!"
                  required
                  bg={"white"}
                  py={"5"}
                />
              </FormControl>

              {loading ? (
                <Button mt={4} colorScheme="teal" type="submit">
                  <Spinner /> Procecing..
                </Button>
              ) : (
                <Button mt={4} colorScheme="teal" type="submit">
                  Submit
                </Button>
              )}
            </form>
            <Text textAlign={"center"}>
              Don't have an account!{" "}
              <Link
                to="/authentication/sing-up"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Create
              </Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Login;
