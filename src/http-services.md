- We'll use https://jsonplaceholder.typicode.com/ for fake api calls.
- We need to import HttpModule in app.module.ts file to use http service and inject http service to constructor of the class which is using http.
- All methods of http class return an observable.
- http patch method is used to update only few properties in the object, instead of sending a complete representation of that object to the server, we only send the properties which needs to be modified.
- In put method entire object needs to be sent with the request in payload.
- Prefer patch methods in case of large objects needs to be updated.
- http delete method don't have body.

Question : What are lifecycle hooks ?
Answer : They are special methods we can add to our component and angular will call those methods at specific times during the lifecycle of that component. for eg :
  - Creates a component
  - Renders it
  - Create and renders its children
  - Destroys a component
    Angular will only call these methods if they are defined.

- Do not call http service inside your constructor, for initialization use ngOnInit method
- Every class should have a single responsibility and such class is hard to maintain and test.
- Component should only be responsible for presentation logic.
- We should never call http services in our automated tests.
- We should always create a service and it will be responsible for interacting with backend.

- We encounter two types of error in http service calls:
  1. Unexpected errors:
    - Server is offline
    - Network is down
    - Unhandled exceptions

    To handle unexpected errors, we add error function as second argument to subscribe.

  2. Expected errors:
    - Not found errors : 404
    - Bad request : 400


- In angular, there is a class called ErrorHandler. which can be used to handle unexpeced application globally. We create class which implements ErorHandler and add it to app.module.ts's provider's  array so that it replace the ErrorHandler class used in the project :
  { provide: ErrorHandler, useClass: AppErrorHandler}

- Observable vs promises :
  - Observables are lazy : nothing happen if we don't subscribe to the observable.
  - Promises are eager : As soon as you create the promise, code is executed.
  - With observables we have very powerful operators like retry, which are not present with Promise.






