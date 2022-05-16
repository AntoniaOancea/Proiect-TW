window.onload = () => {
    startTime();
    const barButton = document.querySelector('#changeDetails');
    const removeButton = document.querySelector('#removeDetails');
    const refreshButton = document.getElementById('refresh');
    barButton.addEventListener('click', changeDetails);
    removeButton.addEventListener('click', removeDetails);
    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });
    renderBar();
    
    toggleInterval();
    document.querySelector('button #timer').addEventListener('click', toggleInterval);


    document.getElementById('submeniu')
    .addEventListener('focus', consoleLogFocus);
  }
  
  function renderBar() {
    const barMessage = document.querySelector('.user-bar .message');
    const barButton = document.querySelector('#changeDetails');
    let userDetails = null;
    try {
      userDetails = JSON.parse(localStorage.getItem('userDetails'));
    } catch (error) {
      userDetails = null;
    }
    if(userDetails) {
      barMessage.innerHTML = `Bine ai venit, ${userDetails.name}!`;
      barButton.innerHTML = "Schimbă detaliile";
    } else {
      barMessage.innerHTML = "Bine ai venit! Nu știm nimic despre tine...";
      barButton.innerHTML = "Adăugă detalii";
    }
  }
  
  function changeDetails() {
    const name = prompt('Introdu numele tău');
    if(!name) return;
    const userDetails = { name };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    renderBar();
  }
  
  function removeDetails() {
    localStorage.removeItem('userDetails');
    renderBar();
  }





let seconds = 0;
let intervalId = null;

function toggleInterval() {
  const stop = intervalId != null;
    intervalId = setInterval(() => {
      seconds++;
      document.querySelector('p').textContent = `Stai pe această pagină de ${seconds} secunde.`;
    }, 1000);
}

function startTime() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
  setTimeout(function() {startTime()}, 1000);
}



function consoleLogFocus(event) {
  const content = event.target.firstChild.textContent.trim();
  console.log(`S-a focusat elementul cu textul '${content}'`);
}