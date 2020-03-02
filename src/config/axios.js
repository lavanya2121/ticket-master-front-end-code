import Axios from 'axios';

//create an instance of axios
const axios=Axios.create({//create an axios object
    baseURL:'http://dct-ticket-master.herokuapp.com'
    //when the url(domain name) changes we can change it in only one place that is here and no need of changing everywhere in all the 1000 links
})

export default axios