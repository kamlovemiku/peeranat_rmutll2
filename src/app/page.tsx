interface LessonItem {
  id: number;
  title: string;
  description: string;
}

export default function HomePage() {
  const courseInfo = {
    code: "BSCCT604",
    nameEn: "Computer Network Administration",
    credits: "3(2-2-5)",
    prerequisite: "BSCCT603 การสื่อสารข้อมูลและระบบเครือข่ายคอมพิวเตอร์",
    descriptionTh: "ศึกษาและฝึกปฏิบัติเกี่ยวกับการติดตั้งและกำหนดค่าทางเครือข่ายคอมพิวเตอร์ในรูปแบบต่าง ๆ การค้นหาเส้นทาง การจัดสรรหมายเลขไอพีแบบคงที่และแบบพลวัต ระบบเครือข่ายคอมพิวเตอร์ไร้สาย ระบบความปลอดภัยในเครือข่ายคอมพิวเตอร์ การออกแบบช่องทางการสื่อสารชนิดส่วนบุคคล และการประยุกต์ใช้ระบบเครือข่ายคอมพิวเตอร์กับองค์กรแบบต่าง ๆ",
    descriptionEn: "Study and practice in installation and setup of computer network with various applications, routing, assignment of static and dynamic IP addresses, wireless network system, computer network security, virtual private network design, and application of computer network in various types of organization."
  };

  const lessons: LessonItem[] = [
    { id: 1, title: "พื้นฐานและการติดตั้งเครือข่าย", description: "เข้าใจโครงสร้างและหลักการทำงานของเครือข่ายคอมพิวเตอร์" },
    { id: 2, title: "การบริหารจัดการ IP Address", description: "เรียนรู้การกำหนด IP แบบ Static และ Dynamic" },
    { id: 3, title: "หลักการและกลไกการค้นหาเส้นทาง", description: "ฟังก์ชัน Routing และการตั้งค่า Router" },
    { id: 4, title: "เครือข่ายไร้สาย", description: "มาตรฐาน Wi-Fi และการติดตั้ง Access Point" },
    { id: 5, title: "ความปลอดภัยของเครือข่าย", description: "Firewall, ACL และการป้องกันภัยคุกคาม" },
    { id: 6, title: "VPN", description: "สร้างระบบเชื่อมต่อระยะไกลอย่างปลอดภัย" },
    { id: 7, title: "การจัดการเครือข่ายระดับองค์กร", description: "Monitoring & Troubleshooting จริงในองค์กร" },
    { id: 8, title: "แบบฝึกหัด IP Address", description: "การจัดการ IP Address การแบ่งช่วง /การคำนวณ / AND" },
    { id: 9, title: "ทำความรู้จักกับ การสื่อสารข้อมูล", description: "การสื่อสารข้อมูลในเครือข่ายคอมพิวเตอร์" },
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

        {/* Course Information Section */}
        <div className="card mb-10 p-8 rounded-2xl border-l-4 border-blue-500">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">รหัสวิชา {courseInfo.code}</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">ชื่อวิชา (EN):</span>
                  <p className="text-gray-600">{courseInfo.nameEn}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">หน่วยกิต:</span>
                  <p className="text-gray-600">{courseInfo.credits}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">วิชาบังคับก่อน:</span>
                  <p className="text-gray-600">{courseInfo.prerequisite}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 mb-3">คำอธิบายรายวิชา</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="text-gray-700">{courseInfo.descriptionTh}</p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-gray-600 italic">{courseInfo.descriptionEn}</p>
                </div>
              </div>
            </div>
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

        {/* Mini Projects Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Mini Projects</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://clgrand.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-6 rounded-2xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">การบวกเลขและคำนวณเกรด</h3>
              <p className="text-gray-600 text-sm">โปรเจคสำหรับการคำนวณเลขและเกรดอย่างง่าย</p>
            </a>
            {/* Add more projects here */}
          </div>
        </div>
      </div>
    </div>
  );
}
