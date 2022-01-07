export const newUser = (req, res) => res.send("New User");
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const user = (req, res) => res.send("User");
export const userProfile = (req, res) =>
  res.send(`id=${req.params.id} Profile`);
export const editProfile = (req, res) => res.send("Edit User");
