import { BookOpen, Network, PlayCircle, Share2, ShieldCheck, Users } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Nguyen Minh Truc',
    mssv: '2400003987',
    role: 'Nhom truong / Quan ly du an',
  },
  {
    id: 2,
    name: 'Thanh vien 02',
    mssv: '240000XXXX',
    role: 'Thiet ke Canva',
  },
  {
    id: 3,
    name: 'Thanh vien 03',
    mssv: '240000XXXX',
    role: 'Bien tap Camtasia',
  },
  {
    id: 4,
    name: 'Thanh vien 04',
    mssv: '240000XXXX',
    role: 'Thiet ke ProShow',
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-body text-gray-800">
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Network className="text-blue-700" size={28} />
            <span className="font-display text-xl font-bold tracking-tight text-blue-900">
              DigitalCitizen.
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#hero" className="font-semibold text-blue-700 transition-colors hover:text-blue-900">
              Tong quan
            </a>
            <a href="#context" className="font-medium text-gray-600 transition-colors hover:text-blue-700">
              Boi canh
            </a>
            <a href="#team" className="font-medium text-gray-600 transition-colors hover:text-blue-700">
              Nhom thuc hien
            </a>
            <a href="#media" className="font-medium text-gray-600 transition-colors hover:text-blue-700">
              Video du an
            </a>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="relative flex aspect-video max-h-[700px] w-full items-center justify-center overflow-hidden bg-slate-950"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-12 top-10 h-32 w-32 rounded-full bg-blue-500 blur-2xl" />
          <div className="absolute bottom-8 right-10 h-48 w-48 rounded-full bg-cyan-400 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30 [animation:spin_16s_linear_infinite]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-blue-300/40 bg-blue-900/40 px-4 py-1.5 text-sm font-semibold text-blue-100">
            Bao cao hoc phan: Nang luc so va Khai thac tai nguyen giao duc mo
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Cong dan so trong ky nguyen mang xa hoi
          </h1>
          <p className="mt-5 text-lg font-light text-blue-200 md:text-2xl">
            Co hoi va thach thuc doi voi sinh vien Viet Nam
          </p>
        </div>
      </section>

      <section id="context" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <BookOpen className="text-blue-700" size={40} />
          </div>
          <h2 className="font-display mb-8 text-3xl font-bold text-slate-900">Boi canh va Khai niem</h2>
          <p className="text-justify text-lg leading-relaxed text-slate-600 md:text-center">
            Trong ky nguyen cong nghe, "Cong dan so" duoc dinh nghia la nhung ca nhan co kha
            nang su dung cong nghe thong tin mot cach an toan, co trach nhiem va mang tinh
            phan bien. Doi voi sinh vien Viet Nam, mang xa hoi da tro thanh he sinh thai cot
            loi phuc vu hoc tap va giao tiep. Su chuyen dich nay mo ra co hoi lon trong viec
            tiep can tai nguyen giao duc mo va hop tac truc tuyen, dong thoi dat ra thach thuc
            ve an toan du lieu, tin gia va ung xu tren khong gian mang.
          </p>
        </div>
      </section>

      <section id="team" className="border-y border-slate-200 bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-3xl font-bold text-slate-900">Nhom Thuc Hien</h2>
            <p className="text-slate-500">Doi ngu xay dung noi dung va phat trien san pham so</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Users size={36} />
                </div>
                <h3 className="text-center font-bold text-slate-800">{member.name}</h3>
                <p className="mb-4 text-sm text-slate-500">{member.mssv}</p>
                <span className="mt-auto inline-block rounded-full bg-slate-100 px-3 py-1 text-center text-xs font-semibold text-slate-600">
                  {member.role}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-3xl font-bold text-slate-900">Tong Quan Du An</h2>
            <p className="text-slate-500">Video minh hoa thuc trang sinh vien su dung mang xa hoi</p>
          </div>

          <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <PlayCircle size={48} className="ml-1 text-white" />
              </div>
              <h3 className="font-display mb-2 text-center text-xl font-bold">Video Camtasia (1-2 Phut)</h3>
              <p className="max-w-md text-center text-sm text-slate-300">
                Khu vuc nhung iframe (YouTube/Google Drive). Video su dung hieu ung Text
                Animation va Voice-over de lam noi bat tu khoa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-8">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="mb-2 inline-flex rounded-xl bg-emerald-100 p-2 text-emerald-700">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold text-emerald-900">An toan du lieu</h3>
            <p className="mt-1 text-sm text-emerald-800">
              Uu tien bao mat thong tin ca nhan va nhan dien nguy co tren khong gian mang.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
            <div className="mb-2 inline-flex rounded-xl bg-cyan-100 p-2 text-cyan-700">
              <Share2 size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold text-cyan-900">Hop tac truc tuyen</h3>
            <p className="mt-1 text-sm text-cyan-800">
              Tang cuong chia se tri thuc va ket noi hoc tap qua cac cong cu ky thuat so.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-900 py-8 text-center">
        <p className="text-sm text-slate-400">
          Copyright 2026 Nhom du an hoc phan. San pham phuc vu muc dich giao duc (OER).
        </p>
      </footer>
    </div>
  )
}
