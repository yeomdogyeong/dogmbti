import React from 'react';
// css -in-js
import styled from 'styled-components';
// import PangImage from '../assets/startdog.jpg';
import Button from 'react-bootstrap/Button';
import {ResultData} from '../assets/data/resultdata';
import {useSearchParams, useNavigate} from 'react-router-dom';



const Result = () =>  {

    const navigate = useNavigate();
const [searchParams] = useSearchParams();
const mbti = searchParams.get('mbti');
const [resultData, setResultData] = React.useState({});

React.useEffect(()=> {
    const result = ResultData.find((b) => b.best === mbti.toLowerCase());
    setResultData(result);
}, [mbti])


console.log(resultData)

    return (
        <Wrapper>
    <Header>나와 맞는 강아지는 바로!!</Header>
    <Contents>
    <Title>결과보기</Title>
    <LogoImage>
        <img alt="dogpicture"src={resultData.image} className="rounded-circle" width={350} height={350}/>
        <Ddesc>{resultData.desc}</Ddesc>
        </LogoImage>
        
        <Desc>나와 최고의 케미를 자랑하는 강아지는 `{resultData.name}`입니다.</Desc>
        <Button style={{fontFamily: "EF_Diary"}} onClick={()=>navigate("/")}>테스트 다시해보기</Button>
        </Contents>
    </Wrapper>
    )
}

export default Result;

const Wrapper = styled.div `

height:100vh;
width: 100%;
`

const Header = styled.div `
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: "EF_Diary";
`

const Title = styled.div`
 font-size: 30pt;
 margin-top: 40px;
font-family: "EF_Diary";
`

const LogoImage = styled.div `
margin-top: 10px;
margin-left: 10px;
display: flex;
`

const Desc = styled.div `
font-size: 20pt;
margin-top: 30px;
font-family: "EF_Diary";
`

const Contents = styled.div`
display:flex;
justify-content: center;
    align-items:center;
    flex-direction: column;
`

const Ddesc = styled.div `
font-size: 20pt;
margin-top: 30px;
font-family: "EF_Diary";
margin-left : 40px;
border: 5px solid gray;
border-style: none,none,none, dotted;
border-radius: 20px;
`