export interface WeatherApiResponse {
  data: {
    time: string;
    values: WeatherApiResponseValues;
  };
  location: WeatherApiResponseLocation;
}

export interface WeatherApiResponseValues {
  humidity: number;
  temperature: number;
  uvIndex: number;
  visibility: number;
  weatherCode: number;
  windDirection: number;
  windSpeed: number;
}

export interface WeatherApiResponseLocation {
  lat: number;
  lon: number;
  name: string;
  type: string;
}
