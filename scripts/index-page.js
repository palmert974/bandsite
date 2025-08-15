const commentsDiv = document.querySelector(".bio-conversation__comments");
const defaultPic = "./assets/Images/MercrurySquare.png";
const date = new Date();

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

  const columnNamedate = document.createElement("div");
  columnNamedate.className = "bio-conversation__label";

  const commentName = document.createElement("label");
  commentName.innerText = commentObj["name"];
  commentName.className = "bio-conversation__label";
  columnNamedate.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.className = "bio-conversation__date";

  console.log(commentObj);
  const d = new Date(commentObj.timestamp);

  commentDate.innerText = d.toLocaleDateString();
  columnNamedate.appendChild(commentDate);
  columnDetails.append(columnNamedate);

  const commentText = document.createElement("p");
  commentText.innerText = commentObj["comment"];
  columnDetails.appendChild(commentText);
  commentCard.appendChild(commentRow);

  return commentCard;
}

function clearComments() {
  while (commentsDiv.firstChild) {
    commentsDiv.removeChild(commentsDiv.firstChild);
  }
}

const commentUrl =
  "https://project-1-api.herokuapp.com/comments?api_key=d510c716-cbf6-4fd7-b185-17b9bc7cb63a";

console.log(commentUrl);
function displayComment() {
  const commentsSection = document.querySelector("#comments");

  clearComments();

  axios.get(commentUrl).then((response) => {
    const data = response.data;

    console.log(data);

    data.sort((a, b) => b.timestamp - a.timestamp);

    console.log(data);

    data.forEach((c) => {
      console.log(c);

      const commentElement = createCommentElement(c);
      commentsDiv.appendChild(commentElement);
    });

    console.log(data);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const commentInput = document.querySelector(".bio-conversation__input");

  const commentText = document.querySelector(".bio-conversation__text-area");

  if (e.target.name.value == "") {
    commentInput.classList.add("bio-conversation__input-error");
  }

  if (e.target.comment.value == "") {
    commentText.classList.add("bio-conversation__text-area-error");

    return;
  }

  commentInput.classList.remove("bio-conversation__input-error");
  commentText.classList.remove("bio-conversation__text-area-error");

  const day = date.toLocaleDateString();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currrentDate = "${month}/${day}/${year}";

  const commentData = {
    name: e.target.name.value,
    comment: e.target.comment.value,
  };

  axios
    .post(commentUrl, commentData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((data) => {
      console.log(data);

      displayComment();
    });

  e.target.name.value = "";
  e.target.comment.value = "";
}

const formContainer = document.querySelector(".bio-conversation__form");
formContainer.addEventListener("submit", handleFormSubmit);
displayComment();
