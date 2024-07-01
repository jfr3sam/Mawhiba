let votes = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("hasVoted")) {
    disableVoting();
    showResults();
  }
  updateResults();
});

function submitVote(option) {
  if (!localStorage.getItem("hasVoted")) {
    votes[option]++;
    localStorage.setItem("hasVoted", true);
    localStorage.setItem("votes", JSON.stringify(votes));
    disableVoting();
    showPopup();
    updateResults();
  } else {
    alert("You have already voted.");
  }
}

function disableVoting() {
  document.getElementById("optionA").disabled = true;
  document.getElementById("optionB").disabled = true;
  document.getElementById("optionC").disabled = true;
  document.getElementById("optionD").disabled = true;
}

function showPopup() {
  document.getElementById("thanksPopup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("thanksPopup").classList.add("hidden");
  showResults();
}

function showResults() {
  document.getElementById("results").classList.remove("hidden");
}

function updateResults() {
  const savedVotes = JSON.parse(localStorage.getItem("votes")) || votes;
  const totalVotes = savedVotes.A + savedVotes.B + savedVotes.C + savedVotes.D;

  document.getElementById("resultA").textContent =
    ((savedVotes.A / totalVotes) * 100).toFixed(2) + "%";
  document.getElementById("resultB").textContent =
    ((savedVotes.B / totalVotes) * 100).toFixed(2) + "%";
  document.getElementById("resultC").textContent =
    ((savedVotes.C / totalVotes) * 100).toFixed(2) + "%";
  document.getElementById("resultD").textContent =
    ((savedVotes.D / totalVotes) * 100).toFixed(2) + "%";
}
