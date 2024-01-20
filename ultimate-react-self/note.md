# ultimate react note

## component notes

Be aware that creating a new component creates a new abstraction. Abstractions have a cost, because more abstractions require more mental energy to switch back and forth between components. So try not to create new components too early.

Name a component according to what it does or what it displays. Don't be afraid of using long component names.

never declare a new component inside another component.

co-locate related components inside the same file. Don't separate components into different files too early.

It's completely normal that an app has coponents of many different sizes, including very small and huge ones.

## three different components

So most of your components will naturally fall into one of three categories, stateless/presentational components, stateful components or structural components.

stateless/presentational components: 
as the name says, these don't have any state.
Usually, they are components that receive some props
and then they simply present that data
or even some other content, and therefore the name presentational.

stateful components:
Stateful components are simply components that do have state.
Now, just because these components have state,

that doesn't mean that they can't be highly reusable. For example, the search component that we built does have state and we could reuse this input as many times as we wanted throughout the app.

Structural components:
as pages, layouts, or screens of the app, which are often the result of composing many samller components together.

## component composition

combining different components using the children prop( or explicitly defined props)

Just keep in mind once again that this is only possible because components do not need to know their children in advance
which allows us to leave these empty slots inside of them in the form of the children prop.

pass into the component as an explicit prop
So this can be a viable pattern