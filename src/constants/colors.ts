export const COLORS = {
  white: "#FFFFFF",
  black: "#212121",
  darkGray: "#9E9E9E",
  lightGray: "#ECEFF1",
  success: "#5cb85c",
  error: "#d9534f",
  warning: "#f0ad4e",
  info: "#5bc0de",
  weatherCardCityLabel: "#455A64",
  weatherIconViewBg: "#E6F1FB",
  weatherIconColor: "#185FA5",
  placeholderBg: "#CFD8DC",
  placeholderText: "#263238",
  activeTabColor: "#334155",
} as const;

export type Color = keyof typeof COLORS;
