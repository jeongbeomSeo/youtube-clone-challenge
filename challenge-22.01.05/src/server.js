import express, { application } from "express";

const app = express();

const urlLogger = (req, res, next) => {
    console.log(`Path: ${req.path}`);
    next();
}

const timeLogger = (req, res, next) => {
    const currnetTime = new Date();
    const year = currnetTime.getFullYear();
    const month = currnetTime.getMonth() + 1;
    const day = currnetTime.getDay();
    console.log(`Time: ${year}.${month}.${day}`);
    next();
}

const securityLogger = (req, res, next) => {
    if (req.protocol === "https") {
        console.log("Secure ⭕");
      } else if (req.protocol === "http") {
        console.log("Insecure ❌");
      }
      next();
}

const protectorMiddleware = (req, res, next) => {
    if (req.path === "/protected") {
        return res.end();
    }
    next();
}

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorMiddleware);

app.get("/",(req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(4000, () => console.log(`Listening!✅`));
