import React from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const NewThread = () => {
  const NewThread = {
    textAlign: "center",
    paddingTop: "40px",
  };

  return (
    <>
      <Header />
      <div style={NewThread}>
        <h1>スレッド新規作成</h1>
        <textarea name="NewThread" id="" cols="30" rows="10"></textarea>
        <br />
        <button>投稿する</button>
        <Link to="/">
          <button>戻る</button>
        </Link>
      </div>
    </>
  );
};
