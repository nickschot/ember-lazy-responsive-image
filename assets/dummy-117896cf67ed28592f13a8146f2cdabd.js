"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:n.default});(0,t.default)(r,i.default.modulePrefix),e.default=r}),define("dummy/components/responsive-background",["exports","ember-responsive-image/components/responsive-background"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/responsive-image",["exports","ember-lazy-responsive-image/components/responsive-image"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/helpers/responsive-image-resolve",["exports","ember-responsive-image/helpers/responsive-image-resolve"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"responsiveImageResolve",{enumerable:!0,get:function(){return n.responsiveImageResolve}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var i,r=n.default.exportApplicationGlobal
i="string"==typeof r?r:Ember.String.classify(n.default.modulePrefix),t[i]||(t[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/instance-initializers/responsive-meta",["exports","ember-responsive-image/instance-initializers/responsive-meta"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return n.initialize}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/services/responsive-image",["exports","ember-lazy-responsive-image/services/responsive-image"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"AiF0+BQ/",block:'{"symbols":[],"statements":[[6,"h1"],[9,"class","header"],[7],[0,"Ember Lazy Responsive Image"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","content"],[7],[0,"\\n\\n  "],[6,"div"],[9,"class","images"],[7],[0,"\\n    "],[6,"div"],[7],[0,"\\n      "],[6,"h2"],[7],[0,"Lazy, inline LQIP"],[8],[0,"\\n      "],[1,[25,"responsive-image",null,[["image","className"],["inline.png","inline"]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[7],[0,"\\n      "],[6,"h2"],[7],[0,"Lazy, remote LQIP"],[8],[0,"\\n      "],[1,[25,"responsive-image",null,[["image","className"],["remote.png","remote"]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[7],[0,"\\n      "],[6,"h2"],[7],[0,"Lazy, no LQIP"],[8],[0,"\\n      "],[1,[25,"responsive-image",null,[["image","className"],["lazy.png","lazy"]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
