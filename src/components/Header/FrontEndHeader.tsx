import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer } from "antd";
import useIsWideScreen from "../../config/useIsWideScreen";
import { useEffect, useState } from "react";
import { AppColors } from "../../config/Theme";
import { navigateItems } from "../../config/constantes";
import { HeaderProps } from "../../config/Interface";

const Header = styled.div<HeaderProps>`
  height: 5em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ isscrolle }) =>
    isscrolle ? "rgba(255, 255, 255, 0.5)" : "transparent"};
  position: ${({ isscrolle }) => (isscrolle ? "fixed" : "relative")};
  z-index: 100;
`;
const HeaderContainer = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: auto;
`;

const DesktopMenu = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MobileMenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const DrawerContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavigateItemContainer = styled(NavLink)`
  text-decoration: none;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    & > span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

// Composant principal
const FrontEndHeader = () => {
  const isLargerThan768 = useIsWideScreen(768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolle, setIsScrolle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolle(true);
      } else {
        setIsScrolle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header isscrolle={isScrolle}>
        <HeaderContainer>
          <LogoContainer>
            <img src="/images/logo.png" alt="logo" style={{ height: "100%" }} />
          </LogoContainer>
          {isLargerThan768 ? (
            <DesktopMenu>
              {navigateItems.map((item) => (
                <NavigateItemContainer key={item.path} to={item.path}>
                  <span>{item.label}</span>
                </NavigateItemContainer>
              ))}
              <Button
                type="primary"
                icon={<FontAwesomeIcon icon={faHeart} />}
                onClick={() => {
                  navigate("/dons");
                }}
              >
                Faire un don
              </Button>
            </DesktopMenu>
          ) : !isMenuOpen ? (
            <MobileMenuIcon
              icon={faBars}
              color={AppColors.primary}
              size="2x"
              onClick={toggleMenu}
            />
          ) : null}
        </HeaderContainer>
      </Header>

      <Drawer
        open={isMenuOpen}
        onClose={toggleMenu}
        placement="right"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <DrawerContainer>
          {navigateItems.map((item) => (
            <NavigateItemContainer
              key={item.path}
              to={item.path}
              onClick={toggleMenu}
            >
              <span style={{ fontSize: "1.5em" }}>{item.label}</span>
            </NavigateItemContainer>
          ))}
          <Button
            type="primary"
            icon={<FontAwesomeIcon icon={faHeart} />}
            onClick={() => {
              navigate("/dons");
              toggleMenu();
            }}
          >
            Faire un don
          </Button>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default FrontEndHeader;
