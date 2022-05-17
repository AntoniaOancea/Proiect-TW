const jocuri=[{title:"Activity 124,99 lei", image:"https://mcdn.elefant.ro/mnresize/350/350/images/35/251435/joc-activity-original-2_1_fullsize.jpg"},
              {title:"Rummy  89,99lei",image:"https://tiessa.ro/1840-square_home_default/-joc-rummy-din-lemn-cu-piese-plastic-tiessa.webp"},
              {title:"Catan 199,99lei",image:"https://conde.ro/wp-content/uploads/2021/02/catan-joc-1.jpg"},
              {title:"Monopoly 150lei",image:"https://cdn.toxel.ro/img/uploads/a-2.jpg"},
              {title:"Masina electrica de jucarie 1000lei",image:"https://www.masinuteelectricecopii.ro/pub/media/catalog/product/cache/161c17ecbd1dcfac15af2bd376c6c783/1/-/1-min.jpg"},
              {title:"Jucarii din plus 150lei",image:"https://www.urbantrends.ro/image/cache/uploaded-products/4251/4251-7-775x775.jpg"}];
const sport=[ {title:"Minge de fotbal  80lei",image:"https://www.esteto.ro/static/images/produse/556017/covor-kolibri-rotund-minge-fotbal-uefa-67x67-cm-2300-gr-mp-1.jpg"},
              {title:"Set mingi de tenis de camp 20lei",image:"https://www.auchan.ro/public/images/h2f/h99/h00/set-3-mingi-tenis-vacuum-cups-8896296517662.jpg"},
              {title:"Rachete tenis de camp  450lei",image:"https://www.sportsuport.ro/2429-large_default/rachete-tenis--casal-sport-titanium-27.jpg"},
              {title:"Bicicleta 2000lei",image:"https://contents.mediadecathlon.com/m5579449/k$6939945b3b7b912107712651c506731d/sq/250x250/Bicicleta-Mtb-Afisport-M2-29-inch,-Negru.jpg"},
              {title:"Gantere 700lei",image:"https://dcsportmag.ro/wp-content/uploads/2020/11/gantera-reglabila-30.jpg"},
              {title:"Minge de baschet 200lei",image:"https://sportera.ro/wp-content/uploads/2020/07/B6G3800-Minge-baschet-Molten_2.jpg"}]
const casa=[  {title:"Mobilier de gradina 4000lei",image:"https://s13emagst.akamaized.net/products/19784/19783212/images/res_bdc96eda2026004e792134191dceeb79.jpg"},
              {title:"Mobila de bucatarie 8000lei",image:"https://arta-mobilei.ro/2371-home_default/mobila-bucatarie-rouge.jpg"},
              {title:"Canapea 3000lei",image:"https://tandem.md/images/detailed/5/G_O_0267-min.jpg"},
              {title:"Masa cu scaune 4500lei",image:"https://staer.ro/images/thumbs/0017655_masa-fabio.jpeg"},
              {title:"Covor 300lei",image:"https://www.alcris.com.ro/image/cache/Covoare/covor-moale-pufos-1200x900.jpg"},
              {title:"Birou 800lei",image:"https://s1.cel.ro/images/mari/2020/11/04/birou-pe-colt-stejar-artizanalalb-lex-136-x-75-x-68-cm-353-001ab.jpg"}]

let newIndex=0;
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


    document.getElementById('addJocuri').onclick=addJocuri;
    document.getElementById('deleteJocuri').onclick=deleteJocuri;
  }
  function addJocuri(){
    const product=jocuri[newIndex];
    const newElement=document.createElement('div');
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