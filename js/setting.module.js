/// <reference types="../@types/jquery" /> 
import {Quiz} from "./quez.module.js"


export class Setting{
    constructor(){

        document.getElementById("start").addEventListener('click',this.getForm.bind(this));
        

    };


    async getForm(){
        let category = document.getElementById("category");
        let check = document.querySelector("[name='difficulty']:checked")
        let amount = document.getElementById("amount");
        if(amount.value>1){
            $("#start .svg-wrapper a").removeClass("d-none");
            $("#start .svg-wrapper svg").addClass("d-none");
            $("#start").attr("disabled","true");
            

            let data = await this.getData(amount.value,category.value,check.value);
            let quiz = new Quiz(data);
            $("#setting").removeClass("show");
            $("#quiz").addClass("show");


        }else{
            $("#alertNumber").show(500);
        }

    }

    async getData(amount , cat , difficult){
        const data = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${cat}&difficulty=${difficult}`);
        const dataJson = await data.json();
        return dataJson.results;
    }











}