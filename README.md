Goal of the application 
   The goal of this application is to offer the user a selection of books 
   available for purchase that are of various different genres and can be 
   sorted by price, added or removed to a cart that dislays the total, and
   filtered by genre based on what the user wants to see


Link to deployed web application 
https://crazyStairs2020.github.io/Devhw


Organization of components, props and state variables

There is a component defined for book which contains 
a picture of the cover, buttons to add or remove it
from the cart that trigger onClick events, and descriptions
below of the title, price, and genre

The book component takes in props which contains the item that can
be used to access the state variables and change them with functions
such as setType and setCart

cart, total, and books are state variables used to dynamically change
whats displayed as the user clicks on the buttons. Total is incremented 
or decremented each time a button is clicked on the book component, cart
is updated the same way however it contains a list of titles whereas total
contains a number. books is an array of all books that are currently being 
displayed, it will get filtered based on the buttons that are clicked or
reset to include all data from the json file when the reset button is clicked



Usability principles considered for layout and hierarchy
The main usability principle considered was an intuitive layout where buttons would be 
visible and the goal of the application would be clear. Flexbox was used for the layout 
of book components in order to have a neat and organized design. Labels were also used 
on to of the buttons to indicate that these were ment to filter the books and narrow 
down search results


