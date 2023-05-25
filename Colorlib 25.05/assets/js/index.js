
const podcasts = document.querySelector(".podcasts")
fetch('https://6469bba8183682d614455b66.mockapi.io/musics') 
.then(resp => resp.json()) 
// .then(res => console.log(res))
.then(res =>
    {
    res.forEach(el => {
        podcasts.innerHTML += `
        <div class=" card-p card mb-3" style="max-width: 1000px;">
                <div class="row ">
                  <div class=" image-p col-md-4">
                    <img src="${el.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title color-red">${el.header}</h5>
                      <p class="card-text">
                        <span>by ${el.admin} /</span>
                        <span>${el.date} /</span>
                        <span>created</span>
                      </p>
                      <p class="card-text">${el.info}</p>
                      <div class="record">
                        <i class="las la-play"></i>
                        <span>00:00</span>
                        <div class="voice"></div>
                        <span>00:00</span>
                        <i class="las la-volume-up"></i>
                        <div class="volume"></div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>`
    })
})
