let http = new XMLHttpRequest();
http.open('get', 'db.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = '';
        for (let item of products) {
            output += `
            <div class="product">
            <img src="${item.image}" alt="${item.image}">
            
            <div class="price">
                <p class="current__price"> ${item.price}₽  </p>
                <p class="old__price">${item.old}₽</p>
                </div>
                <div class="texts">
                <p class="title">${item.title}<span  class="desribtion">${item.desribtion}</span></p>   
                </div>
        </div>
            `;
        }
        document.querySelector('.products').innerHTML = output
    }
}