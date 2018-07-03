const authPort = '3000';
const ticketingPort = '3002';
const usersPort = '3003';


module.exports = Object.freeze({
    auth: {
        port: authPort,
        url: `http://localhost:${authPort}/auth`
    },
    ticketing: {
        port: ticketingPort,
        url: `http://localhost:${ticketingPort}/ticketing`
    },
    users: {
        port: usersPort,
        url: `http://localhost:${usersPort}/users`
    }
});