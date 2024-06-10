import { MembreEquipe } from "../../config/Interface";
import useIsWideScreen from "../../config/useIsWideScreen";

interface CardEquipeProps {
  membre: MembreEquipe;
}
const CardEquipe = ({ membre }: CardEquipeProps) => {
  const isLargerThan768 = useIsWideScreen(768);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "40em",
          borderRadius: isLargerThan768 ? "1em" : "0.5em",
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
            borderRadius: isLargerThan768 ? "1em 1em 0 0" : "0.5em 0.5em 0 0",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "30%",
          }}
        >
          <h3>{membre.nom}</h3>
          <p>{membre.role}</p>
        </div>
      </div>
    </>
  );
};

export default CardEquipe;
