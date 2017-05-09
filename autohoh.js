autohoh = {
	interFace : "<span id=\"autohoh_praise\" onclick=\"autohoh.togglePraise()\"></span><br><span id=\"autohoh_hunt\" onclick=\"autohoh.toggleHunt()\"></span><br><span onclick=\"autohoh.editCrafting()\">Autocraft: <a href=\"#\">edit</a></span>", //HTML blob, but it is small enough to be managable
	setup : function(){
		var marsa = document.getElementById("rightTabLog");
		marsa.innerHTML = this.interFace + marsa.innerHTML; //preserve the stuff in the right tab, but insert our script interface
		var loop = setInterval(function(){//main loop, does crafting and stuff evey 15 seconds.

			if(autohoh.autoPraise){
				game.religion.praise();
			};

			if(autohoh.autoHunt){
				document.getElementById("fastHuntContainer").childNodes[1].click();
			};

			var craftingTable = document.getElementById("craftContainer").childNodes[0];
			for(var i=0;i<autohoh.craftList.length;i++){//for all the things you want to craft
				for(var j=0;j<craftingTable.childNodes.length;j++){//find it in the craft table
					if(
						autohoh.craftList[i]
						=== craftingTable.childNodes[j].childNodes[0].innerHTML.substring(0,autohoh.craftList[i].length)
					){
						craftingTable.childNodes[j].childNodes[5].childNodes[0].click();//click the "all" button
						break;
					};
				};
			};
		},15000);//I think it is no need to make this time customizable. Change it yourself if you wish.
		this.toggleHunt();this.togglePraise();
	},
	autoPraise : true,
	autoHunt : true,
	togglePraise : function(){
		if(this.autoPraise){
			this.autoPraise = false;
			document.getElementById("autohoh_praise").innerHTML = "Autopraise: <a href=\"#\">off</a>";//the <a> stuff is to make it clear it is clickable. It would be fine without it.
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
