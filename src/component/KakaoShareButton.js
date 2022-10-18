/* eslint-disable */

import React from 'react';
import Button from 'react-bootstrap/Button';

const {Kakao} = window;

const KakaoShareButton = ({data}) => {
  const url = "https://dogmbti1031.netlify.app/"
  const resultUrl = window.location.href;

  React.useEffect(()=>{
    Kakao.cleanup();
    Kakao.init("ce61f081dab469cd15196f1aaba73ae2")
    // console.log(Kakao.isInitialized());
  } , [] );
  

  
  const shareKakao = () => {

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나와 어울리는 강아지',
      description: '최고의 친구를 찾아보자',
      imageUrl:
        url+data.image,
      link: {
        mobileWebUrl: resultUrl,
        webUrl: resultUrl,
      },
    },
    
    buttons: [
      {
        title: '나도 테스트 하러가기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
};
  
    return(
      
      <Button onClick={shareKakao} style={{fontFamily: "EF_Diary", width:170, marginLeft: '20px',backgroundColor:'#ffd400'}}>카카오톡 공유하기</Button>
      
      )
  
}



export default KakaoShareButton;