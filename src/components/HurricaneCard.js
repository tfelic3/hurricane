import React, { Component } from 'react'
import CardStyling from './CardStyling.css';
import cardData from '../data/cardData';

export class HurricaneCard extends Component {


    state={
        data: cardData,
        count: 0,
        score: 0,
        correctButton: "green",
        incorrectButton: "red",
        answerChoice:" ", 
        answerColor: " ",
        correctChoice: ["Quite the whiz.", "You did it!", "Tremendous.","Genius","That is right!"],
        incorrectChoice: ["Not quite there.", "Maybe next time", "Almost but not quite","Not the answer."]
    }

    keepScore= (e) =>{
       let quizButtons = document.querySelectorAll('.quizButtons');
 console.log(e.target);  
 if(e.target.getAttribute("data-button")==="true"){
    this.setState({score: this.state.score+=1})
    this.setState({answerColor: "green"});
    this.setState({answerChoice: this.state.correctChoice[Math.floor(Math.random() * 3)]})
 }   else{
    this.setState({answerChoice: this.state.incorrectChoice[Math.floor(Math.random() * 3)]})
    this.setState({answerColor: "red"});
 }
       
       quizButtons.forEach(button=>{
          if(button.getAttribute("data-button")==="true"){
              button.style.backgroundColor= this.state.correctButton;
             
          } else{
            button.style.backgroundColor= this.state.incorrectButton;
            
          }
       })
    }


    removeButtonStyling = () => {
        console.log(this.state.count)
        let quizButtons = document.querySelectorAll('.quizButtons');
       this.setState({count: this.state.count+=1})
       this.setState({answerColor: " "});
       this.setState({answerChoice: " "})
    
       quizButtons.forEach(button=>{
          button.style.backgroundColor = "white";
    })

    if(this.state.count>11){
        this.setState({count: 0})
    }
}

resetQuiz = () =>{
    this.setState({count: 6})
    this.setState({score: 0})
}

introDiv = () =>{
return <div>
<img className ="introImage" src={this.state.data[this.state.count].content}/>
<div className="introDiv">
<h3>{this.state.data[this.state.count].cardTitle}</h3>  
<p className="graphicCredit">{this.state.data[this.state.count].caption}</p>
<div className="buttonDiv">
    {this.buttonDiv()}
</div>
</div>
</div>    
}

slideDiv =()=>{

    if(this.state.data[this.state.count].hurricaneCategories){
        return <div>

        <img className="slideImage" src={this.state.data[this.state.count].content}/>
        
        <p className="cardCaption">{this.state.data[this.state.count].caption}</p>
        <h4 className="cardHeadline">{this.state.data[this.state.count].cardHeadline}</h4>
      <ul className="hurricaneCategories">
          {this.state.data[this.state.count].hurricaneCategories.map(category=><li>{category}</li>)}
      </ul>
        
      <div className="buttonDiv">
          {this.buttonDiv()}
      </div>
      
    </div>
    } else {
    return <div>

        <img className="slideImage" src={this.state.data[this.state.count].content}/>
        
        <p className="cardCaption">{this.state.data[this.state.count].caption}</p>
        <h4 className="cardHeadline">{this.state.data[this.state.count].cardHeadline}</h4>
        <p className="cardDescription">{this.state.data[this.state.count].description}</p>
        <div>
        </div>
      <div className="buttonDiv">
          {this.buttonDiv()}
      </div>
      
    </div>
    }
}


buttonDiv= () =>{


if(this.state.count ===0){
    return <button className="introButton" onClick={this.nextButton}>Click to learn more</button>
} else if(this.state.count ===1){
return <React.Fragment>
    <button className="nextButton" onClick={this.nextButton}>{this.state.data[this.state.count+1].cardHeadline}</button>
    </React.Fragment>
} else if(this.state.count ===5){
    return <React.Fragment>       
    <button className="nextButton" onClick={this.nextButton}>Ready for a quiz?</button>
    <button className="previousButton" onClick={this.previousButton}>← PREVIOUS SLIDE</button>
    </React.Fragment>
}

else if(this.state.count>1 &&this.state.count<5 ){
    return <React.Fragment>       
    <button className="nextButton" onClick={this.nextButton}>{this.state.data[this.state.count+1].cardHeadline}</button>
    <button className="previousButton" onClick={this.previousButton}>← PREVIOUS SLIDE</button>
    </React.Fragment>
} else if(this.state.count>=6 &&this.state.count<=10){
   return <React.Fragment>  
       <p className="questionCounter">Question {this.state.data[this.state.count].questionId} of 5</p>
       <p className="answerChoice" style={{"color":this.state.answerColor}}> {this.state.answerChoice}</p>
   <div className="quizButtonGroup">   
  { console.log(this.state.data[this.state.count].choices.map(choice=>choice.choiceText))}
  {this.state.data[this.state.count].choices.map(choice=><button className="quizButtons" onClick={(e)=>this.keepScore(e)} data-button={choice.isTrue}>{choice.choiceText}</button>)}
  </div> 
  <div className="quizNavigation">
  <button onClick={this.removeButtonStyling}>Next</button>
    </div>
    </React.Fragment>
} else if(this.state.count>10){
    return <React.Fragment>  
      <p>{this.state.data[this.state.count].finalMessage}</p>  
      <p>Your score is {this.state.score} out of 5 questions.</p>  
      <div className="finalButtonDiv">
    <button onClick={this.removeButtonStyling}>Restart Explainer</button>
    <button onClick={this.resetQuiz}>Restart Quiz</button>
    </div>   
    </React.Fragment>
}

}

nextButton = () =>{
    this.setState({count: this.state.count+=1});
    if(this.state.count>11){
        this.setState({count: 0})
    }
   
}

previousButton = () =>{
    this.setState({count: this.state.count-=1})
}



   
    render() {
        return (
            <div className="card">
            <div className="card_content">
              { this.state.count ===0? 
               this.introDiv(): this.slideDiv()}
            </div>

            </div>
        )
    }
}

export default HurricaneCard
