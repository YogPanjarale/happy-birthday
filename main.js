import './style.css'

const params = new Proxy(new URLSearchParams(window.location.search), {

  get: (searchParams, prop) => searchParams.get(prop),

});

// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"

let value = params.n; // "some_value"

const nameo = value || "to you"

document.querySelector('#name').innerHTML = nameo
