import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';

import './Portfolio.css';

const empDirSC = require('../components/assets/EmployeeDirectorySC.PNG');
const progBudgSC = require('../components/assets/ProgressiveBudgetSC.PNG');
const fitnTrkSC = require('../components/assets/FitnessTrackerSC.PNG');
const notTakSC = require('../components/assets/NoteTakerSC.PNG');
const weathDashSC = require('../components/assets/WeatherDashSC.PNG');
const codeQuizSC = require('../components/assets/CodeQuiz.PNG');
const cookSC = require('../components/assets/CookSC.PNG');
const clkPlay = require('../components/assets/ClickPlaySC.PNG');

function Portfolio() {
  
  let cards = [];
  let cardRow = [];
  let numRows = parseInt(projectList.length) / parseInt(4);
  let remainder = parseInt(projectList.length) % 4;

  for(let i = 0; i < numRows; i++)
  {
    for(let j = 0; j < 4; j++)
    {
      cards.push(
        <Col xs={'auto'} key={(i * 4) + j} id="cardcol">
          <ProjectCard
            name={projectList[(i * 4) + j].name}
            live={projectList[(i * 4) + j].live}
            gh={projectList[(i * 4) + j].gh}
            summary={projectList[(i * 4) + j].summary}
            img={projectList[(i * 4) + j].img}
          />
        </Col>
      )
    }
    cardRow.push(<Row key={i} id='cardRow'>{cards}</Row>)
    cards = [];
    //console.log(cards);
  }

  if(remainder > 0) {
    let start = numRows * 4;
    for(let i = 0; i < remainder; i++) {
      cards.push(
        <Col md={'auto'}>
          <ProjectCard
            key={start + i}
            name={projectList[start + i].name}
            live={projectList[start + i].live}
            gh={projectList[start + i].gh}
            summary={projectList[start + i].summary}
            img={projectList[start + i].img}
          />
        </Col>
      )
    }
    cardRow.push(<Row>{cards}</Row>)
    cards = [];
  }
  
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Jumbotron>
            <h1>My Works</h1>
          </Jumbotron>
        </Col>
      </Row>

      {cardRow}

    </div>
  );
  
}

export default Portfolio;

const projectList = [
  {
    name: "User Directory",
    live: "https://stormy-springs-61656.herokuapp.com/",
    gh: "https://github.com/asmith8494/User-Directory",
    img: empDirSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Progressive Budget",
    live: "https://warm-escarpment-65874.herokuapp.com/",
    gh: "https://github.com/asmith8494/Progressive-Budget",
    img: progBudgSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Fitness Tracker",
    live: "https://damp-taiga-45645.herokuapp.com/",
    gh: "https://github.com/asmith8494/Fitness-Tracker",
    img: fitnTrkSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Note Taker",
    live: "https://glacial-shore-06112.herokuapp.com/",
    gh: "https://github.com/asmith8494/The-Note-Taker",
    img: notTakSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Weather dashboard",
    live: "https://asmith8494.github.io/WeatherDashboard/",
    gh: "https://github.com/asmith8494/WeatherDashboard",
    img: weathDashSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Code Quiz",
    live: "https://asmith8494.github.io/JavaScript-Quiz/",
    gh: "https://github.com/asmith8494/JavaScript-Quiz",
    img: codeQuizSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Project 2: Click Play",
    live: "https://frozen-earth-61825.herokuapp.com/",
    gh: "https://github.com/bunsanphe/Project-2",
    img: clkPlay,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
  {
    name: "Project 1: Cook What You Have",
    live: "https://haphan64.github.io/CookWhatYouHave/",
    gh: "https://github.com/haphan64/CookWhatYouHave",
    img: cookSC,
    summary: "This homeowrk assignment was to develop React skills such as working with components, component props, and utility modules. The React functionality makes sorting and filtering the auto generated employee data very smooth."
  },
]

/*

User Directory
https://stormy-springs-61656.herokuapp.com/
https://github.com/asmith8494/User-Directory

Progressive Budget
https://github.com/asmith8494/Progressive-Budget
https://warm-escarpment-65874.herokuapp.com/

Fitness Tracker
https://damp-taiga-45645.herokuapp.com/
https://github.com/asmith8494/Fitness-Tracker

Note Taker
https://github.com/asmith8494/The-Note-Taker
https://glacial-shore-06112.herokuapp.com/

Weather dashboard
https://asmith8494.github.io/WeatherDashboard/
https://github.com/asmith8494/WeatherDashboard

Code Quiz
https://asmith8494.github.io/JavaScript-Quiz/
https://github.com/asmith8494/JavaScript-Quiz

Project 2 click play
https://frozen-earth-61825.herokuapp.com/
https://github.com/bunsanphe/Project-2

Project 1 cook what you have
https://github.com/haphan64/CookWhatYouHave
https://haphan64.github.io/CookWhatYouHave/



*/