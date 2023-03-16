const gradientBox = document.querySelector('.gradient_box');
const colorInputs = document.querySelectorAll('.colors input');//input
const selectMenu = document.querySelector('.select_box select'); //direction
const textArea = document.querySelector('textarea')
const refreshButton = document.querySelector('.refresh')
const copyButton = document.querySelector('.copy')


const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 0xffffff).toString(16);

    return `#${randomIndex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColor()
        colorInputs[1].value = getRandomColor()
    }

    const gradient = `linear-gradient(${selectMenu.value},${colorInputs[0].value},${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textArea.value = `background:${gradient}`
}

colorInputs.forEach(input => {

    input.addEventListener('input', () => generateGradient(false));
})

const copyCode = () => {
    navigator.clipboard.writeText(textArea.value)
    copyButton.innerText = "Code copied"
    setTimeout(() => copyButton.innerText = "Code code", 1000);
}

selectMenu.addEventListener('change', () => generateGradient(false));
refreshButton.addEventListener('click', () => generateGradient(true));
copyButton.addEventListener('click', copyCode);











