$(document).ready(function(){
    $.getJSON("restaurants.json", function(data){
        let htmlStructure= ''

        $.each(data, function(key, value){
            switch(key){
                case "address":
                    htmlStructure+= "<br><br>Address:<br>Building:"+ value.building + "<br>Coord: "+ value.coord + "<br>Street: "+ value.street+ "<br>Zipcode: "+ value.zipcode
                    break

                case "grades":
                    htmlStructure+= "<br>Grades: "
                    for(let i= 0; i< value.length; i++){
                        htmlStructure+= "<br>Grade: Date: "+ value[i].date.$date+ ", Grade: "+ value[i].grade+ ", Score: " + value[i].score
                    }
                    break

                default:
                    htmlStructure+= "<br>"+ key + ": "+ value
                    break
            }
            //htmlStructure+= 'Address: building: '+ value +"<br>"
            console.log(key +": "+ value)
        })
        document.write(htmlStructure)
    })
})