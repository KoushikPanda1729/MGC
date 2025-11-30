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
    title: "Subject Teacher – Class 6 to 8",
    department: "Academics",
    location: "Medinipur (Offline)",
    type: "Full-time",
    description:
      "We are looking for passionate teachers for Class 6–8 (Maths, Science, English, SST). Help students build strong fundamentals and score higher in school exams.",
    responsibilities: [
      "Teach assigned subjects to students of Class 6–8",
      "Prepare lesson plans and daily class activities",
      "Conduct regular tests and evaluate student performance",
      "Clear doubts and support each student individually",
      "Maintain class discipline and learning environment",
    ],
    qualifications: [
      "Bachelor's degree in any discipline (B.Sc / B.A preferred)",
      "Good subject knowledge and communication skills",
      "Prior teaching experience is a plus",
      "Ability to manage and motivate school students",
    ],
  },

  {
    id: "2",
    title: "Subject Teacher – Class 9 & 10",
    department: "Academics",
    location: "Medinipur (Offline)",
    type: "Full-time",
    description:
      "We are hiring dedicated teachers for Class 9–10 (Maths, Physical Science, Life Science, English). Join us in helping students excel in board-level preparation.",
    responsibilities: [
      "Teach core subjects for Class 9–10",
      "Prepare students for school and board examinations",
      "Conduct weekly and monthly assessments",
      "Provide doubt-clearing sessions and personalized guidance",
      "Maintain academic records for each student",
    ],
    qualifications: [
      "Bachelor’s or Master’s degree in relevant subject",
      "Strong understanding of the Class 9–10 curriculum",
      "Experience in teaching board classes preferred",
      "Patient, disciplined, and student-friendly teaching style",
    ],
  },

  {
    id: "3",
    title: "Senior Subject Teacher – Class 11 & 12",
    department: "Academics",
    location: "Medinipur (Offline)",
    type: "Full-time",
    description:
      "We are hiring experienced teachers for Class 11–12 (Science, Commerce & Arts streams). Help senior secondary students prepare for board exams and competitive foundations.",
    responsibilities: [
      "Teach subject-specific classes (Physics / Chemistry / Maths / Biology / Accountancy / Business Studies / English)",
      "Guide students with clear conceptual understanding",
      "Prepare chapter-wise notes and exam-based questions",
      "Conduct mock tests and track academic progress",
      "Provide mentorship for board exam preparation",
    ],
    qualifications: [
      "Master’s degree in relevant subject",
      "Teaching experience in senior secondary classes required",
      "Strong board exam-oriented teaching approach",
      "Ability to motivate and mentor higher-class students",
    ],
  },

  {
    id: "4",
    title: "Admission Counselor",
    department: "Administration",
    location: "Medinipur (Offline)",
    type: "Full-time",
    description:
      "Join our team as an Admission Counselor and help parents and students choose the right coaching program for Classes 6–12.",
    responsibilities: [
      "Attend walk-in parents and explain course details",
      "Guide students toward the right class/subject batch",
      "Maintain admission records and daily reports",
      "Follow up with inquiries and convert leads to admissions",
      "Coordinate with academic team for batch allotment",
    ],
    qualifications: [
      "Good communication and convincing skills",
      "Experience in counseling or front-desk roles preferred",
      "Basic computer knowledge (Excel, WhatsApp, etc.)",
      "Friendly personality and problem-solving attitude",
    ],
  },
];
