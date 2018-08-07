Question : What is public api / component api ?
Answer :
- In order to make a component more re-usable, you wanna add a bunch of input and output properties
- We use input property to pass input or state to a component.
- We use output property to raise event from this component.
- Combination of input and output of a component make up public api of the component.

Question: How to mark a field of a component as Input property ?
Answer : There are two ways to do so :
 1. Get Input from @angular/core and add @input() in front of its declaration in the class.
 2. Add Input properties in the component metadata.

- To add alias to input property, pass alias of the property with @input. eg : @Input('alias-name') actualName: string;
- If we use alias, the contract of the component remains safe. we can change the name of input property inside the component without affecting the application.

Question: What is shadow DOM?
Answer : Shadow DOM is a specification that enables DOM tree and style encapsulation. It allows us to apply scoped styles to elements without bleeding out to the outside world. Not all browsers has support to shadow dom.
  eg: var el = document.querySelector('favorite');
      el.innerHTML = `
        <style> h1 { color: red} </style>
        <h1>Hello world</h1>
      `;
    This style will leak to the outside world and will color all h1 tags as red.

  We can prevent style leeking using shadow dom. eg:
    var el = document.querySelector('favorite');
    var root = el.createShadowRoot();
    root.innerHTML = `
        <style> h1 { color: red} </style>
        <h1>Hello world</h1>
      `;




Question : What is view encapsulation ?
Answer : The styles we apply to a component are scoped to the component and will not leak outside the component. '
  Angular uses encapsulation property in @component decorator of component as ViewEncapsulatin.emulated which works as shadow DOM.
  encapsulation property can have three value:
  1. ViewEncapsulatin.emulated : Emulates the shadom DOM by adding custom attribute to the component and write css on that attribute basis, so it can affect only that element.
  2. ViewEncapsulatin.Native: It uses native browsers shadow dom concept and may not work in all browsers.
  3. ViewEncapsulatin.None: Style defined in this component will leak outside of the component.

Question : How to create custom directives ?
Answer : Run > ng g d input-format

