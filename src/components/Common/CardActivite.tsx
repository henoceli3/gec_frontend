import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Activites } from "../../config/Interface";
import { AppColors } from "../../config/Theme";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

interface CardActiviteProps {
  activite: Activites;
}
const CardActivites = ({ activite }: CardActiviteProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "30em",
        }}
        className="activite-card"
      >
        <div
          style={{
            backgroundImage: `url(${activite.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "60%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "40%",
          }}
        >
          <h3
            className="roboto-mono"
            style={{ fontSize: "1.5rem", color: AppColors.primary }}
          >
            <span>
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>{" "}
            {activite.title}
          </h3>
          <p style={{ fontSize: "1.2rem" }}>{activite.description}</p>
        </div>
      </div>
    </>
  );
};

export default CardActivites;
