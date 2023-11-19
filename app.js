let carsResponseList =document.getElementById("cars-response-List")
let filteredcarsresponselist = document.getElementById("filtered-cars-response-list");
let cars =[]
fetch("https://rentcar.webwide.ge/api/Car/popular",{
    method:"GET"
})   
.then((response) =>{
    if(response.ok){
        return response.json()
    }else{
        alert("შეცდომაა")
    }
})
.then((data) =>{
    
    data.forEach((car) => {
    cars.push(car)    
    })
    //console.log(data)

cars.forEach((car) =>{
    carsResponseList.innerHTML +=`
    <div class="card" style="width: 18rem;">
        <img src="${car.imageUrl1}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${car.brand}</h5>
    <p class="card-text">${car.model}</p>
    <p class="card-text">${car.price} ლარი დღეში</p>
    <a href="#" class="btn btn-primary">${car.year}</a>
    <a href="#" class="btn btn-primary">${car.transmission}</a>
    </div>
</div>`;
});
});
let SearchInput = document.getElementById("Search-input");
let capacityinput = document.getElementById("capasity-input");
let errorblock = document.getElementById("error-block"); 
function search() {
    let Searchquery = SearchInput.value;
    let Searchquerycapasity = capacityinput.value;
fetch(`https://rentcar.webwide.ge/api/Car/filter?city=$&pageIndex=1&pageSize=10`, {
    method:"GET"
})
    then((response) => {
    if(response.ok) {
        return response.json();
    }else{
        errorblock.innerHTML =`<h1> არ არიოს სწორი</h1>` 
    }
})
.then((car) => {
    console.log(car);
    
    filteredcarsresponselist.innerHTML = "";
    filteredcars = [];
    car.data.forEach((datacar) =>{
        filteredcars.push(datacar);
        console.log(datacar);
    })
    
filteredcars.forEach((car) =>{
    filtercarsResponseList.innerHTML +=`
    <div class="card" style="width: 18rem;">
        <img src="${car.imageUrl1}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${car.brand}</h5>
    <p class="card-text">${car.model}</p>
    <p class="card-text">${car.price} ლარი დღეში</p>
    <a href="#" class="btn btn-primary">${car.year}</a>
    <a href="#" class="btn btn-primary">${car.transmission}</a>
    </div>
</div>`;
});
});
}