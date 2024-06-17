import { Button, Col, Input, Row } from "antd";
import useIsWideScreen from "../../config/useIsWideScreen";
import { AppColors } from "../../config/Theme";
import { navigateItems } from "../../config/constantes";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const FooterColoneLabel = styled.p`
  font-size: 1.5em;
`;
const FrontEndFooter = () => {
  const isLargerThan768 = useIsWideScreen(768);
  const navigate = useNavigate();
  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{
          margin: "0",
          marginTop: "auto",
          width: "100%",
          height: isLargerThan768 ? "30em" : "auto",
          backgroundColor: AppColors.tertiary,
          color: "white",
          padding: isLargerThan768 ? "2rem" : "1rem",
        }}
      >
        <Col span={isLargerThan768 ? 8 : 12}>
          <FooterColoneLabel>Navigation</FooterColoneLabel>
          {navigateItems.map((item) => (
            <p
              key={item.path}
              style={{ color: "#9B9B9B", cursor: "pointer" }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </p>
          ))}
        </Col>

        <Col span={isLargerThan768 ? 8 : 12}>
          <FooterColoneLabel>Contactes</FooterColoneLabel>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.open("tel:+22507777777")}
          >
            <FontAwesomeIcon icon={faPhone} color={AppColors.secondary} /> +225
            0707447196
          </p>
          <p
            style={{ cursor: "pointer", marginTop: "1rem" }}
            onClick={() => window.open("tel:+22507777777")}
          >
            <FontAwesomeIcon icon={faPhone} color={AppColors.secondary} /> +225
            0158788806
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.open("mailto:info-gec@gec.org")}
          >
            <span>
              <FontAwesomeIcon icon={faEnvelope} color={AppColors.secondary} />
            </span>{" "}
            secretariat@petitpalmier.org
          </p>
          <p>Rétrouvez nous sur les reseaux sociaux</p>
          <div>
            <img
              src="/images/rs/facebook.png"
              alt="facebook"
              style={{ height: "30px", cursor: "pointer" }}
            />
          </div>
        </Col>
        <Col span={isLargerThan768 ? 8 : 24}>
          <FooterColoneLabel>Newsletter</FooterColoneLabel>
          <Input placeholder="Email" />
          <Button type="primary" style={{ marginTop: "1rem" }}>
            Souscrire
          </Button>
        </Col>
        <Col
          span={24}
          style={{
            textAlign: "center",
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <small>
            <span>
              <FontAwesomeIcon icon={faCopyright} />
            </span>{" "}
            2024 GEC
          </small>
          <small
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open("https://kodjo-henoc.vercel.app/");
            }}
          >
            Conçut par{" "}
            <span style={{ color: "#9B9B9B", fontWeight: "bold" }}>
              KODJO HENOC
            </span>
          </small>
        </Col>
      </Row>
    </>
  );
};

export default FrontEndFooter;
