(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(t,e,a){t.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3h_ey",image:"ImageGalleryItem_image__1WHai"}},11:function(t,e,a){t.exports={overlay:"Modal_overlay__1Or8S",modal:"Modal_modal__1HwkF"}},12:function(t,e,a){t.exports={buttonBox:"Button_buttonBox__wd0rO",button:"Button_button__16362"}},13:function(t,e,a){t.exports={App:"App_App__3wxxW"}},26:function(t,e,a){t.exports={imageGallery:"ImageGallery_imageGallery__22hgH"}},27:function(t,e,a){t.exports={notify:"Notify_notify__1GZBh"}},33:function(t,e,a){},73:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),r=a(23),s=a.n(r),c=(a(33),a(14)),i=a(28),l=a(4),u=a(5),m=a(7),h=a(6),g=a(24),p=a.n(g),d=a(25),b=a.n(d).a.create({baseURL:"https://pixabay.com/api/",params:{image_type:"photo",key:"20957538-039948fc53da0772e609db9c3",per_page:12,orientation:"horizontal"}}),f=a(8),j=a.n(f),y=a(0),v=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={searchQuery:""},t.changeInput=function(e){t.setState({searchQuery:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.searchQuery),t.reset()},t.reset=function(){t.setState({searchQuery:""})},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.state.searchQuery;return Object(y.jsx)("header",{className:j.a.Searchbar,children:Object(y.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:j.a.button,children:Object(y.jsx)("span",{className:j.a.label,children:"Search"})}),Object(y.jsx)("input",{className:j.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441",value:t,onChange:this.changeInput})]})})}}]),a}(n.Component),_=a(10),x=a.n(_),O=function(t){var e=t.image;return Object(y.jsx)("li",{className:x.a.imageGalleryItem,children:Object(y.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-imageurl":e.largeImageURL,className:x.a.image})})};O.defaultProps={image:{}};var S=O,k=a(2),w=a.n(k),N=a(26),I=a.n(N);S.propTypes={images:w.a.array.isRequired,toggleModal:w.a.func.isRequired};var M=function(t){var e=t.images,a=t.toggleModal,n=e.map((function(t){return Object(y.jsx)(S,{image:t},t.id)}));return Object(y.jsx)("ul",{className:I.a.imageGallery,onClick:function(t){t.target!==t.currentTarget&&a({status:!0,src:t.target.dataset.imageurl,alt:t.target.alt})},children:n})},B=a(27),C=a.n(B),L=function(t){var e=t.message;return Object(y.jsx)("p",{className:C.a.notify,children:e})},G=a(11),E=a.n(G),H=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).checkEvent=function(e){"Escape"!==e.key&&e.target!==e.currentTarget||t.props.toggleModal({status:!1})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.checkEvent)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.checkEvent)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:E.a.overlay,onClick:this.checkEvent,children:Object(y.jsx)("div",{className:E.a.modal,children:this.props.children})})}}]),a}(n.Component),Q=a(12),A=a.n(Q),F=function(t){var e=t.onClick,a=t.text,n=t.className;return Object(y.jsx)("div",{className:"".concat(A.a.buttonBox," ").concat(n),children:Object(y.jsx)("button",{type:"button",className:A.a.button,onClick:e,children:a})})};F.defaultProps={className:"",text:"Button"};var R=F,T={images:[],totalHits:0,searchQuery:"",page:1,isLoading:!1,error:null,emptyNotify:!1,onModal:!1,showButton:!1,targetImage:null},U=a(13),D=a.n(U),q=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state=Object(i.a)({},T),t.onSubmit=function(e){t.setState({searchQuery:e,images:[],page:1,isLoading:!0})},t.onButtonMoreClick=function(){t.setState((function(t){return{page:t.page+1}}))},t.showButton=function(){var e=t.state;e.totalHits>e.images.length?t.setState({showButton:!0}):t.setState({showButton:!1})},t.showNotify=function(){t.state.totalHits?t.setState({emptyNotify:!1}):t.setState({emptyNotify:!0})},t.toggleModal=function(e){var a=e.status,n=e.src,o=e.alt;a?t.setState({targetImage:{src:n,alt:o},onModal:!0}):t.setState({targetImage:null,onModal:!1})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.searchImages()}},{key:"componentDidUpdate",value:function(t,e){this.state.isLoading&&this.searchImages(),e.page!==this.state.page&&this.searchImages()}},{key:"searchImages",value:function(){var t=this,e=this.state,a=e.searchQuery,n=e.page;(function(t,e){return b.get("?q=".concat(t,"&page=").concat(e))})(a,n).then((function(e){var a=e.data;1===n?t.setState({totalHits:a.totalHits,images:a.hits}):(t.setState((function(t){return{images:[].concat(Object(c.a)(t.images),Object(c.a)(a.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})),t.showButton(),t.showNotify()})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.images,a=t.isLoading,n=t.error,o=t.emptyNotify,r=t.onModal,s=t.targetImage,c=t.showButton;return Object(y.jsxs)("div",{className:D.a.App,children:[Object(y.jsx)(v,{onSubmit:this.onSubmit}),n&&Object(y.jsx)(L,{message:"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(n.message)}),a&&Object(y.jsx)(p.a,{type:"BallTriangle",color:"#2a52be",height:120,width:120}),e.length&&Object(y.jsx)(M,{images:e,toggleModal:this.toggleModal}),o&&Object(y.jsx)(L,{message:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."}),r&&Object(y.jsx)(H,{toggleModal:this.toggleModal,children:Object(y.jsx)("img",{className:D.a.img,src:s.src,alt:""})}),c&&Object(y.jsx)(R,{text:"Load more",onClick:this.onButtonMoreClick})]})}}]),a}(n.Component);s.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={Searchbar:"Searchbar_Searchbar__2kN_m",SearchForm:"Searchbar_SearchForm__1FPYC",button:"Searchbar_button__3xg3f",label:"Searchbar_label__1KmkC",input:"Searchbar_input__3cF98"}}},[[73,1,2]]]);
//# sourceMappingURL=main.f43288c7.chunk.js.map