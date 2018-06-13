using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lingua.Models;

namespace Lingua.Services
{
	public interface ILinguaService
	{
		Task<IEnumerable<Course>> GetCourses();
		Task<Course> CreateCourse(Course course);
		Task<Course> UpdateCourse(Course course);
		Task DeleteCourse(int id);
		void Load(byte[] audio);
		Word GetWord(int id);
	}
}
