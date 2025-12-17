const list = []

let command = prompt ("Enter a new command (new, list, delete or quit):")

while ( command !== "quit" || command !== "new" || command !== "list" || command !== "delete") {

        if (command === "new") {
            const new_todo = prompt ("Enter a new to do:")
            list.push(new_todo)
            console.log(`${new_todo} was added to the list.`)
        }
        if (command === "list") {
            for (let i = 0; i < list.length; i++) {
                console.log(`${i}: ${list[i]}`)
            }
        }
        if (command === "delete") {
            if (list.length === 0) {
                console.log("The list is empty. There is nothing to delete.")
            } else {
                const delete_todo = prompt ("Enter a to do to delete:")
                list.splice(delete_todo, 1)
                console.log(`${delete_todo} was deleted."`)
                }
        }
        if (command === "quit") {
            break; 
        }
    command = prompt ("Enter a new command (new, list, delete or quit):")

    }


console.log("You have quit the app.")   
