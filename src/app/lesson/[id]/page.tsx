interface LessonPageProps {
  params: { id: string };
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

export default function LessonPage({ params }: LessonPageProps) {
  const title = lessonNames[params.id] ?? "บทเรียนไม่พบ";

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">
        เนื้อหาของบทเรียน {params.id} จะแสดงที่นี่ค่ะ ❤️
      </p>
    </div>
  );
}
