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
        question : "Who is the creator of this questioner?",
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
nextBtn.addEventListener('click', getNext)

// Before Btn
beforeBtn.addEventListener('click', getBefore)


// Function
loadQuest(page);


// LoadQuest
function loadQuest(index){
    const quest = questions[index];
    
    optionsParent.innerHTML = ''
    
    if(index >= 0 && index <= questions.length-1 && page >= questions.length-1){
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

        nextBtn.innerHTML = "Finish";
        nextBtn.removeEventListener('click', getNext);
        nextBtn.addEventListener('click', getFinish);

    }
    
    else if(index >= 0 && index <= questions.length-1){
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

        nextBtn.innerHTML = "Next";
        nextBtn.removeEventListener('click', getFinish);
        nextBtn.addEventListener('click', getNext);

    };

}


// Next page
function getNext(){
    page >= questions.length-1 ? page = questions.length-1 : page ++
    loadQuest(page);
}


// Get Before
function getBefore(){
    page <= 0 ? page = 0 : page--
    loadQuest(page);
}


// Get Finish
function getFinish() {
    let data = []

    questions.forEach((e, index) => {
        if(e.selected !== '' && e.selected == e.corAnswer){
            const pushedData = [
                e.question, {
                    corAnswer : e.corAnswer,
                    selected : e.selected
                }
            ]

            data.push(pushedData);
        }

        else{
            const pushedData = [
                e.question, {
                    corAnswer : e.corAnswer,
                    selected : false
                }
            ]

            data.push(pushedData);
        }
    });

    localStorage.setItem('information', JSON.stringify(data, null, 2));
    window.location = '/result.html';
}
