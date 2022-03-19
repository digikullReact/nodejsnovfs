//alert("Hey I am loaded")

function apiCall(){

    

fetch('/api/data', {
  method: 'GET', // or 'PUT'

  
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);


  ///  
let str=""

for(let i=0;i<data.length;i++){
    str+=`   <div class="col-4"> 

    <div class="card" style="width: 18rem;">
      <img  width="100%" height="100%" src="/images/a.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>`

}

// We can append that in our div row
document.getElementById("datarow").innerHTML=str;


})
.catch((error) => {
  console.error('Error:', error);
});

}
apiCall();