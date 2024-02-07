using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [AllowAnonymous]
        [HttpGet("")]
        public async Task<IActionResult> GetSomething(){
            Console.WriteLine("Hello from server!");

            return Ok(new {hello = "world"});
        }
    }
}
