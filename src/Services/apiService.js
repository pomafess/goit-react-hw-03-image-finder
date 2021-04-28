import axios from 'axios';

// const KEY = '20957538-039948fc53da0772e609db9c3';

// const fetchImage = async (searchQuery, page) => {
//   const response = await axios.get(
//     `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//   );
//   return response.data;
// };

// export default fetchImage;

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        image_type: "photo",
        key: "20957538-039948fc53da0772e609db9c3",
        per_page: 12,
        orientation: "horizontal"
  }
});

export const getPhotos = (searchQuery, page) => {
  return instance.get(`?q=${searchQuery}&page=${page}`);
};