import { AppColors } from "../../config/Theme";

interface Props {
  label: string;
}
const PartLabels = ({ label }: Props) => {
  return (
    <>
      <h1 style={{ color: AppColors.primary, textTransform: "capitalize" }}>{label}</h1>
    </>
  );
};

export default PartLabels;
