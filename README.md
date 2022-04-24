
# wanted_pre_onboarding
원티드 프리온보딩 프론트엔드 코스의 선발을 위한 수행 과제가 담겨있습니다.
ReactJS로 작업했습니다.

## 1. Toggle.js
---
<img width="100%" src="https://user-images.githubusercontent.com/90023273/164741110-d690d911-11b4-44b1-9905-b59f9fd140aa.gif"/>

<br />

* 구현 방법: <br />
input, label 태그로 마크업을 하고 두 태그를 id, htmlFor를 같은 값을 주고 연결하여, 라벨을 클릭해도 체크박스가 체크되게 했습니다. 체크박스를 보이지 않게 하고 label을 scss로 디자인했습니다. <br />
애니메이션 효과를 줄 태그를 styled-component로 만들었습니다. 클릭되는 label에 따라 움직여야 하기 때문에 useState로 value 값을 담아 상태를 관리했습니다. onClick 이벤트로 label의 htmlFor를 담았습니다.

* 아쉬운 점: <br />
레퍼런스를 보면 흰색의 애니메이션이 '기본' 위치에서 시작하는데 제가 구현한 컴포넌트는 '상세'위치에 있다가 '기본'으로 위치가 변경됩니다.

* 알게된 것: <br />
scss만 써보다가, 해당 컴포넌트를 구현하면서 styled-component를 다뤄보게 됐습니다. 조건 분기에 따라 style 작업을 다르게 구현할 수 있는 점에서 편하다고 느꼈습니다.

<br />

## 2. Tab.js
---
<img width="100%" src="https://user-images.githubusercontent.com/90023273/164741118-28ccf515-6925-447a-a488-24229110bd8d.gif"/>

<br />

* 구현 방법: <br />
a 태그로 각 탭을 구현했습니다. 밑줄 효과는 styled-component를 사용했습니다. 
각 탭의 position을 absolute로 설정한 후, onClick 이벤트로 각 탭의 offsetLeft, offsetWidth 등을 구한 뒤, 이것을 top, left 값으로 설정했습니다. <br /> 특히 top 값을 구할때는 a 태그의 부모요소인 div의 height를 구할 목적으로 useRef를 써서 부모 요소를 참조했습니다. <br />
글자색 효과는, 클래스네임을 삼항연산자로 클릭된 상태를 분기로 줘서 클래스네임을 다르게 적용시켜 구현했습니다.  useState와 useRef를 사용하여 상태를 관리했습니다.

* 아쉬운 점: <br />
transition을 적용시키지 못했습니다. transition 라이브러리가 따로 있는 것으로 알고 있지만, 해당 컴포넌트에서는 적용하지 않았습니다.

* 알게된 것: <br />
a 태그는 페이지를 이동할 때 새로고침하기 때문에, App이 가지고 있던 상태들을 모두 날려버립니다. 따라서 App은 그대로 유지한 상태에서 페이지의 주소만 변경해 주는 Link 컴포넌트를 사용하는 것이 좋습니다.

## 3. Slider.js
---
<img width="100%" src="https://user-images.githubusercontent.com/90023273/164741124-6827c38c-23c8-4e7d-8eb1-23d939e17fe3.gif"/>

<br />

* 구현 방법: <br />
input(type: range, text) 태그, ul, li 태그(퍼센티지)로 구현했습니다. range의 밸류 값을 onClick 이벤트로 가져와 state 설정한 후에 text의 밸류 값으로 전달했습니다. 각 퍼센티지 탭을 클릭했을 때도, 각 숫자로 설정한 id를 밸류 값으로 가져와 전달합니다.

* 아쉬운 점: 레퍼런스와 같이 진행 바의 특정 위치마다 정해진 원형을 구현하지 못했습니다. input range 자체의 디자인을 커스텀 할 수 있는지 궁금합니다. <br />


* 알게된 것: 개념으로만 알고 있던 input type='range'를 다뤄봤습니다. 해당 컴포넌트와 같은 프로그레스 바를 만들 때 유용할 듯 합니다.<br />

## 4. Input.js
---
<img width="100%" src="https://user-images.githubusercontent.com/90023273/164741130-656a5f5c-af8b-42fd-9501-33faea74f00e.gif"/>

<br />

* 구현 방법: <br />
input 태그와 label 태그를 사용했고, 삼항연산자로 입력한 이메일이 유효하지 않을 시 p 태그로 안내 문장이 뜨게 구현했습니다. 이메일 유효성 검사는 정규표현식을 이용했습니다. <br /> useState로 입력인 이메일 값, 그것에 유효성 검사를 한 결과 값과, 비밀번호 창의 '눈모양'아이콘을 클릭 상태를 관리했습니다. 또 useEffect를 이용해 현재 state에 이메일 값을 담을 때, 한 글자씩 늦게 적용되는 것을 바로잡았습니다. <br /> react-icons 라이브러리를 사용해 체크박스 아이콘과 눈모양 아이콘을 삽입했습니다.

* 아쉬운 점: <br />
onBlur 이벤트를 사용해, 이메일 창에서 포커스 아웃됐을 때, 체크박스의 변화와 유효성 안내 문장이 등장합니다. 체크박스와 안내 문장 두 가지를 다르게 컨트롤하는 방법을 찾지 못했습니다.
  <br />


* 알게된 것: 제이쿼리로 입력 정보에 대한 유효성검사를 구현 한 적은 있지만, 이번 컴포넌트 구현을 계기로 리액트에서도 구현을 해보았고, 아이콘까지 사용하여 사용자 친화적인 UI를 만들 수 있었습니다. <br />

## 5. Dropdown.js
---
<img width="100%" src="https://user-images.githubusercontent.com/90023273/164957624-385938b7-9412-4ca0-b7c2-2ade583ad621.gif"/>

<br />

* 구현 방법: <br />
선택된 옵션 값이 보일 요소는 input태그, 드롭다운은 ul과 li 태그로 구현 했고, ul 태그 안에 검색창 역할을 할 input 태그를 추가했습니다. <br /> 메인 input 창을 클릭했을 때, 보여지는 드롭다운효과는 state에 true, false 상태에 따라 클래스네임을 다르게 주는 것으로 구현했습니다. <br /> 각 input의 밸류와 옵션의 밸류를 state로 관리, useEffect로 업데이트 후의 state에 접근했습니다. useRef를 써서, ul을 참조했고, 검색 키워드에 따라 옵션이 보이게 코드에 활용했습니다.

* 아쉬운 점: <br />
처음에 검색 필터 기능이 있는 datalist 태그의 사용을 고민했지만, 드롭다운 내 검색 필터창 구현이 어려워 ul, li태그를 사용했습니다.
  <br />


* 알게된 것: 개념으로만 알고 있던 datalist에 대해 더 알게 됐습니다. 상품 주문, 회원가입 등 어떠한 정보를 입력받아야 할 때 사용하면 유용할 듯합니다. <br />

