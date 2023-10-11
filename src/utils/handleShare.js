export const handleShare = async (id) => {
  try {
    await navigator.share({
      title: "Trend wave",
      text: "Check out this post",
      url: `https://trend-wave.vercel.app/post/${id}`,
    });
  } catch (error) {
    console.error("Error sharing:", error);
  }
};
