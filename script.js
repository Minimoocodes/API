'use strict';

async function getData() {
    const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a88fbe236dmsh1d84c568872a465p1e4c60jsn666323a2fcc1',
            'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        let index = Number(Math.floor(Math.random()*25 + 1));
            let titleEl = document.querySelector('#title');
            titleEl.textContent = result.d[index].Title;

            let imgEl = document.querySelector('#image');
            imgEl.src = result.d[index].Image;

            let ingredientsEl = document.querySelector('#ingredients');
            let ingredientsArray = Object.values(result.d[index].Ingredients);
        

            ingredientsArray.forEach(function(ingredient){
                let ingredientsListItem = document.createElement('li');
                ingredientsListItem.textContent = ingredient;
                ingredientsEl.appendChild(ingredientsListItem);
            });            

                                
            let instructionEl = document.querySelector('#instructions');
            let instructionArray = result.d[index].Instructions.split('. ');
            instructionArray.forEach(function(instruction){
                let instructionListItem = document.createElement('li');
                instructionListItem.textContent = instruction;
                instructionEl.appendChild(instructionListItem);
            })
            
        
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

getData();

let btnEl = document.querySelector('#btn');
btnEl.addEventListener('click', function(){
    getData();
});