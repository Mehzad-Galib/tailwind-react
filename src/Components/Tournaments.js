import React from "react";
import Euro2020 from '../Images/euro2020.jpg'
import Copa from '../Images/copaAmerica.jpg';
import WC from '../Images/fifaWC.jpg'
import { Nav } from "react-bootstrap";

const Tournaments = () => {
  return (
    <>
    <h1 id='tournament' className='font-bold text-center text-3xl text-green-400'>Upcoming Tournaments</h1>
      <div className="flex md:flex-row flex-col container mt-5 mx-auto">
          {/* card-1 */}
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-4 transform transition duration-1000 hover:scale-110">
            <img src={WC} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">FIFA World Cup Qatar 2022</div>
                <p className="text-gray-600 text-justify my-3">
                It is scheduled to take place in Qatar from 21 November to 18 December 2022. This will be the first World Cup ever to be held in the Arab world and the first in a​ ...
                </p>
                <Nav.Link className='my-5 p-2 bg-green-500 rounded-sm' href={`https://www.fifa.com/worldcup/`} target='_blank' >Official Website</Nav.Link>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#worldcup</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#football</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#global</span>
            </div>
        </div>
          {/* card-2 */}
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto mx-4 transform transition duration-1000 hover:scale-105">
            <img src={Euro2020} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">EURO 2020</div>
                <p className="text-gray-600 text-base py-5">
                The 2020 UEFA European Football Championship, commonly referred to as 2020 UEFA European Championship, UEFA Euro 2020, or simply Euro 2020, is scheduled to be the 16th UEFA European Championship, the....
                </p>
                <Nav.Link className='my-5 p-2 bg-green-500 rounded-sm' href={`https://www.uefa.com/uefaeuro-2020/`}>Website</Nav.Link>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#europe</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#football</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3 mb-2">#continental</span>
            </div>
        </div>
          {/* card-3 */}
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-4 transform transition duration-1000 hover:scale-110">
            <img src={Copa} alt="" className="w-full" />
            <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">Copa America 2020</div>
                <p className="text-gray-600 text-base py-5">
                CONMEBOL Copa América, known until 1975 as the South American Football Championship, is the main men's football tournament contested among national teams from CONMEBOL. It is the oldest still running international football competition, as well as the third most watched in the world. 
                </p>
                <Nav.Link className='my-5 p-2 bg-green-500 rounded-sm' href={`https://www.conmebol.com/`}>Visit Website</Nav.Link>
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
