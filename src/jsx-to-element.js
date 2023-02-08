/*


## Snippet 1
<div className="shopping-list">
  <h1>Shopping List for {props.name}</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
    <li>Oculus</li>
  </ul>
</div>;


React.createElement("div", 
  {
    className: "shopping-list"
  },
  React.createElement("h1", null, "Shopping List for ", props.name), 
  React.createElement("ul", null, 
    React.createElement("li", null, "Instagram"), 
    React.createElement("li", null, "WhatsApp"), 
    React.createElement("li", null, "Oculus")
  )
);


## Snippet 2
function Child({kid, children}) {
  return <div><span>Hello `${kid}`!</span><span>{children}</span></div>;
}
function hello() {
  return <div>
    <Child kid='John'><span>Woohoooo!!</span></Child>
    <Child kid='Mary'><span>Hurrreyyy!!</span></Child>
  </div>;
}


function Child({
  kid,
  children
}) {
  return React.createElement(
    "div", 
    null, 
      React.createElement(
        "span", 
        null, 
        "Hello `$", kid, "`!"
      ), 
      React.createElement(
        "span", 
        null, 
        children
      )
  );
}

function hello() {
  return React.createElement(
    "div", 
    null, 
    React.createElement(
      Child, 
      {
        kid: "John"
      }, 
      React.createElement("span", null, "Woohoooo!!")), 
    React.createElement(
      Child, 
      {
        kid: "Mary"
      }, 
      React.createElement("span", null, "Hurrreyyy!!")
    )
  );
}

*/
