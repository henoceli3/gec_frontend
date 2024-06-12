import { useEffect, useState } from "react";
import { ImageGalerie } from "../config/Interface";
import { Col, Image, Row } from "antd";

const Galerie = () => {
  const [imageListe, setImageListe] = useState<ImageGalerie[]>(
    [] as ImageGalerie[]
  );

  function getImagesListe() {
    const liste: ImageGalerie[] = [] as ImageGalerie[];
    for (let i = 1; i < 267; i++) {
      liste.push({
        image: `/images/galerie/${i}.jpg`,
      });
    }
    setImageListe(liste);
  }

  useEffect(() => {
    getImagesListe();
  }, [imageListe]);

  return (
    <>
      <Row gutter={[16, 16]} style={{ margin: "0" }}>
        <Image.PreviewGroup>
          {imageListe.map((image, idx) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              key={idx}
              style={{ borderRadius: "10px" }}
            >
              <Image
                src={image.image}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Col>
          ))}
        </Image.PreviewGroup>
      </Row>
    </>
  );
};

export default Galerie;
