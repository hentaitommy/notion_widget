'use strict';
const { useState, useEffect } = React


function Main() {
  const localCount = parseInt(localStorage.getItem('myCount'));
  const [count, setCount] = useState(localCount ? localCount : 0)
  useEffect(() => {
    localStorage.setItem('myCount', count);
  })
  return (
    <div className="bg-slate-300 h-screen rounded-3xl" onClick={() => setCount(count + 1)}>
      {count}
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);