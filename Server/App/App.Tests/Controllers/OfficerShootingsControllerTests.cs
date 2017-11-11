using Microsoft.VisualStudio.TestTools.UnitTesting;
using App.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using App.Models;
using Moq;
using System.Data.Entity;
using App.Tests;
using System.Net.Http;
using System.Web.Http.Results;

namespace App.Controllers.Tests
{
    [TestClass()]
    public class OfficerShootingsControllerTests
    {


        [TestMethod()]
        public void GetOfficerShootingsTest()
        {
            // Arrange
            CmpdEntities context = GetOfficerShootings();
            OfficerShootingsController controller = new OfficerShootingsController(context)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.GetOfficerShootings()
                as OkNegotiatedContentResult<List<GetOfficerShootings_Result>>;

            var shooting = response.Content.First();

            // Assert
            Assert.IsNotNull(response);
            Assert.IsNotNull(shooting);
        }

        [TestMethod()]
        public void GetOfficerShootingsById()
        {
            // Arrange
            int id = 7307;
            CmpdEntities context = GetOfficerShootings();
            List<GetOfficerShootings_Result> db = context.GetOfficerShootings();

            OfficerShootingsController controller = new OfficerShootingsController(context)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var response = controller.GetOfficerShootings(id)
                as OkNegotiatedContentResult<GetOfficerShootings_Result>;

            var shooting = db.Find(s => s.INCIDENT_ID == id);

            // Assert
            Assert.IsNotNull(response);
            Assert.AreEqual(shooting.INCIDENT_ID, response.Content.INCIDENT_ID);
        }

        [TestMethod()]
        public void OrderByTest()
        {
            // Arrange
            CmpdEntities context = new CmpdEntities();
            List<GetOfficerShootings_Result> db = context.GetOfficerShootings();

            OfficerShootingsController controller = new OfficerShootingsController(context)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };

            // Act
            var AscResponse = controller.OrderBy("date", "ascending")
                as OkNegotiatedContentResult<List<GetOfficerShootings_Result>>;

            var DescResponse = controller.OrderBy("date", "descending")
                as OkNegotiatedContentResult<List<GetOfficerShootings_Result>>;

            DateTime ascFirst = DateTime.Parse(AscResponse.Content.First().YEAR_MONTH);
            DateTime ascLast = DateTime.Parse(AscResponse.Content.Last().YEAR_MONTH);
            DateTime descFirst = DateTime.Parse(DescResponse.Content.First().YEAR_MONTH);
            DateTime descLast = DateTime.Parse(DescResponse.Content.Last().YEAR_MONTH);

            // Assert
            Assert.IsTrue(ascFirst < ascLast);
            Assert.IsTrue(descFirst > descLast);
        }

        [TestMethod()]
        public void GetOfficerShootingsTest1()
        {
            // Arrange
            String startDate = "1/1/2016";
            String endDate = "12/31/2016";
            CmpdEntities context = new CmpdEntities();
            List<GetOfficerShootings_Result> db = context.GetOfficerShootings();

            OfficerShootingsController controller = new OfficerShootingsController(context)
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };


            // Act
            var response = controller.GetOfficerShootings(startDate, endDate)
                as OkNegotiatedContentResult<List<GetOfficerShootings_Result>>;

            // Assert
            Assert.IsNotNull(response);
            Assert.IsFalse(response.Content.Exists(s => s.YR != 2016));
        }

        private CmpdEntities GetOfficerShootings()
        {
            CmpdEntities context = new CmpdEntities
            {
                OfficerShootingIncidents = Utility.GetQueryableMockDbSet(
                new OfficerShootingIncident
                {
                    INCIDENT_ID = 7307,
                    YEAR_MONTH = "2008-08",
                    LOCATION = "ORVIS STREET, CHARLOTTE 28216",
                    DA_LEGAL_REVIEW = "Legally Justified",
                    NARRATIVE = "Officers served a high risk search warrant. Upon making entry, a male inside the house fired a pistol at an officer.  The officer returned fire with his service pistol, striking the individual.",
                    ObjectID = 1,
                    YR = 2008,
                    MN = 8,
                    Latitude = 35.2526941601,
                    Longitude = -80.8497010414
                }

            ),

                OfficerShootingIndividuals = Utility.GetQueryableMockDbSet(
                new OfficerShootingIndividual
                {
                    INCIDENT_ID = 7307,
                    INDIVIDUAL_RACE = "Black",
                    INDIVIDUAL_GENDER = "Male",
                    INDIVIDUAL_AGE = 36,
                    INDIVIDUAL_INJURY_TYPE = "Non-Fatal Injury",
                    ObjectID = 23,
                    YR = 2008,
                    Latitude = 35.2526941601,
                    Longitude = -80.8497010414
                }
            ),

                OfficerShootingOfficers = Utility.GetQueryableMockDbSet(
                new OfficerShootingOfficer
                {
                    INCIDENT_ID = 7307,
                    OFFICER_RACE = "White",
                    OFFICER_GENDER = "Male",
                    OFFICER_EXPERIENCE_YEARS = 4,
                    OFFICER_POLICY_VIOLATION = "No",
                    ObjectID = 26,
                    YR = 2008,
                    Latitude = 35.2526941601,
                    Longitude = -80.8497010414
                }

                )
            };

            return context;
        }

        
    }
}