const addToDb = (id) => {
    let jobPost = getJobPost();
    // add quantity
    const quantity = jobPost[id];
    if (!quantity) {
      jobPost[id] = 1;
    } else {
      const newQuantity = quantity + 1;
      jobPost[id] = newQuantity;
    }
    localStorage.setItem("job-post", JSON.stringify(jobPost));
  };
  
  const removeFromDb = (id) => {
    const jobPost = getJobPost();
    if (id in jobPost) {
      delete jobPost[id];
      localStorage.setItem("job-post", JSON.stringify(jobPost));
    }
  };
  
  const getJobPost = () => {
    let jobPost = {};
  
    //get the shopping cart from local storage
    const storedPost= localStorage.getItem("job-post");
    if (storedPost) {
      jobPost = JSON.parse(storedPost);
    }
    return jobPost;
  };

  export{ addToDb, removeFromDb, getJobPost}