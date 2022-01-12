import express from "express";
import globalRouter from "../../routers/globalRouter";
import storyRouter from "../../routers/storyRouter";
import userRouter from "../../routers/userRouter";

const PORT = 4000;

const app = express();

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`Listening!`));
