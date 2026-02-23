<!-- Q1 : Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

Answer : these are the technique for select html element from the DOM 
getElementById : when you want to work on single unique element labeled with ID(#).
getElementsByClassName : when you want to work on multiple elements at once (.). returns multiple elements updates automatically when DOM changes.
querySelector : works by Selecting one element. CSS selector
querySelectorAll : works by selecting multiple elements (All matching elements). It returns nodelist collection .



Q2 : create and insert a new element into the DOM

Answer : To add a new element dynamically, JavaScript provides DOM creation and insertion methods.
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
For insertion we can use append()
document.body.appendChild(newDiv); It will appened in his parent div.



Q3 : Event Bubbling and how it works

Answer : basically its a propagation method. If this process happens in  a child element , after this it go to its parent and does the same thing . as example if you clicked on li and there is a  addEventlistner fucnton already set as "click" then that click will shows or work on that li and its parent (ol / ul).



Q4 : Event Delegation in JavaScript? Why is it useful?

ANswer: Event Delegation is a method where a single event listener is attached to a parent element instead of attaching listeners to multiple child elements. it works of event bubbling. 
it is usefull because of it improves performance,works dynamically and decrease memory usage.



Q5 : difference between preventDefault() and stopPropagation() methods

Answer : preventDefault() uses for Stops browser’s default action and  Prevents default behavior  such as form submission, link navigation.
stopPropagation() it stops event movement such as event bubbling -->