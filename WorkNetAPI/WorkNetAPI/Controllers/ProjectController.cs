using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WorkNet.Concern;
using WorkNet.Contract;
using WorkNet.Provider;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase {
        private IProjectServices ProjectServices { get; set; }
        public ProjectController(IProjectServices projectServices)
        {
            ProjectServices = projectServices;

        }
        // GET api/<ValuesController>/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await ProjectServices.GetById(id));
        }

        // PUT api/<ValuesController>/5
        [Authorize]
        [HttpPut("{id}")]
        public IActionResult  Put([FromBody] Project concern)
        {
            return Ok(ProjectServices.Update(concern));

        }

        // POST api/<ValuesController>/5
        [Authorize]
        [HttpPost]
        public IActionResult Post([FromBody] Project concern)
        {
            return Ok(ProjectServices.Add(concern));

        }

        // DELETE api/<ValuesController>/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(ProjectServices.Delete(id));
        }

        // DELETE api/<ValuesController>/5
        [Authorize]
        [HttpGet("all")]
        public IActionResult GetAll()
        {
            return Ok(ProjectServices.GetAll());
        }

    }
}

