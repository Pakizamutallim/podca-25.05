
const btn = document.querySelector(".btn-add")

btn.addEventListener("click", function () {
    const fetched = fetch('https://6469bba8183682d614455b66.mockapi.io/musics', {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify({
            header: document.getElementById("header").value,
            img: document.getElementById("img").value,
            admin: document.getElementById("admin").value,
            date: document.getElementById("date").value,
            info: document.getElementById("info").value
        }), 
    })
    .then(resp =>resp.json()) 
    .then(res =>console.log(res))
    // {
    //     document.getElementById("header") = "",
    //     document.getElementById("img") = "",
    //     document.getElementById("admin") = "",
    //     document.getElementById("date") = "",
    //     document.getElementById("info") = "" 
    // } 

})


// if(res.ok) {
//     document.getElementById("header") = "",
//     document.getElementById("img") = "",
//     document.getElementById("admin") = "",
//     document.getElementById("date") = "",
//     document.getElementById("info") = "" 
// } 