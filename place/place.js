// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8

const axios = require('axios');

const getPlaceLatLng = async (direccion) => { //async return promise -> then catch

    let encodedUrl = encodeURI(direccion);


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
        
    if( resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`there is no results for ${direccion}`);
    }
    
    
  
            //console.log(JSON.stringify(resp.data, undefined, 2));
           /*  console.log(resp.data);
            console.log(resp.status); */
          /*   let location = resp.data.results[0];
            console.log(location.formatted_address);
            console.log(location.geometry.location.lat);
            console.log(location.geometry.location.lng); */

            let location = resp.data.results[0];
            let { lat, lng } = location.geometry.location;
            let nombreCiudad = location.formatted_address;
 
           /*  console.log(`Ciudad: ${nombreCiudad}`);
            console.log(`lat: ${lat}`);
            console.log(`lng: ${lng}`); */

            
      

    return {
        place: nombreCiudad,
        lat,
        lng
    }
}


module.exports = {
    getPlaceLatLng
}