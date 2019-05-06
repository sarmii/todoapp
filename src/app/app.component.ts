import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todoArray = [];
  todo;
  marked = false;
  theCheckbox = false;

  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todo);
  }
  /*delete item*/
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
  // submit Form
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo);
      //this.todoForm.reset()
    } else {
      alert("Field required **");
    }
  }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
}
