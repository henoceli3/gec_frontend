import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Activites } from "../../config/Interface";
import { AppColors } from "../../config/Theme";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import useIsWideScreen from "../../config/useIsWideScreen";

interface CardActiviteProps {
  activite: Activites;
}
const CardActivites = ({ activite }: CardActiviteProps) => {
  const isLargerThan768 = useIsWideScreen(768);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: isLargerThan768 ? "30em" : "auto",
        }}
        className="activite-card"
      >
        <div
          style={{
            backgroundImage: `url(${activite.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: isLargerThan768 ? "60%" : "30em",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: isLargerThan768 ? "40%" : "auto",
          }}
        >
          <h3
            className="roboto-mono"
            style={{ fontSize: "1.5rem", color: AppColors.secondary }}
          >
            <span>
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>{" "}
            {activite.title}
          </h3>
          <p style={{ fontSize: "1.1em" }}>{activite.description}</p>
        </div>
      </div>
    </>
  );
};

export default CardActivites;
