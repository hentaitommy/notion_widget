'use strict';
const { useState, useEffect } = React

let sw = 'serviceWorker' in navigator

function Main() {
  const localCount = parseInt(localStorage.getItem('myCount'));
  const [count, setCount] = useState(localCount ? localCount : 0)
  useEffect(() => {
    localStorage.setItem('myCount', count);
  })
  return (
    <div className="bg-slate-300 h-screen rounded-3xl" onClick={() => setCount(count + 1)}>
      {count} {String(sw)}
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);