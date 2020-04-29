import React, { useRef, useReducer, useEffect } from "react";
import { ElementTab } from "../Components/ElementTab.js";
import "../Styles/tabs.less";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, option: action.value };
    case "delete":
      return { count: 0 };
  }
}
const List = ["One", "Two", "Three", "Four"];
export const Exercise4 = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, option: 0 });
  const tabRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      tabRef.current.contains(event.target)
        ? null
        : dispatch({ type: "delete" });
    });
  });

  const Text = () => {
    switch (state.option) {
      case 0:
        return "Tab One";
      case 1:
        return "Tab Two";
      case 2:
        return "Tab Three";
      case 3:
        return "Tab Four";
      default:
        return "Não selecionaste nenhuma das tabs";
    }
  };

  return (
    <div id="container">
      <h1>Exercicio Tabs</h1>
      <ElementTab
        callback={(key) => dispatch({ type: "increment", value: key })}
        items={List}
        selectedOption={state.option}
        forwardRef={tabRef}
      />
      <span id="counter">Clicaste {state.count} vezes</span>

      <span id="text">
        <Text />
      </span>
    </div>
  );
};
