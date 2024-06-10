import { Col, Row } from "antd";
import useIsWideScreen from "../config/useIsWideScreen";
import { MembreEquipe } from "../config/Interface";
import { listeMembreEquipe } from "../config/constantes";
import PartLabels from "../components/Common/PartLabels";
import CardEquipe from "../components/Common/CardEquipe";

const Acceuil = () => {
  const isLargerThan768 = useIsWideScreen(768);
  return (
    <div style={{ height: "auto", width: "100%", marginBottom: "2rem" }}>
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundImage: "url(/images/utiles/11.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <h1 style={{ color: "white", textAlign: "center" }}>
            Une génération de chretiens qui impacte dans le monde
          </h1>
        </div>
      </div>

      <Row
        gutter={[8, 8]}
        style={{ margin: "0", paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Col span={24}></Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Qui sommes nous ?" />
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            L’ONG, Le petit palmier est une organisation avec pour vision divine
            la formation des enfants et des jeunes de toutes parts à l’écoute du
            Seigneur en vue de les rendre prêts à œuvrer pour le Royaume de Dieu
            dès leur enfance.
          </p>
        </Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Notre mission" />
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            Transformer les enfants à l'image de Jésus-Christ, Bâtir des adultes
            exemplaires, honorables dans la société, Faire partie des meilleurs
            enfants de Dieu, des surdoués, des parents modèles.
          </p>
        </Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Notre vision" />
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            rapprocher les enfants de Leur Père Dieu et leur inculquer également
            les enseignements du Christ et des apôtres avec comme seul outil la
            Bible.
          </p>
        </Col>
        <Col span={isLargerThan768 ? 16 : 24}>
          <PartLabels label="Notre Objectif" />
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            créer une génération de chrétiens qui impacte dans le monde
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
      </Row>
    </div>
  );
};

export default Acceuil;
