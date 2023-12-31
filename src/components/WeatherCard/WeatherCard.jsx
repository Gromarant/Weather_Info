import PropTypes from 'prop-types';

const WeatherCard = ({ img, temp, city , dt_txt , weather , clouds , temp_max , temp_min , feels_like}) => {
  return (
    <article className="card">
      <section className="section_temperature">
        <img src={img}/>
        <h2>{temp} Cº</h2>
        <p>fecha y hora: {dt_txt}</p>
      </section>  
      <section className="section_WeatherCentral">
        <p>Localidad: <span>{city}</span></p>
        <p>Sensación térmica: <span>{feels_like} Cº</span></p>
        <p>Temp.Max: <span>{temp_max} Cº</span></p> 
        <p>Temp.Mim: <span>{temp_min} Cº</span></p> 
      </section>  
      <section className="section_weatherState">
        <h3>Estado del tiempo:</h3>
        <p>Clima: <span>{weather}</span></p>
        <p>Nubes: <span>{clouds}</span></p>
      </section>  
    </article>
  );
};

WeatherCard.propTypes = {
  img: PropTypes.string,
  temp: PropTypes.number,
  day: PropTypes.number,
  city: PropTypes.string,
  dt_txt: PropTypes.string,
  weather: PropTypes.string,
  clouds: PropTypes.number,
  temp_max: PropTypes.number,
  temp_min: PropTypes.number,
  feels_like: PropTypes.number,
}


export default WeatherCard;