import React from 'react';
// css -in-js
import styled from 'styled-components';
// import PangImage from '../assets/startdog.jpg';
import Button from 'react-bootstrap/Button';
import {ResultData} from '../assets/data/resultdata';
import {useSearchParams, useNavigate} from 'react-router-dom';
import KakaoShareButton from '../component/KakaoShareButton';



const Result = () =>  {

    const navigate = useNavigate();
const [searchParams] = useSearchParams();
const mbti = searchParams.get('mbti');
const [resultData, setResultData] = React.useState({});

React.useEffect(()=> {
    const result = ResultData.find((b) => b.best === mbti.toLowerCase());
    setResultData(result);
}, [mbti])


// console.log(resultData)

    return (
        <Wrapper>
    <Header>나와 맞는 강아지는 바로!!</Header>
    <Contents>
    <Desc>나와 최고의 케미를 자랑하는 강아지는 `{resultData.name}`입니다.</Desc>
    <LogoImage>
        <img alt="dogpicture"src={resultData.image} className="rounded-circle" width={350} height={350} />
        
        </LogoImage>
        <Bposition>
        <Button style={{fontFamily: "EF_Diary"}} onClick={()=>navigate("/")}>테스트 다시해보기</Button>
        <KakaoShareButton data={ResultData}/>
        </Bposition>
        
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



const LogoImage = styled.div `
margin-top: 50px;

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



const Bposition = styled.div `
margin-top : 50px;
display: flex;
flex-direction : row;
`