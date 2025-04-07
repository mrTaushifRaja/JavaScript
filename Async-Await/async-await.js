function api(){
return new Promise((resolve,reject)=>{
  console.log("weather data");
  resolve(200);
},2000);
}

async function getWeatherData(){
  await api();//1st 
  await api();//2nd 
  await api();//3rd 
  await api();//4th 
}