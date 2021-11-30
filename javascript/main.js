/* 1. Grab the input value */
var click = document.querySelector("button");
var enter = document.querySelector("input");
var term = document.querySelector("input").value;

click.addEventListener("click", function(){
	var input = document.querySelector("input").value;
	stuffHappens(input);
});

enter.addEventListener("keyup", function(e){
	var input = document.querySelector("input").value;
	if(e.which === 13){
		stuffHappens(input);
	}
});

/* 2. do the data stuff with the API */
function stuffHappens(query) {
	cont.innerHTML = "";
	var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=IfiEfoPCMex7dl3VtoissHiDpbvxbQN1";
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();

	xhr.addEventListener('load', function(e){
		var data = e.target.response;
		pushToDOM(data);
	});
}


/* 3. Show me the GIFs */
var cont = document.querySelector(".js-container");

function pushToDOM(input) {
	var response = JSON.parse(input);
	var gifUrls = response.data;

	gifUrls.forEach(function(more){
		var src = more.images.fixed_height.url;
		cont.innerHTML += "<a target=\"_blank\" href=\"" + src + "\"><img src=\"" + src + "\" class=\"container-image\"></a>";
	});

}