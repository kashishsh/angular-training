Question : What is property binding ?
Answer : - String interpolation( {{}} ) is just a syntactical sugar to property binding. Behind the scenes, when angular compiles the template, It translates interpolation to property binding.
         - With property binding, we bind the property of a DOM element to be filled with property in the component.
         - String interpolation works perfect to add values between headings, paragraphs, divs etc or wherever you want to render text.
         - Use property binding to bind property of a DOM element like src etc.
         - Property binding works only one way, i.e from component to DOM. If property field in the component changes, Angular will update the DOM, but and changes to the property is made from the DOM, corresponding property in the component will not change.
