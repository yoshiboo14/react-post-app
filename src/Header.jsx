// ヘッダーコンポーネント
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <h2>React掲示板</h2>
        <ul>
          <li>
            <Link to="/thread/new">
              <button>スレッドを新規作成</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
