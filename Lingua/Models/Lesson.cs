using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lingua.Models
{
	public class Lesson
	{
		public int Id { get; set; }
		public Course Course { get; set; }
		public List<Word> Words { get; set; }
	}
}
