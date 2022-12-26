function parseJsonLine(line){
        let htmlStructure= ''

        JSON.parse(line, function(key, value){
            htmlStructure+= key+": "+value+"<br>"
        })
        htmlStructure+= "<br><br>"
        document.getElementById("output").innerHTML+= htmlStructure
}


(function readFile(){
    jQuery.get('restaurants.txt', function(txt){
        let lines= txt.split("\n")
        for(let i= 0; i<5; i++){
            line= lines[i]
            if(line!= ""){
                console.log(line)
                parseJsonLine(line)
            }
        }
    })
}).call()