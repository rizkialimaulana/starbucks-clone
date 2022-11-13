import React from 'react'
import { SiFacebook, SiInstagram, SiPinterest, SiSpotify, SiStarbucks, SiTwitter, SiYoutube } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'

type Props = {}

function page({}: Props) {
  return (
    <div className="flex flex-col space-y-10 pb-10">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-10 py-5 h-[5rem]">
        <div className="flex items-center space-x-4">
          <SiStarbucks className="w-10 h-10 text-[#376840]" />
          <button className="font-bold tracking-[2px] uppercase transition-all hover:text-[#376840]">Menu</button>
          <button className="font-bold tracking-[2px] uppercase transition-all hover:text-[#376840]">Reward</button>
          <button className="font-bold tracking-[2px] uppercase transition-all hover:text-[#376840]">
            Gift Card
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 font-bold transition-all hover:text-[#488a54]">
            <FaMapMarkerAlt />
            <span className="">Find a store</span>
          </button>
          <button className="py-1 border border-black rounded-full px-4">
            Sign In
          </button>
          <button className="py-1 border border-black bg-black text-white rounded-full px-4">
            Join now
          </button>
        </div>
      </div>
      {/* SECTION 1 */}
      <div className="flex h-[20rem] bg-[#ca1332] items-center justify-center ">
        <div className="w-[50rem] flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-white font-bold text-5xl uppercase">
            cheer starts here
          </h1>
          <h2 className="text-white text-3xl">
            <span>Join Starbucks Reward{"  "}</span>to earn free drinks and
            treats when you order this holiday season.*
          </h2>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex h-[40rem] bg-[#ca1332]">
        <div className="flex-[0.45] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center space-y-4 text-center">
            <h1 className="text-white font-bold text-5xl uppercase tracking-[5px]">
              Supporting our veteran community
            </h1>
            <h2 className="text-white text-2xl">
              This November, we're donating $200,000 divided evenly between Team
              Red, White & Blue and Team Rubicon to support our veteran
              community.*
            </h2>
            <span className="py-1 px-3 border border-white text-white rounded-full text-xl transition-all duration-[300ms] hover:bg-white/20 cursor-pointer">
              Our Commitment
            </span>
          </div>
        </div>
        <div className="flex-[0.55]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81885.jpg"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex h-[40rem] bg-[#ca1332]">
        <div className="flex-[0.55]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81886.jpg"
            className="w-full h-full"
          />
        </div>
        <div className="flex-[0.45] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center space-y-4 text-center">
            <h1 className="text-white font-bold text-5xl uppercase tracking-[5px]">
              Welcome back, sugar cookie
            </h1>
            <h2 className="text-white text-2xl">
              Celebrate the season with our festive nondairy Sugar Cookie
              Almondmilk Latte. Enjoy your drink iced or hot.
            </h2>
            <span className="py-1 px-3 border border-white text-white rounded-full text-xl transition-all duration-[300ms] hover:bg-white/20 cursor-pointer">
              Order Now
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="flex h-[40rem] bg-[#0db482]">
        <div className="flex-[0.45] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center space-y-4 text-center">
            <h1 className="text-white font-bold text-5xl uppercase tracking-[5px]">
              Sweet new swirl
            </h1>
            <h2 className="text-white text-2xl">
              Introducing the Chocolate Pistachio Swirl with a creamy chocolaty
              filling and chopped pistachios.
            </h2>
            <span className="py-1 px-3 border border-white text-white rounded-full text-xl transition-all duration-[300ms] hover:bg-white/20 cursor-pointer">
              Order Now
            </span>
          </div>
        </div>
        <div className="flex-[0.55]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81285.jpg"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="flex h-[22rem] bg-[#1c3d33]">
        <div className="flex-[0.45]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81887.jpg"
            className="w-auto h-full object-contain"
          />
        </div>
        <div className="flex-[0.55] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center space-y-4 text-center">
            <h1 className="text-white font-bold text-2xl uppercase tracking-[5px]">
              Native American Heritage Month
            </h1>
            <h2 className="text-white text-lg">
              See how the Starbucks Indigenous Partner (employee) Network is
              taking action to uplift their communities. Join us in celebrating
              these diverse cultures and see how you can get involved..
            </h2>
            <span className="py-1 px-3 border border-white text-white rounded-full text-xl transition-all duration-[300ms] hover:bg-white/20 cursor-pointer">
              Learn more
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 6 */}
      <div className="flex h-[22rem] bg-[#ca1332]">
        <div className="flex-[0.55] flex items-center justify-center">
          <div className="w-[60%] flex flex-col items-center space-y-4 text-center">
            <h1 className="text-white font-bold text-2xl uppercase tracking-[5px]">
              A gift to you, from us
            </h1>
            <h2 className="text-white text-lg">
              Alicia's new Christmas album Santa Baby has us feeling all kinds
              of festive. Hear her curated playlist filled with holiday classics
              and original tracks, in stores or stream it now.
            </h2>
            <span className="py-1 px-3 border border-white text-white rounded-full text-xl transition-all duration-[300ms] hover:bg-white/20 cursor-pointer">
              Listen now on Apple Music
            </span>
          </div>
        </div>
        <div className="flex-[0.45]">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81868.png"
            className="w-auto h-full object-contain"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex h-full flex-col items-center space-y-5">
        <h1 className="font-semibold">
          *At participating stores. Some restrictions apply. See{" "}
          <span className="transition-all underline decoration-black hover:decoration-transparent cursor-pointer">
            starbucks.com/rewards.
          </span>
        </h1>
        <hr />
        <div className="grid grid-cols-5 w-full px-10">
          <div className="flex flex-col space-y-6 p-5">
            <h1 className="tracking-[5ox] font-semibold text-2xl">About us</h1>
            <div className="flex flex-col space-y-4 text-gray-500 font-semibold">
              <span className="transition-all hover:text-black cursor-pointer">
                Our Company
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Our Coffee
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Stories and News
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Starbucks Archive
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Investor Relations
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Customer Service
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-5">
            <h1 className="tracking-[5ox] font-semibold text-2xl">Careers</h1>
            <div className="flex flex-col space-y-4 text-gray-500 font-semibold">
              <span className="transition-all hover:text-black cursor-pointer">
                Culture and Value
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Inclusion, Diversity, and Equity
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                College Achievement Plan
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Alumni Community
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                U.S Careers
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                International Careers
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-5">
            <h1 className="tracking-[5ox] font-semibold text-2xl">
              Social Impact
            </h1>
            <div className="flex flex-col space-y-4 text-gray-500 font-semibold">
              <span className="transition-all hover:text-black cursor-pointer">
                People
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Planet
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Environmental and Social Impact Reporting
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-5">
            <h1 className="tracking-[5ox] font-semibold text-2xl">
              For Business Partners
            </h1>
            <div className="flex flex-col space-y-4 text-gray-500 font-semibold">
              <span className="transition-all hover:text-black cursor-pointer">
                Landlord Support Center
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Suppliers
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Coorporate Gift Card Sales
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Office and Foodservice Coffee
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-5">
            <h1 className="tracking-[5ox] font-semibold text-2xl">
              Order and Pickup
            </h1>
            <div className="flex flex-col space-y-4 text-gray-500 font-semibold">
              <span className="transition-all hover:text-black cursor-pointer">
                Order on the App
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Order on the Web
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Delivery
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Order and Pickup Options
              </span>
              <span className="transition-all hover:text-black cursor-pointer">
                Explore and find coffee for home
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-col space-y-4 px-10">
        <div className="flex items-center space-x-3">
          <SiSpotify className="w-10 h-10 p-2 bg-black rounded-full text-white" />
          <SiFacebook className="w-10 h-10 p-2 bg-black rounded-full text-white" />
          <SiPinterest className="w-10 h-10 p-2 bg-black rounded-full text-white" />
          <SiInstagram className="w-10 h-10 p-2 bg-black rounded-full text-white" />
          <SiYoutube className="w-10 h-10 p-2 bg-black rounded-full text-white" />
          <SiTwitter className="w-10 h-10 p-2 bg-black rounded-full text-white" />
        </div>
        <div className="flex items-center space-x-3">
          <span className=" px-5 border-r border-black">Privacy Policy</span>
          <span className=" px-5 border-r border-black">Term of use</span>
          <span className=" px-5 border-r border-black">
            CA Supply Chain Act
          </span>
          <span className=" px-5 border-r border-black">Cookie Preference</span>
        </div>
        <span className="text-gray-500">
          2022 Starbucks clone designed by Rizki Ali Maulana
        </span>
      </div>
    </div>
  );
}

export default page