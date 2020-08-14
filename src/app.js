const search = require("./search");
const result = require("./result");

document.getElementById("searchbar-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const searchString = document.getElementById("searchbar-input").value.trim();

    if (searchString) {
        const results = search(searchString);
        results.then((res) => {
            if (res.status === 200) {
                let html = res.data.map((r) => result(r)).join("");
                document.getElementById("results-container").innerHTML = html;
            }
        });
    }
});
