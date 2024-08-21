
const insertData = (req,res)=>{
    try{
        const data = req.body;
        
       const thumbnail = req.files.thumbnail[0].filename;

       if(thumbnail) data.thumbnail = thumbnail;

       const images = req.files.images.map((fileDetails)=> fileDetails.filename);
       
       data.images = images;

       console.log(data);

        res.status(200).json({message: 'success'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = insertData;

// for single file -> req.file