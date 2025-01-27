console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
const middleEarthSection = document.createElement('Section')
middleEarthSection.id = 'middle-earth';
  // 2. use a for loop to iterate over the lands array that does the following:
for (let i = 0; i < lands.length;i++){
const article = document.createElement('article');
article.id = lands[i];
const h1 = document.createElement('h1');
h1.innerText= lands[i];
article.appendChild(h1);
middleEarthSection.appendChild(article); 
}
  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.
document.body.appendChild(middleEarthSection);
}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  const hobbitList = document.createElement('ul')
 document.querySelector('#The-Shire').appendChild(hobbitList)
  
  // give each hobbit a class of `hobbit`
  for (let i = 0; i < hobbits.length; i++){
    const li = document.createElement('li');
    li.className = "hobbit";
    li.innerText = hobbits[i]
    hobbitList.appendChild(li);
  } 
  //document.querySelector('#The-Shire').appendChild(hobbitList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
const div = document.createElement('div'); 
div.setAttribute= ('id','the-ring');
  // give the div a class of `'magic-imbued-jewelry'`
div.className='magic-imbued-jewelry';
  // add the ring as a child of `Frodo`
document.querySelector('.hobbit').appendChild(div)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
const baddiesList = document.createElement('ul');
document.querySelector('#Mordor').appendChild(baddiesList)
  // give each of the baddies a class of "baddy"
  for(i=0; i < baddies.length; i++){
    const li = document.createElement('li')
    li.className = "baddy";
    li.innerText = baddies[i];
    baddiesList.appendChild(li);
  }
  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");

  // create an `aside` tag
   const aside = document.createElement('aside')
  // put an `unordered list` of the `'buddies'` in the aside
   const buddiesList = document.createElement('ul')
   aside.appendChild(buddiesList)
   for (i =0; i<buddies.length; i++){
     const li = document.createElement('li');
     li.innerText = buddies[i]
     buddiesList.appendChild(li)
   }
  // insert your aside as a child element of `rivendell`
  document.querySelector('#Rivendell').appendChild(aside)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");



  document.querySelector('#Rivendell').appendChild(document.querySelector('ul'))

// assemble the `hobbits` and move them to `rivendell`
} 

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
 console.log("7: beautifulStranger");

const king = document.getElementsByTagName('li')[3];
king.innerHTML = "Aragon"}
 // li.childNodes[3]
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");

const div = document.createElement('div')
div.id= "the-fellowship";
document.querySelector('#Rivendell').appendChild(div);
const theGroup = document.createElement('ul')
div.appendChild(theGroup)
for (i=0; i< 3; i++){
//alert(document.querySelector('li').innerText+" has joined The Fellowship.")
theGroup.appendChild(document.querySelector('li'))
//alert(document.querySelector('.hobbit').innerText + " has joined The Fellowship.")
theGroup.appendChild(document.querySelector('.hobbit'))
//alert(document.querySelector('li').innerText+" has joined The Fellowship.")
theGroup.appendChild(document.querySelector('li'))

// const rivendell = document.querySelector('#Rivendell')
// for (i = 0; i < li.length; i++){
// document.getElementById('#the-fellowship').appendChild('li')
// alert(`${li[i]} has joined the fellowship`);
}





  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
  const wizard = document.querySelector('li');
  wizard.innerHTML = "Gandalf the White"
  wizard.setAttribute("style", "background-color: white;")
  wizard.style.border = "thick solid grey";
  wizard.style.textAlign = "center";

   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
  alert("The horn of Gondor has been blown")
  alert("Boromir has been killed by the Uruk-hai")
const parent = document.getElementsByTagName('ul')[2]
const child = document.getElementsByTagName('li')[6];
parent.removeChild(child);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
const div = document.createElement('div')
div.id = "mount-doom"
document.querySelector('#Mordor').appendChild(div)
const frodosGroup = document.createElement('ul')
div.appendChild(frodosGroup)
  for (i=0; i<2; i++)
frodosGroup.appendChild(document.querySelector('.hobbit'))

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  const div = document.createElement('div')
  div.id = "gollum"
  document.getElementById('Mordor').appendChild(div)
  div.apppendchild(documentquerySelector('#the-ring'))  
  document.querySelector('#mount-doom').appendChild(div)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  // Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
