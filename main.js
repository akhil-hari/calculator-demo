/*

#################################################
#################################################
####### Written by Akhil Hari         ###########
####### https://github.com/akhil-hari ###########
#################################################
#################################################

##
## Js code for a demo calculator
##

*/


const display_input=document.querySelector('#display').querySelector('input');
const display_small=document.querySelector('#display').querySelector('small');
const calculator=document.querySelector('#calculator');
calculator.draggable=true;
var input_buffer=[];
var ans=0;
function all_clear(){
	clear_input();
	display_small.innerText='';
	input_buffer=[];
	ans=0;
}
function clear_input(){
	display_input.value=''
}
function backspace(){
	value=display_input.value;
	display_input.value=value.slice(0,-1);
}
display_input.addEventListener('keyup',(e)=>{
	if(e.keyCode===13){
		
		e.preventDefault();
		equal();
		
	
	}
	else{
		e.preventDefault();
	}
});

function equal(){
		exp=/^((ans)|[0-9/\*\+\.\/\-])+$/;
		input_value=display_input.value;
		if(exp.test(input_value)){
			ans=eval(input_value);
			
			
		}
		else
		{
			ans=0;
			input_value='';
		}
		
		display_input.value=ans||'';
		
		if(input_value!=''){
			input_buffer.push(input_value);
		}
		
		if(input_buffer.length!=0){
			h=input_buffer[input_buffer.length-1]+'=';
			
			display_small.innerText=h!='='?h:'';
		}
}
