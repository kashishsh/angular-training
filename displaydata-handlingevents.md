Question : What is property binding ?
Answer :
         - We put property of html element in square bracket [], and bind it to the property of a class.
         - String interpolation( {{}} ) is just a syntactical sugar to property binding. Behind the scenes, when angular compiles the template, It translates interpolation to property binding.
         - With property binding, we bind the property of a DOM element to be filled with property in the component.
         - String interpolation works perfect to add values between headings, paragraphs, divs etc or wherever you want to render text.
         - Use property binding to bind property of a DOM element like src etc.
         - Property binding works only one way, i.e from component to DOM. If property field in the component changes, Angular will update the DOM, but and changes to the property is made from the DOM, corresponding property in the component will not change.

- To install bootstrap in the application:
  1.  run -> npm install bootstrap --save. This will download the bootstrap and save to node_modules folder and update package.json file.
  2. Import bootstrap.css in styles.css by adding -> @import "~bootstrap/dist/css/bootstrap.css";

Question : What is class binding ?
Answer : - We can use class binding to add class dynamically to an element, based on some condition.
         - Syntax : [class.className] = "isActive"

Question : What is style binding ?
Answer : Add inline style to some element, based on some condition using style binding.
        - Syntax : [style.backgroundColor] = "isSelected ? 'blue' : 'red'"
        - Search for DOM style object on google to get all properties


Question : What is Event binding ?
Answer : - Event binding is used to handle events raised from DOM, eg : click, mouseover etc.
         - Syntax : (click) = "onClick()"
         - To get reference to the event object, use paramter $event. eg : (click) = "onClick($event)"

