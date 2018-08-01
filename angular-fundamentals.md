Question : What are building blocks of angular ?
Answer : - Components : A component encapsulate the data, html and the logic for a view.
         - Modules : It is a container for a group of related components. We can have multiple modules in the application.

Question : What are components ?
Answer : Following are the steps to use a component :
          1. Create a component
          2. Register component in a module
          3. Add an element in the html markup

Question : How to generate components using CLI ?
Answer : - run -> ng generate component my-component
         - It also update app.module and registered the component to the module

Question  : What is template ?
Answer : - We use templates to perform data binding in any component. Data-bindings will be evaluated at the runtime and the actually value will be rendered to the html.
         - We user {{}} for data binding, this is called interpolation.
         - Methods of the component can also be binded with html.

Question : What are directives ?
Answer : - We use directives to manipulate the DOM. We can use them to add an element, remove existing DOM element, change class / style.
         - Directives which modifies the DOM use * in front of their name. eg : *ngFor

Question : What are services ?
Answer : - Instead to writing the http request in the component, we write services for the same. It makes debugging and writing unit test cases much easier. As we can fake the service while writing unit test cases instead of making actual call to the server.
         - Unit test cases should never depend on live http calls.
         - Writing http calls in component makes it tightly coupled and hard to test.
         - Apart from http calls, component should not contain any logic other than the presentation logic. Services should be used for any logical stuff.
         - Services can be used at multiple places in the project.

Question : What is dependency injection ?
Answer : - We need to instruct angular to create instance of that service and pass it to the constructor, this concept is called            dependency injection. Here we tell angular to inject class's dependency to its constructor.
         - Dependency injection means injecting / providing the dependency of a class in its constructor.
         - To use dependency injection, we need to register it in the module.
         - We add all dependencies to be used by the components in this module to the providers array in module.ts file.
         - When we register dependency as a provider in module, angular will create a single instance of that class or module.
           Angular will pass the same instance to all the components using that service, this is called singleton pattern. So, a single instance of an object exists in the memory.

Question : What is Injectable decorator ?
Answer : We need this decorator in a service only if that service has dependency in its constructor. It tells angular that this           class is an injectable class, which means that angular should be able to inject dependency of this class to its                  constructor.

Question : How to generate service using angular CLI ?
Answer : - Run -> ng generate service name
