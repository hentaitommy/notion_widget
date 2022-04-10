'use strict';
const { useState } = React


function Main() {
  const [count, setCount] = useState(0)

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