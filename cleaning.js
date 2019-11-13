
function cleaning(){

    if (today().getDay() === 5){
        console.log("det är fredag")
        return true
    }else {
        return false
    }


}


function calculateCleaning(){

    const missions = ["Teknikrum", "Grupparbetsplatserna", "Datorklassrummet", "Tekniklabbet", "Bibloteket", "Stora klassrummet", "Grupprum x2", "Cafeterian", "Köket", "Kapprummet + pingisrummet", "Soppor och korridor"]

    

    document.getElementById("iframe").innerHTML = `<h1>Det är fredag!</h1>`
 
}
