export class Finish{
    constructor(score , count){
        this.score = score;
        this.count = count;
        document.getElementById("score").innerHTML = `${this.score} form ${this.count}`;
        document.getElementById("end").addEventListener('click',()=>{
            window.location.reload();
        });
    };
}