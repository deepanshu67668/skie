export const metadata = {
  title: 'Terms of Services | SKIE Academy',
  description: 'Terms of Services for Shri Krishan Institute of Education (SKIE Academy).',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-slate-800">
      <h1 className="text-3xl font-extrabold text-slate-900 border-b pb-4">Terms of Services</h1>
      <p className="text-xs text-slate-500">Effective Date: January 1, 2026</p>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Welcome to <strong>Shri Krishan Institute of Education (SKIE Academy)</strong>. By using our website and enrolling in our computer courses, you agree to comply with the following terms and conditions.
        </p>

        <h3 className="text-lg font-bold text-slate-900 pt-2">1. Admission & Course Enrollment</h3>
        <p>
          Enrollment in SKIE Academy computer diploma and certificate programs is subject to meeting the course eligibility criteria. Course fee structures and installment details agreed upon during admission must be maintained as per the schedule.
        </p>

        <h3 className="text-lg font-bold text-slate-900 pt-2">2. Student Attendance & Examinations</h3>
        <p>
          Students are expected to maintain minimum required lab attendance and complete practical assignments to qualify for end-of-term examinations and ISO 9001:2015 certificate issuance.
        </p>

        <h3 className="text-lg font-bold text-slate-900 pt-2">3. Marksheet Verification & Certificates</h3>
        <p>
          Official marksheets and certificates issued by SKIE Academy can be verified online through our official result verification portal using the unique student roll number.
        </p>

        <h3 className="text-lg font-bold text-slate-900 pt-2">4. Governing Law</h3>
        <p>
          These terms are governed by and construed in accordance with the laws of Govt. of India NCT Delhi and Uttar Pradesh jurisdiction.
        </p>
      </div>
    </div>
  );
}
