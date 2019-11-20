(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{275:function(module,exports,__webpack_require__){__webpack_require__(276),__webpack_require__(388),module.exports=__webpack_require__(389)},297:function(module,exports){},389:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(272);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(572),module)}.call(this,__webpack_require__(213)(module))},45:function(module,exports,__webpack_require__){"use strict";var TodoActionType,__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),function(TodoActionType){TodoActionType.ADD_TODO="todo/ADD_TODO",TodoActionType.REMOVE_TODO="todo/REMOVE_TODO",TodoActionType.CHECK_TODO="todo/CHECK_TODO",TodoActionType.UNCHECK_TODO="todo/UNCHECK_TODO",TodoActionType.UPDATE_TODO="todo/UPDATE_TODO",TodoActionType.CLEAR_COMPLETED="todo/CLEAR_COMPLETED",TodoActionType.TOGGLE_ALL="todo/TOGGLE_ALL"}(TodoActionType=exports.TodoActionType||(exports.TodoActionType={})),exports.TodoActionCreator={addTodo:function(message){return{payload:{message:message},type:TodoActionType.ADD_TODO}},checkTodo:function(id){return{payload:{id:id},type:TodoActionType.CHECK_TODO}},clearCompleted:function(){return{type:TodoActionType.CLEAR_COMPLETED}},removeTodo:function(id){return{payload:{id:id},type:TodoActionType.REMOVE_TODO}},toggleAll:function(){return{type:TodoActionType.TOGGLE_ALL}},uncheckTodo:function(id){return{payload:{id:id},type:TodoActionType.UNCHECK_TODO}},updateTodo:function(todo){return{payload:{todo:todo},type:TodoActionType.UPDATE_TODO}}};var initialState=[];exports.todoReducer=function(todoState,action){switch(void 0===todoState&&(todoState=initialState),action.type){case TodoActionType.ADD_TODO:var message=action.payload.message,lastTodo=todoState[todoState.length-1],newTodo={checked:!1,id:lastTodo&&lastTodo.id+1||0,message:message};return todoState.concat(newTodo);case TodoActionType.REMOVE_TODO:var id_1=action.payload.id;return todoState.filter((function(todo){return todo.id!==id_1}));case TodoActionType.CHECK_TODO:var id_2=action.payload.id;return todoState.map((function(todo){return todo.id===id_2?__assign(__assign({},todo),{checked:!0}):todo}));case TodoActionType.UNCHECK_TODO:var id_3=action.payload.id;return todoState.map((function(todo){return todo.id===id_3?__assign(__assign({},todo),{checked:!1}):todo}));case TodoActionType.UPDATE_TODO:var updatedTodo_1=action.payload.todo;return todoState.map((function(todo){return todo.id===updatedTodo_1.id?__assign({},updatedTodo_1):todo}));case TodoActionType.CLEAR_COMPLETED:return todoState.filter((function(todo){return!todo.checked}));case TodoActionType.TOGGLE_ALL:return todoState.map((function(todo){return __assign(__assign({},todo),{checked:!todo.checked})}))}return todoState}},572:function(module,exports,__webpack_require__){var map={"./redux-confirm.stories.tsx":573,"./redux-enricher.stories.tsx":597,"./redux-intercept.stories.tsx":598,"./redux-record.stories.tsx":599,"./redux-spread.stories.tsx":600,"./redux-throttle.stories.tsx":601,"./redux-wait.stories.tsx":602};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=572},573:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);exports.ADD=function(){var confirmOptions={filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createConfirmMiddleware(confirmOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.REMOVE=function(){var confirmOptions={filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createConfirmMiddleware(confirmOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.ADD_OR_REMOVE=function(){var confirmOptions={filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createConfirmMiddleware(confirmOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.default={title:"Confirm"}},578:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__(0);exports.useHandleOutsideClick=function(ref,callback){var handleClickOutside=function(e){ref.current&&!ref.current.contains(e.target)&&callback()};react_1.useEffect((function(){return document.addEventListener("mousedown",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside)}}))};try{exports.useHandleOutsideClick.displayName="useHandleOutsideClick",exports.useHandleOutsideClick.__docgenInfo={description:"Hook that callback clicks outside of the passed ref",displayName:"useHandleOutsideClick",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hook/useHandleOutsideClick.ts#useHandleOutsideClick"]={docgenInfo:exports.useHandleOutsideClick.__docgenInfo,name:"useHandleOutsideClick",path:"src/hook/useHandleOutsideClick.ts#useHandleOutsideClick"})}catch(__react_docgen_typescript_loader_error){}},579:function(module,exports,__webpack_require__){var content=__webpack_require__(580);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(582)(content,options);content.locals&&(module.exports=content.locals)},58:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(0),react_1=__webpack_require__(0),react_redux_1=__webpack_require__(49),react_router_dom_1=__webpack_require__(50),useHandleOutsideClick_1=__webpack_require__(578),todoReducer_1=__webpack_require__(45);__webpack_require__(579);var Route,TodoView=function(_a){var children=_a.children;return React.createElement("section",{className:"todoapp"},React.createElement(TodoHeader,null),React.createElement(TodoList,null),React.createElement(TodoFooter,null),children)},TodoHeader=function(){return React.createElement("header",{className:"header"},React.createElement("h1",null,"todos"),React.createElement(TodoInput,null))},TodoInput=function(){var _a=react_1.useState(""),value=_a[0],setValue=_a[1],dispatch=react_redux_1.useDispatch();return React.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:value,onChange:function(e){setValue(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(setValue(""),dispatch(todoReducer_1.TodoActionCreator.addTodo(value)))}})},TodoList=function(){var todos=react_redux_1.useSelector((function(state){return state.todos})),dispatch=react_redux_1.useDispatch();return 0===todos.length?null:React.createElement("section",{className:"main"},React.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onClick:function(){dispatch(todoReducer_1.TodoActionCreator.toggleAll())}}),React.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),React.createElement("ul",{className:"todo-list"},todos.map((function(todo){return React.createElement(Todo,{todo:todo,key:todo.id})}))))},Todo=function(_a){var _b,_c,todo=_a.todo,dispatch=react_redux_1.useDispatch(),location=react_router_dom_1.useLocation(),_d=react_1.useState(!1),isEditMode=_d[0],setEditMode=_d[1];return(null===(_b=react_router_dom_1.matchPath(location.pathname,{path:Route.Active}))||void 0===_b?void 0:_b.isExact)&&todo.checked?null:(null===(_c=react_router_dom_1.matchPath(location.pathname,{path:Route.Completed}))||void 0===_c?void 0:_c.isExact)&&!todo.checked?null:isEditMode?React.createElement(TodoEditor,{todo:todo,cancelEdit:function(){setEditMode(!1)}}):React.createElement("li",{className:todo.checked?"completed":"view"},React.createElement("div",{className:"view",onDoubleClick:function(){setEditMode(!0)}},React.createElement("input",{className:"toggle",type:"checkbox",checked:todo.checked,onChange:function(e){e.target.checked?dispatch(todoReducer_1.TodoActionCreator.checkTodo(todo.id)):dispatch(todoReducer_1.TodoActionCreator.uncheckTodo(todo.id))}}),React.createElement("label",null,todo.message),React.createElement("button",{className:"destroy",onClick:function(){dispatch(todoReducer_1.TodoActionCreator.removeTodo(todo.id))}})))},TodoEditor=function(_a){var todo=_a.todo,cancelEdit=_a.cancelEdit,_b=react_1.useState(todo.message),value=_b[0],setValue=_b[1],dispatch=react_redux_1.useDispatch(),wrapperRef=react_1.useRef(null);useHandleOutsideClick_1.useHandleOutsideClick(wrapperRef,(function(){cancelEdit()}));return React.createElement("li",{className:"editing",ref:wrapperRef},React.createElement("input",{className:"edit",value:value,onKeyPress:function(e){"Enter"===e.key&&(setValue(""),dispatch(todoReducer_1.TodoActionCreator.updateTodo(__assign(__assign({},todo),{message:value}))),cancelEdit())},onChange:function(e){setValue(e.target.value)}}))};!function(Route){Route.All="/",Route.Active="/active",Route.Completed="/completed"}(Route||(Route={}));var TodoFooter=function(){var _a,_b,_c,todos=react_redux_1.useSelector((function(state){return state.todos})),isEmpty=0===todos.length,leftCount=todos.filter((function(todo){return!todo.checked})).length,history=react_router_dom_1.useHistory(),location=react_router_dom_1.useLocation(),dispatch=react_redux_1.useDispatch();return isEmpty?null:React.createElement("footer",{className:"footer"},React.createElement("span",{className:"todo-count"},React.createElement("strong",null,leftCount)," item left"),React.createElement("ul",{className:"filters"},React.createElement("li",null,React.createElement("a",{className:(null===(_a=react_router_dom_1.matchPath(location.pathname,{path:Route.All}))||void 0===_a?void 0:_a.isExact)?"selected":"",onClick:function(e){e.preventDefault(),history.push(Route.All)}},"All")),React.createElement("li",null,React.createElement("a",{className:(null===(_b=react_router_dom_1.matchPath(location.pathname,{path:Route.Active}))||void 0===_b?void 0:_b.isExact)?"selected":"",onClick:function(e){e.preventDefault(),history.push(Route.Active)}},"Active")),React.createElement("li",null,React.createElement("a",{className:(null===(_c=react_router_dom_1.matchPath(location.pathname,{path:Route.Completed}))||void 0===_c?void 0:_c.isExact)?"selected":"",onClick:function(e){e.preventDefault(),history.push(Route.Completed)}},"Completed"))),React.createElement("button",{className:"clear-completed",onClick:function(){dispatch(todoReducer_1.TodoActionCreator.clearCompleted())}},"Clear completed"))};exports.default=TodoView;try{TodoView.displayName="TodoView",TodoView.__docgenInfo={description:"",displayName:"TodoView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/todo/TodoView.tsx#TodoView"]={docgenInfo:TodoView.__docgenInfo,name:"TodoView",path:"src/todo/TodoView.tsx#TodoView"})}catch(__react_docgen_typescript_loader_error){}},580:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(581)(!1)).push([module.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #111111;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n\n:focus {\n  outline: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n  0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n  position: absolute;\n  top: -140px;\n  width: 100%;\n  font-size: 80px;\n  font-weight: 200;\n  text-align: center;\n  color: #b83f45;\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n  width: 1px;\n  height: 1px;\n  border: none; /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n  right: 100%;\n  bottom: 100%;\n}\n\n.toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n  content: '❯';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n  color: #737373;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.todo-list li.editing .edit {\n  display: block;\n  width: calc(100% - 43px);\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n  display: none;\n}\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n\n.todo-list li .toggle {\n  opacity: 0;\n}\n\n.todo-list li .toggle + label {\n  /*\n      Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n      IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  -webkit-transition: color 0.4s;\n  transition: color 0.4s;\n  font-weight: 400;\n  color: #4d4d4d;\n}\n\n.todo-list li.completed label {\n  color: #cdcdcd;\n  text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  -webkit-transition: color 0.2s ease-out;\n  transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n  content: '×';\n}\n\n.todo-list li:hover .destroy {\n  display: block;\n}\n\n.todo-list li .edit {\n  display: none;\n}\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.footer {\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  font-size: 15px;\n  border-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n  0 8px 0 -3px #f6f6f6,\n  0 9px 1px -3px rgba(0, 0, 0, 0.2),\n  0 16px 0 -6px #f6f6f6,\n  0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n  float: left;\n  text-align: left;\n}\n\n.todo-count strong {\n  font-weight: 300;\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.clear-completed:hover {\n  text-decoration: underline;\n}\n\n.info {\n  margin: 65px auto 0;\n  color: #4d4d4d;\n  font-size: 11px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n\n.info p {\n  line-height: 1;\n}\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.info a:hover {\n  text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}\n",""])},59:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),todoReducer_1=__webpack_require__(45);exports.rootReducer=redux_1.combineReducers({todos:todoReducer_1.todoReducer})},597:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);exports.ADD=function(){var enricherOptions={enrich:function(action){return __assign(__assign({},action),{timestamp:new Date})},filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createEnricherMiddleware(enricherOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.REMOVE=function(){var enricherOptions={enrich:function(action){return __assign(__assign({},action),{timestamp:new Date})},filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createEnricherMiddleware(enricherOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.ADD_OR_REMOVE=function(){var enricherOptions={enrich:function(action){return __assign(__assign({},action),{timestamp:new Date})},filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createEnricherMiddleware(enricherOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.default={title:"Enricher"}},598:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);exports.ADD=function(){var interceptOptions={filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createInterceptMiddleware(interceptOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.REMOVE=function(){var interceptOptions={filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createInterceptMiddleware(interceptOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.ADD_OR_REMOVE=function(){var interceptOptions={filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createInterceptMiddleware(interceptOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.default={title:"Intercept"}},599:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var RecordActionType,redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);!function(RecordActionType){RecordActionType.START_REDUX_RECORD="START_REDUX_RECORD",RecordActionType.STOP_REDUX_RECORD="STOP_REDUX_RECORD",RecordActionType.RESUME_REDUX_RECORD="RESUME_REDUX_RECORD",RecordActionType.CALLBACK_REDUX_RECORD="CALLBACK_REDUX_RECORD",RecordActionType.REPLAY_REDUX_RECORD="REPLAY_REDUX_RECORD"}(RecordActionType||(RecordActionType={}));var Buttons=function(){var dispatch=react_redux_1.useDispatch(),dispatchRecordAction=function(type){return function(){dispatch({type:type})}};return React.createElement("footer",{className:"footer"},React.createElement("ul",{className:"filters"},React.createElement("li",null,React.createElement("a",{onClick:dispatchRecordAction(RecordActionType.START_REDUX_RECORD)},"START")),React.createElement("li",null,React.createElement("a",{onClick:dispatchRecordAction(RecordActionType.STOP_REDUX_RECORD)},"STOP")),React.createElement("li",null,React.createElement("a",{onClick:dispatchRecordAction(RecordActionType.RESUME_REDUX_RECORD)},"RESUME")),React.createElement("li",null,React.createElement("a",{onClick:dispatchRecordAction(RecordActionType.REPLAY_REDUX_RECORD)},"REPLAY"))))};exports.ADD=function(){var recordOptions=__assign({filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},RecordActionType),store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createRecordMiddleware(recordOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null,React.createElement(Buttons,null))))},exports.REMOVE=function(){var recordOptions=__assign({filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},RecordActionType),store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createRecordMiddleware(recordOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null,React.createElement(Buttons,null))))},exports.ADD_OR_REMOVE=function(){var recordOptions=__assign({filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},RecordActionType),store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createRecordMiddleware(recordOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null,React.createElement(Buttons,null))))},exports.default={title:"Record"}},60:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var addon_actions_1=__webpack_require__(584);exports.logging=function(){return function(next){return function(action){console.log(action),addon_actions_1.action("action")(JSON.stringify(action)),next(action)}}};try{exports.logging.displayName="logging",exports.logging.__docgenInfo={description:"",displayName:"logging",props:{dispatch:{defaultValue:null,description:"",name:"dispatch",required:!0,type:{name:"Dispatch<AnyAction>"}},getState:{defaultValue:null,description:"",name:"getState",required:!0,type:{name:"() => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/logging.ts#logging"]={docgenInfo:exports.logging.__docgenInfo,name:"logging",path:"stories/logging.ts#logging"})}catch(__react_docgen_typescript_loader_error){}},600:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);exports.ADD=function(){var waitOptions={milliseconds:1e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createSpreadMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.REMOVE=function(){var waitOptions={milliseconds:1e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createSpreadMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.ADD_OR_REMOVE=function(){var waitOptions={milliseconds:1e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createSpreadMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.default={title:"Spread"}},601:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);exports.ADD=function(){var waitOptions={milliseconds:1e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createThrottleMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.REMOVE=function(){var waitOptions={milliseconds:1e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createThrottleMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.ADD_OR_REMOVE=function(){var waitOptions={milliseconds:1e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createThrottleMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.default={title:"Throttle"}},602:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var redux_1=__webpack_require__(38),functional_redux_1=__webpack_require__(61),React=__webpack_require__(0),react_redux_1=__webpack_require__(49),TodoView_1=__webpack_require__(58),react_router_dom_1=__webpack_require__(50),rootReducer_1=__webpack_require__(59),todoReducer_1=__webpack_require__(45),logging_1=__webpack_require__(60);exports.ADD=function(){var waitOptions={milliseconds:3e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createWaitMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.REMOVE=function(){var waitOptions={milliseconds:3e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createWaitMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.ADD_OR_REMOVE=function(){var waitOptions={milliseconds:3e3,filter:function(action){return action.type===todoReducer_1.TodoActionType.ADD_TODO||action.type===todoReducer_1.TodoActionType.REMOVE_TODO}},store=redux_1.createStore(rootReducer_1.rootReducer,redux_1.applyMiddleware(functional_redux_1.createWaitMiddleware(waitOptions),logging_1.logging));return React.createElement(react_router_dom_1.BrowserRouter,{basename:"."},React.createElement(react_redux_1.Provider,{store:store},React.createElement(TodoView_1.default,null)))},exports.default={title:"Wait"}}},[[275,1,2]]]);
//# sourceMappingURL=main.e24f0d74dacc4c2d2786.bundle.js.map