- A component in Angular has a life-cycle, a number of different phases it goes through from birth to death.
- We can hook into those different phases to get some pretty fine grained control of our application.
- To do this we add some specific methods to our component class which get called during each of these lifecycle phases, we call those methods hooks.
- The hooks are executed in this order:
  - constructor
  - ngOnChanges
  - ngOnInit
  - ngDoCheck
    - ngAfterContentInit
    - ngAfterContentChecked
    - ngAfterViewInit
    - ngAfterViewChecked
  - ngOnDestroy
- These phases are broadly split up into phases that are linked to the component itself and the phases that are linked to the children of that component.

- Hooks for the component:
  - constructor: This is called when Angular creates a component or directive by calling "new" on the class.
  - ngOnChanges: Invoked every time there is a change in one of the input properties of the component.
  - ngOnInit: Invoked when given component has been initialized. This hook is only called once after the first ngOnChanges.
  - ngDoCheck: Invoked when the change detector of the given component is invoked. It allows us to implement our own change detection algorithm for the given component.
  - ngOnDestroy: This method will be invoked just before Angular destroys the component. Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.

- Hooks for the components children: These hooks are only called for components and not for directives :
  - ngAfterContentInit: Invoked after Angular performs any content projection into the component's view.
  - ngAfterContentChecked: Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.
  - ngAfterViewInit: Invoked when the view of the given component has been fully initialized.
  - ngAfterViewChecked: Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.

- The best place to initialize your component is in then ngOnInit lifecycle hook and not the constructor because only at this point have any input binding being processed. The reason we choose ngOnInit and not ngOnChanges to initialize the component is that ngOnInit is only called once whereas ngOnChanges is called for every change to the input property.

- We can actually tap into the exact changes to the input properties by examining the first param to the ngOnChanges function, which we typically call changes.
- The type of changes is a map of input propery name to and instance of SimpleChange
  - class SimpleChange {
      constructor(previousValue: any, currentValue: any)
      previousValue : any
      currentValue : any
      isFirstChange() : boolean
    }
- We can change out ngONChanges function to take the changes argument and loop through it to print out the SimpleChange.currentValue and previousValue
  - ngOnChanges(changes: SimpleChanges) {
      console.log(`ngOnChanges - data is ${this.data}`);
      for (let key in changes) {
        console.log(`${key} changed.
        Current: ${changes[key].currentValue}.
        Previous: ${changes[key].previousValue}`);
      }
    }





