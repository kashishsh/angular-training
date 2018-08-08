- We'll use https://jsonplaceholder.typicode.com/ for fake api calls.
- We need to import HttpModule in app.module.ts file to use http service and inject http service to constructor of the class which is using http.
- All methods of http class return an observable.
- http patch method is used to update only few properties in the object, instead of sending a complete representation of that object to the server, we only send the properties which needs to be modified.
- In put method entire object needs to be sent with the request in payload.

