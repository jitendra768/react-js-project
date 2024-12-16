import { useState } from "react";
import "./App.css";
import UseRefhooks from "./components/Useref/UseRefhooks";
import Reducer1 from "./components/ReducerHook/Reducer1";
import Reducer2 from "./components/ReducerHook/Reducer2";
import Render1 from "./components/RenderList/Render1";
import Render2 from "./components/RenderList/Render2";
import Recipes from "./components/RenderList/Recipes";
import UseStateHook from "./components/Usestate/UseStateHook";
import { UseMemo } from "./components/UseMemo/UseMemo";
import UseCallBackHook from "./components/UseCallback/UseCallBackHook";
import ContextAPi from "./components/UseContext/ContextApi/ContextAPi";
import UseContextHook from "./components/UseContext/UseContextHook/UseContextHook";
import PropDriling from "./components/PropDrilling/PropDriling";
import CounterApp from "./Redux/CounterApp";
import Counter from "./components/PureComponents/PureCom";
import Spliting from "./components/LazyLoading/Spliting";
import LiftingStateup from "./components/LiftingState/LiftingStateup";
import List from "./MachinRound/HandleChekBox/List";
import ControlCompo from "./components/Controlled&UnControlled/ControlCompo";
import Couter12 from "./components/CustomHook/Couter12";
import PropsComponents from "./components/PropsComponents";

function App() {
  return (
    <>
      {/* <UseRefhooks />
      <hr />
      <Reducer1 />
      <hr />
      <Reducer2 />
      <hr />
      <Render1 />
      <hr />
      <Render2/>
      <hr />
      <Recipes/>
      <hr />
      <UseStateHook/>
      <hr />
      <UseMemo/>
      <hr />
      <UseCallBackHook/>
      <hr />
      <ContextAPi/> 
      <hr />
      <UseContextHook/>
      <hr />
      <PropDriling/>
      <hr />
      <CounterApp/>
      <hr />
      <Counter/>
      <hr />
      <Spliting/>
      <hr />
      <LiftingStateup/>
      <hr />
      <List/>*/}
      <hr />
      <ControlCompo/>
      <hr/>
      <Couter12/>
      <PropsComponents/>
    </>
  );
}

export default App;
