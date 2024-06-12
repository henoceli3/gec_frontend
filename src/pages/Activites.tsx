import { Col, Row } from "antd";
import HeadImageCard from "../components/Common/HeadImageCard";
import { PageContainer } from "../components/StyledComponents/PageContainers";
import PartLabels from "../components/Common/PartLabels";
import {
  listeActiviteAnnuelles,
  listeActivitesMensuelles,
} from "../config/constantes";
import CardActivites from "../components/Common/CardActivite";

const Activites = () => {
  return (
    <>
      <PageContainer>
        <HeadImageCard
          imageUrl={"/images/utiles/12.jpg"}
          title={"Toutes nos activités"}
          description={
            "Découvrez les initiatives que nous menons pour soutenir notre communauté et renforcer notre mission."
          }
          filigrame
        />

        <Row gutter={[8, 8]} style={{ margin: "0" }}>
          <Col span={12}>
            <PartLabels label="Activité mensuelle" />
          </Col>
          <Col span={24}>
            <Row gutter={[8, 8]} style={{ margin: "0" }}>
              {listeActivitesMensuelles.map((activite, idx) => (
                <Col xs={24} sm={8} md={8} key={idx}>
                  <CardActivites activite={activite} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <PartLabels label="Activité annuelle" />
            <Row gutter={[8, 8]} style={{ margin: "0" }}>
              {listeActiviteAnnuelles.map((activite, idx) => (
                <Col xs={24} sm={8} md={8} key={idx}>
                  <CardActivites activite={activite} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default Activites;
