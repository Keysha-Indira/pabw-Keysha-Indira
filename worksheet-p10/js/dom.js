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

  if (list.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  list.forEach((player) => {
    playerList.append(buildPlayerRow(player));
  });
}

function markActiveButton(activeButton) {
  document
    .querySelectorAll("#player-filter button")
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button === activeButton
      );
    });
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  const role = button.dataset.role;

  const hasilFilter = daftarPlayer.filter((player) => {
    return role === "semua" || player.role === role;
  });

  markActiveButton(button);

  renderPlayers(hasilFilter);
});

renderPlayers(daftarPlayer);

const nicknameError =
  document.querySelector("#nickname-error");

const nameError =
  document.querySelector("#name-error");

const birthError =
  document.querySelector("#birth-error");

const roleError =
  document.querySelector("#role-error");

const submitButton =
  playerForm.querySelector('button[type="submit"]');


function validateRequiredField(field, errorElement) {
  const valid = field.value.trim() !== "";

  errorElement.hidden = valid;

  field.setAttribute(
    "aria-invalid",
    valid ? "false" : "true"
  );

  return valid;
}


function validateForm() {
  const nicknameValid =
    validateRequiredField(
      nicknameInput,
      nicknameError
    );

  const nameValid =
    validateRequiredField(
      nameInput,
      nameError
    );

  const birthValid =
    validateRequiredField(
      birthDateInput,
      birthError
    );

  const roleValid =
    validateRequiredField(
      roleInput,
      roleError
    );

  const valid =
    nicknameValid &&
    nameValid &&
    birthValid &&
    roleValid;

  submitButton.disabled = !valid;

  return valid;
}


[
  nicknameInput,
  nameInput,
  birthDateInput,
  roleInput
].forEach((field) => {
  field.addEventListener("input", validateForm);
});


playerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const valid = validateForm();

  if (!valid) {
    const firstInvalid =
      playerForm.querySelector(
        '[aria-invalid="true"]'
      );

    firstInvalid?.focus();

    return;
  }

  console.log("Form valid.");
});