(function(fn){
  // I check if the document is full loaded before execute the makeRequest() function.
  return (document.readyState != 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);
})(makeRequest('/api/nav.json', buildMenu));

function makeRequest(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // If the request is succes we have the data variable to handle.
      var data = JSON.parse(request.responseText);
      callback(data);
    } else {
      alert('Bad response');
    }
  };
  
  request.onerror = function() {
    alert('Can\'t connect to the server');
  };
  
  request.send();

  return request;
}

function buildMenu(data) {
  console.log('Yay', data);
  
}
