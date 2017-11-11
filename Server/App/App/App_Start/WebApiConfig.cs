using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace App
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
                                   
            var prod = new EnableCorsAttribute("http://cmpdstatistics.azurewebsites.net", "*", "*");
            var dev = new EnableCorsAttribute("http://localhost:50425", "*", "*");

            config.EnableCors(prod);
            config.EnableCors(dev);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
