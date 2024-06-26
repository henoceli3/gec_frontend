import useIsWideScreen from "../../config/useIsWideScreen";

interface Props {
  imageUrl: string;
  filigrame?: boolean;
  filigrameColor?: string;
  title: string;
  description?: string;
}
const HeadImageCard = ({
  imageUrl,
  filigrame,
  filigrameColor,
  title,
  description,
}: Props) => {
  const isLargerThan768 = useIsWideScreen(768);
  return (
    <>
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: filigrame
              ? filigrameColor || "#10338d73"
              : "transparent",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontSize: isLargerThan768 ? "3em" : "2em",
                margin: 0,
              }}
              className="gwendolyn-bold"
            >
              {title}
            </h1>
            {description && (
              <p style={{ color: "white", textAlign: "center" }}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadImageCard;
