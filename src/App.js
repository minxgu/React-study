import React from 'react';
import Wrapper from './components/Wrapper';
import Hello from './components/Hello';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import './components/common.css';


function App() {
  const name = 'react';
  
  const style = {
    backgroundColor: 'black',  // - 로 구분되어 있는 이름들은 backgroundColor 처럼 camelCase 형태로 작성
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <Wrapper> 
      <Hello />
      
      <div style={style}>{name}</div>
      <div className="gray-box"></div>

      <Counter />

      <InputSample />
      {/* 주석은 화면에 보이지 않습니다 */}
    </Wrapper>
  );
}

export default App;