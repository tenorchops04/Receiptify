///// User Authentication /////

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});

const db = firebase.firestore();

const addItem = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

let itemsRef;
let unsubscribe;

/* auth.onAuthStateChanged(user => {

    if (user) {
        itemsRef = db.collection('items');
        
    }
}) */
function getInput() {
	var itemName, itemPrice;
	
	itemName = prompt("Please enter the item's name: ");
	
	if(itemName != null){
		itemPrice = prompt("Pleaser enter the item's price: ");
	}

	if(itemName != null && itemPrice != null){
    itemsRef = db.collection('items');
    itemsRef.add({
        item: itemName,
        cost: itemPrice
    });
    // Query
    unsubscribe = itemsRef
    .onSnapshot(querySnapshot => {
        
        // Map results to an array of li elements

        const items = querySnapshot.docs.map(doc => {

            return `<li>${'item: '+doc.data().item+', cost: $'+doc.data().cost}</li>`

        });

        itemList.innerHTML = items.join('');

    });
	}
}