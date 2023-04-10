import { getJobPost } from "./localDB";

const customLoader = async () => {
  const res = await fetch("/featuredJobs.json");
  const data = await res.json();
  // if the data in db then have to use async await
  const storedPost = getJobPost();
  const savedPost = [];

  for (const id in storedPost) {
    const dbPost = data.find((product) => product.id == id);
    if (dbPost) {
      const quantity = storedPost[id];
      dbPost.quantity = quantity;
      savedPost.push(dbPost);
    }
  }

  return savedPost;
};

export default customLoader;
