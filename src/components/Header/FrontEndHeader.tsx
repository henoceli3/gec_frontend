import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useIsWideScreen from "../../config/useIsWideScreen";
import { useState } from "react";
import { AppColors } from "../../config/Theme";

const FrontEndHeader = () => {
  const isLargerThan768 = useIsWideScreen(768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavigateItemContainer = styled(NavLink)`
    text-decoration: none;
    margin: 0 1rem;
    height: ${isLargerThan768 ? "100%" : "auto"};
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
  function toogleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const navigateItem = [
    {
      path: "/",
      libelle: "Acceuil",
    },
    {
      path: "/activite",
      libelle: "Activité",
    },
    {
      path: "/temoignages",
      libelle: "Temoignages",
    },
  ];
  return (
    <>
      <div
        style={{
          height: "5em",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ height: "100%", width: "auto" }}>
          <img src="/images/logo.png" alt="logo" style={{ height: "100%" }} />
        </div>
        {isLargerThan768 ? (
          <div
            style={{
              height: "100%",
              width: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {navigateItem.map((item) => (
              <NavigateItemContainer key={item.path} to={item.path}>
                <span>{item.libelle}</span>
              </NavigateItemContainer>
            ))}
            <Button type="primary" icon={<FontAwesomeIcon icon={faHeart} />}>
              Faire un don
            </Button>
          </div>
        ) : (
          <div
            style={{
              height: "100%",
              width: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {!isMenuOpen && (
              <FontAwesomeIcon
                icon={faBars}
                color={AppColors.primary}
                size="2x"
                onClick={toogleMenu}
              />
            )}
          </div>
        )}
      </div>
      <Drawer
        open={isMenuOpen}
        onClose={toogleMenu}
        placement="right"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1em",
          }}
        >
          {navigateItem.map((item) => (
            <NavigateItemContainer key={item.path} to={item.path}>
              <span>{item.libelle}</span>
            </NavigateItemContainer>
          ))}
          <Button type="primary" icon={<FontAwesomeIcon icon={faHeart} />}>
            Faire un don
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default FrontEndHeader;
