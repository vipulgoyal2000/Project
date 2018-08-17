

var MyText = document.getElementById("Com");
var Cont = "This website is under development for mobile devices";
MyText.textContent = Cont;

var vid = document.getElementById("myVideo");
vid.playbackRate = 0.7;
var Abouttxt = document.getElementById("About-text");
var Text = "I am new in the industry of web design and believe there is a lot to learn and practice in this field. I personally like Webbecause its popularity is increasing day by day more and more stuff that is coming up make it more challenging forwho are in the industry but open opportunities for the new because people don't accept change easily and new people arealready learning the latest stuff";
Abouttxt.textContent=Text;
var quote = document.getElementById("quote-head");
var Quote = "Daily Motivational Quote";
quote.textContent=Quote;
var Protxt = document.getElementById("Pro_Para1");
var ProText = "I am still finding time to start my own projects. The combination of work and study don't go well for evebody and I am the one for whom it goes worse. ";
Protxt.textContent=ProText;

function myFunction() {
    console.log("            Form Data               ");
    console.log("------------------------------------")
    var FirstName = document.getElementById("FullName").value;
    console.log("FirstName      "+FirstName);
    let ContactNumber=document.getElementById("MyForm").elements[1].value;
    console.log("Contact Number "+ContactNumber);
    let EmailID=document.getElementById("MyForm").elements[2].value;
    console.log("EmailID        "+EmailID);
    let Message=document.getElementById("MyForm").elements[3].value;
    console.log("Message        "+Message);
}
$(function(){
document.getElementById("header").load("header.html");
});
$.getJSON('paragraph.json', function(data)
{
    console.log("It Worked......Yay!");
}
);

