import { Col, Row } from "antd";
import useIsWideScreen from "../config/useIsWideScreen";
import { MembreEquipe } from "../config/Interface";
import {
  listeActiviteAnnuelles,
  listeActivitesMensuelles,
  listeMembreEquipe,
} from "../config/constantes";
import PartLabels from "../components/Common/PartLabels";
import CardEquipe from "../components/Common/CardEquipe";
import HeadImageCard from "../components/Common/HeadImageCard";
import { PageContainer } from "../components/StyledComponents/PageContainers";
import CardActivites from "../components/Common/CardActivite";
import { StyleRow } from "../components/Common/StyledRow";

const Acceuil = () => {
  const isLargerThan768 = useIsWideScreen(768);
  return (
    <PageContainer style={{ marginBottom: "2rem" }}>
      <HeadImageCard
        imageUrl={"/images/utiles/11.jpg"}
        title={"Une génération de chretiens qui impacte dans le monde"}
      />
      <StyleRow gutter={[16, 16]} style={{ margin: "0" }}>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Qui sommes nous ?" />
          <p style={{  fontSize: "1.2em" }}>
            L’ONG, Le petit palmier est une organisation avec pour vision divine
            la formation des enfants et des jeunes de toutes parts à l’écoute du
            Seigneur en vue de les rendre prêts à œuvrer pour le Royaume de Dieu
            dès leur enfance.
          </p>
        </Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Notre mission" />
          <p style={{  fontSize: "1.2em" }}>
            Transformer les enfants à l'image de Jésus-Christ, Bâtir des adultes
            exemplaires, honorables dans la société, Faire partie des meilleurs
            enfants de Dieu, des surdoués, des parents modèles.
          </p>
        </Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Notre vision" />
          <p style={{  fontSize: "1.2em" }}>
            Rapprocher les enfants de Leur Père Dieu et leur inculquer également
            les enseignements du Christ et des apôtres avec comme seul outil la
            Bible.
          </p>
        </Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Notre Objectif" />
          <p style={{  fontSize: "1.2em" }}>
            Créer une génération de chrétiens qui impacte dans le monde
          </p>
        </Col>
        <Col span={24}>
          <PartLabels label="Notre Equipe" />
          <Row gutter={[8, 8]}>
            {listeMembreEquipe.map((membre: MembreEquipe, idx) => (
              <Col xs={24} sm={12} md={8} key={idx}>
                <CardEquipe membre={membre} />
              </Col>
            ))}
          </Row>
        </Col>
      </StyleRow>
      <StyleRow gutter={[8, 8]} style={{ margin: "0" }}>
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
        <Col span={24}>
          <PartLabels label="Activité annuelle" />
          <Row gutter={[8, 8]} style={{ margin: "0" }}>
            {listeActiviteAnnuelles.map((activite, idx) => (
              <Col xs={24} sm={8} md={8} key={idx}>
                <CardActivites activite={activite} />
              </Col>
            ))}
          </Row>
        </Col>
      </StyleRow>
    </PageContainer>
  );
};

export default Acceuil;
