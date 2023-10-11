export const handleDownload = (imageUrl) => {
  // Create a fetch request to fetch the image data

  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a Blob URL for the image data
      var blobUrl = URL.createObjectURL(blob);

      // Create an anchor element for the download
      var downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;

      // Set the download attribute to give the file a name
      downloadLink.download = "image.jpg";

      // Trigger a click event to start the download
      downloadLink.click();

      // Clean up the Blob URL after the download
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("Error downloading image: " + error);
    });
};
