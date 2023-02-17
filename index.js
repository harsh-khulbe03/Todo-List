let input=prompt("What todo do you like to do?");
const todo=["Apple","Mango"];
while(input!=="quit" && input!=="q")
{
    

    if(input==="list")
    {
       console.log("****************");
       for(let i=0;i<todo.length;i++)
       {
        console.log(`${i}:${todo[i]}`);
       }
       console.log("****************");
    }

    else if(input==="new")
    {
        const newTodo=prompt("what fruit do you like to add?");
        todo.push(newTodo);
        console.log(`${newTodo} added to the list!!`);
    }

    else if(input==="delete")
    {
        const index=prompt("Ok Enter the index to delete");
        console.log(index);
        const deleted = todo.splice(index,1);
        console.log(`Ok deleted ${deleted[0]}`);
    }

    input=prompt("What todo do you like to do?");
}

console.log("You Quit the APP!!")