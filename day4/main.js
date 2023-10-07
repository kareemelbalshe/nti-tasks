async function fetchData(url, cb) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        cb(null, data)
    } catch (error) {
        console.error(error);
    }
}

let li = document.querySelectorAll("#list li").forEach(i => {
    i.addEventListener("click", () => {
        const url = `https://jsonplaceholder.typicode.com/${i.innerHTML}`
        fetchData(url, (error, data) => {
            data.forEach((item) => {
                document.getElementById("show").innerHTML += "( " + (item.title || item.name) + " )  <br>"
            })
        })
    })
})