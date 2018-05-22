var number
        var number1 = "5"
        var name = "prafful"
        var boolean = true
        var myarray = ["chennai", "india", "bangalore"]
        
        document.write("I am writing from JS")
        console.log("Hello JS")
        console.log(number + number1)
        console.log(myarray)
        console.log(myarray.push("cochin"))
        console.log(myarray.length)
        console.log(myarray.splice(1,2))
        console.log(myarray)
        document.write("<br>" + myarray.unshift("goa"))
        document.write("<br>" + myarray)
        document.write("<br>"  + Math.floor(Math.random()*1000))
        if (number1 > 4) {
            document.write("<br>" + "Greater")
        }
        
        var person = {
            firstname:"prafful",
            lastname:"daga"
        }

        document.write("<br>" + person.firstname)
        person.age=36;
        person["salary"] = 888;
        console.log(person)
        

        function myFunction1(name){
            document.write("<br>" + "I am from function1 " + name )
        }

        myFunction2 = function(){
            document.write("<br>" + "I am from function2")
        }

        myFunction1("prafful")
        myFunction2()

        //alert("Hello Alert form ES 2015")
        //capture = prompt("Type your name:" + "Hello")
        //console.log(capture)
        //alert(capture)
        
        myFunction3 = function(){
            console.log("I am from setTimeOut")
        }    

        myFunction4 = function(){
            console.log(number1++)
        }    

        myFunction5 = function(){
            clearInterval(mytime)
        }    
        
        setTimeout(myFunction3, 4000)
        
        var mytime = setInterval(myFunction4,1000)

        setTimeout(myFunction5, 4000)
        
        addZero = function(received){
            if(received < 10){
                received = "0"+received
            }
            return received
        }
        
        
        function getTime(){
            var present = new Date()
                hour = present.getHours()
                minute =  present.getMinutes()
                second =  present.getSeconds()
                h = addZero(hour)
                m = addZero(minute)
                s = addZero(second)
                console.log(h + ":" + m + ":" + s)
                //document.write(hour + ":" + minute + ":" + second)  
                var tposition = document.getElementById("timer")
                tposition.innerHTML = h + ":" + m + ":" + s
        }
        
        
               
        setInterval(getTime, 1000) 