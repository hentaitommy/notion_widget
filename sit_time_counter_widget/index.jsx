'use strict';
const { useState, useEffect } = React


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
  return (
    <div className="relative text-transparent hover:text-black" >
      <div className="p-4 bg-slate-300 w-screen rounded-3xl aspect-square hover:blur-sm">
        <div className="p-8 aspect-square rounded-full [background:conic-gradient(red,blue)]">
          <div className="bg-slate-400 aspect-square rounded-full flex justify-center items-center">
            <div className="text-xl text-white font-bold">
              00:00
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]">
        <p className="text-center">Stand<br/>up</p>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);