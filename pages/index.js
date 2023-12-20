import Link from 'next/link';
import { FaPaintBrush, FaSearch, FaDigitalOcean } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const numberOfStars = 285;
  const stars = Array.from({ length: numberOfStars }, (_, index) => index);

  return (
 
    <div className="starry-background w-full min-h-screen bg-black">
      {stars.map((_, index) => (
        <div key={index} className="star" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 1}s`,
          animationDelay: `${Math.random() * 2}s`
        }}></div>
      ))}
    <myhead></myhead>
      <main className="container mx-auto p-6 text-gray-800">

      <Image
          src="/images/logggggooooooo.jpg"
          alt="bham seo and design co logo"
          width={800} 
          height={600} 
          className="mx-auto mb-8 max-w-full md:max-w-xl lg:max-w-3xl" 
        />


        <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Expert Web Design & SEO Services</h2>
          <p className="text-lg mb-8 text-gray-600">Elevate your online presence with our tailored solutions in Birmingham, Alabama.</p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
              Get a Free Price Quote Today
            </a>
          </Link>
        </div>

        <section>
          <h3 className="text-3xl text-center font-bold mb-6">Our Services</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Web Design Card */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-3">Web Design</h4>
              <p>Custom, responsive web designs that ensure a seamless user experience across all devices.</p>
              <FaPaintBrush className="text-gray-500 text-4xl mx-auto mt-3" />



            </div>

            {/* SEO Optimization Card */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-3">SEO Optimization</h4>
              <p>Improve your search engine ranking and drive traffic with our expert SEO strategies.</p>
              <FaSearch className="text-gray-500 text-4xl mx-auto mt-3" />
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-3">Digital Marketing</h4>
              <p>Maximize your online potential with targeted digital marketing campaigns.</p>
              <FaDigitalOcean className="text-gray-500 text-4xl mx-auto mt-3" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
