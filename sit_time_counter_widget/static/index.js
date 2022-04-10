'use strict';

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;

// let sw

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('service-worker.js', {scope: './'})
//   .then(function(registration) {
//     sw = 'succeeded';
//   }).catch(function(error) {
//     sw = error;
//   });
// }

function Main() {
  return React.createElement(
    "div",
    { className: "relative text-transparent hover:text-black" },
    React.createElement(
      "div",
      { className: "p-4 bg-slate-300 w-screen rounded-3xl aspect-square hover:blur-sm" },
      React.createElement(
        "div",
        { className: "p-8 aspect-square rounded-full [background:conic-gradient(red,blue)]" },
        React.createElement(
          "div",
          { className: "bg-slate-400 aspect-square rounded-full flex justify-center items-center" },
          React.createElement(
            "div",
            { className: "text-xl text-white font-bold" },
            "00:00"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]" },
      React.createElement(
        "p",
        { className: "text-center" },
        "Stand",
        React.createElement("br", null),
        "up"
      )
    )
  );
}

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));