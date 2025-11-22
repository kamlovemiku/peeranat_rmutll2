interface LessonItem {
  id: number;
  title: string;
  description: string;
}

export default function HomePage() {
  const lessons: LessonItem[] = [
    { id: 1, title: "พื้นฐานและการติดตั้งเครือข่าย", description: "เข้าใจโครงสร้างและหลักการทำงานของเครือข่ายคอมพิวเตอร์" },
    { id: 2, title: "การบริหารจัดการ IP Address", description: "เรียนรู้การกำหนด IP แบบ Static และ Dynamic" },
    { id: 3, title: "หลักการและกลไกการค้นหาเส้นทาง", description: "ฟังก์ชัน Routing และการตั้งค่า Router" },
    { id: 4, title: "เครือข่ายไร้สาย", description: "มาตรฐาน Wi-Fi และการติดตั้ง Access Point" },
    { id: 5, title: "ความปลอดภัยของเครือข่าย", description: "Firewall, ACL และการป้องกันภัยคุกคาม" },
    { id: 6, title: "VPN", description: "สร้างระบบเชื่อมต่อระยะไกลอย่างปลอดภัย" },
    { id: 7, title: "การจัดการเครือข่ายระดับองค์กร", description: "Monitoring & Troubleshooting จริงในองค์กร" },
  ];

  return (
    <div className="hero min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">ยินดีต้อนรับค่ะ</h1>
            <p className="text-lg text-gray-700">เลือกบทเรียนด้านล่างเพื่อเริ่มต้นเรียนรู้เกี่ยวกับเครือข่าย</p>
          </div>

          <div className="flex gap-3 items-center">
            <a href="#lessons" className="btn-primary">เริ่มเรียน</a>
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-800">เกี่ยวกับคอร์ส</a>
          </div>
        </div>

        {/* Lesson Grid */}
        <div id="lessons" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((item: LessonItem) => (
            <a
              key={item.id}
              href={`/lesson/${item.id}`}
              className="card block p-6 rounded-2xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
