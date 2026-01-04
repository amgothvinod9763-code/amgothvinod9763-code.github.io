const video = document.getElementById("video");
const startBtn = document.getElementById("startScan");

let referenceDescriptor = null;

// Load models
async function loadModels() {
  const MODEL_URL = "/models";

  await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);

  console.log("Models loaded");
}

// Load reference face
async function loadReference() {
  const img = await faceapi.fetchImage("assets/images/reference.jpg");
  const detection = await faceapi
    .detectSingleFace(img)
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!detection) {
    alert("No face found in reference image");
    return;
  }

  referenceDescriptor = detection.descriptor;
  console.log("Reference face loaded");
}

// Start camera
async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user" },
    audio: false
  });

  video.srcObject = stream;
  video.play();
}

// Compare faces
async function startVerification() {
  const detection = await faceapi
    .detectSingleFace(video)
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!detection) return;

  const distance = faceapi.euclideanDistance(
    referenceDescriptor,
    detection.descriptor
  );

  console.log("Match distance:", distance);

  if (distance < 0.45) {
    document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:40vh;'>💖 Face Matched 💖</h1>";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  }
}

// Button click
startBtn.addEventListener("click", async () => {
  await loadModels();
  await loadReference();
  await startCamera();

  setInterval(startVerification, 1500);
});
