import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatButton, Tooltip } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import FrontEndHeader from "../components/Header/FrontEndHeader";
import "./FrontEndLayout.css";
import FrontEndFooter from "../components/footer/FrontendFooter";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const FrontEndLayout = () => {
  const navigate = useNavigate();
  const [windowsPosition, setWindowsPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowsPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="app">
        <FrontEndHeader />
        <Outlet />
        <FloatButton.Group shape="circle" style={{ right: 25 }}>
          <Tooltip title="Faire un don" placement="left">
            <FloatButton
              type="primary"
              icon={<FontAwesomeIcon icon={faHeart} />}
              onClick={() => {
                localStorage.clear();
                navigate("/dons");
              }}
            />
          </Tooltip>
          {windowsPosition > 0 && (
            <FloatButton
              type="primary"
              icon={<FontAwesomeIcon icon={faArrowUp} />}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          )}
        </FloatButton.Group>
        <FrontEndFooter />
      </div>
    </>
  );
};

export default FrontEndLayout;
