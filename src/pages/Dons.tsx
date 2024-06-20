import { Col } from "antd";
import { PageContainer } from "../components/StyledComponents/PageContainers";
import { StyleRow } from "../components/Common/StyledRow";
import HeadImageCard from "../components/Common/HeadImageCard";
import useIsWideScreen from "../config/useIsWideScreen";
import { AppColors } from "../config/Theme";
import { listeStats } from "../config/constantes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import useScrollTriggeredCountUp from "../components/Common/UseScrollTriggeredCountUp";
import React from "react";

const Dons = () => {
  const isLargerThan768 = useIsWideScreen(768);
  const refs = useRef(listeStats.map(() => React.createRef<HTMLDivElement>()));
  const counts = listeStats.map((stat, index) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollTriggeredCountUp(refs.current[index], stat.stat)
  );

  return (
    <PageContainer style={{ marginBottom: "2rem" }}>
      <HeadImageCard
        imageUrl={"/images/utiles/15.jpg"}
        title={"Nous avons besoin de vous !"}
      />
      <StyleRow gutter={[16, 16]} style={{ margin: "0" }}>
        <Col span={24}>
          <p style={{ fontSize: isLargerThan768 ? "2em" : "1em" }}>
            Notre ONG œuvre depuis{" "}
            <span style={{ fontWeight: "bold" }}>le 12 avril 2014</span> à la
            formation des enfants.
          </p>
          <p
            style={{
              fontSize: isLargerThan768 ? "2em" : "1.2em",
              fontWeight: "bold",
              color: AppColors.primary,
            }}
          >
            Le GEC en chiffres, c'est :
          </p>
        </Col>
        {listeStats.map((stat, index) => (
          <Col xs={24} sm={4} md={4} key={index}>
            <div
              ref={refs.current[index]}
              style={{
                backgroundImage: `url(${stat.image})`,
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "15em",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: "10px",
                  color: AppColors.secondary,
                }}
              >
                <FontAwesomeIcon
                  icon={stat.icon}
                  style={{ fontSize: "2.8em" }}
                />
                <p style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                  {counts[index]}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </StyleRow>
    </PageContainer>
  );
};

export default Dons;
