(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),o=a.n(c),r=(a(38),a(39),a(14)),i=a(7),m=a(9),u=a(10),s=a(12),h=a(11),p=a(13),d=a(6),E=a.n(d),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).delete1=function(e){E.a.delete("http://localhost:4000/delete_contact/"+e).then((function(e){console.log(e.data),window.location.reload()}))},a.state={contacts:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:4000/contacts").then((function(t){return e.setState({contacts:t.data})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"contact-list"},this.state.contacts.map((function(t){return l.a.createElement("div",{className:"contact-info",key:t._id},l.a.createElement("p",null,l.a.createElement("span",null,"Name:  "),"  ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,l.a.createElement("span",null,"Phone:  "),"  ",l.a.createElement("span",null,t.phone)),l.a.createElement("p",null,l.a.createElement("span",null,"Email:  "),"  ",l.a.createElement("span",null,t.email)),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){e.delete1(t._id)}},"Supprimer"),l.a.createElement(r.b,{to:"/update/".concat(t._id)}," ",l.a.createElement("button",null,"Edit"))))})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).setName=function(e){a.setState({name:e.target.value})},a.setTel=function(e){a.setState({tel:e.target.value})},a.setEmail=function(e){a.setState({email:e.target.value})},a.addcontact=function(){""===a.state.name||""===a.state.tel&&""===a.state.email?alert("Required fields!! Name or tel or email"):E.a.post("http://localhost:4000/contact",{name:a.state.name,phone:a.state.tel,email:a.state.email})},a.state={name:"",tel:"",email:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("h2",null,"ADD contact Page"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"subtitle"},"NAME:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:this.setName}),l.a.createElement("br",null),l.a.createElement("span",{className:"subtitle"},"Tel:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:this.setTel}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"subtitle"},"EMAIL:"),l.a.createElement("br",null),l.a.createElement("input",{type:"email",onChange:this.setEmail}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.addcontact},"Submit"))}}]),t}(n.Component),v=a(32),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.UpdateContact=function(){var e={name:a.state.name,phone:a.state.phone,email:a.state.email};E.a.put("http://localhost:4000/update/"+a.props.match.params.id,e)},a.state={name:"",phone:"",email:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:4000/contact1/"+this.props.match.params.id).then((function(t){return e.setState({name:t.data.name,phone:t.data.phone,email:t.data.email})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"editcont"},l.a.createElement("input",{name:"name",placeholder:"name",type:"text",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("input",{name:"phone",placeholder:"phone",type:"text",value:this.state.phone,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("input",{name:"email",placeholder:"email",type:"text",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("button",{onClick:this.UpdateContact},"modifier"))}}]),t}(n.Component);var C=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Contact App"),l.a.createElement(r.b,{to:"/contacts"},l.a.createElement("button",null,"Contact List")),l.a.createElement(r.b,{to:"/add"},l.a.createElement("button",null,"Add")),l.a.createElement("div",{className:"add-contact"},l.a.createElement(i.a,{exact:!0,path:"/contacts",component:b}),l.a.createElement(i.a,{exact:!0,path:"/add",component:f}),l.a.createElement(i.a,{exact:!0,path:"/update/:id",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.602e1e6f.chunk.js.map