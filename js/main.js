/*
// Task 1

1.Access HTML element with id tag-line.
2.Access all headings that belong to div with the class name bg-main-content.
3.Create the variable collect and assign it with content of tag-line.
Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect*/

// 1.Access HTML element with id tag-line
var tagLine = document.getElementById("tag-line");
console.log("tagLine: ", tagLine.innerHTML + "\n-------------------\n\n");

// 2.Access all headings that belong to div with the class name bg-main-content
var headings = document.querySelectorAll(".bg-main-content h2");
console.log("headings :", headings[0]);

// 3.Create the variable collect and assign it with content of tag-line
var collect = tagLine.innerHTML + "\n-------------------\n\n";
console.log("collect :", tagLine);


// Loop through the array of headings and append the content of each heading to variable collect
var i;

for (i = 0; i < headings.length; i += 1) {
	collect += headings[i].innerHTML + "\n";
}

// After the loop, use alert to print collect
alert(collect);

/*
// Task 2

1.Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.
2.Use property children to "scoop" in array all HTML elements that belong to that div.
3.Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect*/


// 1.Access 13th div with class name box
var boxes = document.querySelectorAll(".bg-main-content .box");

// 2.Use property children to "scoop" in array all HTML elements that belong to that div
var when_to_launch = boxes[12].children;

// 3.Create the variable collect and assign it with content of heading that belongs to gotten array
var collect = when_to_launch[0].innerHTML + "\n---------------------\n\n";

var i;
for (i = 1; i < when_to_launch.length; i += 1) {
	collect += when_to_launch[i].innerHTML + "\n\n";
}

// After the loop, use alert to print collect
alert(collect);