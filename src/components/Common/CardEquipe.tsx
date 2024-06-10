import { MembreEquipe } from "../../config/Interface";
import { AppColors } from "../../config/Theme";

interface CardEquipeProps {
  membre: MembreEquipe;
}
const CardEquipe = ({ membre }: CardEquipeProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "40em",
        }}
        className="membre-card"
      >
        <div
          style={{
            backgroundImage: `url(${membre.photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "70%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            height: "30%",
          }}
        >
          <h3
            className="roboto-mono"
            style={{
              color: AppColors.primary,
              textTransform: "capitalize",
              fontSize: "1.5em",
              margin: "0",
            }}
          >
            {membre.nom}
          </h3>
          <p style={{ margin: "0" }}>{membre.role}</p>
        </div>
      </div>
    </>
  );
};

export default CardEquipe;
