DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
    id        INT AUTO_INCREMENT NOT NULL,
    name      VARCHAR(30) NOT NULL,
    photo_url TEXT NOT NULL,
    answers   CHAR(21) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO friends (name, photo_url, answers) VALUES
("A. A. Bondy"      , "https://goo.gl/wd1Rgp", "[4,4,2,3,5,4,5,2,1,3]"),
("Adele"            , "https://goo.gl/JVwNnc", "[3,4,3,5,3,2,1,4,5,5]"),
("Andrew Bird"      , "https://goo.gl/PrXxyw", "[1,3,5,1,5,5,5,3,3,1]"),
("Beck"             , "https://goo.gl/FLfzUD", "[4,5,2,4,5,1,3,4,2,2]"),
("Ben Harper"       , "https://goo.gl/PFqBw2", "[1,1,1,1,3,2,1,5,1,2]"),
("Billy Corgan"     , "https://goo.gl/j2rCgx", "[2,4,1,1,2,1,4,3,3,3]"),
("BoA"              , "https://goo.gl/jUYF4r", "[3,5,5,1,2,4,1,5,5,5]"),
("Charlie XCX"      , "https://goo.gl/LjZnu2", "[5,4,3,1,1,3,4,1,4,4]"),
("Eminem"           , "https://goo.gl/gPF7wA", "[5,1,3,2,1,1,2,4,3,4]"),
("Grimes"           , "https://goo.gl/KS2SZw", "[3,5,5,2,5,5,5,1,2,5]"),
("Justin Timberlake", "https://goo.gl/YFZ9Cq", "[5,2,2,1,1,3,1,4,4,3]"),
("Katy Perry"       , "https://goo.gl/E8E2yD", "[4,5,3,5,5,1,3,5,4,5]"),
("Kelly Clarkson"   , "https://goo.gl/spMubP", "[2,5,4,5,1,3,2,5,5,5]"),
("Moby"             , "https://goo.gl/4Z7acm", "[1,1,1,1,5,3,2,1,1,2]"),
("Rob Thomas"       , "https://goo.gl/Xsnrha", "[5,1,1,2,4,1,5,5,3,4]")