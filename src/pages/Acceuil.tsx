const Acceuil = () => {
  return (
    <>
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundImage: "url(/images/11.jpg)",
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
          <h1 style={{ color: "white" }}>
            Une génération de chretiens qui impacte dans le monde
          </h1>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
