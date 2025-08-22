// 👇 Put all your commands here
const commands = [
  "!help — Shows all commands",
  "!about — Info about the bot",
  "!ping — Checks if the bot is online"
];

// Get the <ul> element where commands will go
const commandList = document.getElementById("commandList");

// Loop through the commands array and add them to the page
commands.forEach(command => {
  const li = document.createElement("li"); // make a list item
  li.textContent = command;                // set its text
  commandList.appendChild(li);             // add it to the list
});
