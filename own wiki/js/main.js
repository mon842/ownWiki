let searchText = document.querySelector("#searchText");
let findNow = document.querySelector("#findNow");
let searchResult = document.querySelector("#searchResult");

findNow.addEventListener("click", () => {
    if (searchText.value !== "") {
        let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText.value}`; // wikipidia api
        fetch(url) //The fetch() method used to fetch a resource.
            .then(response => response.json()) //This object could be anything that can be represented by JSON — an object, an array, a string, a number.
            .then(data => {
                console.log(data);

                searchResult.innerHTML = ``; // erases the previous results
                data.query.search.forEach(items => {
                    let resultURL = `https://en.wikipedia.org/?curid=${items.pageid}`;
                    searchResult.insertAdjacentHTML(`afterBegin`, `<div class="resultItem">
            <a href="${resultURL}" target="_blank" class="resultTitle">${items.title}</a><br>
            <a href="${resultURL}" target="_blank" class="link">${resultURL}</a>
            <p>${items.snippet}</p>
        </div>`)
                })
            })
    }
})