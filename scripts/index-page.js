const conversationComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    profilePicture: "/assets/Images/MercrurySquare.png",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    profilePicture: "/assets/Images/MercrurySquare.png",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day!",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    profilePicture: "/assets/Images/MercrurySquare.png",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough!",
  },
];

const commentsDiv = document.querySelector(".bio-conversation__comments");
const defaultPic = "/assets/Images/MercrurySquare.png";
const date = new Date();

function createCommentElement(commentObj) {
  const commentCard = document.createElement("div");
  commentCard.className = "bio-conversation__text-area";

  const commentRow = document.createElement("div");
  commentRow.className = "bio-conversation__row";

  const columnPicture = document.createElement("div");
  columnPicture.className = "bio-conversation__picture";
  commentRow.appendChild(columnPicture);

  const profilePicture = document.createElement("img");
  profilePicture.className = "bio-conversation__profile-picture";
  profilePicture.src = commentObj["profilePicture"];
  columnPicture.appendChild(profilePicture);

  const columnDetails = document.createElement("div");
  columnDetails.className = "bio-conversation__details";
  commentRow.appendChild(columnDetails);

  const columnNamedate = document.createElement("div");
  columnNamedate.className = "bio-conversation__label";

  const commentName = document.createElement("label");
  commentName.innerText = commentObj["name"];
  commentName.className = "bio-conversation__label";
  columnNamedate.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.className = "bio-conversation__date";
  commentDate.innerText = commentObj["date"];
  columnNamedate.appendChild(commentDate);
  columnDetails.append(columnNamedate);

  const commentText = document.createElement("p");
  commentText.innerText = commentObj["comment"];
  columnDetails.appendChild(commentText);
  commentCard.appendChild(commentRow);

  return commentCard;
}

conversationComments.forEach((comment) => {
  const commentElement = createCommentElement(comment);
  commentsDiv.appendChild(commentElement);
});

function displayComment(comment) {
  const commentsSection = document.querySelector("#comments");

  //commentsSection.innerHTML = "";

  let newCard = createCommentElement(comment);
  commentsDiv.insertBefore(newCard, commentsDiv.firstChild);
}

function handleFormSubmit(e) {
  e.preventDefault();

  let day = date.toLocaleDateString();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currrentDate = "${month}/${day}/${year}";

  const commentData = {
    name: e.target.name.value,
    comment: e.target.comment.value,
    profilePicture: defaultPic,
    date: day,
  };

  conversationComments.unshift(commentData);
  displayComment(commentData);
}

const formContainer = document.querySelector(".bio-conversation__form");
formContainer.addEventListener("submit", handleFormSubmit);
// renderComment();
