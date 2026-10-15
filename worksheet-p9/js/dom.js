import { daftarPlayer } from "./app.js";

const playerList = document.querySelector("#player-list");
const filterRow = document.querySelector("#player-filter");
const emptyMessage = document.querySelector("#player-empty");

const playerForm = document.querySelector("#player-form");
const nicknameInput = document.querySelector("#nickname-p");
const nameInput = document.querySelector("#name-p");
const birthDateInput = document.querySelector("#tl-p");
const roleInput = document.querySelector("#role-p");

function buildPlayerRow(player) {
  const row = document.createElement("tr");

  const nickname = document.createElement("th");
  nickname.scope = "row";
  nickname.textContent = player.nickname;

  const nama = document.createElement("td");
  nama.textContent = player.nama;

  const tanggalLahir = document.createElement("td");
  tanggalLahir.textContent = player.tanggalLahir;

  const role = document.createElement("td");
  role.textContent = player.role;

  row.append(nickname, nama, tanggalLahir, role);

  return row;
}

function renderPlayers(list) {
  playerList.textContent = "";

  list.forEach((player) => {
    playerList.append(buildPlayerRow(player));
  });
}

renderPlayers(daftarPlayer);