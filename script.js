let button = document.getElementById('button-box');
let fact = document.getElementById('fact-container');

const getCatFact = async ()=>{
    try{
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        const data = await response.json()
        fact.textContent = data.text;
    }
    catch(err){
        fact.factscontent = err.message;

    }}

    button.addEventListener('click',getCatFact)