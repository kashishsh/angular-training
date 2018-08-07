- In angular we have a class called FormControl. For each input in our form, we need to create instance of FormControl class. With this control class we can :
  1. Check value of the field
  2. find if touched / untouched
  3. find dirty / pristine
  4. find valid or not
  5. Validation erros

- Similar to FormControl class, we have a FormGroup class, which represents a group of controls in the form. Each form is essentially a control group. All controls of FormControl are available with FormGroup also.

- There are two ways to create controls:
  1. Directives : Angular will create control objects for us implicitly under the hood. also called template driven forms as they are build using the template.
  2. Code : Explicitly creating the control objects. In our component we should write code to create controls. Also called Reactive forms.

- Reactive forms:
  1. More control over validation logic.
  2. Good for complex forms.
  3. Unit testable.

- Template drive forms:
  1. Good for simpler forms.
  2. Simple validation.
  3. Easier to create.
  4. Less code.

- ngModel in template driven forms :
  -- We apply ngModel directive to input, and angular will create a control object and associate it with that input field and bind it to a property in component.
  -- syntax: [(ngModel)]="name"
  -- We need to have the name attribute set for an input to use ngModel, which helps angular to distinguish between the form-controls.

