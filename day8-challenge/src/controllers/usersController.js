export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const seeUsers = (req, res) =>
  res.render("seeUsers", { pageTitle: "seeUsers" });
export const seeUser = (req, res) =>
  res.render("seeUser", { pageTitle: `SeeUser ${req.params.id}` });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });
