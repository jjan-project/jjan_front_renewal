import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Bar = styled.span`
  position: absolute;
  top: 7px;
  left: 2px;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background-color: #dddddd;
  overflow: hidden;
`;

export const Fill = styled.span`
  display: block;
  width: 50%;
  height: 100%;
  background-color: black;
`;

export const Slider = styled.input`
  position: relative;
  width: 100%;
  appearance: none;
  height: 6px;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 3px solid black;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }
`;
