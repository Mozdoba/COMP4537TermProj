//home page functions

//Creates Div for locations
const createDiv = (inputLocation) => {
  const div = document.createElement("div");
  div.setAttribute("id", "div" + inputLocation);
  return div;
};

//Creates title for locations
const createLocTitle = (inputLocation) => {
  const locTitle = document.createElement("h4");
  locTitle.innerHTML = inputLocation;
  return locTitle;
};

//Creates Caption title
const createCapTitle = () => {
  const captionTitle = document.createElement("p");
  captionTitle.innerHTML = "<h6>Caption:</h6>";
  return captionTitle;
};

//Creates input for caption
const createCapInput = (inputLocation, myCaption) => {
  const captionInput = document.createElement("input");
  captionInput.setAttribute("type", "text");
  captionInput.setAttribute("id", "captionInput" + inputLocation);
  captionInput.value = myCaption;
  return captionInput;
};

//Creates image title
const createImgTitle = () => {
  const imgTitle = document.createElement("p");
  imgTitle.innerHTML = "<h6>Image:</h6>";
  return imgTitle;
};

//Creates input for image
const createImgInput = (inputLocation) => {
  const imgInput = document.createElement("input");
  imgInput.setAttribute("type", "file");
  imgInput.setAttribute("name", "image");
  imgInput.setAttribute("accept", "image/*");
  imgInput.setAttribute("id", "imgInput" + inputLocation);
  return imgInput;
};

//Creates Post creation button
const createPostButton = (inputLocation) => {
  const postButton = document.createElement("button");
  postButton.innerHTML = "Post";
  postButton.setAttribute("id", "postButton" + inputLocation);
  return postButton;
};

//Creates Delete location button
const createDeleteButton = (inputLocation) => {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete Location";
  deleteButton.setAttribute("id", "deleteButton" + inputLocation);
  return deleteButton;
};

//Creates Location Block
const createLocation = (isOwner, myCaption) => {
  //root location for appending locations
  const root = document.getElementById("rootLocations");

  //Grabing location from input
  const inputLocation = document.getElementById("inputLocation").value;
  console.log("value: " + inputLocation);

  //div creation for location block
  const div = createDiv(inputLocation);

  //Location title
  const locTitle = createLocTitle(inputLocation);

  //Caption title
  const capTitle = createCapTitle();

  //Caption input
  const captionInput = createCapInput(inputLocation, myCaption);

  //Image title
  const imgTitle = createImgTitle();

  //Image input
  const imgInput = createImgInput(inputLocation);

  //Post Button to create post
  const postButton = createPostButton(inputLocation);

  //Delete Location Button
  const deleteButton = createDeleteButton(inputLocation);
  //appending elements
  root.appendChild(div);
  div.appendChild(document.createElement("br"));
  div.appendChild(locTitle);
  div.appendChild(capTitle);
  div.appendChild(captionInput);
  div.appendChild(document.createElement("br"));
  div.appendChild(imgTitle);
  div.appendChild(imgInput);
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));
  div.appendChild(postButton);
  div.appendChild(deleteButton);
};

module.exports = {
  createLocation,
  createDiv,
  createLocTitle,
  createCapTitle,
  createCapInput,
  createImgTitle,
  createImgInput,
  createPostButton,
  createDeleteButton,
};