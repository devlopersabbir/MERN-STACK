import { Stack, Divider } from "@chakra-ui/react";
import { FaProductHunt, FaJediOrder } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import {
  MdAnalytics,
  MdDashboard,
  MdDeliveryDining,
  MdHealthAndSafety,
  MdLogout,
  MdNotificationImportant,
  MdSettings,
} from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isAdmin = useSelector((state) => state.adminAuth.adminToken);
  return isAdmin ? (
    <Stack
      width="100%"
      ml={2}
      mt={1}
      spacing={1}
      boxShadow="2xl"
      height={"100vh"}
      overflowY={"scroll"}
    >
      <Link to="/">
        <SidebarItem icon={MdDashboard} text="Dashboard" iconColor="blue.300" />
      </Link>
      <Divider />
      <Link to="/dashboard/user">
        <SidebarItem icon={BsPeople} text="Users" iconColor="blue.300" />
      </Link>
      <Link to="/dashboard/product">
        <SidebarItem icon={FaProductHunt} text="Product" iconColor="blue.300" />
      </Link>

      <SidebarItem icon={FaJediOrder} text="Order" iconColor="blue.300" />
      <SidebarItem
        icon={MdDeliveryDining}
        text="Delivery"
        iconColor="blue.300"
      />
      <Divider />
      <SidebarItem icon={MdAnalytics} text="Stats" iconColor="blue.300" />
      <SidebarItem
        icon={MdNotificationImportant}
        text="Notification"
        iconColor="blue.300"
      />
      <Divider />
      <SidebarItem
        icon={MdHealthAndSafety}
        text="System Health"
        iconColor="blue.300"
      />
      <Link to="/dashboard/settings">
        <SidebarItem icon={MdSettings} text="Settings" iconColor="blue.300" />
      </Link>
      <Divider />
      <Link to="/dashboard/profile">
        <SidebarItem icon={AiFillProfile} text="Profile" iconColor="blue.300" />
      </Link>
      <SidebarItem icon={MdLogout} text="Logout" iconColor="blue.300" />
      {/* See more button */}
      {/* <Flex
      align="center"
      gap={2}
      p={2}
      width="100%"
      borderRadius={4}
      cursor="pointer"
      transition="all .3s"
      _hover={{
        bg: "#3a3b3c",
      }}
    >
      <Box
        bg="#3f4142"
        width="30px"
        height="30px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={IoIosArrowDown} fontSize="xl" />
      </Box>
      <Text>See more</Text>
    </Flex> */}
    </Stack>
  ) : null;
};

export default Sidebar;
