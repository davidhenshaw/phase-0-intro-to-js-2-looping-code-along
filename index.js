// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  } 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(names, eventName)
{
    for(let i=0; i < names.length; i++)
    {
        console.log(`Thank you, ${names[i]} for the wonderful ${eventName} gift!`);
    }
}

function countDown(startingNum)
{
    if(startingNum < 0)
        return;

    let curr = startingNum;

    while(curr >= 0)
    {
        console.log(curr--);
    }
}

wrapGifts(gifts); 
writeCards(["Rowland", "David", "Declan"], "Mother's Day");
countDown(5);