var num=1;

function next(){
	num++;
	if(num>10){
		num=1;
	}
	var foto=document.getElementById("foto");
	foto.src="../pictures/Stockholm/foto"+num+".jpg"
}

function before(){
	num--;
	if(num<1){
		num=10;
	}
	var foto=document.getElementById("foto");
	foto.src="../pictures/Stockholm/foto"+num+".jpg"
}