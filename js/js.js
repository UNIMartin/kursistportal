// JavaScript Document
"use strict"

let _acrobat = [];

async function fetchAcrobat() {
  const response = await fetch('json/acrobat.json');
  const data = await response.json();
  _acrobat = data;
  appendAcrobat(_acrobat);
}

fetchAcrobat();

function appendAcrobat(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#acrobat-container').innerHTML = htmlTemplate;
}


let _ae = [];

async function fetchAe() {
  const response = await fetch('json/ae.json');
  const data = await response.json();
  _ae = data;
  appendAe(_ae);
}

fetchAe();

function appendAe(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#ae-container').innerHTML = htmlTemplate;
}


let _an = [];

async function fetchAn() {
  const response = await fetch('json/an.json');
  const data = await response.json();
  _an = data;
  appendAn(_an);
}

fetchAn();

function appendAn(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#an-container').innerHTML = htmlTemplate;
}


let _ai = [];

async function fetchAi() {
  const response = await fetch('json/ai.json');
  const data = await response.json();
  _ai = data;
  appendAi(_ai);
}

fetchAi();

function appendAi(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#ai-container').innerHTML = htmlTemplate;
}


let _id = [];

async function fetchId() {
  const response = await fetch('json/id.json');
  const data = await response.json();
  _id = data;
  appendId(_id);
}

fetchId();

function appendId(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#id-container').innerHTML = htmlTemplate;
}


let _ps = [];

async function fetchPs() {
  const response = await fetch('json/ps.json');
  const data = await response.json();
  _ps = data;
  appendPs(_ps);
}

fetchPs();

function appendPs(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#ps-container').innerHTML = htmlTemplate;
}


let _pr = [];

async function fetchPr() {
  const response = await fetch('json/pr.json');
  const data = await response.json();
  _pr = data;
  appendPr(_pr);
}

fetchPr();

function appendPr(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#pr-container').innerHTML = htmlTemplate;
}


let _ru = [];

async function fetchRu() {
  const response = await fetch('json/ru.json');
  const data = await response.json();
  _ru = data;
  appendRu(_ru);
}

fetchRu();

function appendRu(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#ru-container').innerHTML = htmlTemplate;
}


let _xd = [];

async function fetchXd() {
  const response = await fetch('json/xd.json');
  const data = await response.json();
  _xd = data;
  appendXd(_xd);
}

fetchXd();

function appendXd(tutorials) {
  let htmlTemplate = "";
  for (let tutorial of tutorials) {
    htmlTemplate += /*html*/`
        <article>
			<h2>${tutorial.navn}</h2>
          	<img src="${tutorial.img}">
        </article>
    `;
  }
  document.querySelector('#xd-container').innerHTML = htmlTemplate;
}