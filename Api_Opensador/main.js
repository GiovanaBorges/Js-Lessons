

function getname(){
   var autor = document.getElementById('autorzinho').value;
   var a = document.getElementById('a');

   if(autor == null){
   alert("tem que escrever alguma coisa ne");

   }else{
     alert("perai fioti");

   
   startAPI(autor);

}
}

//Insert your logic here
function APIready(dados){
    	
   jsonDados = JSON.parse(dados);
  
   for(var val in  jsonDados){
		     $("#list").append("<li>"+jsonDados[val]+"</li>");			
   };
	
}