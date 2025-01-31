

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className='max-w-7xl mx-auto text-center mt-15'>
      <h1 data-aos="fade-up" className='text-2xl'>Blog</h1>
      <p data-aos="fade-right">
        This paragraph will animate from the right as you scroll.
      </p>
      <div data-aos="zoom-in" style={{ height: '300px' }}>
        <img className='h-[300px] w-[1400px]' src="https://ca-times.brightspotcdn.com/dims4/default/a517b34/2147483647/strip/false/crop/2000x1125+0+35/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fad%2Ff4%2F1f1b2193479eafb7cbba65691184%2F10480-sunset-fullres-01.jpg" alt="" />
      </div>
    </div>
  );
};

export default Blog;
