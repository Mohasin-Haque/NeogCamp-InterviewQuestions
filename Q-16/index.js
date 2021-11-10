var readlineSync = require('readline-sync');
var newsInput = readlineSync.question("Provide the news you have. \n")
var newsSource = readlineSync.question("From which source you get this news? \n").toLowerCase();

if(newsSource === "whatsapp" || newsSource === "facebook" || newsSource === "telegram"){
    console.log("Don't believe things on FB and Whatsapp")
}else{
    console.log("Yes bro yes!! I beleive you.. it's right.")
}