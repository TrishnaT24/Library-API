const db = require("../config/sqldb");

const addShort = (req, res) => {
    const addquery = `
  INSERT INTO SHORTS 
  (category, title, author, publish_date, content, actual_content_link, image, upvote, downvote)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
    const { category, title, author, publish_date, content, actual_content_link, image, upvote, downvote } = req.body;
    db.query(addquery, [category, title, author, publish_date, content, actual_content_link, image, upvote, downvote], (err, response) => {
        if (err) throw err;
        console.log(response);
        // return res.status(200).json("hel");
        return res.status(200).json({
            message: "Short added successfully",
            short_id: response.insertId,
        })
    })
};

const showFeed=(req,res)=>{
    const showquery=`SELECT * FROM SHORTS ORDER BY publish_date DESC, upvote DESC`;
    
    db.query(showquery,(err,response)=>{
        if(err) throw err;
        return res.status(200).json(response);
    })
}

module.exports={addShort, showFeed};