import styled from "styled-components";
import { flexMixin, fontMixin, gray, tag_color } from "../styled/styled";

export default function Content({ content }) {
  return (
    <StyledDiv>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  ${flexMixin('column', undefined, 'flex-start', '5px')}

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    ${fontMixin('12px')}
    color: ${tag_color};
    border: 1px solid ${tag_color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  
  div {
    ${fontMixin('18px', '600')}
  }

  p {
    ${fontMixin('12px')}
    color: ${gray};
  }

`



  