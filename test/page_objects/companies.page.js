const MainPage = require('./main.page')
const Grid = require('./grid')
var grid = new Grid()

class CompaniesPage extends MainPage{





    open(){
        super.openPage(super.companiesLink)
    }


    

}

module.exports = CompaniesPage