import { AppColors } from "../../config/Theme";

interface Props {
  label: string;
  style?: React.CSSProperties;
}
const PartLabels = ({ label, style }: Props) => {
  return (
    <>
      <h1
        className="roboto-mono"
        style={{
          color: AppColors.primary,
          textTransform: "capitalize",
          ...style,
        }}
      >
        {label}
      </h1>
    </>
  );
};

export default PartLabels;
