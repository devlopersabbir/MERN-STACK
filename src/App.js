import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Home from "./Page/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Singup from "./Page/Login/Singup";
import Login from "./Page/Login/Login";
import { Flex } from "@chakra-ui/react";
import List from "./Page/List/List";
import Settings from "./Page/Settings/Settings";
import Profile from "./Page/Profile/Profile";
import Product from "./Page/Product/Product";

const App = () => {
  const isAdmin = useSelector((state) => state.adminAuth.adminToken);

  return (
    <BrowserRouter>
      <Toaster />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: "9999999999999" }}
      />
      <>
        <Navbar />
        <main style={{ marginTop: "65px", width: "100%" }}>
          <Flex width="100%">
            <Flex width="20%" position="fixed" top="70px" left={0}>
              <Sidebar />
            </Flex>
            <Flex ml="20%" width="80%" flexDir="column" pr={4} pl={4}>
              <Routes>
                <Route path="/">
                  <Route
                    index
                    element={
                      isAdmin ? (
                        <Home />
                      ) : (
                        <Navigate to={"/authentication/login"} />
                      )
                    }
                  />
                  <Route
                    path="dashboard/user"
                    element={
                      isAdmin ? (
                        <List />
                      ) : (
                        <Navigate to={"/authentication/login"} />
                      )
                    }
                  />
                  <Route
                    path="dashboard/settings"
                    element={
                      isAdmin ? (
                        <Settings />
                      ) : (
                        <Navigate to={"/authentication/login"} />
                      )
                    }
                  />
                  <Route
                    path="dashboard/profile"
                    element={
                      isAdmin ? (
                        <Profile />
                      ) : (
                        <Navigate to={"/authentication/login"} />
                      )
                    }
                  />
                  <Route
                    path="dashboard/product"
                    element={
                      isAdmin ? (
                        <Product />
                      ) : (
                        <Navigate to={"/authentication/login"} />
                      )
                    }
                  />
                  <Route
                    path="authentication/login"
                    element={!isAdmin ? <Login /> : <Navigate to={"/"} />}
                  />
                  <Route
                    path="authentication/sing-up"
                    element={!isAdmin ? <Singup /> : <Navigate to={"/"} />}
                  />
                </Route>
              </Routes>
            </Flex>
          </Flex>
        </main>
      </>
    </BrowserRouter>
  );
};

export default App;
