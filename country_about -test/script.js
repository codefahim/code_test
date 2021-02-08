
// // #ecf0f1
// fetch('https://restcountries.eu/rest/v2/all')
// .then(response=>response.json())
// .then(data=>{
// for (var i = data.length - 1; i >= 0; i--) {
// 	const elements= data[i]
// 	let ul = document.getElementById("ul");
//      let li = document.createElement("li");
//      li.innerText=elements.name;
//      ul.appendChild(li);

//      li.addEventListener('click',function(event){
//      	const lievent =event.target;
//      	const countryName =lievent.innerText;
		
// fetch('https://restcountries.eu/rest/v2/name/'+countryName+'?fullText=true')
// .then(response=>response.json())
// .then(data=>{
// document.getElementById('name').innerText=data[0].name
// document.getElementById('capital').innerText=data[0].capital
// document.getElementById('flag').src=data[0].flag
// document.getElementById('population').innerText=data[0].population
// document.getElementById('region').innerText=data[0].region
// document.getElementById('area').innerText=data[0].area

// })
//  })
// }
// });
const desh ='dhak';

fetch('https://restcountries.eu/rest/v2/capital/'+desh)
.then(response=>response.json())
.then(data=>{
     if (data.status === 404) {
         fetch('https://restcountries.eu/rest/v2/alpha/'+desh)
         .then(res=>res.json())
         .then(country=>console.log(country))
     }else{
          console.log(data)
     }
})


