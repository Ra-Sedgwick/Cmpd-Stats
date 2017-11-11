using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using App.Models;

namespace App.Controllers
{
    public class TrafficStopsController : ApiController
    {
        private CmpdEntities db = new CmpdEntities();

        // GET: api/TrafficStops
        [ResponseType(typeof(TrafficStop))]
        public IHttpActionResult GetTrafficStops()
        {
            List<TrafficStop> stops = db.TrafficStops.Take(100).ToList();
            return Ok(stops);
        }

        [HttpGet]
        [ResponseType(typeof(TrafficStop))]
        public IHttpActionResult OrderBy(String action, String order)
        {
            action = action ?? "empty";
            order = action ?? "empty";
            List<TrafficStop> stops = db.OrderedTrafficStops(action, order).Take(100).ToList();
            return Ok(stops);
        }

        // GET: api/TrafficStops/5
        [ResponseType(typeof(TrafficStop))]
        public IHttpActionResult GetTrafficStop(int id)
        {
            TrafficStop trafficStop = db.TrafficStops.Find(id);
            if (trafficStop == null)
            {
                return NotFound();
            }

            return Ok(trafficStop);
        }

        [HttpGet]
        [Route("api/TrafficStops/Search")]
        [ResponseType(typeof(TrafficStop))]
        public IHttpActionResult Search(
            String start = null,
            String end = null,
            String reason = null,
            String officerRace = null,
            String officerGender = null,
            int experienceMin = 0,
            int experienceMax = 200,
            String driverRace = null,
            String driverGender = null,
            int driverAgeMin = 0,
            int driverAgeMax = 200,
            String search = null,
            String result = null,
            String division = null)
        {
            DateTime? startDate = null;
            DateTime? endDate = null;

            try
            {
                startDate = DateTime.Parse(start);
                endDate = DateTime.Parse(end);
            }
            catch (ArgumentNullException) { }
            catch (FormatException) {}

            List<TrafficStop> stops = db.SearchTrafficStops(
                startDate,
                endDate,
                reason,
                officerRace,
                officerGender,
                experienceMin,
                experienceMax,
                driverRace,
                driverGender,
                driverAgeMin,
                driverAgeMax,
                search,
                result,
                division
                ).Take(100).ToList();

            return Ok(stops);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TrafficStopExists(int id)
        {
            return db.TrafficStops.Count(e => e.ObjectID == id) > 0;
        }
    }
}