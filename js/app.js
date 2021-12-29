const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const { resolveSoa } = require('dns')
const { runInThisContext } = require('vm')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.listen(80, function() {
    console.log('80端口监听中');
})

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'ji_wang'
})

app.post('/login', (req, res) => {
    const sqlstr = 'select * from liao_user where username=?&&password=?'
    db.query(sqlstr, [req.body.username, req.body.password], (err, results) => {
        if (err) {
            return res.send({
                message: err.message
            })
        }
        if (results.length === 1) {
            //查询成功，实行登录
            return res.send({
                status: 0,
                message: '登录成功!',
                username: req.body.username
            })
        } else {
            return res.send({
                status: 1,
                mes: 'err',
                message: '登录失败,账号或密码错误!'
            })
        }
    })
})


app.post('/zhuce', (req, res) => {
    const sqlstr = 'select * from liao_user where username=?&&password=?'
    db.query(sqlstr, [req.body.username, req.body.password], (err, results) => {
        if (err) {
            return res.send({
                message: err.message
            })
        }
        if (results.length === 1) {
            return res.send({
                status: 1,
                mes: 'err',
                message: '注册失败，已经存在该用户!'
            })
        } else {
            const sqlstr = 'insert into liao_user(username,password) values (?,?)'
            db.query(sqlstr, [req.body.username, req.body.password], (err, results) => {
                if (err) {
                    return res.send({
                        message: err.message
                    })
                }
                if (results.affectedRows == 1) {
                    return res.send({
                        status: 0,
                        message: '注册成功!'
                    })
                }
            })
        }
    })
})


app.post('/haoyou', (req, res) => {
    const sqlstr = 'select * from liao_haoyou where username=?'
    db.query(sqlstr, [req.body.username], (err, results) => {
        if (err) {
            return res.send({ message: err.message })
        }
        if (results.length == 1) {
            return res.send({
                status: 0,
                message: '获取好友列表成功',
                haoyou_touxiang: results[0].haoyou_touxiang,
                haoyou_name: results[0].haoyou_name,
            })
        }
    })
})

//获取聊天记录

app.post('/jilu', (req, res) => {
    const sqlstr = 'select * from liao_jilu'
    db.query(sqlstr, [], (err, results) => {
        if (err) { return res.send({ message: err.message }) }
        if (results != 0) {
            return res.send({
                status: 0,
                message: '获取聊天记录成功',
                jilu: results
            })
        }
    })
})

//存储聊天记录

app.post('/cunchu', (req, res) => {
    const sqlstr = 'insert into liao_jilu(username,jilu) values(?,?)'
    db.query(sqlstr, [req.body.username, req.body.jilu], (err, results) => {
        if (err) {
            return res.send({ message: err.message })
        }
        if (results.affectedRows == 1) {
            return res.send({
                status: 0,
                message: '聊天数据存储成功'
            })
        }
    })
})