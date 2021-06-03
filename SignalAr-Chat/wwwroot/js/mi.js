var connection = new signalR.HubConnectionBuilder().withUrl("/chat").build();

//Inciar la conexion
connection.start().then(() => {
    connection.invoke("AddToGroupAsync", "@Model")
}).catch((e) => console.error(e));

document.getElementById("btnSend").addEventListener("click", (event) => {

    let room = "@Model";
    let user = document.getElementById("user").value;
    let message = document.getElementById("message").value;

    connection.invoke("SendMessageAsyc", room, user, message).catch((error) =>
        console.error(error.toString()))

    document.getElementById("message").value = "";
    document.getElementById("message").focus();

    event.preventDefault();
})

connection.on("ReciveMessage", (user, message) => {

    const div = document.createElement("div")
    div.id = "aaaa"
    div.innerHTML = "<b>" + user + "dijo: " + message + "</b>";

    document.getElementById("messages").appendChild(div);
});

connection.on("ShowHo", (message) => {
    const div = document.createElement("div")
    div.id = "bbb"
    div.innerHTML = "<b>" + message + "</b>";

    document.getElementById("notification").appendChild(div);
});