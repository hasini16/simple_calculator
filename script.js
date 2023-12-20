let input=document.getElementById("Inputbox");
 function display(num){
    input.value+=num;
 }
 function equal(){
   try{
      input.value=eval(input.value);
   }
   catch(err)
   {
      alert("invalid function");
   }

   
 }
 function Clear(){
   input.value="";
 }
 function del(){
   input.value=input.value.slice(0,-1);
 }