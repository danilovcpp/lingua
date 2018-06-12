using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lingua.Models;
using Microsoft.EntityFrameworkCore;

namespace Lingua.Services
{
	public class LinguaService : ILinguaService
	{
		private readonly LinguaContext _context;

		public LinguaService(LinguaContext context)
		{
			_context = context;
		}

		public async Task<IEnumerable<Course>> GetCourses()
		{
			return await _context.Courses.ToListAsync();
		}

		public async Task<Course> CreateCourse(Course course)
		{
			_context.Courses.Add(course);
			await _context.SaveChangesAsync();
			return course;
		}

		public async Task<Course> UpdateCourse(Course course)
		{
			_context.Courses.Update(course);
			await _context.SaveChangesAsync();
			return course;
		}

		public async Task DeleteCourse(int id)
		{
			var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == id);
			_context.Courses.Remove(course);
			await _context.SaveChangesAsync();
		}
	}
}
