import { Link } from "react-router-dom";


const House = ({ house }) => {
  const { house_title, image, description, rent, _id } = house;

  return (
    <div className="">
     <div className="card bg-base-100 w-96 shadow-md rounded-lg overflow-hidden">
      <figure className="h-48">
        <img src={image} alt="house" className="w-full h-full object-cover rounded-t-lg" />
      </figure>
      <div className="card-body p-5 h-60 ">
        <h2 className="card-title text-xl font-bold">{house_title}</h2>
        <p className="text-lg font-semibold">Rent: {rent}</p>
        <p className="text-gray-600">
          {description?.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
        <div className="card-actions mt-3">
          <Link to={`/allhouses/${_id}`}>
            <button className="bg-gradient-to-r from-accent-content via-gray-900 to-gray-800 text-white px-4 py-2 rounded font-bold cursor-pointer">
              House Details
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default House;
