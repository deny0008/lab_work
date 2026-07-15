const img = ["asset/H&C.png", "asset/AI.png", "asset/js.png", "asset/python.png", "asset/react.png"];

var index = 0;

document.querySelector(".rightBtn").onclick = function () {

    index++;
    if (index >= img.length) {
        index=0;
    }
        document.querySelector('img').attributes.src.value = `${img[index]}`

};

document.querySelector(".leftBtn").onclick = function () {

    index--;
        document.querySelector('img').attributes.src.value = `${img[index]}`

    if (index <0 ) {
        index = img.length-1;

    }
    document.querySelector('img').src = img[index];

};