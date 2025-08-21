// Minimal idkbot: supports ;credits and ;time
const logEl   = document.getElementById("log");
const form    = document.getElementById("composer");
const inputEl = document.getElementById("input");

function addMsg({ user, text, me = false }) {
  const wrap = document.createElement("div");
  wrap.className = "msg" + (me ? " me" : "");
  const meta = document.createElement("div");
  meta.className = "meta";
  meta.textContent = `${user} • ${new Date().toLocaleTimeString()}`;
  const body = document.createElement("div");
  body.className = "text";
  body.textContent = text;
  wrap.append(meta, body);
  logEl.appendChild(wrap);
  logEl.scrollTop = logEl.scrollHeight;
}

function handleCommand(raw) {
  const t = raw.trim();
  if (t === ";credits") {
    return "idkbot by YOU 😎";
  }
  if (t === ";time") {
    return `Current time: ${new Date().toLocaleString()}`;
  }
  return null; // not a command (or unknown)
}

function send(text) {
  addMsg({ user: "You", text, me: true });

  // Command handling (local echo)
  const reply = handleCommand(text);
  if (reply) {
    setTimeout(() => addMsg({ user: "Bot", text: reply }), 120);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;
  inputEl.value = "";
  send(text);
});

// greet
addMsg({ user: "Bot", text: "hi! try ;credits or ;time" });
