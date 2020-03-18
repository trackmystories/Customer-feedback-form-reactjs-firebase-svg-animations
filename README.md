

This Documentation is divided in 3 parts:

Part 1:  Customer feedback Form.
Part 2:  Animations.
Part 3 : Responsive Layout.

Documentation for the checkout challenge:


There has been no use of any third party component libraries in writing this challenge, the application has been broken down into three main components, and one <Title /> Component strictly to demonstrate the basics of passing props. As each component within this challenge is self-contained.

The Four components are :


  "<Title,CommentsTab, MainSvg, CommentForm />"

Technology used for networking : Firebase Cloud Firestore, apart from Firebase no other dependencies have been leveraged in the construction or designing the components.

Technology stack : React, HTML, JavaScript, CSS and Firebase.



Part 1: Customer feedback Form:

The customer feedback page has been divided in two components, The <CommentForm /> for submission of or collecting feedbacks / comments and <CommentsTab /> for pushing data onto the UI.

In-order to push and pull data , class based components are used to manage state with the help of reacts lifecycle methods.


In-order to render the dates in the comments section in descending order, date: Date() is used along with cloudfirestore’s   
this.ref = firebase.firestore().collection('Comment').orderBy('date', ‘desc').limit(10);

Please note the posts are visible only up till the 10 most recent events.


Each component is imported into App.js functions independently to each other.




Part 2:  Animations :

In the <MainSvg /> file two types of animations have been implemented:

State based
CSS based


State based:

State based animation (Blinking)  which is rendered infinitely throughout the lifecycle of the user’s experience on the web page.

The state based animation has been accomplished through setting and interval of 800 milliseconds after which the component un-mounts and re-mounts again to give it the flashing effect.

The state has then be passed with the following syntax fill={this.state.isBlinking && “#00B48F”}/> into the <circle> and one <path> element which equates to transactions.



CSS based:

CSS based animation has been accomplished by editing code directly in the app.css file:

Manipulating code with the following implementations

svg d { } and then drawing movements based on a seconds. After which @keyframes draw {} have been used to draw the path or flow if the animation.

Please note note the page must be refreshed to view the animation.


Context of animation:


Step one : calendar circles and transactions blinking ( the starting point of the financial lifecycle as transactions are carried over time )

Step Two : The green line rises toward the Statement (effectively ending the animation and stating the obvious that all transactions lead to a statement)












Part 3 : Responsive Layout:

The layout has been used to adapt to multiple screen sizes along with animated button with in context to the form submission.
Please refer to the layout comments in the App.css
For example:

/* mobile devices ranging from iphone 6 up 11 */
@media only screen and (min-width: 375px) and (max-width: 960px) {}




//personal note


Thank you for reaching out to me, I really enjoyed this test.

Ali 
# Checkout-challenge
