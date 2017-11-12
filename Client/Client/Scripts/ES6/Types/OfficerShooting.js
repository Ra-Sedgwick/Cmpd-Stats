class OfficerShooting {
    constructor(shooting) {
        this.id = shooting.INCIDENT_ID;
        this.year = shooting.YR;
        this.month = shooting.MN;
        this.location = shooting.LOCATION;
        this.legalReview = shooting.DA_LEAGL_REVIEW;
        this.narrative = shooting.NARRATIVE;
        this.latitude = shooting.Latitude;
        this.longitude = shooting.Longitude;
        this.individualRace = shooting.INDIVIDUAL_RACE;
        this.individualAge = shooting.INDIVIDUAL_AGE;
        this.individualGender = shooting.INDIVIDUAL_GENDER;
        this.injuryType = shooting.INDIVIDUAL_INJURY_TYPE;
        this.officerGender = shooting.OFFICER_GENDER;
        this.officerRace = shooting.OFFICER_RACE;
        this.officerExperience = shooting.OFFICER_EXPERIENCE_YEARS;
        this.policyViolation = shooting.OFFICER_POLICY_VIOLATION;
    }
}

export default OfficerShooting;