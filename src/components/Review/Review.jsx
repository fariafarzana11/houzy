import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      name: "John David",
      title: "IT Manager",
      text: "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitkisi mauris eget lorem ultricies ferme ntum a inti diam.",
      stars: 5,
      img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
    },
    {
      name: "William David",
      title: "Software Engineer",
      text: "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitkisi mauris eget lorem ultricies ferme ntum a inti diam.",
      stars: 5,
      img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
    },
    {
      name: "James Richard",
      title: "Civil Engineer",
      text: "Amorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras etitkisi mauris eget lorem ultricies ferme ntum a inti diam.",
      stars: 5,
      img: "https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 mt-20">
      <h2 className="text-center text-2xl font-bold mb-8"> REVIEWS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
            </div>
            <h3 className="text-lg font-bold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.title}</p>
            <p className="text-gray-600 mt-4">{review.text}</p>
            <div className="flex justify-center mt-4">
              {Array.from({ length: review.stars }).map((_, starIndex) => (
                <span key={starIndex} className="text-gray-900 text-xl"><FaStar /></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
