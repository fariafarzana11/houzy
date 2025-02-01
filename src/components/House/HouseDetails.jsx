import { useLoaderData, useNavigate } from "react-router-dom";

const HouseDetails = () => {
  const house = useLoaderData();

  const { house_title, segment_name, area, facilities, description, location, rent, image } = house;
 


  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="mt-20 text-center font-bold text-4xl text-white py-3 rounded bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        House Details
      </h2>
      <div className="mt-4 shadow-sm bg-gray-200">
        <div className="border-blue-300 p-2">
          <h1 className="font-bold text-2xl mt-5 text-center">{house_title}</h1>
          <div className="flex gap-20">
            <img src={image} alt="House" className="mt-5 w-150  h-auto rounded-lg shadow-lg" />
            <div className="flex flex-col justify-center">

              <h2 className="font-bold text-lg mt-3">Location: <span className="font-normal">{location}</span></h2>
              <h1 className="font-bold text-lg mt-3">Rent: <span className="font-normal">{rent}</span></h1>
              <h2 className="font-bold text-lg mt-3">Segment Name: <span className="font-normal">{segment_name}</span></h2>
              <h2 className="font-bold text-lg mt-3">Area: <span className="font-normal">{area}</span></h2>
              <h2 className="font-bold text-lg mt-3">
                Facilities:
                <span className="font-normal">
                  {facilities && facilities.length > 0 ? (
                    <ul className="mt-2 list-disc list-inside">
                      {facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                      ))}
                    </ul>
                  ) : (
                    " No facilities available"
                  )}
                </span>
              </h2>

            </div>
          </div>
          <p className="text-lg mt-2">{description}</p>

          <div className='mt-5'>
            <button type="button" className='text-center p-3 w-40 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white font-bold rounded-lg cursor-pointer' onClick={goToHome}>Booking Now</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
