
const inputs = document.querySelector('body > div.quiz.py-4.bg-primary > div > div.text-center > input');
const formi = document.querySelector('.quiz-form');

// console.log(inputs);
// console.log(formi);

//FORM SUBMITTING
// formi.addEventListener('submit', e => {
//     e.preventDefault();


// });



//RADIOS BUTTON GETTING VALUE ON CLICK
// inputs.addEventListener('click', e => {
//     e.preventDefault();
//     function getCheckedValue(radios) {

        //getting the value of radios in an array
// }

 //algorithm for checking the answers


    // });

    //the window object //scroll on top automatique
    // scrollTo(0,0);


   //Code to animate the speed of the Score
    // const result = document.querySelector('.result');
    // result.classList.remove('d-none');
    // let output = 0;
    // const timer = setInterval(() => {
    //     result.querySelector('span').textContent=`${output}%`;
    //     if(output === score){

    //         clearInterval(timer);
    //     }
    //     else {
    //         output++;
    //     }
    // }, 20);

// const x= document.getElementById("container");
// console.log(x.previousElementSibling);

// const x= document.getElementById("container");
// console.log(x.nextElementSibling);


// var radios = document.querySelectorAll('[type="radio"]');
// console.log(radios);

/* A node list in Javascript is an array it can be iterative */
// radios.forEach(element =>{

    //code here to get the value of the radios
// console.log(element.value);
// });

// function aff() {
//     var answer = document.getElementById ('answer').value;
//     document.getElementById ('req_box').innerHTML=answer;
//     if (document.getElementById ('req_box').innerHTML=answer){
//         submit.setAttribute('disabled','true');
//         }

//     if(!answer.match(/^[a-z]{4, 12}$/))
//         alert('Le code semble correct...');
//     else
//         alert('Mauvais format de code !');
// }
/*Events and DOM */
// formi.addEventListener('submit', e => { 
    // e.preventDefault(); //to stop the event normal behavior and refreshing the page
    
    
     /* the object e is an event object containig many usefull informations  */
        // e.preventDefault();
        // console.log('/========= event Object =========/');
        // console.log(e);
        // console.log('/========= Type of event =========/');
        // console.log(e.type);
        // console.log('/========= the handler of event =========/');
        // console.log(e.submitter);
        // console.log('/========= the target of the event =========/');
        // console.log(e.target);
        // console.log('/========= the current target if exist of the event =========/');
        // console.log(e.currentTarget);
        // console.log('/=========    =========/');

        // const element = document.createElement('input');
        // const div =  document.getElementById ('req_box');
        // div.append(element);
        // element.setAttribute('value',1);
        // element.setAttribute('id','test');
        // element.setAttribute('type','text');
        // element.classList.add("rect");


// aff();

formi.addEventListener("submit",function (e){
    e.preventDefault();
    console.log("formi submit");
    var answer = document.getElementById('answer').value;
    var regex = /^[a-zA-Z]{6,12}$/;
    const element = document.createElement('input');
    const div =  document.getElementById ('req_box');
    div.append(element);
    element.setAttribute('id','test');
    element.setAttribute('type','text');
    element.setAttribute.value=answer;
    if(regex.test(answer))
    {
        // var txtScore = document.getElementById("score");
        // txtScore.inerHTML = 2;
        element.setAttribute('value',answer);
        document.getElementById('answer').value="";
        element.classList.add("rect");
        submit.setAttribute('disabled',true);
    }
    else
    {
        div.removeChild(element);
        document.getElementById('answer').value="";
        alert('you didnt respect the regex');
    }   
})
 
function checkAnswer(value, index) {
    let gAnswer = ["B", "B", "B", "B"];
    if (value != gAnswer[index]) {
        return false;
    }
    return true;

}


const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    let answerR = document.querySelectorAll('[type="radio"]:checked');
    let score = 0;
    answerR.forEach((element, index) => {
        if (checkAnswer(element.value, index)) {
            score += 25;
        }
    });
    showScore(score);
})

function check() {
    document.querySelector('[type="radio"]').checked = true;
}



//The score 
function showScore(score) {
    let output = 0;
    document.querySelector('.result').classList.remove("d-none");
    scrollTo(0, 0)
    const timer = setInterval(() => {
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
            document.querySelector('#score').innerText = " " + output + "% ";
        }
    }, 10)


}

        // var answer = document.getElementById('answer').value;
        // var regex = /^[a-z]{4,12}$/;

        // if(regex.test(answer))
        // {
        //     const element = document.createElement('input');
        //     const div =  document.getElementById ('req_box');
        //     div.append(element);
        //     element.setAttribute('value',answer);
        //     element.setAttribute('id','test');
        //     element.setAttribute('name',"q1");
        //     e.submitter.disabled = true;
        //     formi.answer.value = "";
        //     element.classList.add('rect');
        // }

        // else
        // {
        //     formi.answer.value = "";
        //     alert('wrong name format !');
        // } 

// function score() {
//     var q2 = document.getElementsByClassName("q2");
//     var q3 = document.getElementsByClassName("q3");
//     var q4 = document.getElementsByClassName("q4");
//     var q5 = document.getElementsByClassName("q5");
//     var regex = /^[a-zA-Z]{6,12}$/;
//     var answer = document.getElementById('answer').value;
//     if(regex.test(answer)){
//         const correct = ['B','B','B','B'];
//         var score = 0;
//         var txtScore = document.getElementById("score");
//         // for(x=0; x<correct.length; x++){
//             if(q2.value == correct[0]){
//                 score+=25;
//             }
//             if(q3.value == correct[1]){
//                 score+=25;
//             }
//             if(q4.value == correct[2]){
//                 score+=25;
//             }
//             if(q5.value == correct[3]){
//                 score+=25;
//             }
//         // }
//         txtScore.inerHTML = score;
//     }
// }

    // function score() {
    //     // console.log(2);
    //     var regex = /^[a-zA-Z]{6,12}$/;
    //     var answer = document.getElementById('answer').value;
    //     var radios = document.querySelectorAll('[type="radio"]');
    //     var q2 = document.getElementsByClassName("q2");
    //     var q3 = document.getElementsByClassName("q3");
    //     var q4 = document.getElementsByClassName("q4");
    //     var q5 = document.getElementsByClassName("q5");
    //     var A = document.getElementBy
    //     if(regex.test(answer)){
    //         console.log(2);
    //         if(q2.value=="A" && q3.value=="A" && q4.value=="A" && q5.value=="A")
    //             {document.getElementById("score").innerHTML="0%";}


    //         else if((q2.value=="A" && q3.value=="A" && q4.value=="A" && q5.value=="B") || 
    //                 (q2.value=="A" && q3.value=="A" && q4.value=="B" && q5.value=="A") ||
    //                 (q2.value=="A" && q3.value=="B" && q4.value=="A" && q5.value=="A") ||
    //                 (q2.value=="B" && q3.value=="A" && q4.value=="A" && q5.value=="A")) 
    //             {document.getElementById("score").innerHTML="25%";}


    //         else if((q2.value=="A" && q3.value=="A" && q4.value=="B" && q5.value=="B") || 
    //                 (q2.value=="A" && q3.value=="B" && q4.value=="A" && q5.value=="B") ||
    //                 (q2.value=="A" && q3.value=="B" && q4.value=="B" && q5.value=="A") ||
    //                 (q2.value=="B" && q3.value=="A" && q4.value=="A" && q5.value=="B") ||
    //                 (q2.value=="B" && q3.value=="A" && q4.value=="B" && q5.value=="A") ||
    //                 (q2.value=="B" && q3.value=="B" && q4.value=="A" && q5.value=="A") )
    //             {document.getElementById("score").innerHTML="50%";}


    //         else if((q2.value=="A" && q3.value=="B" && q4.value=="B" && q5.value=="B") ||
    //                 (q2.value=="B" && q3.value=="A" && q4.value=="B" && q5.value=="B") ||
    //                 (q2.value=="B" && q3.value=="B" && q4.value=="A" && q5.value=="B") ||
    //                 (q2.value=="B" && q3.value=="B" && q4.value=="B" && q5.value=="A")) 
    //             {document.getElementById("score").innerHTML="75%";}


    //         else if(q2.value=="B" && q3.value=="B" && q4.value=="B" && q5.value=="B") 
    //             {document.getElementById("score").innerHTML="100%";}
    //         // btn.setAttribute('disabled',true);


    //     }
    // }


    