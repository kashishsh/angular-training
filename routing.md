- Three steps to implement routing :
 1. Configure the routes
 2. Add a router outlet
 3. Add links

- For simple routes, use routerLink directive eg: <a routerLink="/followers" > </a>
- For router parameters, one should use property binding syntax. eg: <a [routerLink]="['followers', follower.id]">

- Add "+" in front of a string to convert it to a number.
- An observable is a collection of asynchronous data that arrives over time.
