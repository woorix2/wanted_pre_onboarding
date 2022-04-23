
# wanted_pre_onboarding
원티드 프리온보딩 프론트엔드 코스의 선발을 위한 수행 과제가 담겨있습니다.
ReactJS로 작업했습니다.

## 1. Toggle.js
---
<img width="100%" src="https://user-images.githubusercontent.com/90023273/164741110-d690d911-11b4-44b1-9905-b59f9fd140aa.gif"/>

<br />

* 구현 방법: <br />
input, label 태그로 마크업을 하고 두 태그를 id, htmlFor를 같은 값을 주고 연결하여, 라벨을 클릭해도 체크박스가 체크되게 했습니다. 체크박스를 보이지 않게하고 label을 scss로 디자인했습니다.
<br />
애니메이션 효과를 줄 태그를 styled-component로 만들었습니다. 클릭되는 label에 따라 움직여야 하기 때문에 useState로 value값을 담아 상태를 관리했습니다. onClick 함수로 label의 htmlFor를 담았습니다.
<br />
* 아쉬운 점: <br />
레퍼런스를 보면 흰색의 애니메이션이 '기본' 위치에서 시작하는데 제가 구현한 컴포넌트는 '상세'위치에 있다가 '기본'으로 위치가 변경됩니다.

* 알게된 것: <br />
scss만 써보다가, 해당 컴포넌트를 구현하면서 styled-component를 다뤄보게 됐습니다. 조건 분기에 따라 style 작업을 다르게 구현할 수 있는 점에서 편하다고 느꼈습니다.