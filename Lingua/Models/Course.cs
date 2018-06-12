using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lingua.Models
{
	public class Course
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public Language From { get; set; }
		public Language To { get; set; }
		public List<Lesson> Lessons { get; set; }
	}
}
