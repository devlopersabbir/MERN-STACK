import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequest } from "../../apiRequst/apiRequest";

const RightContent = () => {
  const id = useSelector((state) => state.adminAuth.admin._id);
  const token = useSelector((state) => state.adminAuth.adminToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deatails, setDeatils] = useState();
  const logOoutAction = () => {
    dispatch(logOut());
    navigate("/authentication/login");
    toast.success("Log-out successfull!");
  };

  useEffect(() => {
    const getUserData = async () => {
      const response = await apiRequest.get(
        `/api/ecom/v1/users/get/single/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDeatils(response.data.user);
    };
    getUserData();
  }, [id, token]);
  return (
    <>
      <Menu>
        <MenuButton as={Button} w={"12"} h={"12"} rounded={"full"} p={0}>
          <Avatar
            // w={"full"}
            // h={"full"}
            // rounded={"full"}
            name={deatails?.name}
            src={deatails?.image?.url}
          />
        </MenuButton>
        <MenuList>
          <MenuItem fontWeight={"bold"}>
            {deatails?.name}
            <br></br>
            {deatails?.email}
          </MenuItem>
          <Divider />
          <Link to="/">
            <MenuItem>Dashboard</MenuItem>
          </Link>
          <Link to="/dashboard/settings">
            <MenuItem>Setting</MenuItem>
          </Link>
          <Link to="/dashboard/profile">
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={logOoutAction}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default RightContent;
