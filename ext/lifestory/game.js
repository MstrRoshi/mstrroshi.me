// JavaScript Document
var story = []

story[0] = new Object ();
story[1] = new Object ();
story[2] = new Object ();
story[3] = new Object ();
story[4] = new Object ();
story[5] = new Object ();
story[6] = new Object ();
story[7] = new Object ();
story[8] = new Object ();
story[9] = new Object ();
story[10] = new Object ();
story[11] = new Object ();
story[12] = new Object ();
story[13] = new Object ();
story[14] = new Object ();
story[15] = new Object ();

var imagesList = []

imagesList[0] = "images/eval.png";
imagesList[1] = "images/promotion.png";
imagesList[2] = "images/date.png";
imagesList[3] = "images/thinkingcollege.png";
imagesList[4] = "images/college.png"
imagesList[5] = "images/alonewithmoney.png";
imagesList[6] = "images/couldbebetter.png";
imagesList[7] = "images/badartist.png"
imagesList[8] = "images/moving.png"
imagesList[9] = "images/endofjourney.png"


var textColorsList =[];

textColorsList[0] = "#000000";
textColorsList[1] = "#A60000";
textColorsList[2] = "#BC690C"
textColorsList[3] = "#003300"
textColorsList[4] = "#610B7D"
textColorsList[5] = "#093833"

var page = 0;


story[0].text = "You are 25 years old and are one of the most successful corporate accountants in New York City. You make a great salary, and work hard to find every possible way to help a company make more money. You wake up one morning and decide to reevaluate your life. Are you satisfied with what you are doing in life?";
story[0].buttonA = "Yes";
story[0].buttonB = "No";
story[0].buttonC = "Back to Start"
story[0].DestinationC = 0;
story[0].DestinationA = 1;
story[0].DestinationB = 5; 
story[0].isHiddenA = false;
story[0].isHiddenB = false;
story[0].isHiddenC = true;
story[0].image = imagesList[0]
story[0].textColor = textColorsList[0]

story[1].text = "There is an opportunity to get a promotion. To get the promoted to manager of the firm, the boss needs you to work overtime for the next three months. This would include the weekends. This weekend you have plans to go on a date, which you would have to cancel. Do you go on the date, or focus on work?";
story[1].buttonA = "Go on the Date";
story[1].buttonB = "Focus on work";
story[1].buttonC = "Back to Start"
story[1].DestinationC = 0;
story[1].DestinationA = 2;
story[1].DestinationB = 4;
story[1].isHiddenA = false;
story[1].isHiddenB = false;
story[1].isHiddenC = true;
story[1].image = imagesList[1]
story[1].textColor = textColorsList[0]

story[2].text = "You end up going on the date, and things go incredibly well. You both laugh connect, and honestly have the best time you have had in a while. You know this person would go on another date with you, but you are pretty invested into your job which is currently being neglected. Do you ask this person out again?"
story[2].buttonA = "Yes"
story[2].buttonB = "No"
story[2].buttonC = "Back to Start"
story[2].DestinationC = 0;
story[2].DestinationA = 3;
story[2].DestinationB = 4;
story[2].isHiddenA = false;
story[2].isHiddenB = false;
story[2].isHiddenC = true;
story[2].image = imagesList[2]
story[2].textColor = textColorsList[0]


story[3].text = "You end up dating this person for a long time, and decide this person is someone with whom you would like to spend the rest of your life. Because you neglected your work, you did not get the promotion right away. It took many more years, and you missed a great chance to have more money and control in your professional life; however, you have gained the joy and happiness from your relationship and a balanced life."
story[3].buttonA = "Yes"
story[3].buttonB = "No"
story[3].buttonC = "Back to Start"
story[3].DestinationA = 0;
story[3].DestinationB = 0;
story[3].DestinationC = 0;
story[3].isHiddenA = true;
story[3].isHiddenB = true;
story[3].isHiddenC = false;
story[3].image = imagesList[6]
story[3].textColor = textColorsList[2]


story[4].text = "You grind hard for the next three months, and your boss is impressed. He decided to make you a managing partner of the firm. Congratulations, you have reached the pinnacle of success in corporate America! This makes you feel great, but at the end of the day you have nobody to share it with, and sacrificed opportunities to find happiness and fulfillment else ware in this world."
story[4].buttonA = "Yes"
story[4].buttonB = "No"
story[4].buttonC = "Back to Start"
story[4].DestinationA = 0;
story[4].DestinationB = 0;
story[4].DestinationC = 0;
story[4].isHiddenA = true;
story[4].isHiddenB = true;
story[4].isHiddenC = false;
story[4].image = imagesList[5]
story[4].textColor = textColorsList[1]


story[5].text = "You sit and think. You do have the resources to go back to school and get a new education, but that takes lots of time. Do you go back to school to pursue a new career?"
story[5].buttonA = "Yes"
story[5].buttonB = "No"
story[5].buttonC = "Back to Start"
story[5].DestinationC = 0;
story[5].DestinationA = 6;
story[5].DestinationB = 1;
story[5].isHiddenA = false;
story[5].isHiddenB = false;
story[5].isHiddenC = true;
story[5].image = imagesList[3]
story[5].textColor = textColorsList[0] 



story[6].text = "You return to a university and begin a new career. What career do you choose?"
story[6].buttonA = "Computers"
story[6].buttonB = "Art"
story[6].buttonC = "Back to Start"
story[6].DestinationC = 0;
story[6].DestinationA = 7;
story[6].DestinationB = 11;
story[6].isHiddenA = false;
story[6].isHiddenB = false;
story[6].isHiddenC = true;
story[6].image = imagesList[4]
story[6].textColor = textColorsList[5]


story[7].text = "You complete your degree. With some of the capital and the many connections you made while in the Accounting field, you start up a rapidly successful networking business that specializes in systems for major financial institutions. Working for yourself has given you the ability to spend more time doing what you want. In order for you do spend this time doing what you want, you must pass off much of the control to your business partners. Do you let go or keep control or let it run its course?";
story[7].buttonA = "Keep Control"
story[7].buttonB = "Let Go"
story[7].buttonC = "Back to Start"
story[7].DestinationC = 0;
story[7].DestinationA = 8;
story[7].DestinationB = 9;
story[7].isHiddenA = false;
story[7].isHiddenB = false;
story[7].isHiddenC = true;
story[7].image = imagesList[0]
story[7].textColor = textColorsList[0]


story[8].text = "Working for yourself, you continue to grow your networking empire into a standard name in networking today. Congratulations, you have been completely successful in your career. You have found happiness in doing what you love, creating and controlling a powerful business empire.";
story[8].buttonA = "Yes"
story[8].buttonB = "No"
story[8].buttonC = "Back to Start"
story[8].DestinationC = 0;
story[8].DestinationA = 0;
story[8].DestinationB = 0;
story[8].isHiddenA = true;
story[8].isHiddenB = true;
story[8].isHiddenC = false;
story[8].image = imagesList[5]
story[8].textColor = textColorsList[2]


story[9].text = "You meet an incredible person while both out following a mutual love. You strike up conversation and have the thought of asking this person out with you. Dating this person will consume a good part of your life. Do you pursue this relationship or continue to further your work?";
story[9].buttonA = "Relationship"
story[9].buttonB = "Work"
story[9].buttonC = "Back to Start"
story[9].DestinationC = 0;
story[9].DestinationA = 10;
story[9].DestinationB = 8;
story[9].isHiddenA = false;
story[9].isHiddenB = false;
story[9].isHiddenC = true;
story[9].image = imagesList[2]
story[9].textColor = textColorsList[0]


story[10].text = "You end up dating this person, and their beauty and mindset on reality helps inspire you to continue doing what you love. Congratulations, you have found your happiness in doing what you love, and can share it with someone who loves you";
story[10].buttonA = "Yes"
story[10].buttonB = "No"
story[10].buttonC = "Back to Start"
story[10].DestinationC = 0;
story[10].DestinationA = 0;
story[10].DestinationB = 0;
story[10].isHiddenA = true;

story[10].isHiddenB = true;
story[10].isHiddenC = false;
story[10].image = imagesList[2]
story[10].textColor = textColorsList[0]


story[11].text = "You successfully complete your degree in art and begin to create brilliant pieces. You have become well known in your area, but are running out of creative inspiration. Do you stay in your environment, or do you sell what is not necessary and embark on a journey for inspiration?";
story[11].buttonA = "Stay"
story[11].buttonB = "Go"
story[11].buttonC = "Back to Start"
story[11].DestinationC = 0;
story[11].DestinationA = 12;
story[11].DestinationB = 14;
story[11].isHiddenA = false;
story[11].isHiddenB = false;
story[11].isHiddenC = true;
story[11].image = imagesList[8]
story[11].textColor = textColorsList[0]


story[12].text = "You meet someone in a local bar who seems incredibly beautiful and constantly challenges the way you think. Do you pursue this relationship or deny to keep your mind untouched?";
story[12].buttonA = "Relationship"
story[12].buttonB = "Fly Solo"
story[12].buttonC = "Back to Start"
story[12].DestinationC = 0;
story[12].DestinationA = 10;
story[12].DestinationB = 13;
story[12].isHiddenA = false;
story[12].isHiddenB = false;
story[12].isHiddenC = true;
story[12].image = imagesList[2]
story[12].textColor = textColorsList[0]


story[13].text = "You fear this constant challenging will be detrimental to your creative process. You decide to close yourself off from the relationship, and end up not being able to reignite your creative spark. Living in the same town, you make do with what you can. Unfortunately you have missed too many chances to find happiness, so you are continually searching.";
story[13].buttonA = "Yes"
story[13].buttonB = "No"
story[13].buttonC = "Back to Start"
story[13].DestinationA = 0;
story[13].DestinationB = 0;
story[13].DestinationC = 0;
story[13].isHiddenA = true;
story[13].isHiddenB = true;
story[13].isHiddenC = false;
story[13].image = imagesList[7]
story[13].textColor = textColorsList[1]

story[14].text = "You meet someone along your travels who is incredibly beautiful and constantly challenges the way you think. Do you pursue this relationship?";
story[14].buttonA = "Yes"
story[14].buttonB = "No"
story[14].buttonC = "Back to Start"
story[14].DestinationC = 0;
story[14].DestinationA = 10;
story[14].DestinationB = 15;
story[14].isHiddenA = false;
story[14].isHiddenB = false;
story[14].isHiddenC = true;
story[14].image = imagesList[2]
story[14].textColor = textColorsList[4]


story[15].text = "You continue on your journey for inspiration. You travel many miles, and see many incredible things. Throughout your path you learn about your place in this world, and come to accept who you are. This peace with yourself allows you to gain the inspiration you were looking for, and you continue to happily travel the world going where your art takes you. You have won my game.";
story[15].buttonA = "Yes"
story[15].buttonB = "No"
story[15].buttonC = "Back to Start"
story[15].DestinationC = 0;
story[15].DestinationA = 0;
story[15].DestinationB = 0;
story[15].isHiddenA = true;
story[15].isHiddenB = true;
story[15].isHiddenC = false;
story[15].image = imagesList[9]
story[15].textColor = textColorsList[3]

function OnPress(buttonPressed) {
	if (buttonPressed == 'A')
	{
page = story[page].DestinationA;
document.getElementsByName("NavGameA")[0].value = story[page].buttonA;
document.getElementsByName("NavGameB")[0].value = story[page].buttonB;
document.getElementsByName("NavGameC")[0].value = story[page].buttonC;
document.getElementsByName("NavGameA")[0].hidden = story[page].isHiddenA;
document.getElementsByName("NavGameB")[0].hidden = story[page].isHiddenB;
document.getElementsByName("NavGameC")[0].hidden = story[page].isHiddenC;
	}
else if (buttonPressed == 'B')
{
page = story[page].DestinationB;
document.getElementsByName("NavGameA")[0].value = story[page].buttonA;
document.getElementsByName("NavGameB")[0].value = story[page].buttonB;
document.getElementsByName("NavGameC")[0].value = story[page].buttonC;
document.getElementsByName("NavGameA")[0].hidden = story[page].isHiddenA;
document.getElementsByName("NavGameB")[0].hidden = story[page].isHiddenB;
document.getElementsByName("NavGameC")[0].hidden = story[page].isHiddenC;
}
else if (buttonPressed == 'C')
{
page = 0
document.getElementsByName("NavGameA")[0].value = story[page].buttonA;
document.getElementsByName("NavGameB")[0].value = story[page].buttonB;
document.getElementsByName("NavGameC")[0].value = story[page].buttonC;
document.getElementsByName("NavGameA")[0].hidden = story[page].isHiddenA;
document.getElementsByName("NavGameB")[0].hidden = story[page].isHiddenB;
document.getElementsByName("NavGameC")[0].hidden = story[page].isHiddenC;
}
document.getElementById("story").innerHTML = story[page].text;
document.getElementById("image").src = story[page].image;
document.getElementById("story").style.color = story[page].textColor;
}