
const place = require('./place/place');
const weather = require('./weather/weather');

 const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv; 

//console.log(argv.direccion);
let getInfo = async (direccion) => {

    try {

        let coors = await place.getPlaceLatLng(direccion);
        let temp = await weather.getWeather(coors.lat, coors.lng)
    
        return `weather in ${coors.place} is ${temp}`;

    } catch (e) {
        
        return `We cound'nt find weather in ${direccion}`;
    }

 

}

/*   place.getPlaceLatLng(argv.direccion)
     .then( resp  => {
         console.log(resp);
     })
     .catch(e => console.log(e));  

      weather.getWeather(9.9280694,-84.0907246)
     .then( resp  => {
         console.log(resp);
     })
     .catch(e => console.log(e));  */



     getInfo(argv.direccion)
        .then( message => console.log(message))
        .catch (e => console.log(e));