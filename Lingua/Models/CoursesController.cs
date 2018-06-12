using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lingua.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lingua.Models
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
	}
}