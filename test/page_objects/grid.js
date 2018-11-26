class Grid {

    get columnsSettingsButton() { return $('//mat-icon[text()=" settings "]/../..') }
    get clearAllFiltersButton() { return $('//mat-icon[contains(@svgicon, "unfilter")]/../..') }
    get nextGridPageButton() { return $('//button[contains(@class, "mat-paginator-navigation-next")]') }
    get prebiousGridPageButton() { return $('//button[contains(@class, "mat-paginator-navigation-previous")]') }
    get paginatorRangeLabel() { return $('//div[contains(@class, "mat-paginator-range-label")]') }
    get countElemetnsPerPageWrapper() { return $('//div[contains(@class, "mat-form-field-wrapper")]') }
    getElementsCountOption(count) { return $(`//mat-option/span[text()="${count}"]`) }

    get nameHeader() { return $('//th[contains(@class, "name")]') }
    get employeesHeader() { return $('//th[contains(@class, "employeesCount")]') }
    get innHeader() { return $('//th[contains(@class, "inn")]') }
    get registrationDateHeader() { return $('//th[contains(@class, "registrationDate")]') }
    get participaionsCountHeader() { return $('//th[contains(@class, "participationsCount")]') }
    get kppHeader() { return $('//th[contains(@class, "kpp")]') }
    get countryHeader() { return $('//th[contains(@class, "country")]') }
    get regionHeader() { return $('//th[contains(@class, "region")]') }
    get cityHeader() { return $('//th[contains(@class, "city")]') }
    get emailHeader() { return $('//th[contains(@class, "email")]') }
    get phoneHeader() { return $('//th[contains(@class, "phone")]') }
    get siteHeader() { return $('//th[contains(@class, "site")]') }
    get winsCountHeader() { return $('//th[contains(@class, "winsCount")]') }

    //column filter
    get filterValueInput() { return $('//input') }
    get clearFilterButton() { return $('//div/button[contains(@class, "mat-button")]') }
    get applyFilterButton() { return $('//div/button[contains(@class, "mat-raised-button")]') }

    setFilter(columnHeader, value) {
        if (columnHeader.isExisting('//div/cgn-filter-header')) {
            var filterButton = columnHeader.$('//div/cgn-filter-header')
        }
        else {
            return null
        }
        filterButton.click()
        browser.pause(this.pauseDuration)
        this.filterValueInput.setValue(value)
        this.applyFilterButton.click()
    }

    isSortable(columnHeader) {
        return !(columnHeader.getAttribute('class').indexOf('sortable') == -1)
    }

}

module.exports = Grid