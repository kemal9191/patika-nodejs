var posts = require("./posts");

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

const handleBlogPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    console.log("Post ekleniyor...");
    if (newPost) {
      posts.push(newPost);
      resolve("Post eklendi.");
    } else {
      reject("Bir hata oluştu. Daha sonra tekrar deneyin.");
    }
  });
  return promise;
};

async function addBlogPost(newPost) {
  try {
    const result = await handleBlogPost(newPost);
    console.log(result);
    console.log(`Güncel postlarınız (${posts.length} post):`);
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

addBlogPost(false);
