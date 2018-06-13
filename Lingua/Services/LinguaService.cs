using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lingua.Models;
using Lingua.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Lingua.Services
{
	public class LinguaService : ILinguaService
	{
		private readonly ICourseRepository _repository;

		public LinguaService(ICourseRepository repository)
		{
			_repository = repository;
		}

		public async Task<IEnumerable<Course>> GetCourses()
		{
			return await _repository.GetCourses();
		}

		public async Task<Course> CreateCourse(Course course)
		{
			return await _repository.CreateCourse(course);
		}

		public async Task<Course> UpdateCourse(Course course)
		{
			return await _repository.UpdateCourse(course);
		}

		public async Task DeleteCourse(int id)
		{
			await _repository.DeleteCourse(id);
		}

		public void Load(byte[] audio)
		{
			_repository.Load(audio);
		}

		public Word GetWord(int id)
		{
			return _repository.GetWord(id);
		}
	}
}
