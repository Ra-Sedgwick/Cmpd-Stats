//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace App.Models
{
    using System;
    
    public partial class GetOfficerShootings_Result
    {
        public Nullable<int> INCIDENT_ID { get; set; }
        public string YEAR_MONTH { get; set; }
        public string LOCATION { get; set; }
        public string DA_LEGAL_REVIEW { get; set; }
        public string NARRATIVE { get; set; }
        public Nullable<int> YR { get; set; }
        public Nullable<int> MN { get; set; }
        public Nullable<double> Latitude { get; set; }
        public Nullable<double> Longitude { get; set; }
        public string INDIVIDUAL_RACE { get; set; }
        public Nullable<double> INDIVIDUAL_AGE { get; set; }
        public string INDIVIDUAL_GENDER { get; set; }
        public string INDIVIDUAL_INJURY_TYPE { get; set; }
        public string OFFICER_GENDER { get; set; }
        public string OFFICER_RACE { get; set; }
        public Nullable<double> OFFICER_EXPERIENCE_YEARS { get; set; }
        public string OFFICER_POLICY_VIOLATION { get; set; }
    }
}
