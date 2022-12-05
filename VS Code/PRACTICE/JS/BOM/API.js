// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

const getData = () => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', 'https://jsonpleceholder.typeicode.com/posts');
          xhr.onload = () => {
                    let data = xhr.response;
                    console.log(JSON.parse(data))
          }

          xhr.onerror = () => {
                    console.log('error is here')
          }
          xhr.send();
}

getData()