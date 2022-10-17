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
    <Title>나에게 맞는 주인님은?</Title>
    <LogoImage>
        <img src={PangImage} className="rounded-circle" width={350} height={350}/>
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