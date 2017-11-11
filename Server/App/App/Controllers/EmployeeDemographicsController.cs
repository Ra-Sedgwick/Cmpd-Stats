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
    
    public class EmployeeDemographicsController : ApiController
    {
        private CmpdEntities db = new CmpdEntities();

        // GET: api/EmployeeDemographics
        public IQueryable<EmployeeDemographic> GetEmployeeDemographics()
        {
            return db.EmployeeDemographics;
        }

        // GET: api/EmployeeDemographics/5
        [ResponseType(typeof(EmployeeDemographic))]
        public IHttpActionResult GetEmployeeDemographic(int id)
        {
            EmployeeDemographic employeeDemographic = db.EmployeeDemographics.Find(id);
            if (employeeDemographic == null)
            {
                return NotFound();
            }

            return Ok(employeeDemographic);
        }

        [HttpGet]
        [ResponseType(typeof(EmployeeDemographic))]
        public IHttpActionResult OrderBy(String action, String order)
        {
            action = action ?? "empty";
            order = order ?? "empty";

            return Ok(db.OrderByDemographics(action, order));
        }

        [HttpGet]
        [Route("api/EmployeeDemographics/search")]
        [ResponseType(typeof(EmployeeDemographic))]
        public IHttpActionResult Search(
            String title = null,
            int? experienceMin = 0,
            int? experienceMax = 200,
            int? ageMin = 0,
            int? ageMax = 200,
            String gender = null,
            String race = null)
        {
            return Ok(db.SearchEmployeeDemographics(
                title,
                experienceMin,
                experienceMax,
                ageMin,
                ageMax,
                gender,
                race)
            );
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeDemographicExists(int id)
        {
            return db.EmployeeDemographics.Count(e => e.ObjectID == id) > 0;
        }
    }
}