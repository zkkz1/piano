"use strict";
const con = document.querySelector('.con');
const scoreshow = document.querySelector('.score')
let blackarr = [];
let blackdivarr = [];
let score = 0
var timer;
let startflag = 0; //1表示开始

function creatdiv(classname) {
    const newdiv = document.createElement('div');
    newdiv.className = classname;
    return newdiv
}

function move(speed) {
    const con = document.querySelector('.con');
    const confirstchild = con.firstElementChild;
    con.style.top = con.offsetTop + speed + 'px';
    if (con.offsetTop >= 0) {
        con.style.top = con.offsetTop - 180 + 'px';
        if (confirstchild) {
            con.insertBefore(creatrow(), con.firstChild);
        } else {
            con.appendChild(creatrow());
        }
        con.lastElementChild.remove();
    }
    if (blackarr.length >= 6) {
        over();
    }
}

function creatrow() {
    const newrow = document.createElement('div');
    newrow.className = 'row';
    const blacknum = rannum(0, 3);
    blackarr.push(blacknum);
    blackdivarr.push(newrow);
    for (let i = 0; i < 4; i++) {
        if (i == blacknum) {
            newrow.appendChild(creatdiv('box black'))
        } else {
            newrow.appendChild(creatdiv('box'))
        }
    }
    return newrow
}

function initcreat() {
    const newrow = document.createElement('div');
    newrow.className = 'row';
    for (let i = 0; i < 4; i++) {
        newrow.appendChild(creatdiv('box'))
    }
    return newrow
}

function init() {
    for (let i = 0; i < 5; i++) {
        con.appendChild(initcreat())
    }
    if (startflag === 1) {
        alert('游戏已经开始了')
    } else {
        startflag = 1;
        timer = setInterval(move, 30, 2);
    }
}

function rannum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function judge(value) {
    const black = blackarr.shift();
    const blackdiv = blackdivarr.shift();
    if (value !== black) {
        over();
    } else {
        blackdiv.children[value].className = 'box gray';
        score++;
        scoreshow.innerHTML = '你的分数为：' + score;
    }
}

function over() {
    alert('你输了，分数为' + score);
    con.innerHTML = '';
    startflag = 0;
    score = 0;
    scoreshow.innerHTML = '你的分数为：' + score;
    blackarr = [];
    blackdivarr = [];
    clearInterval(timer);
}

document.addEventListener('keypress', function(e) {
    if (e.key == 'd') {
        judge(0);
    }
    if (e.key == 'f') {
        judge(1);
    }
    if (e.key == 'j') {
        judge(2);
    }
    if (e.key == 'k') {
        judge(3);
    }
    if (e.key == ' ') {
        init();
    }
})


// function pause() {
//     if (startflag === 1) {
//         startflag = 0;
//         clearInterval(timer);

//     } else {
//         startflag = 1;
//         timer = setInterval(move, 30, 2);
//     }
// }