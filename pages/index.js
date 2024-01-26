import Link from 'next/link';
import { FaPaintBrush, FaSearch, FaDigitalOcean } from 'react-icons/fa';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function Home() {

  // Generate starry background
  const numberOfStars = 285;
  const stars = Array.from({ length: numberOfStars }, (_, index) => index);

  return (
     <>
   <NextSeo
       title="Home Page - Bham Web Design and SEO Co."
      description="Bham SEO and Web Design Co offers expert Web Design and SEO Services to businesses and organizations in Birmingham, Alabaster, Hoover, and Mountain Brook, Alabama, as well as nationwide. Our team of dedicated professionals specializes in creating stunning websites that not only look great but also perform exceptionally well in search engine rankings. With our comprehensive SEO strategies, we help businesses improve their online visibility, drive organic traffic, and achieve higher search engine rankings. Whether you're looking for a responsive website, SEO optimization, or a digital marketing partner, we've got you covered. Elevate your online presence with Bham SEO and Web Design Co."
      additionalMetaTags={[
        { name: 'author', content: 'Peyton' },
        { name: 'designer', content: 'Web Design Expert' },
        { name: 'seo-expert', content: 'SEO Specialist' },
        { name: 'industry', content: 'Digital Marketing' },
        { name: 'contact-email', content: 'services@bhamseoanddesignco.com' },
      ]}
      additionalLinkTags={[
        {
          rel: 'canonical',
          href: 'https://bhamseoanddesignco.com/',
        },
      ]}
      
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://bhamseoanddesignco.com/',
        site_name: 'Bham SEO and Web Design Co',
        images: [
          {
            url: 'https://bhamseoanddesignco.com/images/logggggooooooo.jpg',
            width: 1200,
            height: 630,
            alt: 'Bham Web Design and SEO Co. Logo Image',
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
        images: [
          {
            url: 'https://bhamseoanddesignco.com/images/logggggooooooo.jpg',
            alt: 'Bham Web Design and SEO Co. Logo Image',
          },
        ],
      }}
     />
 
    <div className="starry-background w-full min-h-screen bg-black">

      {/* RENDER STAR ELEMENTS */}
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

      {/* RENDER LOGO IMAGE */}
      <Image
          src="/images/logggggooooooo.jpg"
          alt="bham seo and design co logo"
          width={800} 
          height={600} 
          className="mx-auto mb-8 max-w-full md:max-w-xl lg:max-w-3xl" 
        />

        {/* MAIN HEADING */}
        <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Expert Web Design & SEO Services</h2>
          <p className="text-lg mb-8 text-gray-600">Elevate your online presence with our tailored solutions in Alabama.</p>
          
          {/* CONTACT PAGE BUTTON */} 
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
              Get a Free Price Quote Today
            </a>
          </Link>
        </div>

{/* Our Services Section */}
<section>

    {/* Section Heading */}
    <h3 className="text-3xl text-center font-bold mb-6">
       Our Services
    </h3>

    {/* Service Cards */}
    <div className="flex flex-wrap justify-center gap-10">

    {/* Web Design Card */}
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-bold mb-3">
          Web Design
      </h4>
              <p>
                Custom, responsive web designs that ensure a seamless user experience across all devices.
              </p>
              <FaPaintBrush className="text-gray-500 text-4xl mx-auto mt-3" />
            </div>

            {/* SEO Optimization Card */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-3">
                SEO Optimization
              </h4>
              <p>
                Improve your search engine ranking and drive traffic with our expert SEO strategies.
              </p>
              <FaSearch className="text-gray-500 text-4xl mx-auto mt-3" />
            </div>

            {/* Digital Marketing Card */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold mb-3">
                Digital Marketing
              </h4>
              <p>
                Maximize your online potential with targeted digital marketing campaigns.
              </p>
              <FaDigitalOcean className="text-gray-500 text-4xl mx-auto mt-3" />
            </div>
          </div>
        </section>

  {/* EXPLORE WEB DESIGN */}          
  <div className="mt-20 mb-20 mx-auto py-8 px-4 rounded-2xl shadow-xl overflow-hidden relative z-10" style={{ maxWidth: '90%', backgroundColor: 'white' }}>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
    <div className="space-y-8 text-center"> 
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
        Explore Our Web Development Services
      </h3>
      <p className="text-md md:text-lg text-gray-600">
        Discover how our tailored web development solutions can elevate your business, leveraging the latest technologies and innovative design.
      </p>
      <Link href="/PackagePage" legacyBehavior>
        <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
          Learn More
        </a>
      </Link>
    </div>
    <div className="flex justify-center items-center">
      <div className="relative w-full h-64 md:h-96"> 
        <Image
          src="/images/ggggggg.jpg"
          alt="Web Development"
          layout="fill"
          objectFit="contain" 
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

{/* EXPLORE SEO SERVICES */}
<div className="mt-20 mb-20 mx-auto py-8 px-4 rounded-2xl shadow-xl overflow-hidden relative z-10" style={{ maxWidth: '90%', backgroundColor: 'white' }}>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">  
    <div className="flex justify-center items-center">
      <div className="relative w-full h-64 md:h-96"> 
        <Image
          src="/images/seocoollll.jpg"
          alt="SEO image"
          layout="fill"
          objectFit="contain" 
          className="rounded-lg"
        />
      </div>
    </div>
    <div className="space-y-8 text-center"> 
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
        Discover Our SEO Mastery Packages
      </h3>
      <p className="text-md md:text-lg text-gray-600">
        Enhance your online presence and search engine rankings with our specialized SEO packages. Tailored to fit your unique business needs, our strategies are designed to increase visibility and drive traffic to your website.
      </p>
      <Link href="/seopackagepage" legacyBehavior>
        <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-8 md:py-4 md:px-10 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md">
          Learn More
        </a>
      </Link>
    </div>
  </div>
</div>

 {/* EXPLORE DIGITAL MARKETING */}
<div className="mt-20 mb-20 mx-auto py-8 px-4 rounded-2xl shadow-xl overflow-hidden relative z-10" style={{ maxWidth: '90%', backgroundColor: 'white' }}>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
    <div className="space-y-8 text-center"> 
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
        Boost Your Business with Digital Marketing
      </h3>
      <p className="text-md md:text-lg text-gray-600">
        Take the first step towards transforming your online presence. Our tailored Digital Marketing Packages are designed to propel your brands growth and maximize your digital impact. Explore our innovative strategies and solutions that make a real difference. Visit us now and see how we can help you achieve your business goals!
      </p>
      <Link href="/digitalmarketingg" legacyBehavior>
        <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-8 md:py-4 md:px-10 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-md">
          Learn More
        </a>
      </Link>
    </div>

   {/* DIGITAL MARKETING IMAGE */}
    <div className="flex justify-center items-center">
      <div className="relative w-full h-64 md:h-96"> 
        <Image
          src="/images/marketttttt.jpg"
          alt="Web Development"
          layout="fill"
          objectFit="contain" 
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
</div>
      </main>
    </div>
    </>
  );
}
