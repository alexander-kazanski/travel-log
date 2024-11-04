import React from 'react';
import ReactDOM from 'react-dom/client';

function Card(props) {
  const { data } = props;    
  return (
      <div className="card">
          <img className="scenery-image" src={data.imageUrl} alt={`Image of ${data.title}`} />
          <div className="card-details">
              <span className="map-information">
                  <img className="pin" src="https://github.com/alexander-kazanski/travel-log/blob/main/images/pin.png?raw=true" alt="map pin logo" />
                  <p className="country">{data.location}</p>
                  <a className="maps" href={data.googleMapsUrl}>View on Google Maps</a>
              </span>
              <div className="location-information">
                  <p className="trip-location">{data.title}</p>
                  <p className="trip-duration">{data.startDate} - {data.endDate}</p>
                  <p className="trip-description">{data.description}</p>
              </div>
          </div>
      </div>
  )
}

function App() {
  const data = [
    {
      title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://github.com/alexander-kazanski/travel-log/blob/main/images/Mount-Fuji.png?raw=true"
      },
      {
        title: "Sydney Opera House",
        location: "Australia",
        googleMapsUrl: "https://maps.app.goo.gl/xo6MMtYuieUZrV1v8",
        startDate: "27 May, 2023",
        endDate: "8 Jun, 2023",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
        imageUrl: "https://github.com/alexander-kazanski/travel-log/blob/main/images/Sydney-Opera-House.png?raw=true"
      },
      {
        title: "Geirangerfjord",
        location: "Norway",
        googleMapsUrl: "https://maps.app.goo.gl/EjU3R3yeqz4pZF136",
        startDate: "01 Oct, 2024",
        endDate: "18 Nov, 2024",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        imageUrl: "https://github.com/alexander-kazanski/travel-log/blob/main/images/Geirangerfjord.png?raw=true"
      }
    ]
  
  const cards = data.map((card, idx) => (<Card key={idx} data={card} />))
  return <div className="container">
      <nav>
          <img className="home-icon" src="./images/Path.png" alt="white globe icon" />
          <p>my travel journal.</p>
      </nav>
      <div className="body">
          {cards}
      </div>
  </div>
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />); 