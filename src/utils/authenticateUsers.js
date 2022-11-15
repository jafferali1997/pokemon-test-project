const users = [
  {
    role: "admin",
    email: "admin@reia.com",
  },
];

const authenticateUser = (user) => {
  const findUser = users.find((item) => item.email === user.email);
  if (findUser) {
    return findUser;
  }
  return false;
};

export default authenticateUser;
