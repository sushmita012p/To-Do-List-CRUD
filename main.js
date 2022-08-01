const inputVal = document.getElementsByClassName("inputVal")[0];
const addTaskBtn = document.getElementsByClassName("btn")[0];

addTaskBtn.addEventListener("click", function () {
  if (inputVal.value == 0) {
    alert("Please enter at least one task");
  } else {
    //exclude duplicate task
    if (taskList.length != 0) {
      if (taskList.includes(inputVal.value)) {
        alert("task already exist");
      } else {
        taskList.push(inputVal.value);
        localStorage.setItem("localItem", JSON.stringify(taskList));
      }
    } else {
      taskList.push(inputVal.value);
      localStorage.setItem("localItem", JSON.stringify(taskList));
    }
  }
  showItem();
});

showItem = () => {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = "";
  let itemShow = document.querySelector(".todoLists");
  taskList.map((data, index) => {
    html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    </div>
    `;
  });
  itemShow.innerHTML = html;
};
showItem();

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showItem();
}

function clearTask() {
  localStorage.clear();
  showItem();
}