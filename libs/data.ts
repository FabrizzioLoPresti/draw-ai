import { ICard } from "@/interfaces/Card";
import { IImageGallery } from "@/interfaces/ImageGallery";

const cards: ICard[] = [
  {
    icon: "/Icons/search.svg",
    title: "Discover",
    description: "the power of AI generated images"
  },
  {
    icon: "/Icons/draw.svg",
    title: "Draw",
    description: "your own image"
  },
  {
    icon: "/Icons/generate.svg",
    title: "Generate",
    description: "images based on your drawing"
  },
  {
    icon: "/Icons/share.svg",
    title: "Share",
    description: "your drawing with the world"
  }
]

const imagesGallery: IImageGallery[] = [
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758865/cat_watching_the_sunset_u7rgdt.jpg",
    alt: "Cat watching the sunset"
  },
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758857/cat_watching_the_sunset_2_c29ikt.jpg",
    alt: "Cat watching the sunset 2"
  },
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758859/cat_watching_the_sunset_3_m5lybw.jpg",
    alt: "Cat watching the sunset 3"
  },
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758857/cat_watching_the_sunset_4_nurzbo.jpg",
    alt: "Cat watching the sunset 4"
  },
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758863/this_cat_watching_the_sunset_znhtvb.png",
    alt: "This cat watching the sunset"
  },
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758858/ninja_running_in_the_rain_k5uhcp.jpg",
    alt: "Ninja running in the rain"
  },
  {
    url: "https://res.cloudinary.com/dqaun4x76/image/upload/v1691758857/ninja_running_in_the_rain_2_fw3vnk.jpg",
    alt: "Ninja running in the rain 2"
  }
]

export {
  cards,
  imagesGallery
}