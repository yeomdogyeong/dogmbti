/* eslint-disable */

import React from 'react';
import Button from 'react-bootstrap/Button';

// const {Kakao} = window;

// const KakaoShareButton = ({data}) => {
//   const url = "https://dogmbti1031.netlify.app/"
//   const resultUrl = window.location.href;

//   React.useEffect(()=>{
//    Kakao.cleanup();
//     Kakao.init("ce61f081dab469cd15196f1aaba73ae2")
//     // console.log(Kakao.isInitialized());
//   } , [] );

const KakaoShareButton = () => {
 
  const url = "https://dogmbti1031.netlify.app/"
    const resultUrl = window.location.href;
  
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!Kakao.isInitialized()){
      kakao.init("ce61f081dab469cd15196f1aaba73ae2");
    }
  }


  
  const shareKakao = () => {

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '짝궁 강쥐 판별기🐶',
      description: '최고의 친구를 찾아보자🐶🐕🐩🦮🐕‍🦺',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733__340.jpg',
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    
    buttons: [
      {
        title: '테스트 하러가기',
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
    };
    
    


export default KakaoShareButton;