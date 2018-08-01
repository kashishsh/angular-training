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
         - Event bubbling : An event bubbles the DOM tree.
         - Use $event.stopPropogation() to stop event bubbling.

Question : What are template variables ?
Answer : - We can use template variable to get reference to html elements.
         - Syntax <input #email (keyup.enter)="onKeyUp(email.value)"/>

Question : What is two way binding ?
Answer : - Instead of passing parameters, we can use two way binding.
         - With property binding, directional binding is from component to view but two way binding, binding works two way and component also get updated with the DOM  changes.
         - Syntax : [(ngModel)] = "email"
         - You need to import FormsModule in appmodule.ts to use ngModel.

Question : What are pipes ?
Answer : - We use pipes to format data. Following are some built in angular pipes :
            1. Uppercase
            2. Lowercase
            3. Decimal
            4. Currency
            5. Percent
        - Syntax : {{name | uppercase}}
        - Multiple pipes can be chained together {{name | uppercase | lowercase}}.

Question : How to build custom pipes ?
Answer : 1. Import Pipe, PipeTransform from angular/core
         2. export pipe class and implement PipeTransform : telling angular compiler that this class should have the exact shape as the PipeTransform interface.
         3. Register pipe in appmodule in declaration array.



