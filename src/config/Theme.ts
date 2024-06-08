import { AliasToken } from "antd/es/theme/internal";

export const AppColors = {
  primary: "#10338D",
  secondary: "#ffb703",
  alterPrimary: "#0077b6",
  tertiary: "#4F4A4A",
  success: "#52c41a",
  warning: "#faad14",
  error: "#f5222d",
};

export const antdToken: Partial<AliasToken> = {
  colorPrimary: AppColors.primary,
  colorError: AppColors.error,
  colorWarning: AppColors.warning,
  colorSuccess: AppColors.success,
  colorLink: AppColors.primary,
  colorLinkHover: AppColors.primary,
};

export const styleComponentsTheme = {
  colors: AppColors,
};
