import styled from '@emotion/styled';
import Apple from '../../assets/apple.png';
import React from 'react';
import Delete from '../../assets/delete.svg';

type ImageProps = {
  src: string;
  width: number;
  height: number;
};
const image: ImageProps = new Image();
image.src = Apple;

const dummyArr: any = [image, image];

export const ImgContainer: React.FC = () => {
  const imgSize = (img: ImageProps): Boolean => {
    if (img.width > img.height) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Wrapper>
      {dummyArr.map((element: any, index: any) => {
        return (
          <ImgBox key={index}>
            <Cover>
              <img src={Delete} />
            </Cover>
            <img
              src={element.src}
              width={imgSize(element) ? undefined : 250}
              height={imgSize(element) ? 100 : undefined}
            />
          </ImgBox>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 668px;
  height: 106px;
  margin-top: 24px;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  gap: 20px;
  ::-webkit-scrollbar {
    height: 6px;
  }
`;

const ImgBox = styled.div`
  width: 250px;
  height: 100px;
  flex: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100px;
  background-color: black;
  opacity: 0;
  transition: 0.1s linear;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;
