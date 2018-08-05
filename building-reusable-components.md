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



