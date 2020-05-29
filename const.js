const env = require('./env')

let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
    const resUrl = 'http://120.95.132.23:9000'
    const mp3FilePath = 'D:/resource/mp3'
    dbHost = 'localhost'
    dbUser = 'root'
    dbPwd = '123456'
} else if (env === 'prod') {
    resUrl = 'http://49.233.107.207'
    mp3FilePath = '/root/nginx/upload/mp3'
    dbHost = '49.233.107.207'
    dbUser = 'root'
    dbPwd = ''
}

// 所有的分组
const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
]

// 输出一个模块
module.exports = {
    resUrl,
    category,
    mp3FilePath,
    dbHost,
    dbUser,
    dbPwd
}
