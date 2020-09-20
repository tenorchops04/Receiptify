function getInput() {
	var itemName, itemPrice;
	
	itemName = prompt("Please enter the item's name: ");
	
	if(itemName != null){
		itemPrice = prompt("Pleaser enter the item's price: ");
	}

	if(itemName != null && itemPrice != null){
		document.getElementById("demo").innerHTML = "Item: " + itemName + " Price: " + itemPrice;
	}
}

function openAccount(evt, accountName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(accountName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();