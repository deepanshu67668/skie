'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DBData, Course, StudentResult, Enquiry, GalleryItem, Testimonial } from '@/lib/db';
import { LayoutDashboard, Users, BookOpen, Award, Image as ImageIcon, MessageSquare, Settings as SettingsIcon, LogOut, Save, Plus, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DBData | null>(null);
  const [adminKey, setAdminKey] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'courses' | 'results' | 'gallery' | 'settings'>('enquiries');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // New Course Modal State
  const [newCourse, setNewCourse] = useState<Partial<Course>>({
    name: '',
    category: 'Diploma Courses',
    shortDesc: '',
    fullDesc: '',
    duration: '6 Months',
    fees: '₹1,000 / Month',
    skillLevel: 'Beginner',
    image: 'https://skieofficial.com/wp-content/uploads/2026/01/Diploma-Courses-683x1024.webp',
    curriculum: ['Module 1: Fundamentals', 'Module 2: Practical Labs'],
    careerOps: ['Office Assistant'],
    eligibility: '10th Pass',
    toolsCovered: ['MS Office'],
    certificateProvided: true,
    featured: true,
  });

  // New Result Modal State
  const [newResult, setNewResult] = useState<Partial<StudentResult>>({
    rollNo: `SKIE-2026-0${Math.floor(100 + Math.random() * 900)}`,
    studentName: '',
    fatherName: '',
    course: 'Advance Diploma in Computer Applications (ADCA)',
    year: '2026',
    session: '2025-2026',
    grade: 'A+',
    totalMarks: 470,
    maxMarks: 500,
    percentage: '94%',
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
      .then((dbData: DBData) => setData(dbData))
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
        setMsg({ type: 'success', text: 'Changes saved successfully to website database!' });
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
      <div className="min-h-[70vh] flex items-center justify-center text-slate-600 font-bold">
        Loading SKIE Admin Dashboard...
      </div>
    );
  }

  // Quick stats
  const totalEnquiries = data.enquiries.length;
  const newEnquiries = data.enquiries.filter((e) => e.status === 'New').length;
  const totalCourses = data.courses.length;
  const totalResults = data.studentResults.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 pb-24">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-brand-navy text-white p-6 rounded-3xl shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black">SKIE Academy Management Portal</h1>
            <p className="text-xs text-slate-300">Live Website Content & Enquiry Dashboard</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-rose-500/20 text-slate-200 hover:text-rose-300 text-xs font-bold transition-colors flex items-center space-x-1.5 self-start sm:self-auto"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout Staff</span>
        </button>
      </div>

      {msg && (
        <div
          className={`p-4 rounded-2xl text-xs font-bold flex items-center space-x-2 ${
            msg.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          {msg.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-600" />
          )}
          <span>{msg.text}</span>
        </div>
      )}

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="glass-card p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">New Leads</p>
            <p className="text-3xl font-black text-brand-bright mt-1">{newEnquiries}</p>
          </div>
          <div className="p-3 rounded-xl bg-brand-bright/10 text-brand-bright">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Total Enquiries</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{totalEnquiries}</p>
          </div>
          <div className="p-3 rounded-xl bg-brand-navy/10 text-brand-navy">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Published Courses</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{totalCourses}</p>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Verified Marksheets</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{totalResults}</p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
            <Award className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'enquiries', label: `Student Enquiries (${totalEnquiries})`, icon: Users },
          { id: 'courses', label: `Course Management (${totalCourses})`, icon: BookOpen },
          { id: 'results', label: `Student Results (${totalResults})`, icon: Award },
          { id: 'gallery', label: 'Gallery & Media', icon: ImageIcon },
          { id: 'settings', label: 'Website Settings', icon: SettingsIcon },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-brand-navy text-brand-cyan shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Enquiries Management */}
      {activeTab === 'enquiries' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-200 shadow-md space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900">Student Admission & Callback Enquiries</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-100 uppercase text-[11px] font-bold text-slate-600 border-b">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold whitespace-nowrap">{enq.date}</td>
                    <td className="p-3 font-bold text-slate-900">{enq.name}</td>
                    <td className="p-3 font-bold text-brand-bright">
                      <a href={`tel:${enq.phone}`}>{enq.phone}</a>
                    </td>
                    <td className="p-3 font-medium">{enq.course}</td>
                    <td className="p-3 text-slate-500 max-w-xs truncate">{enq.message}</td>
                    <td className="p-3">
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
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold outline-none border ${
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
                    <td className="p-3 text-right">
                      <button
                        onClick={() => {
                          const updated = {
                            ...data,
                            enquiries: data.enquiries.filter((item) => item.id !== enq.id),
                          };
                          handleSaveData(updated);
                        }}
                        className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                        title="Delete Enquiry"
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

      {/* Tab 2: Course Management */}
      {activeTab === 'courses' && (
        <div className="space-y-6">
          
          {/* Add New Course Section */}
          <div className="glass-card p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Plus className="w-5 h-5 text-brand-bright" />
              <span>Add New Course to SKIE Website</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <input
                type="text"
                placeholder="Course Title (e.g. Graphic Design)"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                className="p-2.5 rounded-xl border"
              />
              <select
                value={newCourse.category}
                onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                className="p-2.5 rounded-xl border bg-white"
              >
                <option>Diploma Courses</option>
                <option>Professional Courses</option>
                <option>Programming & Development</option>
                <option>Female Special Courses</option>
                <option>Teacher Training</option>
              </select>
              <input
                type="text"
                placeholder="Duration (e.g. 3 Months)"
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                className="p-2.5 rounded-xl border"
              />
              <input
                type="text"
                placeholder="Fees (e.g. ₹1,500 / Month)"
                value={newCourse.fees}
                onChange={(e) => setNewCourse({ ...newCourse, fees: e.target.value })}
                className="p-2.5 rounded-xl border"
              />
              <input
                type="text"
                placeholder="Short Description"
                value={newCourse.shortDesc}
                onChange={(e) => setNewCourse({ ...newCourse, shortDesc: e.target.value })}
                className="p-2.5 rounded-xl border sm:col-span-2"
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
                  skillLevel: 'Beginner',
                  featured: true,
                  image: newCourse.image || 'https://skieofficial.com/wp-content/uploads/2026/01/Certificate-Course-683x1024.webp',
                  curriculum: ['Module 1: Foundations', 'Module 2: Practical Project'],
                  careerOps: ['Junior Executive'],
                  eligibility: '10th/12th Pass',
                  toolsCovered: ['Software Tools'],
                  certificateProvided: true,
                };
                const updated = { ...data, courses: [created, ...data.courses] };
                handleSaveData(updated);
                setNewCourse({ name: '', shortDesc: '' });
              }}
              className="px-6 py-2.5 rounded-xl bg-brand-bright text-white text-xs font-bold"
            >
              Publish New Course
            </button>
          </div>

          {/* Existing Courses List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.courses.map((course) => (
              <div key={course.id} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-cyan bg-brand-navy px-2 py-0.5 rounded">{course.category}</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-1">{course.name}</h4>
                  <p className="text-xs text-slate-500">{course.duration} • {course.fees}</p>
                </div>
                <button
                  onClick={() => {
                    const updated = { ...data, courses: data.courses.filter((c) => c.id !== course.id) };
                    handleSaveData(updated);
                  }}
                  className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Tab 3: Student Results Management */}
      {activeTab === 'results' && (
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Plus className="w-5 h-5 text-brand-bright" />
              <span>Add New Student Examination Result</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <input
                type="text"
                placeholder="Roll Number (e.g. SKIE-2026-0201)"
                value={newResult.rollNo}
                onChange={(e) => setNewResult({ ...newResult, rollNo: e.target.value })}
                className="p-2.5 rounded-xl border"
              />
              <input
                type="text"
                placeholder="Student Name"
                value={newResult.studentName}
                onChange={(e) => setNewResult({ ...newResult, studentName: e.target.value })}
                className="p-2.5 rounded-xl border"
              />
              <input
                type="text"
                placeholder="Father's Name"
                value={newResult.fatherName}
                onChange={(e) => setNewResult({ ...newResult, fatherName: e.target.value })}
                className="p-2.5 rounded-xl border"
              />
              <input
                type="text"
                placeholder="Course Name"
                value={newResult.course}
                onChange={(e) => setNewResult({ ...newResult, course: e.target.value })}
                className="p-2.5 rounded-xl border sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Percentage (e.g. 92%)"
                value={newResult.percentage}
                onChange={(e) => setNewResult({ ...newResult, percentage: e.target.value })}
                className="p-2.5 rounded-xl border"
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
                  totalMarks: newResult.totalMarks || 450,
                  maxMarks: 500,
                  percentage: newResult.percentage || '90%',
                  status: 'Passed with Distinction',
                  issueDate: new Date().toISOString().split('T')[0],
                  verificationCode: `SKIE-VER-${Math.floor(10000 + Math.random() * 90000)}`,
                };
                const updated = { ...data, studentResults: [created, ...data.studentResults] };
                handleSaveData(updated);
                setNewResult({ studentName: '', fatherName: '' });
              }}
              className="px-6 py-2.5 rounded-xl bg-brand-bright text-white text-xs font-bold"
            >
              Add Marksheet Record
            </button>
          </div>

          <div className="divide-y divide-slate-100 bg-white rounded-2xl border p-4">
            {data.studentResults.map((res) => (
              <div key={res.rollNo} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono font-bold text-brand-navy">{res.rollNo}</span> • <span className="font-bold text-slate-900">{res.studentName}</span> ({res.course})
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-emerald-600">{res.percentage} (Grade {res.grade})</span>
                  <button
                    onClick={() => {
                      const updated = { ...data, studentResults: data.studentResults.filter((r) => r.rollNo !== res.rollNo) };
                      handleSaveData(updated);
                    }}
                    className="text-rose-600 hover:bg-rose-50 p-1 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Settings */}
      {activeTab === 'settings' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-200 shadow-md space-y-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <SettingsIcon className="w-5 h-5 text-brand-bright" />
            <span>Update SKIE Campus Contact & Header Information</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold">Phone Number</label>
              <input
                type="text"
                value={data.settings.phone}
                onChange={(e) =>
                  setData({ ...data, settings: { ...data.settings, phone: e.target.value } })
                }
                className="w-full p-2.5 rounded-xl border mt-1"
              />
            </div>
            <div>
              <label className="font-bold">Email Address</label>
              <input
                type="text"
                value={data.settings.email}
                onChange={(e) =>
                  setData({ ...data, settings: { ...data.settings, email: e.target.value } })
                }
                className="w-full p-2.5 rounded-xl border mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-bold">Campus Address</label>
              <input
                type="text"
                value={data.settings.address}
                onChange={(e) =>
                  setData({ ...data, settings: { ...data.settings, address: e.target.value } })
                }
                className="w-full p-2.5 rounded-xl border mt-1"
              />
            </div>
          </div>

          <button
            onClick={() => handleSaveData(data)}
            disabled={saving}
            className="px-8 py-3 rounded-xl bg-brand-bright text-white text-xs font-bold flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Settings Changes'}</span>
          </button>
        </div>
      )}

    </div>
  );
}
