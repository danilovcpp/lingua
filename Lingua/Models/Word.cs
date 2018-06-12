using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lingua.Models
{
	public class Word
	{
		public int Id { get; set; }
		public string Native { get; set; }
		public string Translation { get; set; }
		public Course Course { get; set; }
	}
}
