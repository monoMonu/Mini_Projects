// https://api.currencybeacon.com/v1/convert
// api_key =  O05Xi52up1zRuOANF4a7YgSQcTvdnaRT

const api_key = 'O05Xi52up1zRuOANF4a7YgSQcTvdnaRT';
const baseUrl = (endpoint) => `https://api.currencybeacon.com/v1/${endpoint}?api_key=${api_key}`;

const fetchData = async (url) =>{
   const res = await fetch(url);
   const data = await res.json();
   return data;
}

(async function populateCurrencyList(){
   loader.style.display = "grid";
   const data = await fetchData(baseUrl("currencies"));
   Object.keys(data).forEach(el => {
      const option = `<option value="${data[el].short_code}">${data[el].name}(${data[el].short_code})</option>`;
      fromCurrency.innerHTML += option;
      toCurrency.innerHTML += option;
   });
   document.querySelector("#fromCurrency option[value='USD']").setAttribute("selected",true);
   document.querySelector("#toCurrency option[value='INR']").setAttribute("selected",true);
   loader.style.display = "none";
})();

async function determineRate(base, symbols){
   loader.style.display = "grid";
   const data = await fetchData(`${baseUrl("latest")}&base=${base}&symbols=${symbols}`);
   const currentRate = data.rates[symbols];
   rate_box.innerText = currentRate.toFixed(2);
   loader.style.display = "none";
   return currentRate;
}

convertBtn.addEventListener('click', async () => {
   if(isNaN(amount.value)){
      alert("Please enter the amount");
      return;
   }
   const rate = await determineRate(fromCurrency.value, toCurrency.value);
   const amt = amount.value;
   result_amount.innerText = (amt*rate).toFixed(2);
})