import { faCalendarDays, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatButton, Tooltip } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import FrontEndHeader from "../components/Header/FrontEndHeader";
import "./FrontEndLayout.css";
import FrontEndFooter from "../components/footer/FrontendFooter";

const FrontEndLayout = () => {
  const navigate = useNavigate();
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
          <Tooltip title="Prochaine activité" placement="left">
            <FloatButton
              type="primary"
              icon={<FontAwesomeIcon icon={faCalendarDays} />}
              onClick={() => {
                localStorage.clear();
                navigate("/activites");
              }}
            />
          </Tooltip>
        </FloatButton.Group>
        <FrontEndFooter />
      </div>
    </>
  );
};

export default FrontEndLayout;
