import { MembreEquipe } from "../../config/Interface";

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
