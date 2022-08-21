import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { Wrapper, Container } from "../styles/styles";
import axios from "axios";

function PostWritePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onClickHandler = () => {
    let dataToSubmit = {
      param: {
        id: Date.now(),
        title: title,
        content: content,
      },
    };
    axios.post("/api/post/write", dataToSubmit);
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <TextInput
          height={480}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button title="글 작성하기" onClick={onClickHandler} />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
