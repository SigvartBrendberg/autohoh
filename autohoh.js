autohoh = {
	interFace : "",
	setup : function(){
		this.interFace += "<span>Autopraise: <a href=\"#\" id=\"autohoh_praise\" onclick=\"autohoh.toggle('praise')\">off</a></span><br>";
		this.interFace += "<span>Autohunt: <a href=\"#\" id=\"autohoh_hunt\" onclick=\"autohoh.toggle('hunt')\">off</a></span><br>";
		this.interFace += "<span onclick=\"autohoh.editCrafting()\">Autocraft: <a href=\"#\">edit</a></span>";
		var rightTabContent = document.getElementById("rightTabLog");
		rightTabContent.innerHTML = this.interFace + rightTabContent.innerHTML; //preserve the stuff in the right tab, but insert our interface
		var loop = setInterval(function(){//main loop, does crafting and stuff evey 15 seconds.

			if(autohoh.automation.praise){
				game.religion.praise()
			};

			if(autohoh.automation.hunt){
				document.getElementById("fastHuntContainer").childNodes[1].click()
			};

			var craftingTable = document.getElementById("craftContainer").childNodes[0];//this is our hook to the user interface of kg
			for(var i=0;i<autohoh.craftList.length;i++){//for all the things you want to craft
				for(var j=0;j<craftingTable.childNodes.length;j++){//find it in the craft table
					if(
						autohoh.craftList[i]
						=== craftingTable.childNodes[j].childNodes[0].innerHTML.substring(0,autohoh.craftList[i].length)
					){
						craftingTable.childNodes[j].childNodes[5].childNodes[0].click();//click the "all" button
						break
					}
				}
			}
		},15000)
	},

	automation : {
		praise : false,
		hunt : false,
	},
	
	toggle : function(thing){
		if(this.automation[thing]){
			this.automation[thing] = false;
			document.getElementById("autohoh_" + thing).innerHTML = "off"
		}
		else{
			this.automation[thing] = true;
			document.getElementById("autohoh_" + thing).innerHTML = "on"
		}
	},

	craftList : [],
	editCrafting : function(){
		if(this.craftList.length < 1){
			var userInput = prompt("Write a list of resources separated by commas in the order you want them crafted.\n " + "Example: steel,plate,eludium")
		}
		else{
			var userInput = prompt("Write a list of resources separated by commas in the order you want them crafted.\n " + "Current: " + this.craftList)
		};
		if(userInput != null){//the user may cancel the prompt
			autohoh.craftList = userInput.split(",")
		}
	}
};autohoh.setup();
