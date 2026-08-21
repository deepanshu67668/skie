export function generateMarksheetHtml(result: any) {
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

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SKIE Official Marksheet - ${rollNo} - ${name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600;700;800&display=swap');
    
    * { box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f4f5f7;
      color: #050B18;
      margin: 0;
      padding: 30px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .certificate {
      width: 100%;
      max-width: 820px;
      background: #ffffff;
      border: 10px double #C5A059;
      padding: 40px 45px;
      position: relative;
      box-shadow: 0 15px 35px rgba(5, 11, 24, 0.15);
      border-radius: 16px;
      overflow: hidden;
    }

    .watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-25deg);
      font-family: 'Cinzel', serif;
      font-size: 75px;
      font-weight: 700;
      color: rgba(197, 160, 89, 0.05);
      white-space: nowrap;
      pointer-events: none;
      user-select: none;
    }

    .header {
      text-align: center;
      border-bottom: 3px double #C5A059;
      padding-bottom: 24px;
      margin-bottom: 30px;
    }

    .logo-emblem {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #050B18;
      color: #C5A059;
      border: 2px solid #C5A059;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Cinzel', serif;
      font-size: 28px;
      font-weight: 900;
      margin: 0 auto 12px auto;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .header h1 {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      color: #050B18;
      margin: 0 0 6px 0;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .header p {
      font-size: 11px;
      color: #475569;
      margin: 3px 0;
      font-weight: 600;
    }

    .badge {
      display: inline-block;
      background: #050B18;
      color: #C5A059;
      padding: 6px 18px;
      font-size: 11px;
      font-weight: 800;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 12px;
      border: 1px solid #C5A059;
    }

    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 25px;
      background: #fdfdf9;
      padding: 22px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
    }

    .detail-item label {
      font-size: 10px;
      text-transform: uppercase;
      color: #64748b;
      font-weight: 800;
      display: block;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }

    .detail-item span {
      font-size: 14px;
      font-weight: 700;
      color: #050B18;
    }

    .marks-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }

    .marks-table th {
      background: #050B18;
      color: #C5A059;
      padding: 12px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: left;
    }

    .marks-table td {
      padding: 12px;
      font-size: 12px;
      border-bottom: 1px solid #e2e8f0;
      font-weight: 600;
    }

    .summary-box {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      background: #050B18;
      color: #ffffff;
      padding: 18px;
      border-radius: 12px;
      margin-bottom: 30px;
      border: 1px solid #C5A059;
    }

    .summary-item {
      text-align: center;
    }

    .summary-item label {
      font-size: 9px;
      color: #C5A059;
      text-transform: uppercase;
      font-weight: 800;
      display: block;
      letter-spacing: 0.5px;
    }

    .summary-item span {
      font-size: 18px;
      font-weight: 800;
    }

    .footer-signatures {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px border-style dashed #CBD5E1;
    }

    .sig-block {
      text-align: center;
    }

    .sig-line {
      width: 160px;
      border-bottom: 2px solid #050B18;
      margin: 0 auto 6px auto;
    }

    .sig-title {
      font-size: 12px;
      font-weight: 800;
      color: #050B18;
    }

    .actions-bar {
      margin-top: 25px;
      display: flex;
      gap: 15px;
    }

    .btn {
      padding: 12px 24px;
      font-weight: 800;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.2s ease;
    }

    .btn-gold {
      background: #C5A059;
      color: #050B18;
      box-shadow: 0 4px 12px rgba(197, 160, 89, 0.4);
    }

    .btn-dark {
      background: #050B18;
      color: #ffffff;
    }

    @media print {
      .actions-bar { display: none; }
      body { padding: 0; background: none; }
      .certificate { box-shadow: none; border-width: 6px; }
    }
  </style>
</head>
<body>

  <div class="certificate">
    <div class="watermark">SKIE ACADEMY</div>

    <!-- Header -->
    <div class="header">
      <div class="logo-emblem">S</div>
      <h1>Shri Krishan Institute of Education</h1>
      <p>Reg. No. 3123/IV (Public Charitable Trust Act 1882, Govt. of India NCT Delhi)</p>
      <p>ISO 9001:2015 Certified Training Institute • Trade Marks Regd. No. 3214249 • Dept. of Labor Regd. 201006450</p>
      <div class="badge">OFFICIAL VERIFIED STATEMENT OF MARKS</div>
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
        <label>Course Program</label>
        <span style="color: #050B18;">${course}</span>
      </div>
    </div>

    <!-- Marks Table -->
    <table class="marks-table">
      <thead>
        <tr>
          <th>Module Title</th>
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
          <td>MS Office Suite & Data Processing Applications</td>
          <td style="text-align: center;">100</td>
          <td style="text-align: right;">94</td>
        </tr>
        <tr>
          <td>100% Practical Lab Assessment & Case Studies</td>
          <td style="text-align: center;">100</td>
          <td style="text-align: right;">95</td>
        </tr>
        <tr>
          <td>Specialized Professional Track & Final Project</td>
          <td style="text-align: center;">200</td>
          <td style="text-align: right;">${Math.max(150, totalMarks - 285)}</td>
        </tr>
      </tbody>
    </table>

    <!-- Summary Box -->
    <div class="summary-box">
      <div class="summary-item">
        <label>Total Score</label>
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
        <label>Status</label>
        <span style="color: #22c55e;">PASSED</span>
      </div>
    </div>

    <!-- Footer Signatures -->
    <div class="footer-signatures">
      <div class="sig-block" style="text-align: left;">
        <p style="font-size: 9px; font-weight: 800; color: #64748b; margin: 0 0 4px 0; text-transform: uppercase;">VERIFICATION CODE</p>
        <p style="font-family: monospace; font-size: 11px; font-weight: 800; background: #050B18; color: #C5A059; padding: 4px 10px; border-radius: 6px; display: inline-block; margin: 0;">${verificationCode}</p>
      </div>

      <div class="sig-block">
        <p style="font-size: 9px; font-weight: 800; color: #64748b; margin: 0 0 4px 0; text-transform: uppercase;">ISSUE DATE</p>
        <p style="font-size: 12px; font-weight: 800; color: #050B18; margin: 0;">${issueDate}</p>
      </div>

      <div class="sig-block">
        <div class="sig-line"></div>
        <div class="sig-title">Sandeep Tyagi</div>
        <p style="font-size: 9px; color: #64748b; margin: 2px 0 0 0; font-weight: 700;">Director & Founder, SKIE</p>
      </div>
    </div>

  </div>

  <div class="actions-bar">
    <button class="btn btn-gold" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

</body>
</html>`;
}

export function downloadMarksheetFile(result: any) {
  const rollNo = result.rollNo || 'SKIE-STUDENT';
  const htmlContent = generateMarksheetHtml(result);

  // Direct Blob Download trigger
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const fileName = `SKIE_Official_Marksheet_${rollNo.replace(/[^a-zA-Z0-9]/g, '_')}.html`;

  if ((navigator as any).msSaveBlob) {
    (navigator as any).msSaveBlob(blob, fileName);
    return;
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 500);
}

export function printMarksheetWindow(result: any) {
  const htmlContent = generateMarksheetHtml(result);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
  }
}
