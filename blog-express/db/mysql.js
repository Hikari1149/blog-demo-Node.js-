const mysql=require('mysql')
const {MYSQL_CONF}=require('../config/db')

//创建连接对象

const con=mysql.createConnection(MYSQL_CONF)
con.connect()

//统一执行sql的函数
function exec(sql){
    const promise=new Promise((resolve,reject)=>{
        con.query(sql,(err,res)=>{
            if(err){
                reject(err)
                return
            }
            resolve(res)
        })
    })
    return promise
}
module.exports={
    exec,
    escape:mysql.escape
}