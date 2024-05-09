using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactContextDemo.Web.Controllers
{
    public enum Status
    {
        Pending,
        Confirmed,
        Declined
    }

    public class Information
    {
        public string Name { get; set; }
        public Status Status { get; set; }
    }

    //public class Candidate
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //    public Status Status { get; set; }
    //}

    [Route("api/[controller]")]
    [ApiController]
    public class EnumDemoController : ControllerBase
    {
        [HttpGet("GetInfo")]
        public Information GetInfo()
        {
            return new Information
            {
                Name = "John Doe",
                Status = Status.Pending
            };
        }
    }
}
