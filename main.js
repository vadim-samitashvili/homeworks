// Task 1
while (true) {
    const form = document.querySelector('form');
    const number = Math.floor(prompt('Введите количество input:', 1));
    
    for (let i = number; i > 0; i--) {
        const input = document.createElement('input');
    
        input.setAttribute('type', 'text');
        input.setAttribute('value', `Input ${i}`);
        input.classList.add('input-item');
    
        if (i % 2) {
            input.classList.add('input-item--bg-color');
        }
    
        if (!(i % 3)) {
            input.removeAttribute('value');
            input.setAttribute('placeholder', 'Some text...');
        }
    
        if (i === number) {
            input.classList.add('margin-zero');
        }
    
        form.prepend(input);
    }

    if (!isNaN(number) && number > 0) break;
}
// Task 2
const time = document.createElement('div');
const h2 = document.createElement('h2');
const btnStop = document.createElement('button');
const btnStart = document.createElement('button');

time.classList.add('time');
btnStop.textContent = 'Stop';
btnStart.textContent = 'Start';

document.body.append(time);
time.prepend(h2, btnStop, btnStart);

const getTime = () => {
    h2.textContent = new Date().toLocaleTimeString();
}

btnStart.addEventListener('click', () => {
    const intervalId = setInterval(getTime, 1000);

    btnStop.addEventListener('click', () => {
        clearInterval(intervalId);
    })
})

getTime();
// Task 3
const wrapper = document.createElement('div');
const main = document.createElement('div');
const footer = document.createElement('div');
const h1 = document.createElement('h1');
const pFirst = document.createElement('p');
const pSecond = document.createElement('p');
const pLast = document.createElement('p');

wrapper.setAttribute('id', 'wrapper');
main.setAttribute('id', 'main');
footer.setAttribute('id', 'footer');

h1.textContent = 'Footer';
pFirst.textContent = 'I am first paragraph';
pSecond.textContent = 'I am second paragraph';
pLast.textContent = 'I am last paragraph';

footer.prepend(h1);
main.prepend(pFirst, pSecond, pLast);

document.body.append(wrapper);
wrapper.prepend(footer, main);


const setBackgroundColorForLastParagraph = () => {
    const lastParagraph = main.lastChild;
    lastParagraph.setAttribute('style', 'background-color: khaki');
}

const swapFooterWithMain = () => {
    footer.remove();
    wrapper.append(footer);
}

setBackgroundColorForLastParagraph();
swapFooterWithMain();