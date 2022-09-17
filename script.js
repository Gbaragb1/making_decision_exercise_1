
let finalResult;

let evenOddResult;

// Add your code here
const math_score = 4;
const english_score = 2;
const biology_score = 12;
const chemistry_score = 4;

const add_math_eng = math_score + english_score;
const sub_chem_bio = biology_score - chemistry_score;

finalResult = add_math_eng * sub_chem_bio;

if (finalResult % 2 == 0){
    evenOddResult = finalResult
    evenOddResult=0
    console.log("The final result is even!: ", evenOddResult)
}







// Don't edit the code below here!
const section =document.getElementById('text')
section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
