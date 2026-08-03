import { Header } from "./layouts/Header/Header";
import { Board } from "./features/Board/Board";
import "./styles/App.scss";

export const App = () => {
  return (
    <>
      <Header />
      <Board />
    </>
  );
};
