import { Activites } from "../../config/Interface";

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
          <h3>{activite.title}</h3>
          <p>{activite.description}</p>
        </div>
      </div>
    </>
  );
};

export default CardActivites;
