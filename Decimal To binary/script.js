   const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error-msg");


function Bin2Dec() {
    const regEx = /^[0-1]+$/;

    if(input.value.match(regEx)) {
        const binArr = input.value.split('').reverse();
        let decNo = 0;

        binArr.forEach((item, index) => item === '1' ? decNo += Math.pow(2, index) : void 0);

        output.value = decNo.toString();
        output.style.cursor = 'text';
    }else {
        error.style.display = 'block';
    }
}


btn.addEventListener('click', () => {
    error.style.display = 'none';
    Bin2Dec();
