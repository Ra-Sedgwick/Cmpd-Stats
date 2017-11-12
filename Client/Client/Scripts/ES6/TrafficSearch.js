class TrafficSearch {

    constructor(
        _startDate,
        _endDate,
        _reason,
        _officerRace,
        _officerGender,
        _experienceMin,
        _experienceMax,
        _driverRace,
        _driverAgeMin,
        _driverAgeMax,
        _search,
        _result,
        _division
    ) {
        this.startDate = _startDate;
        this.endDate = _endDate;
        this.reason = _reason;
        this.officerRace = _officerRace;
        this.officerGender = _officerGender;
        this.experienceMin = _experienceMin;
        this.experienceMax = _experienceMax;
        this.driverAgeMin = _driverAgeMax;
        this.driverAgeMax = _driverAgeMax;
        this.search = _search;
        this.result = _result;
        this.division = _division;
    }

}

export default TrafficSearch;