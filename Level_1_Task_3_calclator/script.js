let display = document.getElementById("inputbox");
let button = document.querySelectorAll("button");

let buttonArray = Array.from(button);

let string = '';

buttonArray.forEach(bt => {
  bt.addEventListener('click',(event) => {


        if(event.target.innerHTML == 'DeL'){
            string = string.substring( 0, string.length-1);
            display.value = string;
        
        }else if(event.target.innerHTML == 'Ac'){
            string = '';
            display.value = string;
        }
        
        else if(event.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }

         else{
        string += event.target.innerHTML;
        display.value = string;
    }
  })
});
