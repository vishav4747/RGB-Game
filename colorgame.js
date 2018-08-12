var easy=document.querySelector("#nav_span2");
var hard=document.querySelector("#nav_span3");

var header_rgb=document.querySelector("#header_rgb");
var square_box=document.querySelectorAll(".square");

var header_rgb=document.querySelector("#header_rgb");
var nav_span=document.querySelector("#nav_span");
var success_span=document.querySelector("#success_span");
success_span.classList.add("color_white");


var x=6;

var color_array=[];

function generate_colors()
{
color_array=generateRandomColors(x);
}
generate_colors();

function assignColors()
{
	pickedcolor=pick_color();
	header_rgb.textContent=pickedcolor;
	for(i=0;i<x;i++)
	{
		square_box[i].style.backgroundColor=color_array[i];
	}
}


hard.classList.add("class_green");

hard.addEventListener("click",function(){
hard.classList.add("class_green");
easy.classList.remove("class_green");
success_span.textContent="";
x=6;
generate_colors();
assignColors();
});

easy.addEventListener("click",function(){
easy.classList.add("class_green");
hard.classList.remove("class_green");
x=3;
success_span.textContent="";
generate_colors();
assignColors();
for(i=3;i<6;i++)
{
	square_box[i].style.backgroundColor="black";
}
});


nav_span.addEventListener("mouseover",function(){
	nav_span.classList.add("class_green");
	;});
nav_span.addEventListener("mouseout",function(){
	nav_span.classList.remove("class_green");
	;});


	var pickedcolor=pick_color();
	header_rgb.textContent=pickedcolor;
for(var i=0;i<x;i++)
{

	square_box[i].style.backgroundColor=color_array[i];
	square_box[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		 console.log(clickedColor);
		 console.log(pickedcolor);
		if(clickedColor===pickedcolor)
		{
			nav_span.textContent="PLAY AGAIN!";
			success_span.classList.remove("color_white");
			success_span.textContent="SUCCESS";
			changeColors(pickedcolor);
		}
		else
		{
			success_span.textContent="TRY AGAIN";
			success_span.classList.remove("color_white");
			this.style.backgroundColor="black";
		}
	});
}
nav_span.addEventListener("click",function(){
generate_colors();
assignColors();
nav_span.textContent="NEW COLORS";
success_span.textContent="";
});
var h1=document.querySelector("h1");

function changeColors(color) {
	for(var i=0;i<x;i++)
	{
		square_box[i].style.backgroundColor=color;
		h1.style.backgroundColor=color;
	}
}
function pick_color(){
	var random=Math.floor(Math.random() * color_array.length);
	return color_array[random];
}
function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()* 256);
	var g=Math.floor(Math.random()* 256);
	var b=Math.floor(Math.random()* 256);
	return "rgb("+ r +", "+ g +", "+ b +")";

}