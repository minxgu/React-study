import React from 'react';

// function PropsBox(props) {
//     return <p style={{ color : props.color }}>안녕하세요 {props.name}</p>
// }

// isSpecial의 props 값 설정을 생략하면 ={true}
function PropsBox({ color, name, isSpecial }) {
  return (
    <p style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </p>
  );
}

// 컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 "defaultProps" 라는 값을 설정하면 됩니다.
PropsBox.defaultProps = {
    name: '이름없음'
}

export default PropsBox;