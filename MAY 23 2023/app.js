const imageArr = ["tester1.jpg", "tester2.jpg", "tester3.jpg"];

function getRandomPhoto() {
  //get a random index
  var randomPhotoIndex = Math.floor(Math.random() * imageArr.length);

  //get an image at the randomPhotoIndex
  var selectedPhoto = imageArr[randomPhotoIndex];

  //Display photo
  document.getElementById("imageShower").src = `./images/${selectedPhoto}`;
}
