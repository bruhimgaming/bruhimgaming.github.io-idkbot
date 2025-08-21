// make container if missing
let container = document.getElementById("buttons");
if (!container) {
  container = document.createElement("div");
  container.id = "buttons";
  container.style.textAlign = "center";
  container.style.marginTop = "50px";
  document.body.appendChild(container);
}

// helper to make buttons
function makeButton(label, action) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.style.cssText = `
    display:inline-block;
    margin:10px;
    padding:12px 20px;
    border-radius:10px;
    cursor:pointer;
    background:#121b29;
    color:#5cc8ff;
    border:2px solid #5cc8ff;
    font-size:1rem;
    font-weight:bold;
  `;
  btn.onclick = action;
  container.appendChild(btn);
}

// TNT button 💥
makeButton("💣 TNT", () => {
  document.body.style.backgroundColor = "red";
  const boom = document.createElement("div");
  boom.textContent = "💥 BOOOOM!";
  boom.style.cssText = "font-size:3rem;text-align:center;margin-top:20px;";
  document.body.appendChild(boom);
  setTimeout(() => { document.body.style.backgroundColor = ""; boom.remove(); }, 1000);
});

// Knarfy button ❤️
makeButton("❤️ Knarfy", () => {
  const msg = document.createElement("div");
  msg.textContent = "📢 SUB TO KNARFY ❤️";
  msg.style.cssText = `
    font-size:2.5rem;
    text-align:center;
    margin-top:20px;
    color:pink;
    font-weight:bold;
  `;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
});

// Sus button 🔴
makeButton("🔴 Sus", () => {
  alert("Sussy Baka!");
});

console.log("Secret buttons loaded!");

