const searchOrphanages = require('./database/fakedata',)

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    searchOrphanages(req, res) {
        return res.render('search-orphanages', { searchOrphanages })
    },

    pageOrphanage(req, res) {
        return res.render('page-orphanage')
    },
    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}