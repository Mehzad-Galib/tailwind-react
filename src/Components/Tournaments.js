import React from "react";
import Euro2020 from '../Images/euro2020.jpg'
import Copa from '../Images/copaAmerica.jpg';
import WC from '../Images/fifaWC.jpg'

const Tournaments = () => {
  return (
    <>
    <h1 className='font-bold text-center text-3xl'>Upcoming Tournaments</h1>
      <div className="flex flex-row container">
          {/* card-1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto m-4 transform transition duration-1000 hover:scale-110">
            <img src={WC} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">FIFA World Cup Qatar 2022</div>
                <p className="text-gray-600 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolores esse, fuga quo sint illum.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#worldcup</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#football</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#global</span>
            </div>
        </div>
          {/* card-2 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img src={Euro2020} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">EURO 2020</div>
                <p className="text-gray-600 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolores esse, fuga quo sint illum.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#europe</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#football</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#continental</span>
            </div>
        </div>
          {/* card-1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img src={Copa} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">Copa America 2020</div>
                <p className="text-gray-600 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolores esse, fuga quo sint illum.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#southAmerica</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#football</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#regional</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Tournaments;
