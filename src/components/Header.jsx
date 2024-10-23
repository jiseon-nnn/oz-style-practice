import styled from "styled-components";
import { flexMixin, fontMixin } from "../styled/styled";

export default function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  ${flexMixin(undefined, 'space-between', 'center')}
  padding: 20px 20px;
  background-color: black;

  ul {
    ${flexMixin(undefined, 'center', 'center', '20px')}
    
    li {
      ${fontMixin()}
      list-style: none;
    }
  }
`