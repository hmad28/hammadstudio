import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D1526] text-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-8xl font-black text-[#D9FF43] mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-zinc-400 max-w-md mb-8 text-sm">
        Halaman yang Anda cari mungkin telah dipindahkan atau belum tersedia.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#D9FF43] text-black font-bold rounded-full hover:bg-[#cfe83f] transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
