'use client';

import SingleCarousel from './singleCarousel';

const CarouselPage = () => {
  const hotelData = [
    {
      id: 1,
      name: "Hotel ABC",
      discription: "A luxurious 5-star hotel with amazing amenities",
      content: "Experience the perfect blend of luxury and comfort in our newly renovated rooms with breathtaking city views.",
      image: "/images/Carousel/c1.jpg",
      star: 5,
    },
    {
      id: 2,
      name: "Resort XYZ",
      discription: "Beachfront paradise with private access",
      content: "Escape to our tropical paradise where every room offers stunning ocean views and world-class service.",
      image: "/images/Carousel/c2.jpg",
      star: 4,
    },
    {
      id: 3,
      name: "Boutique Hotel Elegance",
      discription: "Intimate boutique hotel in historic district",
      content: "Discover the charm of our boutique hotel, where every detail is carefully curated for your perfect stay.",
      image: "/images/Carousel/c3.jpg",
      star: 5,
    },
    {
      id: 4,
      name: "Grand Plaza Hotel",
      discription: "Urban luxury in the heart of the city",
      content: "Located in the prime location, our hotel offers modern amenities with traditional hospitality.",
      image: "/images/Carousel/c4.jpg",
      star: 5,
    }
  ];

  return <SingleCarousel items={hotelData} />;
};

export default CarouselPage;
