## The Browser makes a Model out of web data

It is important to know that the Web Browser eats up the server's response HTML and makes a model out of it.  If the server's HTML page contents changed immediately after the browser received it, the browser would not reflect this until you refresh your page.  There is no synchronization with the server going on, it's a simple one-off request system.  In this case, if you were to refresh the webpage, the model that was previously there would be updated to reflect what the browser made of the newer html file received from the server.

## View Page Source vs. Inspect Element

#### Viewing the Page Source

You can right-click on a web page and choose 'View Page Source'. It is the page HTML, but not necessarily in the state 
you'd expect.  It is a recreation of the page based on the model that the browser has made the browser has constructed from
the data it received from the browser.  
It **isn't** the original HTML that the server sent over.  That HTML was essentially devoured by the web browser and is no longer available (you can get it in other ways, of course).

#### Inspect Element

This is another option you have when you right click on a web-page.  This will show you the element you clicked on in the context of the browser's model. 

You'll notice that you can expand and collapse elements if they contain other elements.  This is a tree model. 
