// Declare Variable
const takeBtn1 = document.querySelector('.information button');
const takeBtn2 = document.querySelector('#takeBtn');
const corValue = document.querySelector('corAnswerValue');
const wroValue = document.querySelector('wroAnswerValue');
const ulQuiz = document.querySelector('ul#quizAns');
const corIcon = '<ion-icon name="checkmark-sharp"></ion-icon>';
const worIcon = '<ion-icon name="close-sharp"></ion-icon>';


// Declare Function
getResult();


// Event Listener


// Function
function getResult(){
    const resData = JSON.parse(localStorage.getItem('information'));
    console.log(resData);

    resData.forEach((e, index) => {
        const li = document.createElement('li');
        li.className = 'answer';
        li.innerHTML = `
        <p id="question">${e[0]}</p>
                        
        <label id="choice">
            <ion-icon name="checkmark-circle"></ion-icon>
            ${e[e.length-1].corAnswer}
        </label>

        <label id="corAnswer">
            <ion-icon name="arrow-forward-sharp"></ion-icon>
            ${e.selected == false ? e.selected : 'none'}
            ${e.selected == false ? worIcon : corIcon}
        </label>
        `

        ulQuiz.appendChild(li);
    })

}