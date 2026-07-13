const session = require('express-session');

module.exports = {
    store : new session.MemoryStore()
}