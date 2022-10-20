import React from 'react';
// css -in-js
import styled from 'styled-components';
import PangImage from '../assets/startdog.jpg';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleClickButton = () => {
        //useHistory
        navigate('/question');
    }
    

    return (
        <Wrapper>
    <Header>나와 맞는 강아지 판별기</Header>
    <Contents>
    <Title>💛내 주인님은 누구?🧡</Title>
    <LogoImage>
        <img alt="dogdog"src={PangImage} className="rounded-circle" width={350} height={350}/>
        </LogoImage>
        <Desc>MBTI를 기반으로 나와 맞는 강아지를 찾아보자</Desc>
        <Button style={{fontFamily: "EF_Diary"}} onClick={handleClickButton}>테스트 시작하기</Button>
        </Contents>
    </Wrapper>
    )
}



export default Home;

const Wrapper = styled.div `

height:100vh;
width: 100%;
`

const Header = styled.div `
    font-size: 27pt;
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: "EF_Diary";
    
`

const Title = styled.div`
 font-size: 15pt;
 margin-top: 0px;
font-family: "EF_Diary";
color: gray;
`

const LogoImage = styled.div `
margin-top: 10px;
`

const Desc = styled.div `
font-size: 18pt;
margin-top: 30px;
font-family: "EF_Diary";
text-align: center;
`

const Contents = styled.div`
display:flex;
justify-content: center;
    align-items:center;
    flex-direction: column;
`