const API="http://api.openweathermap.org/data/2.5/weather?q=lahijan&appid=c45ae27d60bcbc5c4aad246b2c164b32"

axios.get(API).then(res=>console.log(res)).catch((err) => console.log("rid"));


console.log("ssss")
