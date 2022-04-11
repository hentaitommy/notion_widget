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
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
   registration.unregister()
 } })

function Main() {
  return (
    <div className="relative text-transparent hover:text-black h-screen aspect-square" >
      <div className="p-4 bg-red-500 rounded-3xl hover:blur-md w-full h-full">
        <div className="p-8 rounded-full bg-red-500 w-full h-full [box-shadow:inset_0px_0px_50px_rgb(56,56,56)]">
          
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