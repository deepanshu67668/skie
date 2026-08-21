import fs from 'fs';
import path from 'path';
import initialData from '@/data/initialData.json';

const dataFilePath = path.join(process.cwd(), 'data', 'initialData.json');

export interface Course {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  skillLevel: string;
  fees: string;
  badge?: string;
  featured: boolean;
  image: string;
  curriculum: string[];
  careerOps: string[];
  eligibility: string;
  toolsCovered: string[];
  certificateProvided: boolean;
}

export interface StudentResult {
  rollNo: string;
  studentName: string;
  fatherName: string;
  course: string;
  year: string;
  session: string;
  grade: string;
  totalMarks: number;
  maxMarks: number;
  percentage: string;
  status: string;
  issueDate: string;
  verificationCode: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  course: string;
  review: string;
  rating: number;
  achievement: string;
  photo: string;
}

export interface Certification {
  id: string;
  title: string;
  authority: string;
  regNo: string;
  description: string;
  imageUrl: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'Follow-up' | 'Converted' | 'Closed';
}

export interface Settings {
  brandName: string;
  shortBrand: string;
  tagline: string;
  subheading: string;
  phone: string;
  phoneAlt: string;
  email: string;
  address: string;
  whatsappNumber: string;
  isoNumber: string;
  trustRegNo: string;
  tradeMarkNo: string;
  laborRegNo: string;
  chairman: {
    name: string;
    title: string;
    message: string;
    image: string;
  };
  stats: {
    studentsTrained: string;
    yearsExcellence: string;
    professionalCourses: string;
    practicalLearning: string;
    studentSatisfaction: string;
  };
}

export interface DBData {
  settings: Settings;
  courses: Course[];
  studentResults: StudentResult[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  certifications: Certification[];
  enquiries: Enquiry[];
}

export function getDB(): DBData {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error('Server DB read error:', error);
  }
  return initialData as DBData;
}

export function saveDB(data: DBData): boolean {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Server DB save error:', error);
    return false;
  }
}
