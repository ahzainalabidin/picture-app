import axios from "axios";

const searchImages = async () => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bQBmhRTHHDG0-53w99xgm7OeOSz-HJnbfg-lKfQ5Wn4'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);

    return response;

};

export default searchImages;
