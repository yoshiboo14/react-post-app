import React from "react";
import { useState } from "react";
import { Header } from "./Header";

// バックエンドapiの取得
export const ThreadApi = () => {
  const ThreadTitle = {
    textAlign: "center",
    marginTop: "100px",
  };
  const Threads = {
    textAlign: "center",
    marginTop: "80px",
  };

  const Thread = {
    fontSize: "25px",
    marginTop: "20px",
  };

  const [threads, setThreads] = useState([]);

  fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
    .then((res) => res.json())
    .then((res2) => setThreads(res2));
  // .then((res2) => console.log(res2));

  return (
    <>
      <Header />
      <div>
        <h1 style={ThreadTitle}>スレッドの一覧画面を表示</h1>
        <ul style={Threads}>
          {threads.map((thread) => {
            return (
              <li style={Thread} key={thread.id}>
                {thread.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
