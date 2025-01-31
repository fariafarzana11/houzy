import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GiMushroomHouse } from "react-icons/gi";

const Footer = () => {

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <footer className="footer sm:footer-horizontal bg-gray-900 p-20 text-white">
                <nav>
                    <h6 className="flex items-center gap-1"><GiMushroomHouse className="text-accent-content text-lg"/><span className="text-lg font-bold">Houzy</span></h6>
                    <p className="text-gray-400 mt-2 ml-5">
                        The world’s first and largest digital <br /> market for crypto collectibles.
                    </p>

                    <p className="text-gray-400 flex items-center gap-2 mt-3">
                        <FaLocationDot className="text-accent-content" />
                        <span>86 Road Broklyn Street, New York, USA</span>
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 mt-2">
                        <IoMdMail className="text-accent-content" />
                        <span>Example@example.com</span>
                    </p>
                </nav>

                <nav>
                    <h6 className="text-lg font-bold">Services</h6>
                    <a className="link link-hover text-gray-400">Apartment for Rent</a>
                    <a className="link link-hover text-gray-400">Apartment Low to High</a>
                    <a className="link link-hover text-gray-400">Offices for Buy</a>
                    <a className="link link-hover text-gray-400">Offices for Rent</a>
                </nav>

                <nav>
                    <h6 className="text-lg font-bold">Quick Links</h6>
                    <a className="link link-hover text-gray-400">About Us</a>
                    <a className="link link-hover text-gray-400">Contact</a>
                    <a className="link link-hover text-gray-400">Service Details</a>
                    <a className="link link-hover text-gray-400">Add Listing</a>
                </nav>

                <nav>
                    <h6 className="text-lg font-bold">Contact</h6>
                    <a className="link link-hover text-gray-400">Help/FAQ</a>
                    <a className="link link-hover text-gray-400">House Owners</a>
                    <a className="link link-hover text-gray-400">Contact Support</a>
                    <a className="link link-hover text-gray-400">Pricing Plans</a>
                </nav>

                <form>
                    <h6 className="text-white text-lg font-bold">Newsletter</h6>
                    <fieldset className="w-80 flex items-center">
                        <div className="join flex w-full">
                            <input type="text" placeholder="Enter your email address" className="input input-bordered bg-gray-700 text-white border-transparent w-full" />
                            <button className="text-white bg-gradient-to-r from-gray-800 via-accent-content to-gray-800 p-2 join-item">Subscribe</button>
                        </div>
                    </fieldset>

                    <nav className="grid grid-cols-3 gap-4 md:place-self-center md:justify-self-center items-center mt-4">
                        <a className="p-2 rounded-full border border-white transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-accent-content">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a className="p-2 rounded-full border border-white transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-accent-content">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a className="p-2 rounded-full border border-white transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-accent-content">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </nav>
                </form>
            </footer>

            <footer className="flex items-center justify-center bg-gray-800 text-white py-4">
                <p className="text-center whitespace-nowrap">
                    © Copyright {new Date().getFullYear()} | All rights reserved <span className="text-accent-content inline-block"><FaHeart /></span> by Houzy
                </p>
            </footer>
        </div>
    )
}
export default Footer;