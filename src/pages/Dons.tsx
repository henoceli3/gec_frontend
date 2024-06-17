import { Col } from "antd";
import { PageContainer } from "../components/StyledComponents/PageContainers";
import PartLabels from "../components/Common/PartLabels";
import { StyleRow } from "../components/Common/StyledRow";

const Dons = () => {
  return (
    <PageContainer style={{ marginBottom: "2rem" }}>
      <StyleRow gutter={[16, 16]} style={{ margin: "0" }}>
        <Col span={24}>
          <PartLabels label="Le GEC c'est :" />
        </Col>
      </StyleRow>
    </PageContainer>
  );
};

export default Dons;
