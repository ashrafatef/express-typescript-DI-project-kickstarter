export const production = {
    port : process.env.PORT || 3000,
    db:{
        host: process.env.host || 'localhost',
        user: process.env.user || '',
        password: process.env.password || '',
        name: process.env.name || '',
    },
    crypto:{ 
        secret: process.env.secret || '',
        expiresIn:'2h'
    }
}