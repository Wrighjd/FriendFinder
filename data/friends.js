const mysql = require("mysql");


const connection = mysql.createConnection({
    "host"              : "localhost",
    "port"              : 3306,
    "user"              : "root",
    "password"          : "L0ve2012!",
    "database"          : "friend_finder_db",
    "multipleStatements": true
});
connection.connect(error => {
    if (error) throw error;
    console.log(`Database connected as thread ${connection.threadId}.`);
});





module.exports = function FriendFinder() {
    
    if (!(this instanceof FriendFinder)) {
        return new FriendFinder();
    }

    let friends;

  
    pool.query("SELECT * FROM friends", (error, results) => {
        if (error) throw error;

        friends = results.map(r => ({
            "id"       : r.id,
            "name"     : r.name,
            "photo_url": r.photo_url,
            "answers"  : JSON.parse(r.answers)
        }));
    });


    
    function findDifference(a, b) {
        let score = 0;

        for (let i = 0; i < a.answers.length; i++) {
            score += Math.abs(b.answers[i] - a.answers[i]);
        }

        return score;
    }


  
    this.addFriend = function(profile) {
        const sql_command =
            `INSERT INTO friends (name, photo_url, answers)
             VALUES ("${profile.name}", "${profile.photo_url}", "${JSON.stringify(profile.answers)}");
             SELECT id FROM friends ORDER BY id DESC LIMIT 1;`;

        pool.query(sql_command, (error, results) => {
            if (error) throw error;

         
            friends.push(Object.assign({}, {"id": results[1][0].id}, profile));
        });
    }

    this.getFriends = function() {
        return friends;
    }

    this.findBestFriend = function(profile) {
       
        friends.sort((a, b) => findDifference(a, profile) - findDifference(b, profile));

        return friends[0];
    }
}