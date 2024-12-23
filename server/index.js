const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const multer = require('multer')
const ProjectModel = require('./models/User')
const ExpModel = require('./models/Experience')


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))



mongoose.connect('mongodb+srv://Pranesh:Pranesh962003@cluster0.x0xuf.mongodb.net').then(console.log('connected')
).catch(err=>console.log(err)
)




const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})







app.get('/projects',(req,res)=>{
    ProjectModel.find({})
    .then(users=>res.send(users))
    .catch(err=>console.log(err)
    )
})




app.get('/Projects/update/:id',(req,res)=>{
    const id = req.params.id
    ProjectModel.findById(id)
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err);
        
    })
    
})


app.put('/Projects/update/data/:id',upload.single(),(req,res)=>{
    const id = req.params.id
    ProjectModel.findByIdAndUpdate(id,{title:req.body.title, description:req.body.description, link1:req.body.link1, link2:req.body.link2})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err);
        
    })
    
    
})

app.delete('/Projects/delete/:id',(req,res)=>{
    const id = req.params.id
    ProjectModel.findByIdAndDelete(id)
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err);
        
    })
    
})




app.post('/Projects/add/data',upload.single('file'),(req,res)=>{
    ProjectModel.create({title:req.body.title, description:req.body.description, link1:req.body.link1, link2:req.body.link2, image:req.file.filename})
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err);
        
    })
    
})









//--------------------Exp-------------------------//



app.get('/Experience',(req,res)=>{
    ExpModel.find({})
    .then(result=>{
        res.send(result)
    }).catch(
        err=>{
            console.log(err);
            
        }
    )
})


app.post('/Exp/add',upload.single(),(req,res)=>{
    const {role} = req.body
    ExpModel.create({comapny:req.body.comapny, role:req.body.role, des:req.body.des})
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err);
        
    })
    
})

app.get('/Experience/:id',(req,res)=>{
    const id = req.params.id
    ExpModel.findById(id)
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err);
        
    })
    
})




app.put('/Exp/update/:id',upload.single(),(req,res)=>{
    const id =req.params.id
    ExpModel.findByIdAndUpdate(id,{comapny:req.body.comapny, role:req.body.role, des:req.body.des})
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err);
        
    })
    
})


app.delete('/Experience/delete/:id',(req,res)=>{
    const id = req.params.id
    // console.log(id);

    ExpModel.findByIdAndDelete(id)
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err);
        
    })
    
})


app.listen(3002,()=>{
    console.log('server is running');
    
})
