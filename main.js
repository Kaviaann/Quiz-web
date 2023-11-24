// Declare
const question = document.getElementById('question');
const questionId = document.getElementById('number');
const optionsParent = document.getElementById('options');
const doneCount = document.getElementById('point');
const finishBtn = document.getElementById('finishBtn');
const beforeBtn = document.getElementById('beforeBtn');
const nextBtn = document.getElementById('nextBtn');
let page = 0;

const answerClass = document.getElementsByClassName('answer');
const answer = Array.from(answerClass)
const questions = [
    {
        question : "Siapa nama pembuat quesioner ini?",
        options : ["Ludwigyelstein", "NovelLikeToEat", "LunaGoesToMoon", "KaviaannLikeToSleep"],
        corAnswer : "Ludwigyelstein",
        selected : ''
    },
    {
        question : "Web ini menggunakan bahasa pemogramman apa untuk logicnya?",
        options : ["Html", "Css", "Javascript", "jQuery"],
        corAnswer : "Javascript",
        selected : ''
    }
]


// Add Event listener

// Finish Btn
finishBtn.addEventListener('click', getFinish)


// Next Btn
nextBtn.addEventListener('click', () => {
    page >= questions.length-1 ? page = questions.length-1 : page++
    loadQuest(page);
})

// Before Btn
beforeBtn.addEventListener('click', () => {
    page <= 0 ? page = 0 : page--
    loadQuest(page);
})


// Function
loadQuest(page);


// LoadQuest
function loadQuest(index){
    const quest = questions[index];

    optionsParent.innerHTML = ''

    if(index > -1 && index < questions.length){
        questionId.innerHTML = `${index+1}.`
        question.innerHTML = quest.question;

        quest.options.forEach((e, index) => {
            const li = document.createElement('li');
            li.className = 'answer';

            li.innerHTML = `
                <input type="radio" name="answer" id="answer${index}">
                <label>${e}</label>
            `

            li.addEventListener('click', () => {
                li.querySelector(`input[type="radio"]`).checked = true;
                quest.selected = e;
            })

            if(e == quest.selected){
                li.querySelector(`input[type="radio"]`).checked = true;
            }

            optionsParent.appendChild(li);
        });

    }
}


// Next page
function getNext(){
    page >= questions.length-1 
    ?() => {
        page = questions.length-1
        if(nextBtn.innerHTML == "Next"){
            nextBtn.innerHTML = "Finish";
            nextBtn.removeEventListener('click');
            nextBtn.addEventListener('click', getFinish);
        }
    }
    :() => {
        page++
        if(nextBtn == "Finish"){
            nextBtn.innerHTML = "Next";
            nextBtn.removeEventListener('click');
            nextBtn.addEventListener('click', getNext);
        }
    } 

    loadQuest(page);
}


// Get Before
function getBefore(){
    page <= 0 ? page = 0 : page--
    loadQuest(page);
}


// Get Finish
function getFinish(){
    questions.forEach((e, index) => {
        if(e.selected != ''){
            const answer = e.selected;
            alert(e.selected == e.corAnswer ? `Answer : ${e.selected} are correct!` : `Answer : ${e.selected} are wrong :(`)
        }
    })
}