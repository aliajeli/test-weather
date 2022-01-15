const API="http://dataservice.accuweather.com/locations/v1/cities/search?apikey=g2a8hjrXrnSrxOGYxg2yNSQ0vYqegS8Y&q=lahijan HTTP/1.1"

axios.get(API).then(res=>console.log(res)).catch((err) => console.log(err));


console.log("ssss")
