document.addEventListener("DOMContentLoaded", () => {

  const taskLister = document;

  let submitBtn = taskLister.getElementById("create-task-form");

    submitBtn.addEventListener("submit", function (event) {
      event.preventDefault();
        let ul = taskLister.getElementById("tasks");
        let li = taskLister.createElement("li");
    li.innerHTML = event.target[0].value;
    ul.appendChild(li);
    event.target.reset();
  });




  let deleteBtn = taskLister.getElementById("delete");

  deleteBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let ul = taskLister.getElementById("tasks");
    let li = ul.lastElementChild;
    while (li) {
      ul.removeChild(li);
      li = ul.lastElementChild;
    }
  });


});
