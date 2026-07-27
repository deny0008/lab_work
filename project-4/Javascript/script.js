const quizQuestions = [
    {
        question: "1. Which method is used to convert a JSON string into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "parseInt()",
            "toObject()"
        ],
        answer: "JSON.parse()"
    },
    {
        question: "2. Which keyword is used to declare a variable in JavaScript?",
        options: [
            "let",
            "var",
            "const",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "3. Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
        ],
        answer: "Netscape"
    },
    {
        question: "4. Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "<!-- -->"
        ],
        answer: "//"
    },
    {
        question: "5. Which method is used to display a popup message in JavaScript?",
        options: [
            "alert()",
            "print()",
            "display()",
            "message()"
        ],
        answer: "alert()"
    },
    {
        question: "6. Which operator is used for strict equality in JavaScript?",
        options: [
            "===",
            "==",
            "=",
            "!="
        ],
        answer: "==="
    },
    {
        question: "7. Which loop executes its code at least once?",
        options: [
            "do...while",
            "while",
            "for",
            "for...of"
        ],
        answer: "do...while"
    },
    {
        question: "8. Which array method adds an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
    },
    {
        question: "9. Which function converts a string into an integer?",
        options: [
            "parseInt()",
            "parseFloat()",
            "Number()",
            "toString()"
        ],
        answer: "parseInt()"
    },
    {
        question: "10. Which event is triggered when a user clicks on an HTML element?",
        options: [
            "onclick",
            "onmouseover",
            "onkeydown",
            "onload"
        ],
        answer: "onclick"
    }
];


var index = 0;

document.querySelector('.wrapper').style.display = "none";
document.querySelector('h3').onclick = function () {
    document.querySelector('.wrapper').style.display = "block";
    document.querySelector('h3').style.display = "none";
    Quiz(index);
}





var id;
var second;
let score = 0;
var flag = false;
var tempQuation = 0;
var Skip = [];

function Timer(t1, t2) {
    setTimeout(() => {
        document.querySelectorAll('.timer span')[0].innerHTML = "00";
        second = document.querySelectorAll('.timer span')[1].innerText = "59";
    }, t1)

    id = setInterval(() => {
        if (second == 0) {
            clearInterval(id);
            index++;
            Quiz(index);

        }
        document.querySelectorAll('.timer span')[1].innerText = `${second--}`;
    }, t2)
}


function Quiz(index) {
    document.querySelectorAll('.timer span')[0].innerHTML = "01";
    document.querySelectorAll('.timer span')[1].innerHTML = "00";

    if (index >= quizQuestions.length) {
        document.querySelector('.submitBtn').style.display = "none";
        return;
    }
    document.querySelector('.submitBtn').style.display = "block";

    if (index == 0) {
        document.querySelector('.pre').classList.add("no-cursor");
        document.querySelector('.pre').disabled = true;
        Timer(1000, 1000);

    }

    else if (index == 10) {
        document.querySelector('.next').classList.add("no-cursor");
        document.querySelector('.next').disabled = true;
    }

    else {
        document.querySelector('.pre').classList.remove("no-cursor")
        document.querySelector('.pre').disabled = false;
        document.querySelector('.next').classList.remove("no-cursor")
        document.querySelector('.next').disabled = false;
        Timer(1000, 1000);
    }




    document.querySelector('.question').innerHTML = `
    <div class="">
        <h2>${quizQuestions[index].question}</h2><br>
            <div class="option">
                <aside> <input name="R" form = "Myform" value = "${quizQuestions[index].options[0]}" type="radio" id = "id1"><label>  ${quizQuestions[index].options[0]} </label></aside>
                <aside> <input name="R" form = "Myform" value = "${quizQuestions[index].options[1]}" type="radio"  id = "id1"><label> ${quizQuestions[index].options[1]} </label></aside>
                <aside> <input name="R" form = "Myform" value = "${quizQuestions[index].options[2]}" type="radio" id = "id1"><label>  ${quizQuestions[index].options[2]} </label></aside>
                <aside> <input name="R" form = "Myform" value = "${quizQuestions[index].options[3]}" type="radio"  id = "id1"><label> ${quizQuestions[index].options[3]} </label></aside>
            </div>
        </div>`
}


document.querySelector('.next').onclick = function (e) {
    e.preventDefault();
    clearInterval(id);
    Skip.push(index);
    Quiz(++index);
}


document.querySelector('.pre').onclick = function (e) {
    e.preventDefault();
    clearInterval(id);
    Quiz(--index);

}

function Result() {
    document.querySelector('.wrapper').style.display = "none";
    document.querySelector('.result').style.display = "block";
    document.querySelector('.result').innerHTML = score;



    let total = quizQuestions.length;
    let correct = score;
    let wrong = total - correct;
    let percentage = ((correct / total) * 100).toFixed(0);

    let status = percentage >= 50 ? "🎉 PASS" : "❌ FAIL";

    document.querySelector(".result").style.display = "block";

    document.querySelector(".result").innerHTML = `
        <h1>Quiz Result</h1>

        <p>📚 Total Questions : <b>${total}</b></p>

        <p>✅ Correct Answers : <b>${correct}</b></p>

        <p>❌ Wrong Answers : <b>${wrong}</b></p>

        <p>📊 Percentage : <b>${percentage}%</b></p>

        <p style="font-size:28px;color:${percentage >= 50 ? '#2ecc71' : '#ff5e5e'}">
            ${status}
        </p>

        <button onclick="location.reload()">Restart Quiz</button>`;

}


document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    clearInterval(id);

    for (let i = 0; i < quizQuestions[index].options.length; i++) {
        if (e.target[i].checked) {
            if (e.target[i].value == quizQuestions[index].answer) {
                score++;
            }
        }
    }


    if (index == quizQuestions.length - 1) {

        flag = true;
        document.querySelector('.pre').style.visibility = "hidden";
        document.querySelector('.next').style.visibility = "hidden";
        if (Skip.length - 1 > tempQuation) {
            index = Skip[tempQuation];
        }
        else {
            Result();
            return;
        }
        Quiz(index);
        return;
    }

    if (flag) {
        if (Skip.length - 1 > tempQuation) {
            tempQuation++;
        }
        else {
            Result();
            return;
        }
        index = Skip[tempQuation];
        Quiz(index);
        return;

    }

    Quiz(++index);
}
