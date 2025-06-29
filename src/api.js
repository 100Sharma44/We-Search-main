import axios from 'axios';

const searchImages = async (term) => {

    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID hZDo8tJhCAY1TM18ysStEUndfW9dSjE9Q90h8zklYJM'
        },
        params: {
            query: term
        },
    })
    console.log(response.data.results);
  return response.data.results;
}

export default searchImages;
