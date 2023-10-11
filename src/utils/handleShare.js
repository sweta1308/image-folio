export const handleShare = async (id) => {
  try {
    await navigator.share({
      title: "Image Folio",
      text: "Check out this image",
      url: `https://imagefolio.vercel.app/image/${id}`,
    });
  } catch (error) {
    console.error("Error sharing:", error);
  }
};
