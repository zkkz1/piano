"use strict";
const startmain = document.querySelector('.main');
const scoreshow = document.querySelector('.score')

var blocknumall = [];
let score = 0

function creatfirst(boxnum) {
    const rownew = document.createElement('div');
    const rowold = document.querySelector('.row');
    for (let i = 0; i < boxnum; i++) {
        const box = document.createElement('div');
        box.className = 'box yellow';
        rownew.appendChild(box)
    }
    rownew.className = 'row';
    if (rowold) {
        startmain.insertBefore(rownew, rowold);
    } else {
        startmain.appendChild(rownew);
    }
}

function creatbox(boxnum) {
    const rownew = document.createElement('div');
    const rowold = document.querySelector('.row');
    let blacknum = rannum(0, boxnum - 1, 1)[0]
    blocknumall.push(blacknum);
    for (let i = 0; i < boxnum; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        if (i == blacknum) {
            box.className = 'box black'
        }
        rownew.appendChild(box)
    }
    rownew.className = 'row';

    startmain.insertBefore(rownew, rowold);

}

function move() {
    creatbox(4);
    const rowall = document.querySelectorAll('.row');
    for (let i = 0; i < rowall.length; i++) {
        if (rowall[i].offsetTop > 700) {
            rowall[i].remove()
        }
    }
    // rowall.style.top = rowall.offsetTop + 50 + 'px';
    // console.log(123);

}


function rannum(min, max, num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return arr
}

function init() {
    score = 0;
    scoreshow.innerHTML = '你的分数为：' + score;
    creatfirst(4);
    move();
    move();
    move();
}

function judge(e) {

    function judge1(i) {
        let blacknum = blocknumall.shift();
        const thirdrow = startmain.querySelectorAll('.row')[2];
        if (blacknum == i) {
            thirdrow.childNodes[i].classList.add('gray');
            score++;
            scoreshow.innerHTML = '你的分数为：' + score;
            move();
        } else {
            over();
            blocknumall = [];
            init();
        }
    }
    if (e == 'd') {
        judge1(0);
    }
    if (e == 'f') {
        judge1(1);
    }
    if (e == 'j') {
        judge1(2);
    }
    if (e == 'k') {
        judge1(3);
    }
}

function over() {
    alert('你的分数为' + score)
}
document.addEventListener('keypress', function(e) {
    judge(e.key);
})
init();



// setInterval(move, 30);