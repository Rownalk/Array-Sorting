function myFunc(){
    let greeting; // initially undefined
    let time = new Date().getHours();

    if(time < 12){
        greeting = "Good Morning";
    }
    else if (time < 19){
        greeting = "Good Afternoon";

    }
    else if (time < 21){
        greeting = "Good Evening";

    }
    else{
        greeting = "Good Night";

    }



document.getElementById("time").innerHTML = time
document.getElementById("greet").innerHTML = greeting
}

let text = "";
let i=0
while(i<=10){
    text += `<br> The number is ${Math.random()*120}`;
    i++;
}

document.writeln(`The Numbers are: ${text}`);