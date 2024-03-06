import React, { useEffect, useState } from "react";
import { Row,Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate,NavLink } from "react-router-dom";
import { BottomNavigation } from "reactjs-bottom-navigation";
import { logOut } from "../../features/authSlice";
import "../../styles/athele.css";
import Sidenav from "../Sidenav";
import Bottomnav from "./Bottomnav";


const AtheleteMenu = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 768;


  const navigationMenu = [
    {
      itemName: "Home",
      iconPath: "/images/icons/home.svg",
      to: "/a-home",
    },
    {
      itemName: "Transactions",
      iconPath: "/images/icon/transactions.svg",
      to: "/a-transactions",
    },
    {
      itemName: "Bookings",
      iconPath: "/images/icon/bookings.svg",
      to: "/a-booking",
    },
    {
      itemName: "Profile",
      iconPath: "/images/icons/user.svg",
      to: "/a-profile",
    },
  ];
  const BottomMenu = [
    {
      itemName: "Home",
      iconPath: "/images/icons/home.svg",
      to: "/",
    },
    {
      itemName: "Transactions",
      iconPath: "/images/icons/list-check.svg",
      to: "/a-transactions",
    },
    {
      itemName: "Bookings",
      iconPath: "/images/icons/file-lines.svg",
      to: "/a-booking",
    },
    {
      itemName: "Profile",
      iconPath: "/images/icons/user.svg",
      to: "/a-manager ",
    },
  ];
  const bottomNavItems = BottomMenu.map((item) => ({
    title: item.title,
    onClick: () => navigate(item.to), // Fix: Wrap the function in another function
    icon: <img src={item.icon} />,
  }));
  return (
    <>
      
        <Row
          className="d-flex parent-of-all"
          style={{
            overflowX: "hidden",
            // width: "100vw",
            backgroundColor: "#F3F1FF",
          }}
        >
       
          {isMobile ? (
           <Bottomnav bottomNavItems={BottomMenu} />
          ) : (
           <Sidenav/>
          )}
       
         
          <div
            className="athel-children-cont"
            style={{
              backgroundColor: "#F3F1FF",
              padding: "0px",
            }}
            // style={{ backgroundColor: "#F2F8FD", padding: "0px" }}
          >
                        <div className="vh-100 p-3" >
              <main>{children}</main>
              {/* <ToastContainer position="top-center" /> */}
            </div>
          </div>
      
        </Row>
      
    </>
  );
};

export default AtheleteMenu;
const NavigationItem = ({
  itemName,
  iconPath,
  to,
  handleItemClick,
  isSelected,
}) => {
  return (
    <li className={isSelected ? "selected" : ""}>
      <Link to={to} onClick={handleItemClick} className="d-flex">
        <div className="menu-icon-cont">
          <img src={iconPath} alt={itemName} className="icons" />
        </div>
        <span className="menu-list-items">{itemName}</span>
      </Link>
    </li>
  );
};
