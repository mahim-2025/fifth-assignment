

 Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
A. getElementById selects a single element by it's unique id. It is used to select a single element.
B. getElementsByClassName selects multiple elements with the same class name and it returns an html collection 
C. querySelector selects the first element that matches any css selectors like id, class etc
D. querySelectorAll selects all the elements that matches any css selectors.
2. How do you **create and insert a new element into the DOM**?
To create a new element we use createElement(), then we can add text using innerText = or we can also add css class for styling purposes like classlist.add('') and finally to insert it into the dom we can use appenchild() to add it as the last child of the parent element or use prepand() to add it as the first child of the parent element.

3. What is **Event Bubbling** and how does it work?
Event bubbling is the process when a event occures in an inner element and it triggers all the above parent elements all the way up to the body and html.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is the design pattern in javascript where instead of adding multiple eventListeners to the child elements it puts one event listener to the parent element and the listener then listnes to the events that bubble up from it's child.

It makes the code lighter and hence the website gets faster and also because it reduces the actual writing of the code, the memory usage is also reduced.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
The preventDefault() prevents the browser's defaults actions from occuring and the stopPropagation() prevents the default actions of an event where the event bubbles up to the top
