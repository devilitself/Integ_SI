fetch('https://github.com/dinayassine/FormationCI/blob/Installation/Desktop/aziz/aziz%202022-2023/isgt/language%20%C3%A9volu%C3%A9/integration%20des%20SI/projet/Delicious0/restau.json')


.then(function (response) {

  return response.json() ;  
})


.then(function (restau) {
   let placeholder = document.querySelector("#data-output");
   let out = "" ;
   for(let res of restau){
    out += `  
    <tr> 
       <td> ${res.restaurant_id}   </td>
       <td>${res.name}</td>
       <td>${res.grades[0]}</td>
       <td>${res.cuisine}</td>
       <td>${res.borough}</td>
       <td>${res.adress.street}</td>

    </tr>
 ` ;
}
placeholder.innerHTML= out;
    
})