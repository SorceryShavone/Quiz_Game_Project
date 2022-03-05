       var countDownTimer;
       var timerInterval;
       var arrayOfQuestions = [];
       var gameScore = 0;
       const timePenalty = 30; //time in seconds
       const maxTime = 5 * 60; //time is in seconds
       function setCountDownTimer () {
           countDownTimer = maxTime;
           console.log("countDownTimer: ", countDownTimer)
       }

       //When the person clicks the begin button the timer starts
       //start time
       function startTimer() {
       timerInterval = setInterval(updateTimer, 1000);
       console.log("startTimer: ", timerInterval);
       }

        function updateTimer() {
            console.log("updateTimer: begun");        
            countDownTimer--;
            console.log("updateTimer: countDownTimer", countDownTimer)
            presentTimer();
        }

        function presentTimer() {
            let currentTime = document.getElementById('timer');
            currentTime.innerText = countDownTimer;
            console.log("presentTimer: currentTime", currentTime);
        }

        function showScoreBoard () {
            let scoreBoard = document.getElementById('score-board');
            console.log("showScoreBoard: scoreBoard", scoreBoard);
            // This does the same thing as class.List.remove('hide)  --> scoreBoard.classList.toggle('hide', false)
            scoreBoard.classList.remove('hide')
        }

        function presentScore () {
            let currentScore = document.getElementById ('score');
            currentScore.innerText = gameScore;
            console.log("presentScore: currentScore", currentScore);
        }
    
        function hideGreeting() {
            let greeting = document.getElementById('greeting');
            console.log("hideGreeting: greeting", greeting);
            //greeting.classList.toggle('hide', false)
            greeting.classList.add('hide');
        }

       



        //questions is asked
        function setupQuestionsAndAnswers() {
            let question1 = {
                id: "quest0",
                question: "To select elements with a specific class:",
                answer1: "Write a semicolon (;) character, followed by the class name.",
                answer2: "Write a period (.) character, followed by the class name.",
                answer3: "Write a period (.) character",
                answer4: "Write a comma (,) character",
                correctAnswer: 2
            };
            let question2 = {
                id: "quest1",
                question: "In CSS, a color can be specified by using a predefined color name.",
                answer1: "yes",
                answer2: "no",
                answer3: "null",
                answer4: "null",
                correctAnswer: 1
            };

            arrayOfQuestions.push(question1);
            arrayOfQuestions.push(question2);

            console.log("SetupQuestions arrayOfQuestions:", arrayOfQuestions);
        }

        function getQuestion(questionId) {
            console.log('getQuestion question Id', questionId);

            let found = false;

            for (let i=0; i<arrayOfQuestions.length; i++) {
                if(questionId == arrayOfQuestions[i].id) {
                    prepareQuestionAndAnswers(i);
                }
            } 
        }

        function prepareQuestionAndAnswers(questionIndex) {
            console.log('prepareQuestionAndAnswers questionIndex', questionIndex);
            let questionSection = document.getElementById('questions');
            let newQuestion = document.createElement('div');
            newQuestion.id = arrayOfQuestions[questionIndex].id;
           // newQuestion.innerText = arrayOfQuestions[questionIndex].question;
            newQuestion.classList.add('question');

            let qSpan = document.createElement('span)');
            qSpan.innerText = arrayOfQuestions[questionIndex].question;
            newQuestion.appendChild(qSpan);
            

            if(arrayOfQuestions[questionIndex].answer1) {
                let answer = document.createElement ('div');
                let rdoBtn = document.createElement('input');
                let label = document.createElement('label');

                rdoBtn.id = `${arrayOfQuestions[questionIndex].Id}_answer1`;
                rdoBtn.setAttribute('type', 'radio');
                rdoBtn.value = 1
                rdoBtn.classList.add('answer');
                rdoBtn.classList.add(`${arrayOfQuestions[questionIndex].id}`);
                rdoBtn.name = arrayOfQuestions[questionIndex].id;

                label.innerText = arrayOfQuestions[question].answer1;
                label.setAttribute('for', `${rdoBtn.id}`);

                answer.classList.add('answer');
                answer.appendChild(rdoBtn);
                answer.appendChild(label);
                newQuestion.appendChild('answer');

                console.log('prepareQuestionAndAnswers answer', answer);


                //answer.innerText = arrayOfQuestions[questionIndex].answer1;  
                //answer.classList.add('answer');      
                //answer.id = `${arrayOfQuestions[questionIndex].id}_answer1`;
                //questionSection.appendChild(answer);
            }

            if(arrayOfQuestions[questionIndex].answer2) {
                let answer = document.createElement ('div');
                answer.innerText = arrayOfQuestions[questionIndex].answer2;  
                answer.classList.add('answer');  
                answer.id = "" + arrayOfQuestions[questionIndex].id + "_answer2"; 
                // same as above            answer.id = `${arrayOfQuestions[questionIndex].id}_answer2`; 
                NewSection.appendChild(answer);   

                console.log('prepareQuestionAndAnswers answer', answer);
            }

            questionSection.appendChild(newQuestion);

            console.log('prepareQuestionAndAnswers newQuestion', newQuestion);

        }





        function doGame() {
            setCountDownTimer();
            startTimer();
            hideGreeting();
            setupQuestionsAndAnswers();
            showScoreBoard();
            presentScore();
            getQuestion('quest0')
       }
