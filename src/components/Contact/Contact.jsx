const Contact = () => {
    return (
      <div className="mt-20 bg-gray-100 p-8 rounded-2xl max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-2">Need help? Talk to our expert.</h2>
          <p className="text-gray-600">Talk to our experts or Browse through more properties.</p>
        </div>
  
        <div className="flex mt-4 sm:mt-0 gap-4">
          <button className="flex items-center justify-center gap-2 border border-black px-4 py-2 rounded-lg hover:bg-gray-200">
            Contact Us <span className="text-lg">↗</span>
          </button>
  
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-2 rounded-lg">
            <span className="material-icons">Call</span>
            977 111 9876
          </button>
        </div>
      </div>
    );
  };
  
  export default Contact;
  