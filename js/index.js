"use strict";
(function() {
    const models = document.querySelectorAll('.model');
    const startbtn = document.querySelector('#start');
    const helpbtn = document.querySelector('#help');
    const helpclosebtn = document.querySelector('#help-close');
    const helptext = document.querySelector('#helptext');
    const h2 = document.querySelector('h2');
    const modelname = ['经典模式', '街机模式']
    let modelflag = 0;
    let helpflag = true;
    for (let i = 0; i < models.length; i++) {
        models[i].addEventListener('click', function() {
            h2.innerHTML = modelname[i];
            modelflag = i;
        })
    }
    startbtn.addEventListener('click', function() {
        if (modelflag == 0) {
            window.location.href = "./html/start2.html";
        } else {
            window.location.href = "./html/start1.html";
        }
    })
    helpbtn.addEventListener('click', function() {
        helptext.style.display = 'block';
    })
    helpclosebtn.addEventListener('click', function() {
        helptext.style.display = 'none';
    })



})()