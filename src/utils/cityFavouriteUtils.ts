export const isCityFavourite = (
  cityName: string,
  favourites: string[],
): boolean => {
  return favourites.some(
    (fav) => fav.toLowerCase().trim() === cityName.toLowerCase().trim(),
  );
};
