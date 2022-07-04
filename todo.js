
function addTask() {
    let inputTask = document.querySelector("#task");
    let todoTask = document.querySelector('.toDo');
    let liTask = document.createElement('Li');

    if (inputTask.value === "") {
        alert("Please add your task");
    }

    else {
        liTask.append(document.createTextNode(inputTask.value));
        todoTask.append(liTask);
        inputTask.value = "";
    }

    let removeTask = document.createElement('Button');
    let removeNode = document.createTextNode("-");
    removeTask.append(removeNode);
    liTask.append(removeTask);
    removeTask.addEventListener('click', function () {
        liTask.remove();
    });

    let startTask = document.createElement('Button');
    let startNode = document.createTextNode("Start");
    startTask.append(startNode);
    liTask.append(startTask);
    startTask.addEventListener('click', function () {
        let inprog = document.querySelector(".Inprogress");
        inprog.append(liTask);
        startTask.style.display = "none";

        let doneTask = document.createElement('Button');
        let doneNode = document.createTextNode("Done");
        doneTask.append(doneNode);
        liTask.append(doneTask);
        doneTask.addEventListener('click', function () {
            let completed = document.querySelector(".Completed");
            completed.append(liTask);

            doneTask.style.display = "none";
        });

    });






};