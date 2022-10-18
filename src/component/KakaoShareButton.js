/* eslint-disable */

import React from 'react';
import Button from 'react-bootstrap/Button';

const {Kakao} = window;

const KakaoShareButton = () => {
  const url = "https://dogmbti1031.netlify.app/"
  const resultUrl = window.location.href;

  React.useEffect(()=>{
    Kakao.cleanup();
    Kakao.init("ce61f081dab469cd15196f1aaba73ae2")
    console.log(Kakao.isInitialized());
  } , [] );
  

  
  const shareKakao = () => {

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '나와 어울리는 강아지',
      description: '최고의 친구를 찾아보자',
      imageUrl:
        'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    
    buttons: [
      {
        title: '나도 테스트 하러가기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: "https://dogmbti1031.netlify.app/",
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
  
    return(
      
      <Button onClick={shareKakao} style={{fontFamily: "EF_Diary", width:170, marginLeft: '20px',backgroundColor:'#ffd400'}}>카카오톡 공유하기</Button>
      
      )
  
}
}


export default KakaoShareButton;