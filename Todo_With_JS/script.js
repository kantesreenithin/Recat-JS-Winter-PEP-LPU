function add_todo() {
    //get the value or test of input
    let input_box=document.getElementById("input_box");
    let text=input_box.value;
    // console.log(text);

    //creating the div and other items for todo items
    let todo_item = document.createElement("div");
    todo_item.className="todo_items";

    let input_checkbox=document.createElement("input");
    input_checkbox.type="checkbox";
    input_checkbox.className="input_checkbox_item";

    let p = document.createElement("p");
    p.className="todo_item_text";
    p.innerText=text;
    // p.style.textDecoration="line-through";

    input_checkbox.onclick=function(){
        // p.style.textDecoration="line-through";
        if(p.style.textDecoration === "line-through"){
            p.style.textDecoration="unset";
        }
        else{
            p.style.textDecoration="line-through";
        }
    }

    let delete_btn = document.createElement("button");
    delete_btn.className="del_btn";
    delete_btn.innerText="X"

    delete_btn.onclick=function(){
        todo_item.remove();
    }

    todo_item.appendChild(input_checkbox);
    todo_item.appendChild(p);
    todo_item.appendChild(delete_btn);

    //push todoitems div to other div
    let todo_items_div=document.getElementById("to_do_items_list");
    todo_items_div.appendChild(todo_item);

    //clearing text in input box
    input_box.value = "";

    // console.log(todo_item);



}
