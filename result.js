// Declare Variable
const takeBtn = document.querySelectorAll('button.takeBtn')
const corValue = document.querySelector('corAnswerValue');
const wroValue = document.querySelector('wroAnswerValue');
const ulQuiz = document.querySelector('ul#quizAns');
const corIcon = '<ion-icon name="checkmark-sharp"></ion-icon>';
const wroIcon = '<ion-icon name="close-sharp"></ion-icon>';


// Declare Function
getResult();


// Event Listener
takeBtn.forEach((e) => {
    e.addEventListener('click', () => {
        window.location = './index.html'
        localStorage.removeItem('score')
    })
    console.log(e)
})


// Function
function getResult(){
    const resData = JSON.parse(localStorage.getItem('score'));

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
            ${value()}
            ${icon()}
            </label>
        `

        function value(){
            if(e[e.length-1].selected != ''){
                return e[e.length-1].selected
            } else{
                return 'None';
            }
        }

        function icon(){
            if(e[e.length-1].selected != '' && e[e.length-1].selected.toLowerCase() === e[e.length-1].corAnswer.toLowerCase()){
                return corIcon
            } else {
                return wroIcon
            }
        }

        ulQuiz.appendChild(li);
    })

}