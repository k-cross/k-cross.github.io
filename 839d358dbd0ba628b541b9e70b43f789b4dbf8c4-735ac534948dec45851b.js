(self.webpackChunkblog=self.webpackChunkblog||[]).push([[291],{2660:function(n,e,l){"use strict";var o=l(9574),t=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)t.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,l){var o=(n.properties.style||"").trim();o&&!/;\s*/.test(o)&&(o+=";"),o&&(o+=" ");var t=o+e+": "+l+";";n.properties.style=t}n.exports=function(n){return o(n,"element",a),n}},856:function(n){"use strict";function e(n){if("string"==typeof n)return function(n){return e;function e(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return t;if("object"==typeof n)return("length"in n?o:l)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function l(n){return function(e){var l;for(l in n)if(e[l]!==n[l])return!1;return!0}}function o(n){var l=function(n){for(var l=[],o=n.length,t=-1;++t<o;)l[t]=e(n[t]);return l}(n),o=l.length;return function(){var n=-1;for(;++n<o;)if(l[n].apply(this,arguments))return!0;return!1}}function t(){return!0}n.exports=e},9222:function(n,e,l){"use strict";n.exports=i;var o=l(856),t=!0,r="skip",a=!1;function i(n,e,l,t){var i;function s(n,o,c){var p,g=[];return(e&&!i(n,o,c[c.length-1]||null)||(g=u(l(n,c)))[0]!==a)&&n.children&&g[0]!==r?(p=u(function(n,e){var l,o=-1,r=t?-1:1,i=(t?n.length:o)+r;for(;i>o&&i<n.length;){if((l=s(n[i],i,e))[0]===a)return l;i="number"==typeof l[1]?l[1]:i+r}}(n.children,c.concat(n))),p[0]===a?p:g):g}"function"==typeof e&&"function"!=typeof l&&(t=l,l=e,e=null),i=o(e),s(n,null,[])}function u(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[t,n]:[n]}i.CONTINUE=t,i.SKIP=r,i.EXIT=a},9574:function(n,e,l){"use strict";n.exports=i;var o=l(9222),t=o.CONTINUE,r=o.SKIP,a=o.EXIT;function i(n,e,l,t){"function"==typeof e&&"function"!=typeof l&&(t=l,l=e,e=null),o(n,e,(function(n,e){var o=e[e.length-1],t=o?o.children.indexOf(n):null;return l(n,t,o)}),t)}i.CONTINUE=t,i.SKIP=r,i.EXIT=a},7830:function(n,e,l){"use strict";l.d(e,{A:function(){return ln}});var o={};l.r(o),l.d(o,{boolean:function(){return g},booleanish:function(){return d},commaOrSpaceSeparated:function(){return b},commaSeparated:function(){return y},number:function(){return m},overloadedBoolean:function(){return h},spaceSeparated:function(){return f}});var t=l(644),r=l(196),a=l(6540);class i{constructor(n,e,l){this.property=n,this.normal=e,l&&(this.space=l)}}function u(n,e){const l={},o={};let t=-1;for(;++t<n.length;)Object.assign(l,n[t].property),Object.assign(o,n[t].normal);return new i(l,o,e)}function s(n){return n.toLowerCase()}i.prototype.property={},i.prototype.normal={},i.prototype.space=null;class c{constructor(n,e){this.property=n,this.attribute=e}}c.prototype.space=null,c.prototype.boolean=!1,c.prototype.booleanish=!1,c.prototype.overloadedBoolean=!1,c.prototype.number=!1,c.prototype.commaSeparated=!1,c.prototype.spaceSeparated=!1,c.prototype.commaOrSpaceSeparated=!1,c.prototype.mustUseProperty=!1,c.prototype.defined=!1;let p=0;const g=k(),d=k(),h=k(),m=k(),f=k(),y=k(),b=k();function k(){return 2**++p}const v=Object.keys(o);class x extends c{constructor(n,e,l,t){let r=-1;if(super(n,e),w(this,"space",t),"number"==typeof l)for(;++r<v.length;){const n=v[r];w(this,v[r],(l&o[n])===o[n])}}}function w(n,e,l){l&&(n[e]=l)}x.prototype.defined=!0;const S={}.hasOwnProperty;function C(n){const e={},l={};let o;for(o in n.properties)if(S.call(n.properties,o)){const t=n.properties[o],r=new x(o,n.transform(n.attributes||{},o),t,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(r.mustUseProperty=!0),e[o]=r,l[s(o)]=o,l[s(r.attribute)]=o}return new i(e,l,n.space)}const P=C({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),L=C({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function O(n,e){return e in n?n[e]:e}function T(n,e){return O(n,e.toLowerCase())}const M=C({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:T,properties:{xmlns:null,xmlnsXLink:null}}),D=C({transform(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:m,ariaColIndex:m,ariaColSpan:m,ariaControls:f,ariaCurrent:null,ariaDescribedBy:f,ariaDetails:null,ariaDisabled:d,ariaDropEffect:f,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:f,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:f,ariaLevel:m,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:f,ariaPlaceholder:null,ariaPosInSet:m,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:f,ariaRowCount:m,ariaRowIndex:m,ariaRowSpan:m,ariaSelected:d,ariaSetSize:m,ariaSort:null,ariaValueMax:m,ariaValueMin:m,ariaValueNow:m,ariaValueText:null,role:null}}),z=C({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:T,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:y,acceptCharset:f,accessKey:f,action:null,allow:null,allowFullScreen:g,allowPaymentRequest:g,allowUserMedia:g,alt:null,as:null,async:g,autoCapitalize:null,autoComplete:f,autoFocus:g,autoPlay:g,blocking:f,capture:null,charSet:null,checked:g,cite:null,className:f,cols:m,colSpan:null,content:null,contentEditable:d,controls:g,controlsList:f,coords:m|y,crossOrigin:null,data:null,dateTime:null,decoding:null,default:g,defer:g,dir:null,dirName:null,disabled:g,download:h,draggable:d,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:g,formTarget:null,headers:f,height:m,hidden:g,high:m,href:null,hrefLang:null,htmlFor:f,httpEquiv:f,id:null,imageSizes:null,imageSrcSet:null,inert:g,inputMode:null,integrity:null,is:null,isMap:g,itemId:null,itemProp:f,itemRef:f,itemScope:g,itemType:f,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:g,low:m,manifest:null,max:null,maxLength:m,media:null,method:null,min:null,minLength:m,multiple:g,muted:g,name:null,nonce:null,noModule:g,noValidate:g,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:g,optimum:m,pattern:null,ping:f,placeholder:null,playsInline:g,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:g,referrerPolicy:null,rel:f,required:g,reversed:g,rows:m,rowSpan:m,sandbox:f,scope:null,scoped:g,seamless:g,selected:g,shadowRootClonable:g,shadowRootDelegatesFocus:g,shadowRootMode:null,shape:null,size:m,sizes:null,slot:null,span:m,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:m,step:null,style:null,tabIndex:m,target:null,title:null,translate:null,type:null,typeMustMatch:g,useMap:null,value:d,width:m,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:f,axis:null,background:null,bgColor:null,border:m,borderColor:null,bottomMargin:m,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:g,declare:g,event:null,face:null,frame:null,frameBorder:null,hSpace:m,leftMargin:m,link:null,longDesc:null,lowSrc:null,marginHeight:m,marginWidth:m,noResize:g,noHref:g,noShade:g,noWrap:g,object:null,profile:null,prompt:null,rev:null,rightMargin:m,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:m,valueType:null,version:null,vAlign:null,vLink:null,vSpace:m,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:g,disableRemotePlayback:g,prefix:null,property:null,results:m,security:null,unselectable:null}}),E=C({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:O,properties:{about:b,accentHeight:m,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:m,amplitude:m,arabicForm:null,ascent:m,attributeName:null,attributeType:null,azimuth:m,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:m,by:null,calcMode:null,capHeight:m,className:f,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:m,diffuseConstant:m,direction:null,display:null,dur:null,divisor:m,dominantBaseline:null,download:g,dx:null,dy:null,edgeMode:null,editable:null,elevation:m,enableBackground:null,end:null,event:null,exponent:m,externalResourcesRequired:null,fill:null,fillOpacity:m,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:y,g2:y,glyphName:y,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:m,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:m,horizOriginX:m,horizOriginY:m,id:null,ideographic:m,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:m,k:m,k1:m,k2:m,k3:m,k4:m,kernelMatrix:b,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:m,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:m,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:m,overlineThickness:m,paintOrder:null,panose1:null,path:null,pathLength:m,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:f,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:m,pointsAtY:m,pointsAtZ:m,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:b,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:b,rev:b,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:b,requiredFeatures:b,requiredFonts:b,requiredFormats:b,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:m,specularExponent:m,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:m,strikethroughThickness:m,string:null,stroke:null,strokeDashArray:b,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:m,strokeOpacity:m,strokeWidth:null,style:null,surfaceScale:m,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:b,tabIndex:m,tableValues:null,target:null,targetX:m,targetY:m,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:b,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:m,underlineThickness:m,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:m,values:null,vAlphabetic:m,vMathematical:m,vectorEffect:null,vHanging:m,vIdeographic:m,version:null,vertAdvY:m,vertOriginX:m,vertOriginY:m,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:m,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),R=u([L,P,M,D,z],"html"),A=u([L,P,M,D,E],"svg"),U=/^data[-\w.:]+$/i,I=/-[a-z]/g,B=/[A-Z]/g;function N(n){return"-"+n.toLowerCase()}function H(n){return n.charAt(1).toUpperCase()}const F={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var j=l(9108);const q={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},V={}.hasOwnProperty;function X(n,e,l){if("function"!=typeof n)throw new TypeError("h is not a function");const o=function(n){const e=n("div",{});return Boolean(e&&("_owner"in e||"_store"in e)&&(void 0===e.key||null===e.key))}(n),t=function(n){const e=n("div",{});return Boolean(e&&e.context&&e.context._isVue)}(n),r=function(n){const e=n("div",{});return"VirtualNode"===e.type}(n);let a,i;if("string"==typeof l||"boolean"==typeof l?(a=l,l={}):(l||(l={}),a=l.prefix),e&&"root"===e.type){const n=e.children[0];i=1===e.children.length&&"element"===n.type?n:{type:"element",tagName:"div",properties:{},children:e.children}}else{if(!e||"element"!==e.type)throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");i=e}return K(n,i,{schema:"svg"===l.space?A:R,prefix:null==a?o||t||r?"h-":void 0:"string"==typeof a?a:a?"h-":void 0,key:0,react:o,vue:t,vdom:r,hyperscript:Y(n)})}function K(n,e,l){const o=l.schema;let t=o,r=e.tagName;const a={},i=[];let u,s=-1;for(u in"html"===o.space&&"svg"===r.toLowerCase()&&(t=A,l.schema=t),e.properties)e.properties&&V.call(e.properties,u)&&W(a,u,e.properties[u],l,r);if(l.vdom&&("html"===t.space?r=r.toUpperCase():t.space&&(a.namespace=q[t.space])),l.prefix&&(l.key++,a.key=l.prefix+l.key),e.children)for(;++s<e.children.length;){const o=e.children[s];"element"===o.type?i.push(K(n,o,l)):"text"===o.type&&i.push(o.value)}return l.schema=o,i.length>0?n.call(e,r,a,i):n.call(e,r,a)}function W(n,e,l,o,t){const r=function(n,e){const l=s(e);let o=e,t=c;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&"data"===l.slice(0,4)&&U.test(e)){if("-"===e.charAt(4)){const n=e.slice(5).replace(I,H);o="data"+n.charAt(0).toUpperCase()+n.slice(1)}else{const n=e.slice(4);if(!I.test(n)){let l=n.replace(B,N);"-"!==l.charAt(0)&&(l="-"+l),e="data"+l}}t=x}return new t(o,e)}(o.schema,e);let a;null==l||"number"==typeof l&&Number.isNaN(l)||!1===l&&(o.vue||o.vdom||o.hyperscript)||!l&&r.boolean&&(o.vue||o.vdom||o.hyperscript)||(Array.isArray(l)&&(l=r.commaSeparated?function(n,e){const l=e||{};return(""===n[n.length-1]?[...n,""]:n).join((l.padRight?" ":"")+","+(!1===l.padLeft?"":" ")).trim()}(l):l.join(" ").trim()),r.boolean&&o.hyperscript&&(l=""),"style"===r.property&&"string"==typeof l&&(o.react||o.vue||o.vdom)&&(l=function(n,e){const l={};try{j(n,((n,e)=>{"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4)),l[n.replace(/-([a-z])/g,((n,e)=>e.toUpperCase()))]=e}))}catch(o){const n=o;throw n.message=e+"[style]"+n.message.slice(9),n}return l}(l,t)),o.vue?"style"!==r.property&&(a="attrs"):r.mustUseProperty||(o.vdom?"style"!==r.property&&(a="attributes"):o.hyperscript&&(a="attrs")),a?n[a]=Object.assign(n[a]||{},{[r.attribute]:l}):r.space&&o.react?n[F[r.property]||r.property]=l:n[r.attribute]=l)}function Y(n){return"context"in n&&"cleanup"in n}var Z=l(2660);const _={}.hasOwnProperty,G=new Set(["table","thead","tbody","tfoot","tr"]);var J=l(8061),$=l(7437);const Q=new function(n){if(!n||"function"!=typeof n.createElement)throw new TypeError("createElement is not a function");const e=n.createElement,l=!1!==n.fixTableCellAlign;function o(l,o,t){if(t&&G.has(l)&&(t=t.filter((n=>!function(n){const e=n&&"object"==typeof n&&"text"===n.type?n.value||"":n;return"string"==typeof e&&""===e.replace(/[ \t\n\f\r]/g,"")}(n)))),n.components&&_.call(n.components,l)){const r=n.components[l];return n.passNode&&"function"==typeof r&&(o=Object.assign({node:this},o)),e(r,o,t)}return e(l,o,t)}Object.assign(this,{Compiler:function(t){let r=X(o,l?Z(t):t,n.prefix);if("root"===t.type)return r=r&&"object"==typeof r&&"type"in r&&"props"in r&&"div"===r.type&&(1!==t.children.length||"element"!==t.children[0].type)?r.props.children:[r],e(n.Fragment||"div",{},r);return r}})}({createElement:a.createElement,components:{}}).Compiler,nn=({ast:n,...e})=>(n.properties=e,Q(n)),en=(0,t.A)("section",{target:"eeqhoro0"})("position:relative;margin:0 auto;padding:0 170px 6vw;min-height:230px;font-family:Georgia,serif;font-size:2rem;line-height:1.6em;background:#fff;@media (max-width: 1170px){padding:0 11vw;}@media (max-width: 800px){padding:0 5vw;font-size:1.8rem;}@media (max-width: 500px){padding:0;}@media (max-width: 500px){.post-full-custom-excerpt{font-size:1.9rem;line-height:1.5em;}}.no-image{padding-top:0;}h1,h2,h3,h4,h5,h6,p,ul,ol,dl,pre,blockquote,.post-full-comments,.footnotes{margin:0 0 1.5em 0;min-width:100%;}@media (max-width: 500px){p,ul,ol,dl,pre,.post-full-comments,.footnotes{margin-bottom:1.28em;}}li{word-break:break-word;}li p{margin:0;}a{color:",J.T.darkgrey,";word-break:break-word;box-shadow:",J.T.darkgrey," 0 -1px 0 inset;transition:all 0.2s ease-in-out;}a:hover{color:",J.T.green,";text-decoration:none;box-shadow:",J.T.green," 0 -1px 0 inset;}strong,em{color:",(0,r.a)("-0.05",J.T.darkgrey),";}small{display:inline-block;line-height:1.6em;}img,video{display:block;margin:1.5em auto;max-width:1040px;height:auto;}@media (max-width: 1040px){img,video{width:100%;}}img[src$='#full']{max-width:none;width:100vw;}img+br+small{display:block;margin-top:-3em;margin-bottom:1.5em;text-align:center;}iframe{margin:0 auto!important;}blockquote{margin:0 0 1.5em;padding:0 1.5em;border-left:#3eb0ef 3px solid;}@media (max-width: 500px){blockquote{padding:0 1.3em;}}blockquote p{margin:0 0 1em 0;color:inherit;font-size:inherit;line-height:inherit;font-style:italic;}blockquote p:last-child{margin-bottom:0;}code{padding:0 5px 2px;font-size:0.8em;line-height:1em;font-weight:400!important;background:",J.T.whitegrey,";border-radius:3px;}p code{word-break:break-all;}pre{overflow-x:auto;padding:20px;max-width:100%;color:",J.T.whitegrey,";font-size:1.4rem;line-height:1.5em;border-radius:5px;}pre ::selection{color:",(0,r.a)("-0.25",J.T.midgrey),";}pre code{padding:0;font-size:inherit;line-height:inherit;background:transparent;}pre code :not(span){color:inherit;}.fluid-width-video-wrapper{margin:1.5em 0 3em;}hr{margin:2em 0;}hr:after{content:'';position:absolute;top:-15px;left:50%;display:block;margin-left:-10px;width:1px;height:30px;background:",(0,r.a)("0.1",J.T.lightgrey),";box-shadow:#fff 0 0 0 5px;transform:rotate(45deg);}hr+p{margin-top:1.2em;}h1,h2,h3,h4,h5,h6{color:",(0,r.a)("-0.05",J.T.darkgrey),";font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}h1{margin:0.5em 0 0.4em;font-size:4.2rem;line-height:1.25em;font-weight:600;}p+h1{margin-top:0.8em;}@media (max-width: 800px){h1{font-size:3.2rem;line-height:1.25em;}}h2{margin:0.5em 0 0.4em;font-size:3.2rem;line-height:1.25em;font-weight:600;}p+h2{margin-top:0.8em;}@media (max-width: 800px){h2{margin-bottom:0.3em;font-size:2.8rem;line-height:1.25em;}}h3{margin:0.5em 0 0.2em;font-size:2.5rem;line-height:1.3em;font-weight:600;}h2+h3{margin-top:0.7em;}@media (max-width: 800px){h3{margin-bottom:0.3em;font-size:2.4rem;line-height:1.3em;}}h4{margin:0.5em 0 0.2em;font-size:2.5rem;font-weight:600;}h2+h4{margin-top:0.7em;}h3+h4{margin-top:0;}@media (max-width: 800px){h4{margin-bottom:0.3em;font-size:2.4rem;line-height:1.3em;}}h5{display:block;margin:0.5em 0;padding:0.4em 1em 0.9em;border:0;color:",J.T.green,";font-family:Georgia,serif;font-size:3.2rem;line-height:1.35em;text-align:center;}@media (min-width: 1180px){h5{max-width:1060px;}}@media (max-width: 800px){h5{margin-bottom:1em;margin-left:1.3em;padding:0 0 0.5em;font-size:2.4rem;text-align:initial;}}h6{margin:0.5em 0 0.2em 0;font-size:2rem;font-weight:700;}@media (max-width: 800px){h6{font-size:1.8rem;line-height:1.4em;}}table{display:inline-block;overflow-x:auto;margin:0.5em 0 2.5em;max-width:100%;width:auto;border-spacing:0;border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:1.6rem;white-space:nowrap;vertical-align:top;}table{-webkit-overflow-scrolling:touch;background:radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0 center,radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;background-attachment:scroll,scroll;background-size:10px 100%,10px 100%;background-repeat:no-repeat;}table td:first-of-type{background-image:linear-gradient(\n      to right,\n      rgba(255, 255, 255, 1) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );background-size:20px 100%;background-repeat:no-repeat;}table td:last-child{background-image:linear-gradient(\n      to left,\n      rgba(255, 255, 255, 1) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );background-position:100% 0;background-size:20px 100%;background-repeat:no-repeat;}table th{color:",J.T.darkgrey,";font-size:1.2rem;font-weight:700;letter-spacing:0.2px;text-align:left;text-transform:uppercase;background-color:",(0,r.a)("0.04",J.T.whitegrey),";}table th,table td{padding:6px 12px;border:",(0,r.a)("-0.01",J.T.whitegrey)," 1px solid;}@media (prefers-color-scheme: dark){background:",J.T.darkmode,";h1,h2,h3,h4,h6{color:rgba(255, 255, 255, 0.9);}a{color:#fff;box-shadow:inset 0 -1px 0 #fff;}strong{color:#fff;}em{color:#fff;}code{color:#fff;background:#000;}hr{border-top-color:",(0,r.a)("0.08",J.T.darkmode),";}figcaption{color:rgba(255, 255, 255, 0.6);}table td:first-of-type{background-image:linear-gradient(to right, ",J.T.darkmode," 50%, ",J.T.darkmode," 100%);}table td:last-child{background-image:linear-gradient(270deg, #191b1f 50%, rgba(25, 27, 31, 0));}table th{color:rgba(255, 255, 255, 0.85);background-color:",(0,r.a)("0.08",J.T.darkmode),";}table th,table td{border:",(0,r.a)("0.08",J.T.darkmode)," 1px solid;}.kg-bookmark-container,.kg-bookmark-container:hover{color:rgba(255, 255, 255, 0.75);box-shadow:0 0 1px rgba(255, 255, 255, 0.9);}}code[class*='language-'],pre[class*='language-']{color:white;background:none;font-family:Consolas,Menlo,Monaco,source-code-pro,Courier New,monospace;font-feature-settings:normal;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;margin-bottom:0;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}pre[class*='language-']{overflow:auto;}pre[class*='language-']::-moz-selection{background:hsl(207, 4%, 16%);}pre[class*='language-']::selection{background:hsl(207, 4%, 16%);}pre[class*='language-']::-moz-selection,pre[class*='language-'] ::-moz-selection{text-shadow:none;background:hsla(0, 0%, 100%, 0.15);}pre[class*='language-']::selection,pre[class*='language-'] ::selection{text-shadow:none;background:hsla(0, 0%, 100%, 0.15);}*:not(pre)>code[class*='language-']{border-radius:0.3em;background:rgb(1, 22, 39);color:white;padding:0.15em 0.5em;white-space:normal;}.token.attr-name{color:rgb(173, 219, 103);font-style:italic;}.token.comment{color:rgb(128, 147, 147);}.token.string,.token.url{color:rgb(173, 219, 103);}.token.variable{color:rgb(214, 222, 235);}.token.number{color:rgb(247, 140, 108);}.token.builtin,.token.char,.token.constant,.token.function{color:rgb(130, 170, 255);}.token.punctuation{color:rgb(199, 146, 234);}.token.selector,.token.doctype{color:rgb(199, 146, 234);font-style:'italic';}.token.class-name{color:rgb(255, 203, 139);}.token.tag,.token.operator,.token.keyword{color:#ffa7c4;}.token.boolean{color:rgb(255, 88, 116);}.token.property{color:rgb(128, 203, 196);}.token.namespace{color:rgb(178, 204, 214);}pre[data-line]{padding:1em 0 1em 3em;position:relative;}.gatsby-highlight-code-line{background-color:hsla(207, 95%, 15%, 1);display:block;margin-right:-1.3125rem;margin-left:-1.3125rem;padding-right:1em;padding-left:1.25em;border-left:0.25em solid #ffa7c4;}.gatsby-highlight{margin-bottom:1.75rem;margin-left:-1.3125rem;margin-right:-1.3125rem;border-radius:10px;background:#011627;-webkit-overflow-scrolling:touch;overflow:auto;}.gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}");var ln=({htmlAst:n})=>(0,$.Y)(en,{className:"post-full-content"},(0,$.Y)(nn,{className:"post-content",ast:n}))},9788:function(n){var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,o=/^\s*/,t=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,r=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i=/^[;\s]*/,u=/^\s+|\s+$/g,s="";function c(n){return n?n.replace(u,s):s}n.exports=function(n,u){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];u=u||{};var p=1,g=1;function d(n){var e=n.match(l);e&&(p+=e.length);var o=n.lastIndexOf("\n");g=~o?n.length-o:g+n.length}function h(){var n={line:p,column:g};return function(e){return e.position=new m(n),k(),e}}function m(n){this.start=n,this.end={line:p,column:g},this.source=u.source}m.prototype.content=n;var f=[];function y(e){var l=new Error(u.source+":"+p+":"+g+": "+e);if(l.reason=e,l.filename=u.source,l.line=p,l.column=g,l.source=n,!u.silent)throw l;f.push(l)}function b(e){var l=e.exec(n);if(l){var o=l[0];return d(o),n=n.slice(o.length),l}}function k(){b(o)}function v(n){var e;for(n=n||[];e=x();)!1!==e&&n.push(e);return n}function x(){var e=h();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var l=2;s!=n.charAt(l)&&("*"!=n.charAt(l)||"/"!=n.charAt(l+1));)++l;if(l+=2,s===n.charAt(l-1))return y("End of comment missing");var o=n.slice(2,l-2);return g+=2,d(o),n=n.slice(l),g+=2,e({type:"comment",comment:o})}}function w(){var n=h(),l=b(t);if(l){if(x(),!b(r))return y("property missing ':'");var o=b(a),u=n({type:"declaration",property:c(l[0].replace(e,s)),value:o?c(o[0].replace(e,s)):s});return b(i),u}}return k(),function(){var n,e=[];for(v(e);n=w();)!1!==n&&(e.push(n),v(e));return e}()}},9108:function(n,e,l){var o=l(9788);function t(n,e){var l,t=null;if(!n||"string"!=typeof n)return t;for(var r,a,i=o(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(l=i[s]).property,a=l.value,u?e(r,a,l):a&&(t||(t={}),t[r]=a);return t}n.exports=t,n.exports.default=t}}]);
//# sourceMappingURL=839d358dbd0ba628b541b9e70b43f789b4dbf8c4-735ac534948dec45851b.js.map