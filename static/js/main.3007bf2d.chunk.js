(this["webpackJsonphurricane-explainer"]=this["webpackJsonphurricane-explainer"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(7),o=a.n(r),c=(a(12),a(2)),s=a(3),u=a(5),d=a(4),l=(a(13),[{cardTitle:"What is a hurricane?",content:"img/hurricane.gif",caption:"Graphic: Tesalon Felicien, CNN"},{cardHeadline:"What is a hurricane?",content:"/img/dorianeye.jpg",caption:"Hurricane Dorian's eye seen from the International Space Station in 2019. Credit: NASA",description:"A hurricane falls under the storm category of tropical cyclone, which is a violent, rotating system of organized thunderstorms. Tropical cyclones formed in the Atlantic and Pacific Oceans, Caribbean Sea and Gulf of Mexico are called hurricanes.  In other parts of the world, they are called typhoons. When a tropical cyclone in the Gulf, Caribbean, Atlantic or Pacific reaches sustained winds of 74 mph, it is called a hurricane. They can be massive and produce strong winds that cause flooding and tornadoes."},{cardHeadline:"How do hurricanes form?",content:"img/hurricane-laura.gif",caption:"Hurricane Laura began as a tropical wave off the west coast of Africa on August 16, 2020. It made landfall in Louisiana on August 27, 2020. Credit: CNN",description:"A hurricane needs warm water, humid air and wind to form. As warm water evaporates, it fuels the storm. Warm ocean air rises into the storm forming an area of low pressure. When air rises and cools it produces clouds and thunderstorms. An eye forms in the center of the storm system as it rotates faster and faster. When winds reach 39 mph, it is categorized as tropical storm. At 74 mph, it categorized as a hurricane."},{cardHeadline:"When are hurricanes most likely?",content:"img/hurricane.jpg",caption:"This graphic shows named storm tracks for the 2020 hurricane season. Credit: CNN",description:"Hurricanes occur at different frequencies across the globe. In The hurricane season for the Atlantic, Caribbean and Gulf of Mexico runs from June 1 to November 30. The Atlantic hurricane season hits its peak on September 10. The season for the Eastern Pacific runs from May 15 to November 30 and the Central Pacific from June 1 to November 30."},{cardHeadline:"Why do hurricanes have names?",content:"img/hurricane-names.png",caption:"Some of the names used during the 2020 hurricane season. Credit: NOAA",description:"Storms have names to streamline communication and avoid confusion. US meteorologists began giving tropical storms and hurricanes female names in 1953. By 1979, names alternated between female and male to identify storms in the Northern Pacific and Atlantic Basins. Now, the World Meteorological Organization produces the list of names on a six-year rotation for hurricanes. Names are retired if a storm is extremely deadly and costly. There have been 93 hurricane names retired since 1954."},{cardHeadline:"Hurricane categories",content:"img/hurricane-categories.gif",caption:"The Saffir Simpson Hurricane Wind Scale is used to measure how strong a hurricane is. Credit: CNN",hurricaneCategories:["Category 1: Winds 74 to 95 mph (Minor damage)","Category 2: Winds 96 to 110 mph (Extensive damage -- Can uproot trees and break windows)","Category 3: Winds 111 to 129 mph (Devastating -- Can break windows and doors)","Category 4: Winds 130 to 156 mph (Catastrophic damage -- Can tear off roofs)","Category 5: Winds 157 mph or higher (The absolute worst and can level houses and destroy buildings)"]},{cardHeadline:"What fuels hurricanes?",content:"img/dorian.jpg",caption:"Hurricane Dorian damage to the Abacos, Bahamas, September 5, 2019. Credit: CNN",questionId:1,choices:[{choiceText:"Winds traveling at 74 mph or greater",isTrue:!1},{choiceText:"Warm water, damp air and wind",isTrue:!0},{choiceText:"Tornadoes and waterspouts in warm water",isTrue:!1},{choiceText:"Hot air rising into clouds during thunderstorms",isTrue:!1}]},{cardHeadline:"The World Meteorological Organization produces the list of hurricane names on a year rotation?",content:"img/hurricanepacific.jpg",questionId:2,caption:"Credit: CNN",choices:[{choiceText:"10",isTrue:!1},{choiceText:"5",isTrue:!1},{choiceText:"6",isTrue:!0},{choiceText:"3",isTrue:!1}]},{cardHeadline:"Which measurement categorizes hurricanes based on wind speed?",content:"img/hurricaneye.gif",questionId:3,caption:"Inside the eye of a hurricane. Credit: Nick Underwood/NOAA",choices:[{choiceText:"Campbell Stokes Recorder",isTrue:!1},{choiceText:"Saffir-Simpson Scale",isTrue:!0},{choiceText:"Barometric Scale",isTrue:!1},{choiceText:"Fujita Scale",isTrue:!1}]},{cardHeadline:"Hurricanes, tropical cyclones, and typhoons are the same type of storm system?",content:"img/eye2.jpg",questionId:4,caption:"Hurricane Hector was pictured by an Expedition 56 crew member at the International Space Station in 2018. Credit: NASA",choices:[{choiceText:"True",isTrue:!0},{choiceText:"False",isTrue:!1}]},{cardHeadline:"A tropical cyclone with maximum sustained winds between 39 and 73 mph is called a ___?",content:"img/issana.jpg",questionId:5,caption:"Tropical Storm Ana as viewed from the International Space Station in May 2021.",choices:[{choiceText:"Tropical depression",isTrue:!1},{choiceText:"Subtropical cyclone",isTrue:!1},{choiceText:"Tropical disturbance",isTrue:!1},{choiceText:"Tropical storm",isTrue:!0}]},{cardHeadline:"Congratulations!",content:"img/khalid.gif",finalMessage:"You've made it to the end."}]),h=a(0),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:l,count:0,score:0,correctButton:"green",incorrectButton:"red",answerChoice:" ",answerColor:" ",correctChoice:["Quite the whiz.","You did it!","Tremendous.","Genius","That is right!"],incorrectChoice:["Not quite there.","Maybe next time","Almost but not quite","Not the answer."]},e.keepScore=function(t){var a=document.querySelectorAll(".quizButtons");console.log(t.target),"true"===t.target.getAttribute("data-button")?(e.setState({score:e.state.score+=1}),e.setState({answerColor:"green"}),e.setState({answerChoice:e.state.correctChoice[Math.floor(3*Math.random())]})):(e.setState({answerChoice:e.state.incorrectChoice[Math.floor(3*Math.random())]}),e.setState({answerColor:"red"})),a.forEach((function(t){"true"===t.getAttribute("data-button")?t.style.backgroundColor=e.state.correctButton:t.style.backgroundColor=e.state.incorrectButton}))},e.removeButtonStyling=function(){console.log(e.state.count);var t=document.querySelectorAll(".quizButtons");e.setState({count:e.state.count+=1}),e.setState({answerColor:" "}),e.setState({answerChoice:" "}),t.forEach((function(e){e.style.backgroundColor="white"})),e.state.count>11&&e.setState({count:0})},e.resetQuiz=function(){e.setState({count:6}),e.setState({score:0})},e.introDiv=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"introImage",src:e.state.data[e.state.count].content}),Object(h.jsxs)("div",{className:"introDiv",children:[Object(h.jsx)("h3",{children:e.state.data[e.state.count].cardTitle}),Object(h.jsx)("p",{className:"graphicCredit",children:e.state.data[e.state.count].caption}),Object(h.jsx)("div",{className:"buttonDiv",children:e.buttonDiv()})]})]})},e.slideDiv=function(){return e.state.data[e.state.count].hurricaneCategories?Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"slideImage",src:e.state.data[e.state.count].content}),Object(h.jsx)("p",{className:"cardCaption",children:e.state.data[e.state.count].caption}),Object(h.jsx)("h4",{className:"cardHeadline",children:e.state.data[e.state.count].cardHeadline}),Object(h.jsx)("ul",{className:"hurricaneCategories",children:e.state.data[e.state.count].hurricaneCategories.map((function(e){return Object(h.jsx)("li",{children:e})}))}),Object(h.jsx)("div",{className:"buttonDiv",children:e.buttonDiv()})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"slideImage",src:e.state.data[e.state.count].content}),Object(h.jsx)("p",{className:"cardCaption",children:e.state.data[e.state.count].caption}),Object(h.jsx)("h4",{className:"cardHeadline",children:e.state.data[e.state.count].cardHeadline}),Object(h.jsx)("p",{className:"cardDescription",children:e.state.data[e.state.count].description}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{className:"buttonDiv",children:e.buttonDiv()})]})},e.buttonDiv=function(){return 0===e.state.count?Object(h.jsx)("button",{className:"introButton",onClick:e.nextButton,children:"Click to learn more"}):1===e.state.count?Object(h.jsx)(i.a.Fragment,{children:Object(h.jsx)("button",{className:"nextButton",onClick:e.nextButton,children:e.state.data[e.state.count+1].cardHeadline})}):5===e.state.count?Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)("button",{className:"nextButton",onClick:e.nextButton,children:"Ready for a quiz?"}),Object(h.jsx)("button",{className:"previousButton",onClick:e.previousButton,children:"\u2190 PREVIOUS SLIDE"})]}):e.state.count>1&&e.state.count<5?Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)("button",{className:"nextButton",onClick:e.nextButton,children:e.state.data[e.state.count+1].cardHeadline}),Object(h.jsx)("button",{className:"previousButton",onClick:e.previousButton,children:"\u2190 PREVIOUS SLIDE"})]}):e.state.count>=6&&e.state.count<=10?Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsxs)("p",{className:"questionCounter",children:["Question ",e.state.data[e.state.count].questionId," of 5"]}),Object(h.jsxs)("p",{className:"answerChoice",style:{color:e.state.answerColor},children:[" ",e.state.answerChoice]}),Object(h.jsxs)("div",{className:"quizButtonGroup",children:[console.log(e.state.data[e.state.count].choices.map((function(e){return e.choiceText}))),e.state.data[e.state.count].choices.map((function(t){return Object(h.jsx)("button",{className:"quizButtons",onClick:function(t){return e.keepScore(t)},"data-button":t.isTrue,children:t.choiceText})}))]}),Object(h.jsx)("div",{className:"quizNavigation",children:Object(h.jsx)("button",{onClick:e.removeButtonStyling,children:"Next"})})]}):e.state.count>10?Object(h.jsxs)(i.a.Fragment,{children:[Object(h.jsx)("p",{children:e.state.data[e.state.count].finalMessage}),Object(h.jsxs)("p",{children:["Your score is ",e.state.score," out of 5 questions."]}),Object(h.jsxs)("div",{className:"finalButtonDiv",children:[Object(h.jsx)("button",{onClick:e.removeButtonStyling,children:"Restart Explainer"}),Object(h.jsx)("button",{onClick:e.resetQuiz,children:"Restart Quiz"})]})]}):void 0},e.nextButton=function(){e.setState({count:e.state.count+=1}),e.state.count>11&&e.setState({count:0})},e.previousButton=function(){e.setState({count:e.state.count-=1})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card_content",children:0===this.state.count?this.introDiv():this.slideDiv()})})}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(m,{})})}}]),a}(n.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.3007bf2d.chunk.js.map