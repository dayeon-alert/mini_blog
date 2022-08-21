import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../ui/Button";

const PostContainer = styled.div`
  position: fixed;
  left: 20%;
  top: 25%;
  width: 60%;
  height: 50%;
  z-index: 1000;
  background: white;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: white;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

export default function Modal(props) {
  const { posts, onClickClose } = props;
  const post = posts.find((item) => {
    return item.id == props.postId;
  });

  const onClickDeletePostHandler = () => {
    axios.delete(`/api/post/delete/${post.id}`);
    onClickClose();
  };
  return (
    <PostContainer>
      <TitleText>{post.title}</TitleText>
      <ContentText>{post.content}</ContentText>
      <Button title="뒤로 가기" onClick={onClickClose} />
      <Button title="삭제하기" onClick={onClickDeletePostHandler} />
    </PostContainer>
  );
}
