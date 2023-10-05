import React from "react";

class ShoppingList extends React.Component {
  // 여기서 render는 렌더링 할 내용을 경량화한 react element를 반환! 아래 return(어쩌구)가 경량화된 react element
  render() {
    return (
      // 여기의 <div>는 빌드하는 시점에서 React.createElement('div')로 JSX로 자동으로 변환되는거임.
      <div className="shopping-list">
        {/* 개별 컴포넌트는 props라는 매개변수를 받아옴. -> render를 통해 뷰 계층 구조 반환. */}
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// 위에 내용은 아래와 같이 변화함. 이거 flutter에서 본 형식이랑 비슷한데?
// children을 써서 아래 놈을 정리하네.
// html은 띄어쓰기로 구별하는데
//     React.createElement('div', {className: 'shopping-list',
//       children: React.createElement('h1', {
//         children: ['Shopping List for', props.name]
//       }), ('ul', {children: ['']})})
