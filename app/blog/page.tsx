import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { HiTag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import {FaUser} from "react-icons/fa";

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        {/* top div */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Image"
              width={77}
              height={77}
              className="ml-2"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Blog
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[22px] leading-6 text-[#000000]">
                Home</p>
                <p><IoIosArrowForward className="ml-3 size-[24px]" />
                </p>
              <p className="font-poppins font-light text-[22px] leading-6 text-[#000000] pl-2">
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* blog section */}
      <div className="flex flex-col md:flex-row p-8 gap-12 mt-20 md:gap-20">
        {/* Main Content */}
        <main className="flex flex-col gap-12 md:gap-20 md:w-3/4">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Rectangle 14.png"
              alt="Image 1"
              width={393}
              height={393}
              className="w-full sm:w-[250px] md:w-[393px] h-auto"
            />
            <div className="flex flex-col items-start w-full sm:w-[250px] md:w-[393px] mt-4">
              {/* Row 1 */}
              <div className="flex flex-row items-center space-x-4 text-sm text-[#9f9f9f]">
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaUser /> <span>Admin</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaCalendar
                  /> <span>14 Oct 2022</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                <HiTag />
                <span>Wood</span>
                </span>
              </div>
              {/* Row 2 */}
              <div className="mt-4">
                <h3 className="text-left font-poppins font-bold text-[20px] text-[#000000]">
                  Going all-in with millennial design
                </h3>
                <p className="text-sm mt-1 font-poppins font-normal text-[#9f9f9f] leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur nemo aspernatur minus doloribus itaque est
                  provident rem pariatur officia velit dolorum nesciunt, facere
                  deleniti ut? Recusandae illum omnis quae et.
                </p>
                <button className="mt-4 text-[18px] font-poppins font-medium text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Rectangle 13.png"
              alt="Image 2"
              width={393}
              height={393}
              className="w-full sm:w-[250px] md:w-[393px] h-auto"
            />
            <div className="flex flex-col items-start w-full sm:w-[250px] md:w-[393px] mt-4">
              {/* Row 1 */}
              <div className="flex flex-row items-center space-x-4 text-sm text-[#9f9f9f]">
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaUser /> <span>Admin</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaCalendar
                  /> <span>14 Oct 2022</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                <HiTag />
                <span>Handmade</span>
                </span>
              </div>
              {/* Row 2 */}
              <div className="mt-4">
                <h3 className="text-left font-poppins font-bold text-[20px] text-[#000000]">
                  Exploring new ways of decorating
                </h3>
                <p className="text-sm mt-1 font-poppins font-normal text-[#9f9f9f] leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur nemo aspernatur minus doloribus itaque est
                  provident rem pariatur officia velit dolorum nesciunt, facere
                  deleniti ut? Recusandae illum omnis quae et.
                </p>
                <button className="mt-4 text-[18px] font-poppins font-medium text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Rectangle 15.png"
              alt="Image 3"
              width={393}
              height={393}
              className="w-full sm:w-[250px] md:w-[393px] h-auto"
            />
            <div className="flex flex-col items-start w-full sm:w-[250px] md:w-[393px] mt-4">
              {/* Row 1 */}
              <div className="flex flex-row items-center space-x-4 text-sm text-[#9f9f9f]">
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                  <FaUser /> <span>Admin</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                <FaCalendar />
                <span>14 Oct 2022</span>
                </span>
                <span className="flex items-center space-x-1 font-poppins font-light text-[16px] text-[#9f9f9f]">
                <HiTag />
                <span>Wood</span>
                </span>
              </div>
              {/* Row 2 */}
              <div className="mt-4">
                <h3 className="text-left font-poppins font-bold text-[20px] text-[#000000]">
                  Handmade pieces that took time to make 
                </h3>
                <p className="text-sm mt-1 font-poppins font-normal text-[#9f9f9f] leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur nemo aspernatur minus doloribus itaque est
                  provident rem pariatur officia velit dolorum nesciunt, facere
                  deleniti ut? Recusandae illum omnis quae et.
                </p>
                <button className="mt-4 text-[18px] font-poppins font-medium text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Aside Content */}
        <aside className="w-full md:w-[200px] flex flex-col space-y-6">
          {/* Search Bar */}
          <div className="flex items-center border-[1px] border-[#000000] p-2 rounded-[4px] mb-4">
            <input
              type="text"
              className="flex-1 text-[14px] py-1"
              placeholder=""
            />
            <FiSearch
            className="black size-[24px]" />
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-poppins font-medium text-[20px] leading-6 text-[#000000] mb-8">
              Categories
            </h2>
            <ul className="space-y-2">
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Crafts<span className="ml-16">2</span>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Design<span className="ml-14">8</span>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Handmade<span className="ml-7">7</span>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Interior<span className="ml-14">1</span>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] pb-4">
                Wood<span className="ml-16">6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="font-poppins font-medium text-[20px] leading-6 text-[#000000] mb-8">
              Recent Posts
            </h2>
            <ul className="space-y-2 mr-20 md:mr-0">
              <li className="pb-4 flex flex-row justify-center gap-2">
                <Image
                  src="/Rectangle 69.png"
                  alt="Image"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-center items-start w-[119px] h-[65px]">
                  <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
                    Going all-in with millennial design
                  </p>
                  <p className="font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f] pt-2">
                    03 Aug 2022
                  </p>
                </div>
              </li>
              <li className="pb-4 flex flex-row justify-center gap-2">
                <Image
                  src="/Rectangle 69 (1).png"
                  alt="Image"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-center items-start w-[119px] h-[65px] mt-2">
                  <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
                    Exploring new ways of decorating
                  </p>
                  <p className="font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f] pt-2">
                    03 Aug 2022
                  </p>
                </div>
              </li>
              <li className="pb-4 flex flex-row justify-center gap-2">
                <Image
                  src="/Rectangle 69 (2).png"
                  alt="Image"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-center items-start w-[119px] h-[65px] mt-1">
                  <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
                    Handmade pieces that took time to make
                  </p>
                  <p className="font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f]">
                    03 Aug 2022
                  </p>
                </div>
              </li>
              <li className="pb-4 flex flex-row justify-center gap-2">
                <Image
                  src="/Rectangle 69 (3).png"
                  alt="Image"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-center items-start w-[119px] h-[65px]">
                  <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
                    Modern home in Milan
                  </p>
                  <p className="font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f] pt-2">
                    03 Aug 2022
                  </p>
                </div>
              </li>
              <li className="pb-4 flex flex-row justify-center gap-2">
                <Image
                  src="/Rectangle 69 (4).png"
                  alt="Image"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col justify-center items-start w-[119px] h-[65px]">
                  <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#000000]">
                    Colorful office redesign
                  </p>
                  <p className="font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f] pt-2">
                    03 Aug 2022
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Next Page Button Section */}
      <div className="hidden md:flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-6">
        <button className="bg-[#fbebb5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]">
          1
        </button>
        <button className="bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]">
          2
        </button>
        <button className="bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]">
          3
        </button>
        <button className="bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]">
          Next
        </button>
      </div>

      {/* delivery section */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-12 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            Free Delivery
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9f9f9f]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            90 Days Return
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9f9f9f]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            Secure Payment
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#9f9f9f]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default page;
