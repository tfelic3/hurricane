const cardData =[{
    cardTitle: "What is a hurricane?",
  content: "img/hurricane.gif",
  caption: "Graphic: Tesalon Felicien, CNN",
 
},

{
cardHeadline: "What is a hurricane?",
content: "/img/dorianeye.jpg",
caption: "Hurricane Dorian's eye seen from the International Space Station in 2019. Credit: NASA",
description: "A hurricane falls under the storm category of tropical cyclone, which is a violent, rotating system of organized thunderstorms. Tropical cyclones formed in the Atlantic and Pacific Oceans, Caribbean Sea and Gulf of Mexico are called hurricanes.  In other parts of the world, they are called typhoons. When a tropical cyclone in the Gulf, Caribbean, Atlantic or Pacific reaches sustained winds of 74 mph, it is called a hurricane. They can be massive and produce strong winds that cause flooding and tornadoes."
},

{
  cardHeadline: "How do hurricanes form?",
  content: "img/hurricane-laura.gif",
  caption: "Hurricane Laura began as a tropical wave off the west coast of Africa on August 16, 2020. It made landfall in Louisiana on August 27, 2020. Credit: CNN",
  description: "A hurricane needs warm water, humid air and wind to form. As warm water evaporates, it fuels the storm. Warm ocean air rises into the storm forming an area of low pressure. When air rises and cools it produces clouds and thunderstorms. An eye forms in the center of the storm system as it rotates faster and faster. When winds reach 39 mph, it is categorized as tropical storm. At 74 mph, it categorized as a hurricane."
},

{
  cardHeadline: "When are hurricanes most likely?",
  content: "img/hurricane.jpg",
  caption: "This graphic shows named storm tracks for the 2020 hurricane season. Credit: CNN",
  description: "Hurricanes occur at different frequencies across the globe. In The hurricane season for the Atlantic, Caribbean and Gulf of Mexico runs from June 1 to November 30. The Atlantic hurricane season hits its peak on September 10. The season for the Eastern Pacific runs from May 15 to November 30 and the Central Pacific from June 1 to November 30."
},

{
  cardHeadline: "Why do hurricanes have names?" ,
  content: "img/hurricane-names.png",
  caption: "Some of the names used during the 2020 hurricane season. Credit: NOAA",
description: "Storms have names to streamline communication and avoid confusion. US meteorologists began giving tropical storms and hurricanes female names in 1953. By 1979, names alternated between female and male to identify storms in the Northern Pacific and Atlantic Basins. Now, the World Meteorological Organization produces the list of names on a six-year rotation for hurricanes. Names are retired if a storm is extremely deadly and costly. There have been 93 hurricane names retired since 1954.",
},

{
  cardHeadline: "Hurricane categories" ,
  content: "img/hurricane-categories.gif",
  caption: "The Saffir Simpson Hurricane Wind Scale is used to measure how strong a hurricane is. Credit: CNN",
hurricaneCategories: ["Category 1: Winds 74 to 95 mph (Minor damage)","Category 2: Winds 96 to 110 mph (Extensive damage -- Can uproot trees and break windows)", "Category 3: Winds 111 to 129 mph (Devastating -- Can break windows and doors)", "Category 4: Winds 130 to 156 mph (Catastrophic damage -- Can tear off roofs)","Category 5: Winds 157 mph or higher (The absolute worst and can level houses and destroy buildings)"]
},
{
cardHeadline: "What fuels hurricanes?" ,
  content: "img/dorian.jpg",
  caption: "Hurricane Dorian damage to the Abacos, Bahamas, September 5, 2019. Credit: CNN",
  questionId: 1,
  choices: [{choiceText: "Winds traveling at 74 mph or greater", isTrue: false}, {choiceText:"Warm water, damp air and wind", isTrue: true}, {choiceText: "Tornadoes and waterspouts in warm water", isTrue: false}, {choiceText: "Hot air rising into clouds during thunderstorms", isTrue: false}],
},

{
cardHeadline:"The World Meteorological Organization produces the list of hurricane names on a year rotation?",
content: "img/hurricanepacific.jpg",
questionId: 2,
  caption: "Credit: CNN",
  choices: [{choiceText:"10",isTrue: false}, {choiceText:"5", isTrue: false}, {choiceText:"6", isTrue: true}, {choiceText: "3", isTrue: false}]
},


{
cardHeadline:"Which measurement categorizes hurricanes based on wind speed?",
content: "img/hurricaneye.gif",
questionId:3,
  caption: "Inside the eye of a hurricane. Credit: Nick Underwood/NOAA",
  choices: [{choiceText: "Campbell Stokes Recorder", isTrue: false}, {choiceText: "Saffir-Simpson Scale", isTrue: true}, {choiceText: "Barometric Scale", isTrue: false}, {choiceText: "Fujita Scale", isTrue: false}]
},

{
cardHeadline:"Hurricanes, tropical cyclones, and typhoons are the same type of storm system?",
content: "img/eye2.jpg",
questionId: 4,
  caption: "Hurricane Hector was pictured by an Expedition 56 crew member at the International Space Station in 2018. Credit: NASA",
  choices: [{choiceText:"True", isTrue: true}, {choiceText: "False", isTrue: false}]
},

{
cardHeadline:"A tropical cyclone with maximum sustained winds between 39 and 73 mph is called a ___?",
content: "img/issana.jpg",
questionId: 5,
  caption: "Tropical Storm Ana as viewed from the International Space Station in May 2021.",
  choices: [{choiceText: "Tropical depression", isTrue: false}, {choiceText: "Subtropical cyclone", isTrue: false}, {choiceText: "Tropical disturbance", isTrue: false}, {choiceText:"Tropical storm", isTrue: true}]
},

{
  cardHeadline:"Congratulations!",
  content: "img/khalid.gif",
finalMessage: "You've made it to the end."  
  
  },



]


export default cardData;