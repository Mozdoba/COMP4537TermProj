const connection = require("./db-connection");
const ERROR_DUPLICATE_ENTRY = "ER_DUP_ENTRY";

const updateUsernameByUserId = ({ id, username }) => {
  const query = `
    UPDATE User
    SET Username = "${username}"
    WHERE ID = ${id}
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.log(err);
        if (err.code === ERROR_DUPLICATE_ENTRY) resolve(err);
        reject(err);
      }
      resolve(result);
    });
  });
};

const updatePasswordByUserId = ({ id, password }) => {
  const query = `
    UPDATE User
    SET Password = "${password}"
    WHERE ID = ${id}
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

const getUserById = (id) => {
  const query = `
    SELECT Username, Password, DateJoined, Admin
    FROM User
    WHERE ID = ${id}
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

const getUserByUsername = (username) => {
  const query = `
    SELECT ID, Password, DateJoined, Admin
    FROM User
    WHERE Username = '${username}'
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

const registerUser = ({ dateJoined, isAdmin, password, username }) => {
  const query = `
    INSERT INTO User(Username, Password, DateJoined, Admin)
    VALUES ('${username}', '${password}', ${dateJoined}, ${isAdmin})
  `;

  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.log(err);
        if (err.code === ERROR_DUPLICATE_ENTRY) {
          resolve(err);
          return;
        }
        reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  getUserById,
  getUserByUsername,
  registerUser,
  updatePasswordByUserId,
  updateUsernameByUserId,
};
