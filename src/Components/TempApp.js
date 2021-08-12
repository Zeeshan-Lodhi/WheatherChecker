import React, { useEffect, useState } from 'react'
import Kheader from '../Components/KHeader'

function TempApp() {
  const [City, setCity] = useState(null);
  const [Search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=fe93257ede4c9804395a92ee0c793fc9`
      const res = await fetch(url);
      const resJson = await res.json();
      setCity(resJson.main);
    }

    fetchApi();
  }, [Search])

  return (
    <>
      <Kheader />
      <div className="main_box">
        <div className="card">
          <div className="InpputSearch">
            <input type="search" placeholder="Enter any city name" onChange={(event) => { setSearch(event.target.value) }} value={Search} />
          </div>

          {!City ? (
            <p className="error">No data found</p>
          ) : (
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view fa"></i>{Search}</h2>

              <h2 className="temp">{City.temp}°C</h2>
              <h3 className="MinMaxTemp">Min : {City.temp_min}°C | Max : {City.temp_max}°C</h3>
            </div>

          )}

        </div>
      </div>
    </>
  );
}

export default TempApp;
