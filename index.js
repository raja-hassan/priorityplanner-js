document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    addTodoButton.addEventListener("click", () => {
        const todoText = todoInput.value;
        if (todoText.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.className = "todo-item";
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${todoText}</span>
                <button>Delete</button>
            `;

            const deleteButton = listItem.querySelector("button");
            deleteButton.addEventListener("click", () => {
                listItem.remove();
            });

            todoList.appendChild(listItem);
            todoInput.value = "";
        }
    });
});
