export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobPostings: JobPosting[] = [
  {
    id: "1",
    title: "English Language Trainer",
    department: "Education",
    location: "Delhi NCR",
    type: "Full-time",
    description: "Join our team as an English Language Trainer and help students improve their communication skills and achieve fluency.",
    responsibilities: [
      "Conduct engaging English language classes for students",
      "Develop and implement innovative teaching methods",
      "Assess student progress and provide constructive feedback",
      "Create a positive and motivating learning environment"
    ],
    qualifications: [
      "Bachelor's degree in English or related field",
      "2+ years of teaching experience",
      "Excellent communication and presentation skills",
      "Passion for education and student development"
    ]
  },
  {
    id: "2",
    title: "Content Developer",
    department: "Curriculum",
    location: "Delhi NCR / Remote",
    type: "Full-time",
    description: "Create engaging educational content that helps students learn English effectively and enjoyably.",
    responsibilities: [
      "Design and develop course materials and curriculum",
      "Create video scripts and learning resources",
      "Collaborate with trainers to ensure content quality",
      "Research and implement best practices in education"
    ],
    qualifications: [
      "Bachelor's degree in Education, English, or related field",
      "Strong writing and content creation skills",
      "Experience in curriculum development",
      "Creative mindset with attention to detail"
    ]
  },
  {
    id: "3",
    title: "Student Counselor",
    department: "Student Success",
    location: "Delhi NCR",
    type: "Full-time",
    description: "Guide and support students in their learning journey, helping them achieve their educational goals.",
    responsibilities: [
      "Provide counseling and guidance to students",
      "Help students set and achieve learning goals",
      "Address student concerns and provide support",
      "Maintain student records and track progress"
    ],
    qualifications: [
      "Bachelor's degree in Psychology, Education, or related field",
      "Excellent interpersonal and communication skills",
      "Empathetic and patient approach",
      "Experience in counseling or student support preferred"
    ]
  },
  {
    id: "4",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Delhi NCR",
    type: "Full-time",
    description: "Drive our digital presence and help more students discover quality education opportunities.",
    responsibilities: [
      "Plan and execute digital marketing campaigns",
      "Manage social media platforms and content",
      "Analyze marketing metrics and optimize strategies",
      "Collaborate with content team for marketing materials"
    ],
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of digital marketing experience",
      "Proficiency in social media marketing and SEO",
      "Strong analytical and creative skills"
    ]
  }
];
