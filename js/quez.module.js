import {Finish} from "./finish.module.js"
export class Quiz{
    constructor(data){
        this.result = 0;
        this.data = data;
        this.count = 0;

        this.displayQuestion();
        document.getElementById("nextQuestion").addEventListener('click',()=>{

                this.checkAnswer();
                setTimeout(()=>{
                    this.count++;
                    this.displayQuestion();
                },1000);


        });

    }

    displayQuestion(){
            if(this.count < this.data.length){
                let result ="";
                let answer = [...this.data[this.count].incorrect_answers];
                document.getElementById("to").innerHTML = this.data.length;
                document.getElementById("from").innerHTML = this.count +1;
                document.getElementById("questionTitle").innerHTML = this.data[this.count].question;
                answer.splice(Math.round(Math.random()*answer.length),0,this.data[this.count].correct_answer);
                for(let i =0 ; i<answer.length ; i++){
                    result += `<li class="my-3 animate__animated">
                    <div class="pretty p-default p-round p-smooth p-plain">
                       <input type="radio" name="answer" value="${answer[i]}" />
                       <div class="state p-success-o">
                          <label> ${answer[i]} </label>
                       </div>
                    </div>
                 </li>`;
                };
                document.getElementById("questionContent").innerHTML = result;
                document.querySelector("#questionContent :first-child input[type='radio']").setAttribute("checked","true");
            }else{
                document.getElementById("quiz").classList.remove("show");
                document.getElementById("finsish").classList.add("show");
                let finish = new Finish(this.result , this.data.length);
            };
        
    };

    checkAnswer(){
        
        if(document.querySelector("[name='answer']:checked").value === this.data[this.count].correct_answer){
            this.result++;
            $("#correct").show(200);
            
            setTimeout(()=>{ $("#correct").hide(200)},500);
        }else{
            $("#inCorrect").show(500);
            setTimeout(()=>{$("#inCorrect").hide(200)},500);
        };
    };

};