function parseJsonLine(line){
        var htmlStructure= '<tr>'

        var id= ""
        var name= ""
        var cuisine= ""
        var borough= ""

        var address= ""
        var building= ""
        var coord= ""
        var street= ""
        var zipcode= ""

        var global_grades= []
        var dates= []
        var grades= []
        var scores= []

        JSON.parse(line, function(key, value){

            switch(key){
                case "restaurant_id":
                    id= value
                    break
                case "borough":
                    borough= value
                    break
                case "cuisine":
                    cuisine= value
                    break
                case "$date":
                    dates.push(value)
                    break
                case "grade":
                    grades.push(value)
                    break
                case "score":
                    scores.push(value)
                    break
                case "name":
                    name= value
                    break
                case "building":
                    building= value
                    break
                case "coord":
                    coord= value
                    break
                case "street":
                    street= value
                    break
                case "zipcode":
                    zipcode= value
                    break
            }
        })
        address= "Building: "+building+"<br>Coordinates: "+coord+"<br>Street: "+street+"<br>Zipcode: "+zipcode
        htmlStructure= `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>`


        for(let i=0; i<dates.length; i++){
            date= new Date(dates[i])
            dateFormatted= date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()
            htmlStructure+= "Date: "+dateFormatted +", Grade: "+ grades[i]+", Score: "+ scores[i]+"<br>"
        }
            
            htmlStructure+= `</td>
            <td>${cuisine}</td>
            <td>${borough}</td>
            <td>${address}</td>
        </tr>`
        document.getElementById("data-output").innerHTML+= htmlStructure
}


function readFile(n, m){
    jQuery.get('restaurants.txt', function(txt){
        let lines= txt.split("\n")
        for(let i= n; i<m; i++){
            line= lines[i]
            if(line!= ""){
                parseJsonLine(line)
            }
        }
    })
}

var inferior= 0
var superior= 10
readFile(inferior, superior)

function addToTable(){
    inferior+= 10
    superior+= 10
    readFile(inferior, superior)
}