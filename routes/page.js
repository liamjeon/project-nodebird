const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares.js");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user; //넌적스에서 user 객체로 사용자 정보에 접근 가능
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
});

router.get("/join", isNotLoggedIn, (req, res, next) => {
  res.render("join", { title: "회원가입 - NodeBird" });
});

router.get("/", (req, res, next) => {
  const twits = [];
  res.render("main", {
    title: "NodeBird",
    twits,
  });
});

module.exports = router;
