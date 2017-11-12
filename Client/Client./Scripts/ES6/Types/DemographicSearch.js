class DemographicSearch {
    constructor(
        _title,
        _experienceMin,
        _experienceMax,
        _ageMin,
        _ageMax,
        _gender,
        _race
    ) {
        this.title = _title;
        this.experienceMin = _experienceMin;
        this.experienceMax = _experienceMax;
        this.ageMin = _ageMin;
        this.ageMax = _ageMax;
        this.gender = _gender;
        this.race = _race;
    }
}

export default DemographicSearch;