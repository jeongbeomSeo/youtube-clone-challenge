export const home = (req, res) => res.send("Home");
export const trending = (req, res) => res.send("Trending");
export const story = (req, res) => res.send(`id=${req.params.id} Story`);
export const editStory = (req, res) => res.send(`id=${req.params.id} Edit`);
export const deleteStory = (req, res) => res.send(`id=${req.params.id} Delete`);
