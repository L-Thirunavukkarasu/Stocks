import axios from 'axios';
import env from '../config/env';
axios.defaults.timeout = 60000;

//get global quote for individual symbols
export const callGetGlobalQuote = symbol => {
  const api_url = `${env.API_URL}query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${env.API_AUTH}`;
  return axios({
    method: 'GET',
    url: api_url,
  })
    .then(async response => {
      console.log('res-single',response);
      if(response?.data?.Note){
        return await response?.data?.Note;
      }else{
        return await response;
      }
      
    })
    .catch(error => {
      console.log('error api get ', JSON.stringify(error));
      return JSON.stringify(error);
    });
};

//create array to save all symbols global quote
export const callGetStocks = async symbols => {
  let array = [];
  array = await Promise.all(
    symbols.map(async item => {
      let res = await callGetGlobalQuote(item);
      if(typeof(res) != 'string'){
        let global_quote = res?.data['Global Quote'];
        let obj = {
          id: parseFloat(Math.random()),
          title: global_quote['01. symbol'],
          img: `https://storage.googleapis.com/iex/api/logos/${item}.png`,
          price: parseFloat(global_quote['05. price'])
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,'),
          desc: `${global_quote['01. symbol']},Inc. Comm...`,
          change: parseFloat(global_quote['09. change']).toFixed(2),
          change_percent: parseFloat(
            global_quote['10. change percent'],
          ).toFixed(2),
        };
        //console.log('res-obj',obj);
        return obj;
      }else{
        return [];
      }
    }),
  );
  console.log('res-array', array);
  return await array;
};
