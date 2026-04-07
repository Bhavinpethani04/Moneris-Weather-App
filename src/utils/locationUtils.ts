export const extractCityName = (location: string) => {
  if (!location) return "";

  return location.split(",")[0].trim();
};
