import { AliasToken } from "antd/es/theme/internal";

export const appColors = {
  primary: "#1890ff",
  secondary: "#bfbfbf",
  success: "#52c41a",
  warning: "#faad14",
  error: "#f5222d",
};

export const antdToken: Partial<AliasToken> = {
  colorPrimary: appColors.primary,
  colorError: appColors.error,
  colorWarning: appColors.warning,
  colorSuccess: appColors.success,
  colorLink: appColors.primary,
  colorLinkHover: appColors.primary,
};

export const styleComponentsTheme = {
  colors: appColors,
};
