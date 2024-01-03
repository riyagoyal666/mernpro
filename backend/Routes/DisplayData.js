
// const express = require('express');
// const router = express.Router();
// route.post('/foodData',(req,res)=>{
//     try{
//         console.log(global.sample);
//         res.send([global.sample,global.sample1])
//     }catch(error){
//         console.error(error.message);
//         res.send("server error")
//     }
// })
// module.exports=router;



const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        console.log(global.sample);
        res.send([global.sample, global.sample1]);
    } catch (error) {
        console.error(error.message);
        res.send("server error");
    }
});

module.exports = router;


