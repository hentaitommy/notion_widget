'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;


var sw = 'serviceWorker' in navigator;

function Main() {
  var localCount = parseInt(localStorage.getItem('myCount'));

  var _useState = useState(localCount ? localCount : 0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  useEffect(function () {
    localStorage.setItem('myCount', count);
  });
  return React.createElement(
    'div',
    { className: 'bg-slate-300 h-screen rounded-3xl', onClick: function onClick() {
        return setCount(count + 1);
      } },
    count,
    ' ',
    String(sw)
  );
}

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));