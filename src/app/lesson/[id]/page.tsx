"use client";

import { use } from 'react';




interface LessonPageProps {
  params: Promise<{ id: string }>;
}

const lessonNames: Record<string, string> = {
  "1": "พื้นฐานและการติดตั้งเครือข่าย",
  "2": "การบริหารจัดการ IP Address",
  "3": "หลักการและกลไกการค้นหาเส้นทาง",
  "4": "เครือข่ายไร้สายและเทคโนโลยีที่เกี่ยวข้อง",
  "5": "ความปลอดภัยของเครือข่าย",
  "6": "VPN และการเชื่อมต่อระยะไกล",
  "7": "การจัดการเครือข่ายระดับองค์กร",
};

const pdfFiles: Record<string, string> = {
  "9": "/PDF/การสื่อสารข้อมูล.pdf",
  "8": "/PDF/IP Address.pdf",
};

export default function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const title = lessonNames[id] ?? "บทเรียนไม่พบ";
  const pdfPath = pdfFiles[id];

  if (!pdfPath) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700">
          เนื้อหาของบทเรียน {id} จะแสดงที่นี่ค่ะ ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4 flex gap-4">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            เปิด PDF ในแท็บใหม่
          </a>
          <a
            href={pdfPath}
            download
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ดาวน์โหลด PDF
          </a>
        </div>

        <div className="border rounded p-4">
          <iframe
            src={pdfPath}
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            title={`PDF Viewer - ${title}`}
          >
            เบราว์เซอร์ของคุณไม่รองรับการแสดง PDF 
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">คลิกที่นี่เพื่อเปิด PDF</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
