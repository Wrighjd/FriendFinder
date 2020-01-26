const express  = require("express");
const path     = require("path");
const validUrl = require("valid-url");


const router = express.Router();


const FriendFinder = require(path.join(__dirname, "..", "data", "friends.js"));
const friendFinder = new FriendFinder();

router.get("/friends", (req, res) => {
    res.json(friendFinder.getFriends());
});


router.post("/friends", (req, res) => {
    const profile = {
        "name"     : req.body.name,
        "photo_url": (validUrl.isUri(req.body.photo_url)) ? req.body.photo_url : "",
        "answers"  : req.body.answers.map(a => parseInt(a))
    };
    
    const friend = friendFinder.findBestFriend(profile);

  
    friendFinder.addFriend(profile);
    
    res.send({
        "my_name"         : profile.name,
        "friend_name"     : friend.name,
        "friend_photo_url": friend.photo_url
    });
});

module.exports = router;