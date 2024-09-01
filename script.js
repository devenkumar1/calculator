const buttons=document.querySelectorAll('button');
const inputarea=document.querySelector('#interface');
let display=""

for(let button of buttons){
    button.addEventListener('click',function(e){
        const buttontxt=e.target.innerText;

        if(buttontxt==="c"){
            inputarea.value="";
        }
     else if(buttontxt==="x"){
        display=inputarea.value+="*"
     }
     else if(buttontxt==="="){
        try{
            display=eval(display)
            inputarea.value = display;
        }
        catch(e){
            inputarea.value="Invalid operation"
        }
        
     }

     else{
         display=inputarea.value+=buttontxt
     }
     

    });
}