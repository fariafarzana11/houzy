const ApartmentCard = () => {
  const properties = [
    { city: "Los Angeles", count: 12, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },
    { city: "Miami", count: 20, img: "https://images.rentable.co/112815/60036290/large.jpg" },
    { city: "New York", count: 22, img: "https://www.hotels-newyorkcity.org/data/Pics/OriginalPhoto/9432/943248/943248967/pic-lux-and-modern-flat-with-manhattan-skyline-view-hotel-new-york-24.JPEG" },
    { city: "Chicago", count: 12, img: "https://rent.brookfieldproperties.com/wp-content/uploads/2024/05/Mila-807-LVR2_WEB_Web.jpg" },
    { city: "Washington DC", count: 18, img: "https://cdngeneral.rentcafe.com/dmslivecafe/3/227447/Living%20room%20at%20The%20Belvedere%20Apartments%20in%20Washington%20DC.JPG?crop=(0,0,300,201)&cropxunits=300&cropyunits=201&width=480&quality=90" },
    { city: "Texas", count: 15, img: "https://images1.apartments.com/i2/v1g2DqEfNUk0zgCdrJO7lrCvsS7yl0nn3WbNAB5olgY/117/hunters-creek-apartments-denton-tx-building-photo.jpg?p=1" }
  ];



  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-18">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold">Explore Apartment Types</h1>
        <p className="text-gray-600">Get some inspirations from 1800+ skills</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
            <img src={property.img} alt={property.city} className="h-48 w-full" />


            <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end p-4 text-base-300">
              <h3 className="text-lg font-semibold">{property.city}</h3>
              <p className="text-sm">{property.count} Properties</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentCard;
