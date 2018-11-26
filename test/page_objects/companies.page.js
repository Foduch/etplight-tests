import MainPage from './main.page'
import Grid from './grid'
var grid = new Grid()

class CompaniesPage extends MainPage{





    open(){
        super.openPage(super.companiesLink)
    }


    

}

export default CompaniesPage