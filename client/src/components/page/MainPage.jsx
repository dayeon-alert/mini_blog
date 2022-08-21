import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { Wrapper, Container } from "../styles/styles";
import axios from "axios";

function MainPage() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(0);

  useEffect(() => {
    axios
      .get("/api/main") //
      .then((response) => {
        var postList = response.data;
        var jsonString = JSON.stringify(postList);
        var json = JSON.parse(jsonString);
        setData(json);
      });
  }, [modal]);

  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            setModal(item.id);
          }}
        />
        {modal !== 0 ? (
          <Modal
            posts={data}
            postId={modal}
            onClickClose={() => {
              setModal(0);
            }}
          />
        ) : null}
      </Container>
    </Wrapper>
  );
}

export default MainPage;
