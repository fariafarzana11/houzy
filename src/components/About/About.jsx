const About = () => {


    return (
        <div className="max-w-7xl mx-auto w-full mt-10 ">
            <div className="flex flex-cols gap-20">
                <div>
                    <h1 className="text-4xl font-bold mt-30">About Us</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem excepturi nostrum modi! Ipsam, soluta! Eaque veniam aperiam cupiditate ducimus?</p>
                    <button className="bg-gray-900 text-white p-2 rounded w-[120px] mt-4">More</button>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/307/449/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg" alt="" />
            </div>

            <div>
                <h1 className="text-2xl font-bold text-center mt-20 ">Apartment Booking</h1>
                <div className="flex flex-cols-3 gap-12 text-center">
                    <div className="card glass w-96 mt-20">
                        <figure>
                            <img className="w-[385px] h-[200px]"
                                src="https://www.realestate.com.au/news-image/w_2000,h_1500/v1722475052/news-lifestyle-content-assets/wp-content/production/METR609460_Vantage_Facade_003-1.jpg?_i=AA"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Apartment Rent</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, distinctio!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card glass w-96 mt-20">
                        <figure>
                            <img className="w-[385px] h-[200px]"
                                src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/banner-main.webp?version=2066"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Apartment Rent</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card glass w-96 mt-20">
                        <figure>
                            <img className="w-[385px] h-[200px]"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC64aTGyIZ81Y2tnd1C0WOKuXdgxCmLpTkMQ&s"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Apartment Rent</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nostrum!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About