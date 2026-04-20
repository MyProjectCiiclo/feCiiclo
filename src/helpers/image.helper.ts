const BASE_URL = "https://beciiclo-2.onrender.com";

export function getImageUrl(image: string) {
  if (!image) return "";

  if (image.startsWith("http")) {
    return image;
  }

  return `${BASE_URL}/storage/${image.replace(/^\/?storage\//, "")}`;
}