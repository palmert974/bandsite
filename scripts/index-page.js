// Seed comments displayed on page load
const SEED_COMMENTS = [
  {
    name: "Jordan M.",
    comment: "This was such a great show! The setlist was absolutely fire.",
    timestamp: 1709596800000,
  },
  {
    name: "Alex T.",
    comment: "The band killed it last night. Can't wait for the next tour date.",
    timestamp: 1707091200000,
  },
  {
    name: "Casey R.",
    comment: "First time seeing them live — absolutely incredible experience.",
    timestamp: 1704326400000,
  },
];

const commentsDiv = document.querySelector(".bio-conversation__comments");
const defaultPic = "./assets/Images/MercrurySquare.png";

function createCommentElement(commentObj) {
  const commentCard = document.createElement("div");

  const commentRow = document.createElement("div");
  commentRow.className = "bio-conversation__row";

  const columnPicture = document.createElement("div");
  columnPicture.className = "bio-conversation__picture";
  commentRow.appendChild(columnPicture);

  const profilePicture = document.createElement("img");
  profilePicture.className = "bio-conversation__profile-picture";
  profilePicture.src = defaultPic;
  columnPicture.appendChild(profilePicture);

  const columnDetails = document.createElement("div");
  columnDetails.className = "bio-conversation__details";
  commentRow.appendChild(columnDetails);

  const columnNameDate = document.createElement("div");
  columnNameDate.className = "bio-conversation__label";

  const commentName = document.createElement("label");
  commentName.innerText = commentObj.name;
  commentName.className = "bio-conversation__label";
  columnNameDate.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.className = "bio-conversation__date";
  commentDate.innerText = new Date(commentObj.timestamp).toLocaleDateString();
  columnNameDate.appendChild(commentDate);

  columnDetails.appendChild(columnNameDate);

  const commentText = document.createElement("p");
  commentText.innerText = commentObj.comment;
  columnDetails.appendChild(commentText);

  commentCard.appendChild(commentRow);
  return commentCard;
}

function clearComments() {
  while (commentsDiv.firstChild) {
    commentsDiv.removeChild(commentsDiv.firstChild);
  }
}

function displayComments(comments) {
  clearComments();

  const sorted = [...comments].sort((a, b) => b.timestamp - a.timestamp);
  sorted.forEach((comment) => {
    commentsDiv.appendChild(createCommentElement(comment));
  });
}

// Track all comments in memory (seed + new submissions)
let allComments = [...SEED_COMMENTS];

function handleFormSubmit(e) {
  e.preventDefault();

  const commentInput = document.querySelector(".bio-conversation__input");
  const commentTextArea = document.querySelector(".bio-conversation__text-area");

  if (!e.target.name.value) {
    commentInput.classList.add("bio-conversation__input-error");
    return;
  }

  if (!e.target.comment.value) {
    commentTextArea.classList.add("bio-conversation__text-area-error");
    return;
  }

  commentInput.classList.remove("bio-conversation__input-error");
  commentTextArea.classList.remove("bio-conversation__text-area-error");

  const newComment = {
    name: e.target.name.value,
    comment: e.target.comment.value,
    timestamp: Date.now(),
  };

  allComments = [newComment, ...allComments];
  displayComments(allComments);

  e.target.name.value = "";
  e.target.comment.value = "";
}

const formContainer = document.querySelector(".bio-conversation__form");
formContainer.addEventListener("submit", handleFormSubmit);

displayComments(allComments);
