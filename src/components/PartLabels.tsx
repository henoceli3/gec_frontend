import { AppColors } from "../config/Theme";

const PartLabels = ({ label }) => {
  return (
    <>
      <h1 style={{ color: AppColors.primary }}>{label}</h1>
    </>
  );
};

export default PartLabels;
