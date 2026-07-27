var mydata = document.querySelector('div').innerText;
document.querySelector('div').innerHTML = "";

for (const i in mydata) {
    document.querySelector('div').innerHTML += `<span>${mydata[i]}</span>`;
}

var index = 0;

document.body.onkeypress = function (event) {

    if (event.key == mydata[index]) {

        document.querySelectorAll('span')[index].style.color = "lime";

        // True Value Update
        document.querySelectorAll("aside")[0].innerHTML++;

        // Space Count
        if (mydata[index] == " ") {
            document.querySelectorAll("aside")[2].innerHTML++;
        }

    } else {

        console.log(event.key, mydata[index], "Not Match");

        document.querySelectorAll('span')[index].style.color = "red";

        console.log(event.key, mydata[index], "No Match");

        // False Value Update
        document.querySelectorAll("aside")[1].innerHTML++;
    }

    index++;
}