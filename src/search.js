const Axios = require("axios");

module.exports = (queryString) =>
    Axios.get(`https://api.imgur.com/3/gallery/search/?q=${queryString}`, {
        headers: {
            Authorization: "Client-ID b067d5cb828ec5a",
        },
    })
        .then((res) => {
            return {
                status: 200,
                data: res.data.data, //returns the array
            };
        })
        .catch((error) => {
            return {
                status: 404,
                error: error,
            };
        });
