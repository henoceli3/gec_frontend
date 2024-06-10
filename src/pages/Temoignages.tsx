import { Col, Row } from "antd";
import HeadImageCard from "../components/Common/HeadImageCard";
import { listeTemoignages } from "../config/constantes";
import CardTemoignages from "../components/Common/CardTemoignages";
import { PageContainer } from "../components/StyledComponents/PageContainers";

const Temoignages = () => {
  return (
    <>
      <PageContainer>
        <HeadImageCard
          imageUrl={"/images/utiles/8.jpg"}
          title={"Temoignages"}
          filigrame
        />
        <Row gutter={[8, 8]} style={{ margin: "0", marginTop: "2rem" }}>
          {listeTemoignages.map((temoignage, idx) => (
            <Col span={24} key={idx}>
              <CardTemoignages
                temoignage={temoignage}
                place={idx + 1}
                key={idx}
              />
            </Col>
          ))}
        </Row>
      </PageContainer>
    </>
  );
};

export default Temoignages;
