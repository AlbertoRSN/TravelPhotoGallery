var num=1;

function next(){
	num++;
	if(num>3){
		num=1;
	}
	var foto=document.getElementById("foto");
	foto.src="pictures/foto"+num+".jpg"
}

function before(){
	num--;
	if(num<1){
		num=3;
	}
	var foto=document.getElementById("foto");
	foto.src="pictures/foto"+num+".jpg"
}