// import React, { useState, useEffect } from "react";
// import Weathercard from "./weathercard";
// import "./style.css";

// const Temp = () => {
//   const [searchValue, setSearchValue] = useState("pune");
//   const [tempInfo, setTempInfo] = useState({});

//   //     // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={WriteYourAPIKey}`;
  
//   const getWeatherInfo = async () => {
//   try {
    
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=chitradurga&appid=108c3aab15afbd0e9a01c4dbd165a09a`

//       let res = await fetch(url);
//       let data = await res.json();

//       const { temp, humidity, pressure } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { country, sunset } = data.sys;

//       const myNewWeatherInfo = {
//         temp,
//         humidity,
//         pressure,
//         weathermood,
//         name,
//         speed,
//         country,
//         sunset,
//       };

//       setTempInfo(myNewWeatherInfo);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getWeatherInfo();
//   }, []);

//   return (
//     <>
//       <div className="wrap">
//         <div className="search">
//           <input
//             type="search"
//             placeholder="search..."
//             autoFocus
//             id="search"
//             className="searchTerm"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />

//           <button
//             className="searchButton"
//             type="button"
//             onClick={getWeatherInfo}>
//             Search
//           </button>
//         </div>
//       </div>

//       {/* our temp card  */}
//       <Weathercard {...tempInfo} />
//     </>
//   );
// };

// export default Temp;


import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=108c3aab15afbd0e9a01c4dbd165a09a`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={() => getWeatherInfo(searchValue)}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
