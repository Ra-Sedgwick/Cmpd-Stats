using App.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace App.Controllers
{
    public class OfficerShootingsController : ApiController
    {

        private CmpdEntities db;

        public OfficerShootingsController() => db = new CmpdEntities();

        public OfficerShootingsController(CmpdEntities _db)
        {
            db = _db;
        }
        //private CmpdEntities db = new CmpdEntities();

        // GET: api/OfficerShootings
        [ResponseType(typeof(List<GetOfficerShootings_Result>))]
        public IHttpActionResult GetOfficerShootings()
        {
            var shootings = db.GetOfficerShootings().ToList();
            return Ok(shootings);
        }

        //Get: api/officerShootings/orderby
        [HttpGet]
        [ResponseType(typeof(List<GetOfficerShootings_Result>))]
        public IHttpActionResult OrderBy(String action, String order)
        {
            action = action ?? "empty";
            order = order ?? "empty";
            
            return Ok(db.GetOrderedShootings(action, order));
        }


        // GET: api/OfficerShootings/id
        [ResponseType(typeof(GetOfficerShootings_Result))]
        public IHttpActionResult GetOfficerShootings(int id)
        {
            var shootings = db.GetOfficerShootings().ToList();
            shootings = shootings.Where(s => s.INCIDENT_ID == id).ToList();

            if (shootings == null)
                return NotFound();

            return Ok(shootings.First());
        }


        // Get: api/OfficerShooting/range
        [ResponseType(typeof(GetOfficerShootings_Result))]
        public IHttpActionResult GetOfficerShootings(String start, String end, String order = "Ascending")
        {
            try
            {
                DateTime shootingStart = DateTime.Parse(start);
                DateTime shootingEnd = DateTime.Parse(end);
                return Ok(db.GetOfficerShootingsInRange(shootingStart, shootingEnd, order));
            }
            catch (ArgumentException)
            {
                Debug.WriteLine("Null parameter");
                return NotFound();
            }
            catch (FormatException)
            {
                Debug.WriteLine("Invalid parameters");
                return NotFound();
            }
        }

        // Get: api/OfficerShootings/race
        [ResponseType(typeof(GetOfficerShootings_Result))]
        public IHttpActionResult GetShootingByRace(String race)
        {
            race = race.ToLower();

            return Ok(db.GetOfficerShootings().Where(ois => ois.OFFICER_RACE.ToLower().Equals(race)).ToList());
        }


        // GET: api/OfficerShootings/search
        [HttpGet]
        [Route("api/OfficerShootings/search")]
        [ResponseType(typeof(GetOfficerShootings_Result))]
        public IHttpActionResult SearchShootings(
            String startDate = null,
            String endDate = null,
            String officerRace = null,
            String individualRace = null,
            int individualAgeMin = 0,
            int individualAgeMax = 200,
            String policyVioladion = null,
            String injuryType = null,
            int officerExperainceMin = 0,
            int officerExperianceMax = 200,
            String officerGender = null,
            String individualGender = null)
        {

            DateTime? start;
            DateTime? end;

            try
            {
                start = DateTime.Parse(startDate);
                end = DateTime.Parse(endDate);
            }
            catch (ArgumentNullException)
            {
                start = null;
                end = null;
            }
            catch (FormatException)
            {
                start = null;
                end = null;
            }

                List<GetOfficerShootings_Result> shootings = db.SearchOfficerShootings(
                    start,
                    end,
                    officerRace,
                    individualRace,
                    individualAgeMin,
                    individualAgeMax,
                    policyVioladion,
                    injuryType,
                    officerExperainceMin,
                    officerExperianceMax,
                    officerGender,
                    individualGender
                    );

                return Ok(shootings);
        }
    }
}
