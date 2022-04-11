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

navigator.serviceWorker.getRegistrations().then(function (registrations) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = registrations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var registration = _step.value;

      registration.unregister();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

function Main() {
  return React.createElement(
    "div",
    { className: "relative text-transparent hover:text-black h-screen aspect-square" },
    React.createElement(
      "div",
      { className: "p-4 bg-red-500 rounded-3xl hover:blur-md w-full h-full" },
      React.createElement("div", { className: "p-8 rounded-full bg-red-500 w-full h-full [box-shadow:inset_0px_0px_50px_rgb(56,56,56)]" })
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