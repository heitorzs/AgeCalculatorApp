const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('mounthIn');
const yearIn = document.getElementById('yearIn');

const dayOut = document.getElementById('dayOut');
const mounthOut = document.getElementById('mounthOut');
const yearOut = document.getElementById('yearOut');

const button = document.getElementById('button');

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        console.log(parent);
        if (!i.value) {
            i.style.borderColor = 'red';
            parent.querySelector("small").innerText = "this field is required."
            validator = false;
        } else if (monthIn.value > 12) {
            monthIn.style.borderColor = 'red'
            monthIn.parentElement.querySelector('small').innerText = 'must be a valide month'
            validator = false;
        } else if (dayIn.value > 31) {
            dayIn.style.borderColor = 'red'
            dayIn.parentElement.querySelector('small').innerText = 'must be a valide a valid day'
            validator = false;
        } else {
            i.style.borderColor = '';
            parent.querySelector("small").innerText = ''
            validator = true
        }
    })
    return validator;
}

function ageCalculator(e) {
    e.preventDefault()
    if (validate()) {
        if (dayIn.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthIn.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - dayIn.value;
        const m = month - monthIn.value;
        const y = year - yearIn.value;

        dayOut.innerHTML = `${d}`;
        monthOut.innerHTML = `${m}`;
        yearOut.innerHTML = `${y}` ;

    }
    console.log('clicked')

}

button.addEventListener("click", ageCalculator)

