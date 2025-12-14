"use client";

import { use, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';



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
  "1": "/PDF/การสื่อสารข้อมูล.pdf",
  "2": "/PDF/IP Address.pdf",
};

export default function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const title = lessonNames[id] ?? "บทเรียนไม่พบ";
  const pdfPath = pdfFiles[id];
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

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
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="กำลังโหลด PDF..."
            error="ไม่สามารถโหลด PDF ได้"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={800}
                className="mb-4 border"
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
