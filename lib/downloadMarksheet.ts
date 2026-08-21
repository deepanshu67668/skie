export function downloadMarksheetFile(result: any) {
  const rollNo = result.rollNo || 'SKIE-STUDENT';
  const name = result.studentName || 'Student';
  const fatherName = result.fatherName || 'Father';
  const course = result.course || 'ADCA';
  const percentage = result.percentage || '95%';
  const grade = result.grade || 'A+';
  const totalMarks = result.totalMarks || 475;
  const maxMarks = result.maxMarks || 500;
  const verificationCode = result.verificationCode || 'SKIE-VER-88219';
  const issueDate = result.issueDate || '15-Jan-2025';

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SKIE Marksheet - ${rollNo} - ${name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600;700;800&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f8f9fa;
      color: #050B18;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
    }

    .certificate {
      width: 800px;
      background: #ffffff;
      border: 8px double #C5A059;
      padding: 40px;
      position: relative;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      border-radius: 12px;
      overflow: hidden;
    }

    .watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-family: 'Cinzel', serif;
      font-size: 80px;
      font-weight: 700;
      color: rgba(197, 160, 89, 0.05);
      white-space: nowrap;
      pointer-events: none;
    }

    .header {
      text-align: center;
      border-bottom: 3px double #C5A059;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }

    .header h1 {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      color: #050B18;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .header p {
      font-size: 11px;
      color: #555;
      margin: 4px 0 0 0;
      font-weight: 600;
    }

    .badge {
      display: inline-block;
      background: #050B18;
      color: #C5A059;
      padding: 4px 12px;
      font-size: 10px;
      font-weight: 800;
      border-radius: 20px;
      text-transform: uppercase;
      margin-top: 8px;
    }

    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 30px;
      background: #fdfdfa;
      padding: 20px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }

    .detail-item label {
      font-size: 10px;
      text-transform: uppercase;
      color: #64748b;
      font-weight: 700;
      display: block;
    }

    .detail-item span {
      font-size: 14px;
      font-weight: 700;
      color: #050B18;
    }

    .marks-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }

    .marks-table th {
      background: #050B18;
      color: #C5A059;
      padding: 10px;
      font-size: 11px;
      text-transform: uppercase;
      text-align: left;
    }

    .marks-table td {
      padding: 10px;
      font-size: 12px;
      border-bottom: 1px solid #e2e8f0;
      font-weight: 600;
    }

    .summary-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #050B18;
      color: #ffffff;
      padding: 15px 25px;
      border-radius: 8px;
      margin-bottom: 30px;
    }

    .summary-item {
      text-align: center;
    }

    .summary-item label {
      font-size: 9px;
      color: #C5A059;
      text-transform: uppercase;
      font-weight: 700;
      display: block;
    }

    .summary-item span {
      font-size: 18px;
      font-weight: 800;
    }

    .footer-signatures {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
    }

    .sig-block {
      text-align: center;
    }

    .sig-line {
      width: 160px;
      border-bottom: 2px solid #050B18;
      margin-bottom: 6px;
    }

    .sig-title {
      font-size: 11px;
      font-weight: 700;
      color: #050B18;
    }

    .print-btn {
      margin-top: 20px;
      padding: 10px 20px;
      background: #C5A059;
      color: #050B18;
      font-weight: 800;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
      text-transform: uppercase;
    }

    @media print {
      .print-btn { display: none; }
      body { padding: 0; background: none; }
      .certificate { box-shadow: none; border-width: 6px; }
    }
  </style>
</head>
<body>

  <div style="text-align: center;">
    <div class="certificate">
      <div class="watermark">SKIE ACADEMY</div>

      <!-- Header -->
      <div class="header">
        <h1>Shri Krishan Institute of Education</h1>
        <p>Reg. No. 3123/IV (Public Charitable Trust Act 1882, Govt. of India NCT Delhi)</p>
        <p>ISO 9001:2015 Certified Training Institute • Regd. No. 201006450 Dept. of Labor</p>
        <div class="badge">Official Verified Statement of Marks</div>
      </div>

      <!-- Student Details Grid -->
      <div class="details-grid">
        <div class="detail-item">
          <label>Roll Number</label>
          <span style="font-family: monospace; color: #C5A059;">${rollNo}</span>
        </div>
        <div class="detail-item">
          <label>Student Full Name</label>
          <span>${name}</span>
        </div>
        <div class="detail-item">
          <label>Father's Name</label>
          <span>${fatherName}</span>
        </div>
        <div class="detail-item">
          <label>Course Title</label>
          <span style="color: #050B18;">${course}</span>
        </div>
      </div>

      <!-- Marks Table -->
      <table class="marks-table">
        <thead>
          <tr>
            <th>Module Name</th>
            <th style="text-align: center;">Max Marks</th>
            <th style="text-align: right;">Marks Obtained</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Computer Fundamentals & Operating Systems</td>
            <td style="text-align: center;">100</td>
            <td style="text-align: right;">96</td>
          </tr>
          <tr>
            <td>MS Office & Professional Office Applications</td>
            <td style="text-align: center;">100</td>
            <td style="text-align: right;">94</td>
          </tr>
          <tr>
            <td>Practical Lab & Real-World Case Studies</td>
            <td style="text-align: center;">100</td>
            <td style="text-align: right;">95</td>
          </tr>
          <tr>
            <td>Specialized Track Assessment & Project Work</td>
            <td style="text-align: center;">200</td>
            <td style="text-align: right;">${totalMarks - 285}</td>
          </tr>
        </tbody>
      </table>

      <!-- Summary Box -->
      <div class="summary-box">
        <div class="summary-item">
          <label>Total Marks</label>
          <span>${totalMarks} / ${maxMarks}</span>
        </div>
        <div class="summary-item">
          <label>Percentage</label>
          <span style="color: #C5A059;">${percentage}</span>
        </div>
        <div class="summary-item">
          <label>Overall Grade</label>
          <span>${grade}</span>
        </div>
        <div class="summary-item">
          <label>Result Status</label>
          <span style="color: #22c55e;">PASSED</span>
        </div>
      </div>

      <!-- Footer Signatures -->
      <div class="footer-signatures">
        <div class="sig-block">
          <p style="font-size: 10px; font-weight: 700; color: #64748b; margin-bottom: 5px;">VERIFICATION CODE</p>
          <p style="font-family: monospace; font-size: 11px; font-weight: 800; background: #050B18; color: #C5A059; padding: 4px 8px; border-radius: 4px;">${verificationCode}</p>
        </div>

        <div class="sig-block">
          <p style="font-size: 10px; font-weight: 700; color: #64748b; margin-bottom: 5px;">ISSUE DATE</p>
          <p style="font-size: 11px; font-weight: 800; color: #050B18;">${issueDate}</p>
        </div>

        <div class="sig-block">
          <div class="sig-line"></div>
          <div class="sig-title">Sandeep Tyagi</div>
          <p style="font-size: 9px; color: #64748b; margin: 2px 0 0 0; font-weight: 600;">Director & Founder, SKIE</p>
        </div>
      </div>

    </div>

    <br/>
    <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF Certificate</button>
  </div>

</body>
</html>`;

  // Trigger HTML File Download directly in browser
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `SKIE_Official_Marksheet_${rollNo.replace(/[^a-zA-Z0-9]/g, '_')}.html`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Also open print window directly
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
}
