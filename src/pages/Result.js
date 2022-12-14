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
    <Header>πμ§κΆκ°μ₯ νλ³κΈ°π©</Header>
    <Contents>
    <Desc>λμ μ΅κ³ μ μΌλ―Έλ₯Ό μλνλ κ°μμ§λ {resultData.best}ν κ°μμ§ <AS>`{resultData.name}`</AS>μλλ€.</Desc>
    <LogoImage>
        <img alt="dogpicture"src={resultData.image} className="rounded-circle" width={350} height={350} />
        
        </LogoImage>
        <Bposition>
        <Button style={{fontFamily: "EF_Diary"}} onClick={()=>navigate("/")}>νμ€νΈ λ€μν΄λ³΄κΈ°</Button>
        <KakaoShareButton />
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
    font-size: 30pt;
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
text-align: center;

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

const AS = styled.div`
color : tomato;
white-space:nowrap;
`