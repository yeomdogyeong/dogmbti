import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {QuestionData} from '../assets/data/questiondata'
import { useNavigate, createSearchParams } from 'react-router-dom';




const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore] = React.useState([
        {id: "EI", score: 0},
        {id: "SN", score: 0},
        {id: "TF", score: 0},
        {id: "JP", score: 0},
    ])

    const navigate = useNavigate();

    

    const handleClickButtonA = (no, type) => {
       const mango = totalScore.map((a) => 
       a.id === type ? {id: a.id, score: a.score + no} : a);

        setTotalScore(mango);

        console.log('mango', mango)

        if (QuestionData.length !== questionNo + 1) {
            setQuestionNo(questionNo + 1);
        } else {//mango는 mbti결과가 나온 함수
            const mbti = mango.reduce(
                (acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
                ""
            );
            
            navigate({
                pathname: "/result",
                search : `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }

       
    }

    const handleClickButtonB = (no, type) => {
        const mango = totalScore.map((a) => 
        a.id === type ? {id: a.id, score: a.score + no} : a);
 
         setTotalScore(mango);
 
         if (QuestionData.length !== questionNo + 1) {
            setQuestionNo(questionNo + 1);
        } else {
            const mbti = mango.reduce(
                (acc, curr) =>
                acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
                ""
            );  
            navigate({
                pathname: "/result",
                search : `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }
     }
  
    
    return (
    <Wrapper>
              <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} style={{marginTop: '20px'}}/>
              <Title>{QuestionData[questionNo].title}</Title>
              <ButtonGroup>
              <Button onClick={()=>handleClickButtonA(1, QuestionData[questionNo].type)} style={{backgroundColor:'tomato' ,width:'40%' ,minHeight:'200px', fontSize:'15pt'}}>{QuestionData[questionNo].answera}</Button>
              <Button onClick={()=>handleClickButtonB(0,  QuestionData[questionNo].type)} style={{width:'40%' ,minHeight:'200px', fontSize:'15pt', marginLeft:'20px'}}>{QuestionData[questionNo].answerb}</Button>
              </ButtonGroup>
    </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div `

height:100vh;
width: 100%;
`

const Title = styled.div`
 font-size: 20pt;
 margin-top: 40px;
 text-align: center;
font-family: "EF_Diary";
`

const ButtonGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-family: "EF_Diary";
position: fixed; 
  bottom: 0; 
  width: 100%; 
`