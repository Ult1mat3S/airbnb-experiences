import katieZaferes from "./assets/images/katiezaferes.png";
import weddingPhotography from "./assets/images/weddingphotography.png";
import mountainBike from "./assets/images/mountainbike.png";

export default [
  {
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    alt: 'Katie Zaferes in swimming outfit with text labeled "ZAFERES USA" on the front',
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg: katieZaferes,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Learn Wedding Photography",
    alt: "Woman in wedding outfit staring into the camera with hands positioned in front",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg: weddingPhotography,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    alt: "Positioned behind the back wheel of a mountain bike, overview of the lower landscape that is next to a mountain",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: mountainBike,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
  },
];
