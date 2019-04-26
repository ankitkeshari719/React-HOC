<b>HOC</b>
<p> A High order component is a function that takes a component and returns a new component. HOCs are common in third-party React libraries, such as Redux’s connect.</p> 
 
<i>const EnhancedComponent = higherOrderComponent(WrappedComponent);</i>

<b>What is the difference between Component and Higher Order Component?</b>
<p>A component transforms props into UI, a higher-order component transforms a component into another component.</p>

<b>Ist way:</b>
<i>import React from "react";

const withClass = props => 
<div className={props.classes}>{props.children}</div>;
export default withClass;</i>

<b>Use</b>
<i><WithClass classes="main">.... </WithClass></i>

<b>2nd Way:</b>
<i>const withClass = (WrappedComponent, className) => {
 return props => (
   <div className={className}>
     <WrappedComponent {...props} />
   </div>
 );
};
export default withClass;</i>

<b>Use</b>
<i>export default withClass(TogglePersons, classes.TogglePage);</i>