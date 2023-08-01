const formDOM = document.querySelector("#formDOM")
formDOM.addEventListener("submit", formHandler)

window.addEventListener("DOMContentLoaded", () => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      items.forEach((item) => {
        addItem(item.USERNAME);
      });
    }
  });

function formHandler(event){
    event.preventDefault()
    let userName = document.querySelector("#name");
    addItem(userName.value);
    formDOM.reset(); 
}

function RemoveItem(el) {
    let ele = document.getElementById(el);
    ele.remove();
    removeItem(el); 
  }

  let listLuDOM = document.querySelector("#userList");
  let dizi = [];
/*
function addItem(userName){
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName}
    <span class="badge badge-danger badge-pill" id="saniye"></span>
    `
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    userListDOM.append(liDOM)
    
}*/
function addItem(USERNAME) {
    const id = "a" + Math.floor(Math.random() * 1000) + "h";
    let liDOM = document.createElement("li");
    liDOM.id = id;
    liDOM.innerHTML = `<span style="font-size: 17px;"><b>${USERNAME}</b></span> 
      <span style="font-size: 17px;" class="badge badge-danger badge-pill" id="${id}_countdown">10</span>
      <button onclick="RemoveItem('${id}')" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>`;
    liDOM.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    listLuDOM.append(liDOM);
    saveItem(id, USERNAME);

    // Start the countdown timer
    startCountdown(id, 10);

    
  }
/*   SANİYE SAYACI START **********************************/

  function startCountdown(itemId, seconds) {
    const countdownElement = document.getElementById(`${itemId}_countdown`);
    let remainingSeconds = seconds;

   
   
    function updateCountdown() {
      countdownElement.innerText = remainingSeconds;
      remainingSeconds--;
  
      if (remainingSeconds < 0) {
        // Do something when the countdown is finished (if needed)
        countdownElement.innerHTML = ` die`;
        return;
    
      }
  
      // Call the updateCountdown function every second
      setTimeout(updateCountdown, 1000);
    }
  
    // Start the countdown
    updateCountdown();
  }

/*   SANİYE SAYACI END **********************************/
  
function saveItem(id, USERNAME) {
    const newItem = { id, USERNAME};
    dizi.push(newItem);
    localStorage.setItem("items", JSON.stringify(dizi));
  }
  
  function removeItem(id) {
    dizi = dizi.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(dizi));
  }