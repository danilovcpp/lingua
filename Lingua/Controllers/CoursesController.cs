using System;
using System.IO;
using System.Threading.Tasks;
using Lingua.Models;
using Lingua.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

namespace Lingua.Controllers
{
	[Route("api/courses")]
	public class CoursesController : Controller
	{
		private readonly ILinguaService _service;

		public CoursesController(ILinguaService service)
		{
			_service = service;
		}

		[HttpGet]
		public async Task<IActionResult> Get()
		{
			var courses = await _service.GetCourses();
			return Ok(courses);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromBody] Course course)
		{
			var newCourse = await _service.CreateCourse(course);
			return Ok(newCourse);
		}

		[HttpPatch]
		public async Task<IActionResult> Update([FromBody] Course course)
		{
			var updated = await _service.UpdateCourse(course);
			return Ok(updated);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await _service.DeleteCourse(id);
			return Ok();
		}

		[HttpPost("load")]
		public async Task<IActionResult> Load()
		{
			var files = HttpContext.Request.Form.Files;
			var file = files[0];

			using (var ms = new MemoryStream())
			{
				file.CopyTo(ms);
				var fileBytes = ms.ToArray();
				_service.Load(fileBytes);
			}

			return Ok();
		}

		[HttpGet("listen/{id}")]
		public async Task<IActionResult> Listen(int id)
		{
			var word = _service.GetWord(id);

			Stream memStream = new MemoryStream(word.Audio);

			return new FileStreamResult(memStream, new MediaTypeHeaderValue("audio/mpeg"));
		}
	}
}