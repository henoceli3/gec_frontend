import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Temoignages } from "../../config/Interface";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import useIsWideScreen from "../../config/useIsWideScreen";

interface CardTemoignagesProps {
  temoignage: Temoignages;
  place: number;
}
const CardTemoignages = ({ temoignage, place }: CardTemoignagesProps) => {
  const isLargerThan768 = useIsWideScreen(768);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: isLargerThan768
            ? place % 2 != 0
              ? "row"
              : "row-reverse"
            : "column",
          width: "100%",
          height: isLargerThan768 ? "30em" : "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isLargerThan768 ? "40%" : "100%",
            height: isLargerThan768 ? "100%" : "30em",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "90%",
              backgroundImage: `url(${temoignage.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div
          style={{
            width: isLargerThan768 ? "60%" : "100%",
            height: isLargerThan768 ? "100%" : "30em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              <span>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>{" "}
              {temoignage.temoignage}{" "}
              <span>
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
            </p>
            <div style={{ marginLeft: "auto" }}>
              <p style={{ fontWeight: "bold" }}>{temoignage.nom}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTemoignages;
