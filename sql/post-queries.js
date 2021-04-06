const connection = require("./db-connection");

const updatePost = ({ id, quote, author }) => {
  // TODO: create proper query for update
  const query = `UPDATE QUOTES SET QUOTE = "${quote}", AUTHOR = "${author}" WHERE ID = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  });
};

const createPost = async ({ userId, imagePath, locationName, message }) => {
  console.log(imagePath);
  const query = `
    INSERT INTO Post (UserID, Image, LocationName, Message)
    values (${userId}, LOAD_FILE('${imagePath}'), '${locationName}', '${message}')
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  createPost,
  updatePost,
};