import { WEATHER_CODE } from "@/constants/weatherCode";

export const getWeatherIcon = (code: number | string) => {
  const c = Number(code);
  const label = WEATHER_CODE[c]?.toLowerCase() || "";

  if (label.includes("thunder")) return "cloud-lightning";

  if (label.includes("snow") || label.includes("flurries"))
    return "cloud-snow";

  if (
    label.includes("rain") ||
    label.includes("drizzle") ||
    label.includes("freezing")
  )
    return "cloud-rain";

  if (label.includes("fog")) return "cloud-drizzle";

  if (label.includes("clear") || label.includes("sunny"))
    return "sun";

  if (label.includes("cloud")) return "cloud";

  return "cloud"; // fallback
};