const container = document.querySelector('.container');
const outputNum = document.querySelector('.output-number');
const btnNum = document.querySelectorAll('.btn-1');
const bg = document.querySelector('.row-num');
const btn2 = document.querySelectorAll('.btn-2');

const click = document.querySelector('.click');
let currentNum = 1;
let selectedbtn;
let currentRandomNum = 2;

btn2.forEach(btn => {
    btn.addEventListener('click', () => {
        btn2.forEach(btn => {
            btn.classList.remove('btnBg');
        });
        if (btn.textContent == 'Click') {
            testclick();
        } else {
            testhover();
        }
        btn.classList.add('btnBg');

    })
})


function testclick() {
    btnNum.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentNum == btn.textContent) {
                refreshBg();
                btn.classList.toggle('btnBg');
                randomGen();
                bg.style.backgroundImage = `url('assets/image/${currentRandomNum}.jpg')`
                outputNum.textContent = btn.textContent;
                currentNum++;
            }
        })
    })
}

function testhover() {
    btnNum.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            if (currentNum == btn.textContent) {
                refreshBg();
                btn.classList.toggle('btnBg');
                randomGen();
                bg.style.backgroundImage = `url('assets/image/${currentRandomNum}.jpg')`
                outputNum.textContent = btn.textContent;
                currentNum++;
            }
        })
    })
}


function refreshBg() {
    btnNum.forEach(btn => {
        btn.classList.remove('btnBg')
    })
}

function randomGen() {
    let randomNum = Math.floor(Math.random() * 5) + 2;
    if (randomNum == currentRandomNum) {
        randomGen();
    } else {
        currentRandomNum = randomNum;
    }
}