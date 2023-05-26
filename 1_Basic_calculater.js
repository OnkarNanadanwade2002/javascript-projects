function clearResult()
{
    inputFieldE1.value = "";
}

function calculateResult()
{
    inputFieldE1.value = eval(inputFieldE1.value);
}

function appendvalue(buttonvalue)
{
    inputFieldE1.value += buttonvalue;
    // inputFieldE1.value = inputFieldE1.value+buttonvalue;
}



const buttonsE1=document.querySelectorAll("button");

const inputFieldE1= document.getElementById("result");

for( let i=0;i<buttonsE1.length;i++)
{
    buttonsE1[i].addEventListener("click",()=>
    {
        const buttonvalue = buttonsE1[i].textContent;
        if(buttonvalue==="C")
        {
            clearResult();
        }
        else if(buttonvalue==="=")
        {
            calculateResult();
        }
        else{
            appendvalue(buttonvalue);
        }

    });
}



