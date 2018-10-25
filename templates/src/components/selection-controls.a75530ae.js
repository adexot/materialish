webpackJsonp([11],{77:function(e,t,l){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionControls=void 0;var r=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(0),u=function(e){return e&&e.__esModule?e:{default:e}}(c),i=l(14),f=l(59),s=t.SelectionControls=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),r(t,[{key:"render",value:function(){var e=this.props.component,t=e.materialDocsLink;return u.default.createElement("div",{className:"componentDoc"},u.default.createElement("h1",{className:"primaryHeader componentDoc_primaryHeader"},"Selection Controls"),u.default.createElement("p",{className:"paragraph"},"Selection controls allow the user to select options."),u.default.createElement(f.Table,{className:"componentDoc_componentsTable"},u.default.createElement(f.Table.Head,null,u.default.createElement(f.Table.HeadRow,null,u.default.createElement(f.Table.HeadCell,{width:"100px"},"Preview"),u.default.createElement(f.Table.HeadCell,{width:"150px"},"Name"),u.default.createElement(f.Table.HeadCell,null,"Description"))),u.default.createElement(f.Table.Body,null,u.default.createElement(f.Table.Row,null,u.default.createElement(f.Table.Cell,null,u.default.createElement(f.Checkbox,null)),u.default.createElement(f.Table.Cell,null,u.default.createElement(i.Link,{to:"/components/checkbox"},"Checkbox")),u.default.createElement(f.Table.Cell,null,"represents a boolean value that can be in one of two states, true or false")),u.default.createElement(f.Table.Row,null,u.default.createElement(f.Table.Cell,null,u.default.createElement(f.Radio,null)),u.default.createElement(f.Table.Cell,null,u.default.createElement(i.Link,{to:"/components/radio"},"Radio Button")),u.default.createElement(f.Table.Cell,null,"represents one option among several choices")),u.default.createElement(f.Table.Row,null,u.default.createElement(f.Table.Cell,null,u.default.createElement(f.Switch,null)),u.default.createElement(f.Table.Cell,null,u.default.createElement(i.Link,{to:"/components/switch"},"Switch")),u.default.createElement(f.Table.Cell,null,"represents a value that can be toggled on or off")))),u.default.createElement("h2",{className:"secondaryHeader componentDoc_standaloneSecondaryHeader"},"Useful Links"),u.default.createElement("ul",{className:"componentDoc_links"},u.default.createElement("li",{className:"componentDoc_linkItem"},u.default.createElement("a",{href:t,className:"componentDoc_linkAnchor"},u.default.createElement("i",{className:"componentDoc_icon zmdi zmdi-file-text"})," Material Guidelines"))))}}]),t}(c.Component);t.default=(0,i.withRouteData)(s)}});
//# sourceMappingURL=selection-controls.a75530ae.js.map