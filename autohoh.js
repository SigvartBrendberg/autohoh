autohoh = {
	interFace : "<span id=\"autohoh_praise\" onclick=\"autohoh.togglePraise()\">Autopraise: <a href=\"#\">off</a></span><br><span id=\"autohoh_hunt\" onclick=\"autohoh.toggleHunt()\">Autohunt: <a href=\"#\">off</a></span><br><span onclick=\"autohoh.editCrafting()\">Autocraft: <a href=\"#\">edit</a></span>",
	setup : function(){
		var marsa = document.getElementById("rightTabLog");
		marsa.innerHTML = this.interFace + marsa.innerHTML;
		var loop = setInterval(function(){
			if(autohoh.autoPraise){
				game.religion.praise();
			};
			if(autohoh.autoHunt){
				document.getElementById("fastHuntContainer").childNodes[1].click();
			};
			var craftingTable = document.getElementById("craftContainer").childNodes[0];
			for(var i=0;i<autohoh.craftList.length;i++){
				for(var j=0;j<craftingTable.childNodes.length;j++){
					var part = craftingTable.childNodes[j].childNodes[0].innerHTML.length-1;
					if(autohoh.craftList[i] === craftingTable.childNodes[j].childNodes[0].innerHTML.substring(0,part)){
						craftingTable.childNodes[j].childNodes[5].childNodes[0].click();
						break;
					};
				};
			};
		},15000);
	},
	autoPraise : false,
	autoHunt : false,
	togglePraise : function(){
		if(this.autoPraise){
			this.autoPraise = false;
			document.getElementById("autohoh_praise").innerHTML = "Autopraise: <a href=\"#\">off</a>";
		}
		else{
			this.autoPraise = true;
			document.getElementById("autohoh_praise").innerHTML = "Autopraise: <a href=\"#\">on</a>";
		}
	},
	toggleHunt : function(){
		if(this.autoHunt){
			this.autoHunt = false;
			document.getElementById("autohoh_hunt").innerHTML = "Autohunt: <a href=\"#\">off</a>";
		}
		else{
			this.autoHunt = true;
			document.getElementById("autohoh_hunt").innerHTML = "Autohunt: <a href=\"#\">on</a>";
		}
	},
	craftList : [],
	editCrafting : function(){
		var userInput = prompt("Write a list of resources separated by commas in the order you want them crafted.\n Example: steel,plate,eludium");
		autohoh.craftList = userInput.split(",");
	}
};autohoh.setup();
