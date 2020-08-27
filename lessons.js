

function today(){
    var wintertime = new Date().toLocaleString("se-SWE",{timeZone:'Europe/Stockholm'})
    //console.log(new Date(wintertime).toLocaleDateString())
    return new Date(wintertime)
}

function calcDiff(date1,date2){
    const diff = (((date1.getTime() - date2.getTime())/1000)/60)/60
    //console.log(diff)
    const h_m_array = diff.toString().split('.')
    //console.log(h_m_array)
    //console.log(h_m_array[0].slice(0,1))
    //console.log(parseFloat("0."+h_m_array[1])*60)
    if (parseInt(h_m_array[0]) > 0  || h_m_array[0].slice(0,1) != '-'){
        console.log('Diff',parseInt(h_m_array[0]) + "h",Math.ceil(((parseFloat("0."+h_m_array[1])*60))) + "m")
        if (parseInt(h_m_array[0]) === 0){
            return Math.ceil((parseFloat("0."+h_m_array[1])*60)) + "m"
        } else {
            return parseInt(h_m_array[0]) + "h" + " " + Math.ceil((parseFloat("0."+h_m_array[1])*60)) + "m"
        }
        
    } else {
        return false
    }

     
}
function renderNextLessons(lesson, time, div){
    //console.log(lesson.columns)
    if (lesson.columns[1] === 'Gem aktivitet' || lesson.columns[5] === "Annan aktivitet"){
        if (lesson.columns[4] != ""){
            div.getElementsByClassName('lessons')[0].innerText += lesson.columns[2] + " börjar om " + time + " i " + lesson.columns[4]+ '\n'
        } else {
            div.getElementsByClassName('lessons')[0].innerText += lesson.columns[2] + " börjar om " + time + '\n'
        }   
    }
    else {
        if (lesson.columns[4] != ""){
            div.getElementsByClassName('lessons')[0].innerText += lesson.columns[1] + " börjar om " + time + " i " + lesson.columns[4] + '\n'   
    
        } else {
            div.getElementsByClassName('lessons')[0].innerText += lesson.columns[1] + " börjar om " + time + '\n'   
        }
    }
}

function currentLesson(lesson, startTime, currentDate, endTime, div){
    console.log(div)
    if (startTime <= currentDate && currentDate < endTime){
        console.log("current är", lesson.columns[1])
        console.log(div)
        console.log(div.getElementsByClassName('currentLesson').innerText)
            if(lesson.columns[1] === 'Gem aktivitet' || lesson.columns[5] === "Annan aktivitet"){
                if (lesson.columns[4] != ""){
                    
                    div.getElementsByClassName('currentLesson')[0].innerText = "Lektion just nu: " + lesson.columns[2] + " i " + lesson.columns[4]

                } else {    
                    div.getElementsByClassName('currentLesson')[0].innerText = "Lektion just nu: " + lesson.columns[2]
                    
                }
            } else {

                if (lesson.columns[4] != ""){
                    if ((lesson.columns[1].includes("Moderna")) === true){
                        div.getElementsByClassName('currentLesson')[0].innerText = "Lektion just nu: " + "Moderna Språk" + " i " + lesson.columns[4]
                    } else{
                        div.getElementsByClassName('currentLesson')[0].innerText = "Lektion just nu: " + lesson.columns[1]
                    }

                } else {
                    if ((lesson.columns[1].includes("Moderna")) === true){
                        div.getElementsByClassName('currentLesson')[0].innerText = "Lektion just nu: " + "Moderna Språk"
                    } else{
                        div.getElementsByClassName('currentLesson')[0].innerText = "Lektion just nu: " + lesson.columns[1]
                    }
                }

            }
        div.getElementsByClassName('break')[0].innerText = "Lektionen slutar om: " + calcDiff(endTime, currentDate)
    }

}

function nextLesson(lessons, div){
    var moderna = false
    lessons.forEach(element => {
        
        var currentDate = today()
        var currentDay = currentDate.getDate()
        var currentMonth = currentDate.getMonth()+1
        if (currentDate.getDate() < 10){
            currentDay = "0" + currentDay
        }
        if (currentMonth < 10){
            currentMonth = "0" + currentMonth
        }

    
        console.log(currentDate.getFullYear()+'-'+currentDate.getMonth()+'-'+ currentDay)
        if (element.startdate === currentDate.getFullYear()+'-'+currentMonth+'-'+ currentDay){
            // console.log(element.columns[1])
            // console.log(element.starttime)
            const dateStringStart = element.startdate +" "+ element.starttime
            const dateStringEnd = element.enddate +" "+ element.endtime
            const startTime = new Date(dateStringStart)
            const endTime = new Date(dateStringEnd)
            const timeDiff = calcDiff(startTime, currentDate)
            console.log(startTime)
            if (timeDiff != false){
                renderNextLessons(element, timeDiff, div)         
                
            }   
            if (element.columns[1].includes("Moderna") && moderna === false){

                console.log(element, moderna)
                moderna = true
                currentLesson(element, startTime, currentDate, endTime, div)
                
            } else if (!element.columns[1].includes("Moderna")){
                console.log(element, moderna)
                currentLesson(element, startTime, currentDate, endTime, div)
            }   
                

            // tid till rast
            
            
        }
          
    })
}

function clear(){
    
    for (let x = 0;x < document.getElementsByClassName('currentLesson').length; x++){
        document.getElementsByClassName('currentLesson')[x].innerText=''
    }
    for (let x = 0;x < document.getElementsByClassName('break').length; x++){
        document.getElementsByClassName('break')[x].innerText=''
    }
    for (let x = 0;x < document.getElementsByClassName('lessons').length; x++){
        document.getElementsByClassName('lessons')[x].innerText=''
    }
} 



function doEverything(klass, url){
    const divKlass = document.getElementById(klass)
    console.log(divKlass.getElementsByClassName('break'))
    
    fetch(url).then(res => res.json())
    .then(resJson => {
        const lessons = resJson.reservations
        console.log(lessons)
        nextLesson(lessons, divKlass)
        
        
    })
}

window.onload = function(){
    
    startTime()
    // doEverything("180s", "https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5064405y7Y7.json")
    // doEverything("190s", "https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri627Q5Q750ZQ4Q5Y36Q7Zn6y4Z0.json")
}


let latestMin = 1299
let switchTimeEdit = false
function startTime() {

    

    var today = new Date(new Date().toLocaleString("se-SWE",{timeZone:'Europe/Stockholm'}))
    var h = today.getHours();
    var m = today.getMinutes();
    //console.log(m)
    m = checkTime(m);
    
    if (latestMin != m){
        clear()
        doEverything("180s", "https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5079605y7Y7.json")
        doEverything("190s", "https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5079535y7Y7.json")
        doEverything("200s", "https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri1Y7X3QQQfZY6QfZ5076385y7Y7.json")
    
        
        if (switchTimeEdit == false){
            document.getElementById('180sFrame').style.display ="block"
            document.getElementById('190sFrame').style.display ="none"
            document.getElementById('timeEditInfo').innerText = '180s' 
            switchTimeEdit = true
        }
        else {
            document.getElementById('180sFrame').style.display ="none"
            document.getElementById('190sFrame').style.display ="block"
            document.getElementById('timeEditInfo').innerText = '190s' 
            switchTimeEdit = false
        }
    
        
    

        
        
    }
    
    
    document.getElementById('time').innerText = h + ":" + m;
    var t = setTimeout(startTime, 500);
    latestMin = m
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
