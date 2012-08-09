//Lauren Capell
//8/2/2012
//Project1
//Movie Night

var Nickname = "Rocket", FriendOne = "Jacks", GirlCount = 4, BoyCount = 6, Totally = true, MovieChoice = "Harry Potter";

console.log("Hey,", Nickname);
console.log("Everyone is going to hang out tonight at", FriendOne,"apartment tonight.");
console.log("We should watch a movie when we get there.");
console.log("What do you want to watch?", MovieChoice);
console.log("Okay,there should be", GirlCount,"girls showing up and", BoyCount,"guys there.");
console.log("You will be there, right?", Totally);

if (Totally === true) {
	if (GirlCount >= BoyCount) {
		console.log("Every guy will have a girl to hold onto for the scary parts, lol!")
	} else {
		Invitees = BoyCount - GirlCount;
		console.log("We need to invite" Invitees," more girls before tonight.");
	};
else {
	if (MovieChoice === "Harry Potter")
		console.log("Great choice of movies; I love this one!");
	} else {
		Tease = Nickname + "is obviously too mature to hang out with the likes of", FriendOne,"and us."
		console.log(Tease);
	};
};