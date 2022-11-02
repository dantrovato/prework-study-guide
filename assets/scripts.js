const topics = "HTML, CSS, Git, JavaScript";

function print(topics) {
  topics.split(",").forEach((topic) => {
    console.log(topic);
  });
}

print(topics);
