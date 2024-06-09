import { AppColors } from "../config/Theme";
interface Props {
  label: string;
}
const PartLabels = ({ label }: Props) => {
  return (
    <>
      <h1 style={{ color: AppColors.primary }}>{label}</h1>
    </>
  );
};

export default PartLabels;
