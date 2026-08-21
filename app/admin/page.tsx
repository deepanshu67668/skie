'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DBData, Course, StudentResult, Enquiry, GalleryItem } from '@/lib/db';
import { LayoutDashboard, Users, BookOpen, Award, Image as ImageIcon, MessageSquare, Settings as SettingsIcon, LogOut, Save, Plus, Trash2, CheckCircle2, AlertCircle, Globe, Search, Sparkles, MessageCircle, Phone, ShieldCheck, Flame, Edit3, X, UserCheck } from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DBData | null>(null);
  const [adminKey, setAdminKey] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'courses' | 'results' | 'seo' | 'gallery' | 'settings'>('enquiries');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Search/Filter State inside Admin
  const [enquirySearch, setEnquirySearch] = useState('');

  // Editing States for Modals
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [editingResult, setEditingResult] = useState<StudentResult | null>(null);

  // New Course Form State
  const [newCourse, setNewCourse] = useState<Partial<Course>>({
    name: '',
    category: 'Diploma Courses',
    shortDesc: '',
    fullDesc: '',
    duration: '6 Months',
    fees: '₹1,000 / Month',
    skillLevel: 'Beginner to Advanced',
    image: '/images/course_computer.jpg',
    curriculum: ['Module 1: Computer Fundamentals', 'Module 2: MS Office & Internet Skills'],
    careerOps: ['Office Assistant', 'Data Entry Executive'],
    eligibility: '10th / 12th Pass',
    toolsCovered: ['MS Office', 'Windows 11'],
    certificateProvided: true,
    featured: true,
  });

  // New Result Form State
  const [newResult, setNewResult] = useState<Partial<StudentResult>>({
    rollNo: `SKIE-2026-0${Math.floor(100 + Math.random() * 900)}`,
    studentName: '',
    fatherName: '',
    course: 'Advance Diploma in Computer Applications (ADCA)',
    year: '2026',
    session: 'Jan 2025 - Dec 2025',
    grade: 'A+',
    totalMarks: 475,
    maxMarks: 500,
    percentage: '95%',
    status: 'Passed with Distinction',
    issueDate: new Date().toISOString().split('T')[0],
    verificationCode: `SKIE-VER-${Math.floor(10000 + Math.random() * 90000)}`,
  });

  useEffect(() => {
    const key = localStorage.getItem('skie_admin_key');
    if (!key) {
      router.push('/admin/login');
      return;
    }
    setAdminKey(key);

    fetch('/api/data')
      .then((res) => res.json())
      .then((dbData: DBData) => {
        if (!dbData.settings.seo) {
          dbData.settings.seo = {
            metaTitle: "SKIE Academy | Shri Krishan Institute of Education",
            metaDescription: "Education that builds practical skills for the real world. ISO 9001:2015 & Govt. Registered Institute.",
            keywords: "computer course, ADCA, DCA, Tally Prime, Python, Ghaziabad",
            author: "Shri Krishan Institute of Education",
            ogImage: "/images/campus_facade.jpg",
            googleAnalyticsId: "G-SKIE2026",
            marqueeAnnouncement: "🔥 ADMISSIONS OPEN FOR 2026-2027 BATCHES • ISO 9001:2015 & GOVT. REGISTERED INSTITUTE • 100% DAILY PRACTICAL COMPUTER LABS • CALL ADMISSIONS: +91 8882362470 • SPECIAL SCHOLARSHIPS AVAILABLE • ",
          };
        }
        setData(dbData);
      })
      .catch(() => setMsg({ type: 'error', text: 'Failed to load initial data.' }));
  }, [router]);

  const handleSaveData = async (updatedData: DBData) => {
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey, data: updatedData }),
      });

      if (res.ok) {
        setData(updatedData);
        setMsg({ type: 'success', text: 'Website data & current records updated successfully!' });
      } else {
        setMsg({ type: 'error', text: 'Failed to save changes.' });
      }
    } catch (err) {
      setMsg({ type: 'error', text: 'Error saving changes.' });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('skie_admin_key');
    router.push('/admin/login');
  };

  if (!data) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-slate-600 font-bold font-sans">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin mx-auto" />
          <p>Loading SKIE Control Center...</p>
        </div>
      </div>
    );
  }

  // Stats
  const totalEnquiries = data.enquiries.length;
  const newEnquiries = data.enquiries.filter((e) => e.status === 'New').length;
  const totalCourses = data.courses.length;
  const totalResults = data.studentResults.length;

  const filteredEnquiries = enquirySearch
    ? data.enquiries.filter(
        (e) =>
          e.name.toLowerCase().includes(enquirySearch.toLowerCase()) ||
          e.phone.includes(enquirySearch) ||
          e.course.toLowerCase().includes(enquirySearch.toLowerCase())
      )
    : data.enquiries;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24 font-sans bg-[#FBFBF9]">
      
      {/* Executive Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#050B18] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-[#C5A059]">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-[#C5A059] text-[#050B18] flex items-center justify-center font-serif font-black text-2xl shadow-lg flex-shrink-0">
            S
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40">
                ADMIN CONTROL CENTER
              </span>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE SYSTEM ACTIVE</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              SKIE Academy Management Portal
            </h1>
            <p className="text-xs text-slate-300">
              Edit Live Courses, Student Marksheets, Director Message, SEO Metadata & Ticker
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-md flex items-center space-x-2 self-start sm:self-auto border border-slate-700"
        >
          <LogOut className="w-4 h-4" />
          <span>LOGOUT STAFF</span>
        </button>
      </div>

      {msg && (
        <div
          className={`p-4 rounded-2xl text-xs font-bold flex items-center space-x-2 shadow-md ${
            msg.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-2 border-emerald-300'
              : 'bg-rose-50 text-rose-800 border-2 border-rose-300'
          }`}
        >
          {msg.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
          )}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">New Leads Today</p>
            <p className="text-3xl font-black text-[#050B18] mt-1">{newEnquiries}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Enquiries</p>
            <p className="text-3xl font-black text-[#050B18] mt-1">{totalEnquiries}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#050B18]/10 text-[#050B18] flex items-center justify-center font-bold">
            <Users className="w-6 h-6 text-[#050B18]" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Courses</p>
            <p className="text-3xl font-black text-[#C5A059] mt-1">{totalCourses}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center font-bold">
            <BookOpen className="w-6 h-6 text-[#C5A059]" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Marksheets</p>
            <p className="text-3xl font-black text-emerald-600 mt-1">{totalResults}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Tab Controls Bar */}
      <div className="flex items-center space-x-2 border-b-2 border-slate-200 overflow-x-auto pb-3 scrollbar-none">
        {[
          { id: 'enquiries', label: `ADMISSION LEADS (${totalEnquiries})`, icon: Users },
          { id: 'courses', label: `MANAGE COURSES (${totalCourses})`, icon: BookOpen },
          { id: 'results', label: `MANAGE MARKSHEETS (${totalResults})`, icon: Award },
          { id: 'seo', label: 'SEO & META DATA', icon: Globe },
          { id: 'gallery', label: 'GALLERY MEDIA', icon: ImageIcon },
          { id: 'settings', label: 'DIRECTOR & SETTINGS', icon: SettingsIcon },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center space-x-2 whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#050B18] text-[#C5A059] shadow-lg border border-[#C5A059]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4 text-[#C5A059]" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Admission Enquiries */}
      {activeTab === 'enquiries' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-[#050B18]">Student Admission Leads</h2>
              <p className="text-xs text-slate-500">Real-time enquiries submitted via website splash & enquiry form</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={enquirySearch}
                onChange={(e) => setEnquirySearch(e.target.value)}
                placeholder="Search leads..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#050B18] text-white uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Student Name</th>
                  <th className="p-3.5">Phone Number</th>
                  <th className="p-3.5">Course Requested</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold whitespace-nowrap text-slate-500">{enq.date}</td>
                    <td className="p-3.5 font-bold text-[#050B18]">{enq.name}</td>
                    <td className="p-3.5 font-bold text-[#C5A059]">
                      <a href={`tel:${enq.phone}`} className="hover:underline flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-[#C5A059]" />
                        <span>{enq.phone}</span>
                      </a>
                    </td>
                    <td className="p-3.5 font-semibold text-slate-800">{enq.course}</td>
                    <td className="p-3.5">
                      <select
                        value={enq.status}
                        onChange={(e) => {
                          const updated = {
                            ...data,
                            enquiries: data.enquiries.map((item) =>
                              item.id === enq.id ? { ...item, status: e.target.value as any } : item
                            ),
                          };
                          handleSaveData(updated);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold outline-none border shadow-xs ${
                          enq.status === 'New'
                            ? 'bg-amber-100 text-amber-800 border-amber-300'
                            : enq.status === 'Contacted'
                            ? 'bg-blue-100 text-blue-800 border-blue-300'
                            : enq.status === 'Converted'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Follow-up">Follow-up</option>
                        <option value="Converted">Converted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="p-3.5 text-right flex items-center justify-end space-x-2">
                      <a
                        href={`https://wa.me/91${enq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(enq.name)},%20this%20is%20SKIE%20Academy.%20We%20received%20your%20enquiry%20for%20${encodeURIComponent(enq.course)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 bg-[#25D366] text-white rounded-lg font-bold text-[10px] flex items-center space-x-1 shadow-sm"
                      >
                        <MessageCircle className="w-3 h-3 fill-current" />
                        <span>WHATSAPP</span>
                      </a>
                      <button
                        onClick={() => {
                          const updated = {
                            ...data,
                            enquiries: data.enquiries.filter((item) => item.id !== enq.id),
                          };
                          handleSaveData(updated);
                        }}
                        className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Course Management (With Edit Current Course) */}
      {activeTab === 'courses' && (
        <div className="space-y-6">
          
          {/* Add New Course Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-md space-y-4">
            <h2 className="text-lg font-serif font-bold text-[#050B18] flex items-center space-x-2">
              <Plus className="w-5 h-5 text-[#C5A059]" />
              <span>Add & Publish New Course</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 outline-none"
              />
              <select
                value={newCourse.category}
                onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 bg-white font-semibold outline-none"
              >
                <option>Diploma Courses</option>
                <option>Professional Courses</option>
                <option>Programming & Development</option>
                <option>Female Special Courses</option>
                <option>Teacher Training</option>
              </select>
              <input
                type="text"
                placeholder="Duration (e.g. 12 Months)"
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 outline-none"
              />
              <input
                type="text"
                placeholder="Fees (e.g. ₹1,200 / Month)"
                value={newCourse.fees}
                onChange={(e) => setNewCourse({ ...newCourse, fees: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 outline-none"
              />
              <input
                type="text"
                placeholder="Short Description"
                value={newCourse.shortDesc}
                onChange={(e) => setNewCourse({ ...newCourse, shortDesc: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 sm:col-span-2 outline-none"
              />
            </div>

            <button
              onClick={() => {
                if (!newCourse.name) return;
                const created: Course = {
                  id: `course-${Date.now()}`,
                  name: newCourse.name || 'New Course',
                  category: newCourse.category || 'Diploma Courses',
                  shortDesc: newCourse.shortDesc || '',
                  fullDesc: newCourse.shortDesc || '',
                  duration: newCourse.duration || '3 Months',
                  fees: newCourse.fees || 'Contact Institute',
                  skillLevel: 'Beginner to Advanced',
                  featured: true,
                  image: newCourse.image || '/images/course_computer.jpg',
                  curriculum: ['Module 1: Core Fundamentals', 'Module 2: Practical Office Tools'],
                  careerOps: ['Junior Associate'],
                  eligibility: '10th/12th Pass',
                  toolsCovered: ['MS Office', 'Computer Basics'],
                  certificateProvided: true,
                };
                const updated = { ...data, courses: [created, ...data.courses] };
                handleSaveData(updated);
                setNewCourse({ name: '', shortDesc: '' });
              }}
              className="px-8 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider shadow-md"
            >
              PUBLISH NEW COURSE
            </button>
          </div>

          {/* Published Courses List (With EDIT & DELETE options) */}
          <div className="space-y-3">
            <h3 className="text-base font-serif font-bold text-[#050B18]">Currently Published Courses on Website ({data.courses.length})</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.courses.map((course) => (
                <div key={course.id} className="p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#C5A059] flex items-center justify-between shadow-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#C5A059] bg-[#050B18] px-2.5 py-0.5 rounded">{course.category}</span>
                    <h4 className="font-serif font-bold text-base text-[#050B18]">{course.name}</h4>
                    <p className="text-xs text-slate-600 font-semibold">{course.duration} • <span className="text-[#C5A059] font-bold">{course.fees}</span></p>
                    <p className="text-[11px] text-slate-500 max-w-sm line-clamp-1">{course.shortDesc}</p>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button
                      onClick={() => setEditingCourse(course)}
                      className="px-3 py-1.5 bg-[#050B18] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#050B18] rounded-xl text-xs font-bold transition-colors flex items-center space-x-1 shadow-sm"
                      title="Edit Course"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>EDIT</span>
                    </button>
                    <button
                      onClick={() => {
                        const updated = { ...data, courses: data.courses.filter((c) => c.id !== course.id) };
                        handleSaveData(updated);
                      }}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl"
                      title="Delete Course"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Student Results Management (With Edit Current Result) */}
      {activeTab === 'results' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-md space-y-4">
            <h2 className="text-lg font-serif font-bold text-[#050B18] flex items-center space-x-2">
              <Plus className="w-5 h-5 text-[#C5A059]" />
              <span>Add New Student Examination Result Record</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <input
                type="text"
                placeholder="Roll Number (e.g. SKIE-2026-0201)"
                value={newResult.rollNo}
                onChange={(e) => setNewResult({ ...newResult, rollNo: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 font-mono"
              />
              <input
                type="text"
                placeholder="Student Name"
                value={newResult.studentName}
                onChange={(e) => setNewResult({ ...newResult, studentName: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 font-bold"
              />
              <input
                type="text"
                placeholder="Father's Name"
                value={newResult.fatherName}
                onChange={(e) => setNewResult({ ...newResult, fatherName: e.target.value })}
                className="p-3 rounded-xl border border-slate-300"
              />
              <input
                type="text"
                placeholder="Course Name"
                value={newResult.course}
                onChange={(e) => setNewResult({ ...newResult, course: e.target.value })}
                className="p-3 rounded-xl border border-slate-300 sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Percentage (e.g. 95%)"
                value={newResult.percentage}
                onChange={(e) => setNewResult({ ...newResult, percentage: e.target.value })}
                className="p-3 rounded-xl border border-slate-300"
              />
            </div>

            <button
              onClick={() => {
                if (!newResult.studentName || !newResult.rollNo) return;
                const created: StudentResult = {
                  rollNo: newResult.rollNo || `SKIE-${Date.now()}`,
                  studentName: newResult.studentName || 'Student',
                  fatherName: newResult.fatherName || 'Father Name',
                  course: newResult.course || 'ADCA',
                  year: newResult.year || '2026',
                  session: newResult.session || '2025-2026',
                  grade: newResult.grade || 'A+',
                  totalMarks: newResult.totalMarks || 475,
                  maxMarks: 500,
                  percentage: newResult.percentage || '95%',
                  status: 'Passed with Distinction',
                  issueDate: new Date().toISOString().split('T')[0],
                  verificationCode: `SKIE-VER-${Math.floor(10000 + Math.random() * 90000)}`,
                };
                const updated = { ...data, studentResults: [created, ...data.studentResults] };
                handleSaveData(updated);
                setNewResult({ studentName: '', fatherName: '' });
              }}
              className="px-8 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider shadow-md"
            >
              ADD MARKSHEET RECORD
            </button>
          </div>

          <div className="divide-y divide-slate-100 bg-white rounded-2xl border-2 border-slate-200 p-4">
            {data.studentResults.map((res) => (
              <div key={res.rollNo} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono font-bold text-[#C5A059] bg-[#050B18] px-2 py-0.5 rounded">{res.rollNo}</span> • <span className="font-bold text-[#050B18]">{res.studentName}</span> ({res.course})
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-emerald-600">{res.percentage} (Grade {res.grade})</span>
                  <button
                    onClick={() => setEditingResult(res)}
                    className="px-3 py-1 bg-[#050B18] text-[#C5A059] rounded-lg text-xs font-bold flex items-center space-x-1"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>EDIT</span>
                  </button>
                  <button
                    onClick={() => {
                      const updated = { ...data, studentResults: data.studentResults.filter((r) => r.rollNo !== res.rollNo) };
                      handleSaveData(updated);
                    }}
                    className="text-rose-600 hover:bg-rose-50 p-1.5 rounded-lg"
                    title="Delete Marksheet Record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: SEO & Meta Data Manager */}
      {activeTab === 'seo' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-[#050B18] flex items-center space-x-2">
                <Globe className="w-5 h-5 text-[#C5A059]" />
                <span>SEO & Search Engine Metadata Control Center</span>
              </h2>
              <p className="text-xs text-slate-500">Edit website title, description, keywords, and OpenGraph preview images</p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-[#050B18] mb-1">Website Meta Title Tag (Appears in Google Search Results)</label>
              <input
                type="text"
                value={data.settings.seo?.metaTitle || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    settings: {
                      ...data.settings,
                      seo: { ...(data.settings.seo as any), metaTitle: e.target.value },
                    },
                  })
                }
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:border-[#C5A059] font-semibold"
              />
            </div>

            <div>
              <label className="block font-bold text-[#050B18] mb-1">Meta Description Tag (Google search summary paragraph)</label>
              <textarea
                rows={3}
                value={data.settings.seo?.metaDescription || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    settings: {
                      ...data.settings,
                      seo: { ...(data.settings.seo as any), metaDescription: e.target.value },
                    },
                  })
                }
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#050B18] mb-1">SEO Keywords (Comma separated tags)</label>
                <input
                  type="text"
                  value={data.settings.seo?.keywords || ''}
                  onChange={(e) =>
                    setData({
                      ...data,
                      settings: {
                        ...data.settings,
                        seo: { ...(data.settings.seo as any), keywords: e.target.value },
                      },
                    })
                  }
                  className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#050B18] mb-1">Google Analytics Tracking ID</label>
                <input
                  type="text"
                  value={data.settings.seo?.googleAnalyticsId || ''}
                  onChange={(e) =>
                    setData({
                      ...data,
                      settings: {
                        ...data.settings,
                        seo: { ...(data.settings.seo as any), googleAnalyticsId: e.target.value },
                      },
                    })
                  }
                  className="w-full p-3 rounded-xl border border-slate-300 font-mono outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#050B18] mb-1">OpenGraph Share Image URL (WhatsApp & Facebook link preview)</label>
              <input
                type="text"
                value={data.settings.seo?.ogImage || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    settings: {
                      ...data.settings,
                      seo: { ...(data.settings.seo as any), ogImage: e.target.value },
                    },
                  })
                }
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          <button
            onClick={() => handleSaveData(data)}
            disabled={saving}
            className="px-8 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'SAVING...' : 'SAVE SEO METADATA CHANGES'}</span>
          </button>
        </div>
      )}

      {/* Tab 5: Settings & Chairman Message */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-md space-y-6">
          <h2 className="text-lg font-serif font-bold text-[#050B18] flex items-center space-x-2">
            <SettingsIcon className="w-5 h-5 text-[#C5A059]" />
            <span>Edit Chairman Message & Campus Settings</span>
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-[#050B18] mb-1">Top Announcement Marquee Ticker Text (Movable Banner)</label>
              <input
                type="text"
                value={data.settings.seo?.marqueeAnnouncement || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    settings: {
                      ...data.settings,
                      seo: { ...(data.settings.seo as any), marqueeAnnouncement: e.target.value },
                    },
                  })
                }
                className="w-full p-3 rounded-xl border border-slate-300 outline-none focus:border-[#C5A059] font-semibold"
              />
            </div>

            <div className="p-4 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-3">
              <h3 className="font-bold text-[#050B18] uppercase">Director / Chairman Message Settings</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Chairman Name</label>
                  <input
                    type="text"
                    value={data.settings.chairman?.name || ''}
                    onChange={(e) =>
                      setData({
                        ...data,
                        settings: {
                          ...data.settings,
                          chairman: { ...data.settings.chairman, name: e.target.value },
                        },
                      })
                    }
                    className="w-full p-2.5 rounded-xl border bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Chairman Designation Title</label>
                  <input
                    type="text"
                    value={data.settings.chairman?.title || ''}
                    onChange={(e) =>
                      setData({
                        ...data,
                        settings: {
                          ...data.settings,
                          chairman: { ...data.settings.chairman, title: e.target.value },
                        },
                      })
                    }
                    className="w-full p-2.5 rounded-xl border bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Chairman Message Text</label>
                <textarea
                  rows={4}
                  value={data.settings.chairman?.message || ''}
                  onChange={(e) =>
                    setData({
                      ...data,
                      settings: {
                        ...data.settings,
                        chairman: { ...data.settings.chairman, message: e.target.value },
                      },
                    })
                  }
                  className="w-full p-2.5 rounded-xl border bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#050B18] mb-1">Admissions Phone Number</label>
                <input
                  type="text"
                  value={data.settings.phone}
                  onChange={(e) =>
                    setData({ ...data, settings: { ...data.settings, phone: e.target.value } })
                  }
                  className="w-full p-3 rounded-xl border border-slate-300 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#050B18] mb-1">Official Email Address</label>
                <input
                  type="text"
                  value={data.settings.email}
                  onChange={(e) =>
                    setData({ ...data, settings: { ...data.settings, email: e.target.value } })
                  }
                  className="w-full p-3 rounded-xl border border-slate-300 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#050B18] mb-1">Campus Full Address</label>
              <input
                type="text"
                value={data.settings.address}
                onChange={(e) =>
                  setData({ ...data, settings: { ...data.settings, address: e.target.value } })
                }
                className="w-full p-3 rounded-xl border border-slate-300 outline-none"
              />
            </div>
          </div>

          <button
            onClick={() => handleSaveData(data)}
            disabled={saving}
            className="px-8 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'SAVING...' : 'SAVE SETTINGS & MESSAGE'}</span>
          </button>
        </div>
      )}

      {/* EDIT COURSE MODAL SCREEN */}
      {editingCourse && (
        <div
          onClick={() => setEditingCourse(null)}
          className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-[#C5A059] max-w-xl w-full rounded-2xl shadow-2xl p-6 space-y-4 relative text-xs"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-serif font-bold text-[#050B18]">Edit Course Details</h3>
              <button onClick={() => setEditingCourse(null)} className="p-1 text-slate-500 hover:text-[#050B18]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-bold block mb-1">Course Title</label>
                <input
                  type="text"
                  value={editingCourse.name}
                  onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold block mb-1">Duration</label>
                  <input
                    type="text"
                    value={editingCourse.duration}
                    onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">Fees</label>
                  <input
                    type="text"
                    value={editingCourse.fees}
                    onChange={(e) => setEditingCourse({ ...editingCourse, fees: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={editingCourse.shortDesc}
                  onChange={(e) => setEditingCourse({ ...editingCourse, shortDesc: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                onClick={() => setEditingCourse(null)}
                className="px-4 py-2 bg-slate-200 rounded-xl font-bold"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  const updatedCourses = data.courses.map((c) => (c.id === editingCourse.id ? editingCourse : c));
                  handleSaveData({ ...data, courses: updatedCourses });
                  setEditingCourse(null);
                }}
                className="px-6 py-2 bg-[#C5A059] text-[#050B18] rounded-xl font-bold uppercase shadow-md"
              >
                SAVE COURSE CHANGES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MARKSHEET RESULT MODAL SCREEN */}
      {editingResult && (
        <div
          onClick={() => setEditingResult(null)}
          className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-[#C5A059] max-w-xl w-full rounded-2xl shadow-2xl p-6 space-y-4 relative text-xs"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-serif font-bold text-[#050B18]">Edit Student Marksheet Record</h3>
              <button onClick={() => setEditingResult(null)} className="p-1 text-slate-500 hover:text-[#050B18]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold block mb-1">Roll Number</label>
                  <input
                    type="text"
                    value={editingResult.rollNo}
                    onChange={(e) => setEditingResult({ ...editingResult, rollNo: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">Student Name</label>
                  <input
                    type="text"
                    value={editingResult.studentName}
                    onChange={(e) => setEditingResult({ ...editingResult, studentName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold block mb-1">Father's Name</label>
                  <input
                    type="text"
                    value={editingResult.fatherName}
                    onChange={(e) => setEditingResult({ ...editingResult, fatherName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">Percentage</label>
                  <input
                    type="text"
                    value={editingResult.percentage}
                    onChange={(e) => setEditingResult({ ...editingResult, percentage: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1">Course Title</label>
                <input
                  type="text"
                  value={editingResult.course}
                  onChange={(e) => setEditingResult({ ...editingResult, course: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                onClick={() => setEditingResult(null)}
                className="px-4 py-2 bg-slate-200 rounded-xl font-bold"
              >
                CANCEL
              </button>
              <button
                onClick={() => {
                  const updatedResults = data.studentResults.map((r) => (r.rollNo === editingResult.rollNo ? editingResult : r));
                  handleSaveData({ ...data, studentResults: updatedResults });
                  setEditingResult(null);
                }}
                className="px-6 py-2 bg-[#C5A059] text-[#050B18] rounded-xl font-bold uppercase shadow-md"
              >
                SAVE MARKSHEET CHANGES
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
