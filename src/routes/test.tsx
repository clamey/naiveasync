/***
 * Naivetable Tests
 * MIT License
 * Made with 💙 by @untra
 * ---
 * tslint:disable-next-line: no-implicit-dependencies
 */
import React from "react";
import { NaiveAsync, NaiveAsyncState } from "../naiveasync"


const emojiView = (state: NaiveAsyncState<any,{}> ) => (<p>{
  state.status === 'inflight' ? '💬'
  : state.error ? '💥'
  : state.data ? '✔️'
  : '❌'
} {`${state.data}`} {`${state.status}`} {`${state.error}`} </p>)

// eslint-disable-next-line
const callableView = (state: NaiveAsyncState<any,{}>, call : ({}) => any ) => (<button onClick={call}>{
  state.status === 'inflight' ? '💬'
  : state.error ? '💥'
  : state.data ? '✔️'
  : '❌'
} {`${state.status}`} </button>)

const slowResolve = <T extends any>(val : T) : Promise<T> => new Promise((resolve) => {
  const timeMS = Math.random() * 4000
  setTimeout(() => resolve(val), timeMS)
})

const autoParamsOp = (params: {}) => {
  return Promise.resolve(`✅ with params ${JSON.stringify(params)}`)
}

const autoResolve = (params: {}) => slowResolve('✅')

// Hi friend 👋 thanks for reading my naiveasync tests!
// maybe you're on this github page?

const thisGithubPage =
  "https://github.com/untra/naiveasync/blob/master/src/routes/test.tsx";

// If you are, then I want to know you are a talented and skilled engineer,
// and it would certainly be a pleasure to shake your hand one day,
// and tell you personally _just how cool you are_

// While you're here you may also want to check out that cypress page:
const thatCypressPage = "https://dashboard.cypress.io/#/projects/wrytfx/runs";

// redefine the data fixtures to accomodate prefered typings

// const llanowarData: DataObj[] = llanowarDataJSON;

// const varietyofDataTypesData: DataObj[] = varietyofDataTypesDataJSON;

// const styledHeaders: TableConfigHeader[] = styledHeadersJSON;

// const nameData: DataObj[] = nameDataJSON;

// the secret sauce to display no headers and custom render:
// use css and `dsiplay: none` for the header style
// const mtgHeaders: TableConfigHeader[] = [{
//   label: "",
//   dataKey: "",
//   style: { display: 'none' },
//   render: (val: any) => {
//     const  { local_image, name } = val
//     return (<img width={250} height={345} alt={name} src={local_image} />)
//   }
// }, {
//   label: "",
//   dataKey: "",
//   style: { display: 'none' },
//   render: (val: any) => {
//     const { name, mana_cost, type_line, oracle_text, power, toughness, flavor_text } = val
//     return (<div>
//       <h4>{name} {mana_cost}</h4>
//       <p>{type_line}</p>
//       <p>{oracle_text}</p>
//       <p style={{fontStyle: 'italic'}}>{flavor_text}</p>
//       <strong>{power}/{toughness}</strong>
//     </div>)
//   }
// }]

// complex headers with custom rendering
export const nameHeaders = [
  // change the rendered header text with the 'label' parameter
  { label: "name", dataKey: "a" },
  // individually style each header cell with the 'style' parameter
  { label: "age", dataKey: "b", style: { backgroundColor: "pink" } },
  // provide a 'render' function to control how dataCells render for the column
  {
    label: "grade status",
    dataKey: "c",
    render: (val: number) => (
      <h2>{`${val > 50 ? "✅passing" : "❌failing"} the class: ${val}`}</h2>
    )
  },
  // use the 'dataKey' to control the input to the render function
  // provide an empty string to instead call render with the entire dataObject provided
  {
    label: "assessment",
    dataKey: "",
    render: (val: any) => (
      <h4>{`${JSON.stringify(val.a)} is ${val.c > 90 ? "really" : ""} ${
        val.c > 50 ? "smart" : "dumb"
        }`}</h4>
    )
  },
  // you can have more headers than keys in your dataObjects, btw ;)
  // you can also control the 'width' of the column (pass in 'fr' , defaults to 'auto')
  {
    label: "comment",
    dataKey: "",
    render: () =>
      "Lorem Ipsum this is the same comment rendered over and over again why won't @LILBTHEBASEDGOD tweet about about me?",
    width: "4fr"
  }
];

const timeoutResolve = <T extends any>(resolveTo: any, timeout = 4000) : Promise<T> => new Promise((res) => {
  setTimeout(() => res(resolveTo), timeout)
})

const timeoutReject = <T extends any>(rejectTo: any, timeout = 4000) => new Promise((_, rej) => {
  setTimeout(() => rej(rejectTo), timeout)
})

export default class Test extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <h1>
          <span role="img" aria-label="Bento">
            🔁
          </span>{" "}
          NaiveAsync
        </h1>
        <h2>Cypress Tests and demonstration</h2>
        <h3>
          View this page and tests at <a href={thisGithubPage}>Github.com</a>
        </h3>
        <h3>
          View the test results at <a href={thatCypressPage}>Cypress.io</a></h3>
        <p>
          This page is a demonstration of the NaiveTable component used in a
          variety of ways:
        </p>
        <ul>
          <li>It is the selection and input to a variety of cypress tests.</li>
          <li>
            View the chrome console to see statistics and reports of how the
            examples render.
          </li>
          <li>
            This is also a demonstration of the power of react-hooks, a
            functional and clean approach to writing react components.
          </li>
        </ul>
        <h4>
          #1 It should be invoked automatically when autoParams are specified...
        </h4>
        <NaiveAsync id="NA1" operation={autoParamsOp} autoParams={{}} >{(state) => (<div>
          <p>status: {JSON.stringify(state.status)}</p>
          <p>params: {JSON.stringify(state.params)}</p>
          <p>error: {JSON.stringify(state.error)}</p>
          <p>data: {JSON.stringify(state.data)}</p>
        </div>)}</NaiveAsync>
        <h4>
          #2 It can be invoked when the call cb is invoked
        </h4>
        <NaiveAsync id="NA2" operation={autoParamsOp} >{(state, call) => (<div>
          <p>status: {JSON.stringify(state.status)}</p>
          <p>params: {JSON.stringify(state.params)}</p>
          <p>error: {JSON.stringify(state.error)}</p>
          <p>data: {JSON.stringify(state.data)}</p>
          <button onClick={() => call({})} >call</button>
        </div>)}</NaiveAsync>
        <h4>
          #3 Multiple autoParamed operations should execute
        </h4>
        <NaiveAsync id="NA3a" operation={autoResolve} autoParams={{}} >{(state) => (<div>
          <p>{state.data || '💬'}</p>
        </div>)}</NaiveAsync>
        <NaiveAsync id="NA3b" operation={autoResolve} autoParams={{}} >{(state) => (<div>
          <p>{state.data || '💬'}</p>
        </div>)}</NaiveAsync>
        <NaiveAsync id="NA3c" operation={autoResolve} autoParams={{}} >{(state) => (<div>
          <p>{state.data || '💬'}</p>
        </div>)}</NaiveAsync>
        <h4>
          #4 a circus of promises
        </h4>
        <NaiveAsync id="NA4a" operation={() => Promise.resolve(true)} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4b" operation={() => Promise.resolve(false)} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4c" operation={() => Promise.reject('boom')} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4d" operation={() => Promise.reject(new Error('kaboom!'))} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4e" operation={() => timeoutResolve(true)} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4f" operation={() => timeoutResolve(false)} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4g" operation={() => timeoutReject('slow boom') as Promise<boolean>} autoParams={{}}>{emojiView}</NaiveAsync>
        <NaiveAsync id="NA4h" operation={() => timeoutReject(new Error('slow kaboom!')) as Promise<boolean>} autoParams={{}}>{emojiView}</NaiveAsync>
        <h4>
          #5 callable promises
        </h4>
        <NaiveAsync id="NA5a" operation={() => Promise.resolve(true)}>{callableView}</NaiveAsync>
        <NaiveAsync id="NA5b" operation={() => timeoutResolve(true)}>{callableView}</NaiveAsync>
        <NaiveAsync id="NA5c" operation={() => slowResolve(true)}>{callableView}</NaiveAsync>
        </div>
    );
  }
}
