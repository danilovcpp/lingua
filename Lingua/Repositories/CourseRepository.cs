using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lingua.Models;
using Microsoft.EntityFrameworkCore;

namespace Lingua.Repositories
{
	public class CourseRepository : ICourseRepository
	{
		private readonly LinguaContext _context;

		public CourseRepository(LinguaContext context)
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

		public void Load(byte[] audio)
		{
			var word = new Word {Native= "test", Translation = "test2", Audio = audio};
			_context.Words.Add(word);
			_context.SaveChanges();
		}

		public Word GetWord(int id)
		{
			var word = _context.Words.FirstOrDefault(w => w.Id == id);
			return word;
		}
	}
}
