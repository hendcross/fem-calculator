HTML Project 2
==============

My second basic practice project since getting back into web development. Create a the calculator that looks and works exactly like the following: https://btholt.github.io/intro-to-web-dev-v2/js-project

Post Completion thoughts:

The UI for the project was pretty easy, I feel like I have a good, working understanding of flex.Next I want to learn Grid.

I tried to draw out workflows and object models for how the javascript should work and couldn't really come up with anything useful so I made a bad decision and just starting coding.

First I got the numbers to appear on the screen when clicked. Not too hard.

Clear and backspace were also pretty easy. I already knew I should be trying to separate things into functions that only do one thing, so I created specific functions for each button. I also created separate functions for actions that multiple buttons execute.

At this point I had some functions and a main event handler that called those functions and updated the DOM. Although I couldn't articulate why, I knew it was better to isolate DOM updates to the event handler and have the functions only try to take in and return values.

Once I got to the operators everything fell apart. State was being modified everywhere. Completely forgot about making pure functions. Was becoming a total headache to debug errors. My only saving grace was that this was a small project so there wasn't a lot of code to look through. 

Finally after it was all working, I had that uneasy feeling you get when you complete implementation but don't know exactly why it's working or why your fixed worked. Not a great feeling to have.

I now recognize the important of state management and being able to  recognize early in a project/design that changing state will be a factor. 

If I re-factor this I would strip out any state modification from every function except one, which would be my state handler. This function would be the only one that could modify the object from which state was read. This is all that function would do.

Next I would try to make my functions more pure, such that they simply read paremeters and output predictable values. It should matter to them what the state of the calculator is, my event handler should just give them the correct values.

Speaking of, my event handler should own reading the state object, calling the correct pure functions, modifying the DOM, and then calling the state manager to update the state. 

Nice separation of concerns, easy to debug, easy to build on.

Post-Solution-Video-Notes/Fixes
- isNaN(parseInt(button_value)) is a better "is this a number" check than Number(button_value)>=0. Has been changed.
- 



Notes:
- In this project it was stated not to worry about numbers getting so long that they go off the screen.

- The calculator works by creating a string stack then doing a eval() on the string when the user hits '='.

- Things are only added to the string stack when an operator: [=,+,÷,x] is clicked.



