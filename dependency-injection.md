  Question: What is dependency ?
  Answer: When module A in an application needs module B to run, then module B is a dependency for module A.

  - Adding dependency in constructor makes the code inflexible, hard to test and brittle.

  -Dependency injection is an important application design pattern it’s used not only in Angular but throughout software development as a whole.

  - DI framework in Angular consists of 4 concepts working together:
    - Token: This uniquely identifies something that we want injected.A dependency of our code.
    - Dependency: The actual code we want injected.
    - Provider: This is a map between a token and a list of dependencies.
    - Injector: This is a function which when a passed a token returns a dependency or list of dependencies




