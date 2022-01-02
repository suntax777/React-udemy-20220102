import React, { useState } from "react";
import ColorulMessage from "./components/ColofulMessage";

const App = () => {
  const onClickCountUp = () => {
    //下記、関数名を使用する
    setNum(num + 1);
  };
  //引数は。[変数名, 関数名]にする
  //stateは動的な値を更新する場合に使用する
  const [num, setNum] = useState(0);
  //()かっこ内は初期値
  const [] = useState(true);
  return (
    <>
      {/*外側の{}は、javascriptであることを表し、内側の{}はjavascriptの関数を書く際の{}*/}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorulMessage color="blue" size="36px" message="お元気ですか？" />
      <ColorulMessage color="pink" size="36px" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button>on/off</button>
      <p>{num}</p>
      <p>(^o^)</p>
    </>
  );
};

export default App;
