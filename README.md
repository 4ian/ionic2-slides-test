This is a test project using Ionic 2 and the `ion-slides` component.

Two `ion-slides` components are displayed. Slides are dynamically created using an array and a `*ngFor`. 
The array is empty at first, then filled with some objects when you click on the button.

The first `ion-slides` is only shown when the array is not empty, and is working properly.
The second `ion-slides` is displayed since the beginning, but does not work properly (looping is broken in particular) when the `items` array is filled.
