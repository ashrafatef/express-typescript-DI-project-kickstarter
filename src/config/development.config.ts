export const development = {
    port : process.env.PORT || 3000,
    db:{
        host: process.env.host || 'localhost',
        user: process.env.user || '',
        password: process.env.password || '',
        name: process.env.name || 'tasks_management',
    },
    crypto:{ 
        secret: process.env.secret || '',
        expiresIn:'2h'
    }
}