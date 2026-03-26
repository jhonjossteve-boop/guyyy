import { useParams, useLocation } from "wouter";
import { useRef } from "react";

const VALID_BOOKING = {
  id: "011356739",
  artist: "Дима Билан",
  artistSubtitle: "Приватное Бронирование",
  fanName: "МАРИЯ",
  location: "Four Seasons Hotel Moscow",
  roomType: "Номер Premier King",
  paymentDates: ["29 марта 2025", "30 марта 2025"],
  status: "ПОЛНОСТЬЮ ОПЛАЧЕНО И ПОДТВЕРЖДЕНО",
  statusCode: "CONFIRMED",
  category: "VIP Встреча",
  bookedOn: "26 марта 2025",
  reference: "FSM-VIP-2025-MB",
};

export default function BookingConfirmation() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const printRef = useRef<HTMLDivElement>(null);

  const isValid = id === "011356739";

  const handlePrint = () => {
    window.print();
  };

  if (!isValid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="card-luxury rounded-2xl p-10 max-w-md w-full text-center fade-in-up">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{background: "hsl(0 70% 50% / 0.15)", border: "1px solid hsl(0 70% 50% / 0.3)"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(0 70% 60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white/90 mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
            Бронирование не найдено
          </h2>
          <p className="text-[hsl(222_20%_55%)] mb-2 text-sm leading-relaxed">
            Номер бронирования <span className="text-[hsl(45_70%_50%)] font-mono">#{id}</span> не существует в нашей системе.
          </p>
          <p className="text-[hsl(222_20%_45%)] mb-8 text-xs">
            Пожалуйста, проверьте номер и попробуйте снова.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, hsl(45 80% 55%) 0%, hsl(38 70% 45%) 100%)",
              color: "hsl(222 47% 6%)",
            }}
          >
            ← Вернуться к поиску
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8 no-print fade-in">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[hsl(45_70%_50%)] hover:text-[hsl(45_80%_60%)] transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Назад к поиску
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, hsl(45 80% 55%) 0%, hsl(38 70% 45%) 100%)",
              color: "hsl(222 47% 6%)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Распечатать / Скачать PDF
          </button>
        </div>

        {/* Main Booking Card */}
        <div ref={printRef} className="print-card">
          {/* Header Section */}
          <div className="card-luxury rounded-2xl overflow-hidden fade-in-up mb-4">
            {/* Gold top bar */}
            <div className="h-1 w-full" style={{background: "linear-gradient(90deg, transparent, hsl(45 80% 55%), hsl(38 70% 45%), hsl(45 80% 55%), transparent)"}} />

            <div className="p-8 md:p-10">
              {/* Status Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
                  style={{
                    background: "hsl(142 60% 15% / 0.5)",
                    borderColor: "hsl(142 60% 35% / 0.4)",
                  }}>
                  <div className="w-2 h-2 rounded-full bg-[hsl(142_70%_50%)] animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[hsl(142_70%_60%)] uppercase">
                    {VALID_BOOKING.status}
                  </span>
                </div>
              </div>

              {/* Brand */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(45_70%_45%_/_0.5)]" />
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L24.5 14H38L27.3 21.5L31.8 33.5L20 26L8.2 33.5L12.7 21.5L2 14H15.5L20 2Z" fill="hsl(45 80% 55%)" opacity="0.9"/>
                  </svg>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(45_70%_45%_/_0.5)]" />
                </div>
                <p className="text-[10px] tracking-[0.4em] text-[hsl(45_50%_45%)] uppercase">
                  Подтверждение VIP Бронирования
                </p>
              </div>

              {/* Booking ID */}
              <div className="text-center mb-8">
                <p className="text-xs tracking-[0.3em] text-[hsl(222_20%_50%)] uppercase mb-2">
                  Номер бронирования
                </p>
                <div className="inline-block px-6 py-2 rounded-lg"
                  style={{background: "hsl(222 40% 7%)", border: "1px solid hsl(45 50% 30% / 0.3)"}}>
                  <span className="text-xl font-mono font-bold text-[hsl(45_80%_60%)] tracking-widest">
                    #{VALID_BOOKING.id}
                  </span>
                </div>
              </div>

              {/* Artist Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full mb-4"
                  style={{background: "hsl(45 80% 55% / 0.1)", border: "1px solid hsl(45 70% 45% / 0.25)"}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                  <span className="text-xs tracking-widest text-[hsl(45_70%_50%)] uppercase font-medium">
                    {VALID_BOOKING.artistSubtitle}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold gold-gradient mb-1" style={{fontFamily: "'Playfair Display', serif"}}>
                  {VALID_BOOKING.artist}
                </h1>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[hsl(45_70%_45%_/_0.3)]" />
                <div className="w-1 h-1 rounded-full bg-[hsl(45_80%_55%_/_0.6)]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[hsl(45_70%_45%_/_0.3)]" />
              </div>

              {/* Guest Info */}
              <div className="text-center mb-8">
                <p className="text-xs tracking-[0.3em] text-[hsl(222_20%_50%)] uppercase mb-2">
                  Гость
                </p>
                <h2 className="text-3xl font-bold text-white/90 tracking-wider" style={{fontFamily: "'Playfair Display', serif"}}>
                  {VALID_BOOKING.fanName}
                </h2>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 fade-in-up-delayed">
            {/* Location */}
            <DetailCard
              icon={<LocationIcon />}
              label="Место встречи"
              value={VALID_BOOKING.location}
            />

            {/* Room Type */}
            <DetailCard
              icon={<RoomIcon />}
              label="Тип номера"
              value={VALID_BOOKING.roomType}
            />
          </div>

          {/* Payment Dates */}
          <div className="card-luxury rounded-2xl p-7 mb-4 fade-in-up-delayed">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg" style={{background: "hsl(45 80% 55% / 0.12)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <p className="text-xs tracking-[0.25em] text-[hsl(45_60%_50%)] uppercase font-semibold">
                Даты оплаченного пребывания
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {VALID_BOOKING.paymentDates.map((date, i) => (
                <div key={i} className="flex-1 min-w-[140px] px-5 py-4 rounded-xl text-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(45 80% 55% / 0.12) 0%, hsl(45 70% 40% / 0.08) 100%)",
                    border: "1px solid hsl(45 70% 45% / 0.3)",
                  }}>
                  <p className="text-xs text-[hsl(45_50%_45%)] uppercase tracking-wider mb-1">День {i + 1}</p>
                  <p className="text-lg font-semibold text-[hsl(45_80%_65%)]" style={{fontFamily: "'Playfair Display', serif"}}>
                    {date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Summary */}
          <div className="card-luxury rounded-2xl p-7 mb-4 fade-in-up-delayed">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg" style={{background: "hsl(45 80% 55% / 0.12)"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <p className="text-xs tracking-[0.25em] text-[hsl(45_60%_50%)] uppercase font-semibold">
                Детали бронирования
              </p>
            </div>
            <div className="space-y-4">
              <SummaryRow label="Категория события" value={VALID_BOOKING.category} />
              <div className="h-px bg-[hsl(222_30%_15%)]" />
              <SummaryRow label="Дата оформления" value={VALID_BOOKING.bookedOn} />
              <div className="h-px bg-[hsl(222_30%_15%)]" />
              <SummaryRow label="Справочный номер" value={VALID_BOOKING.reference} mono />
              <div className="h-px bg-[hsl(222_30%_15%)]" />
              <SummaryRow label="Статус оплаты" value="Полностью оплачено" accent />
            </div>
          </div>

          {/* Confirmation Note */}
          <div className="rounded-2xl p-6 fade-in-up-delayed"
            style={{
              background: "linear-gradient(135deg, hsl(142 50% 10% / 0.4) 0%, hsl(142 40% 8% / 0.3) 100%)",
              border: "1px solid hsl(142 50% 25% / 0.35)",
            }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{background: "hsl(142 60% 15% / 0.6)", border: "1px solid hsl(142 60% 30% / 0.4)"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(142 70% 55%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <p className="text-[hsl(142_70%_60%)] font-semibold text-sm mb-1 tracking-wide">
                  Бронирование полностью подтверждено
                </p>
                <p className="text-[hsl(142_40%_50%)] text-xs leading-relaxed">
                  Ваше VIP-бронирование подтверждено и полностью оплачено. Все детали вашей встречи с артистом согласованы. Пожалуйста, сохраните этот документ для вашей записи.
                </p>
              </div>
            </div>
          </div>

          {/* Print footer */}
          <div className="hidden print:block mt-8 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
            <p>Официальный документ бронирования · {VALID_BOOKING.reference} · Конфиденциально</p>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 no-print fade-in-delayed">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-90 active:scale-[0.98] gold-glow relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(45 80% 55%) 0%, hsl(38 70% 45%) 50%, hsl(45 80% 50%) 100%)",
              color: "hsl(222 47% 6%)",
            }}
          >
            <span className="shimmer absolute inset-0" />
            <span className="relative flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
              Распечатать бронирование
            </span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[hsl(222_35%_14%)]"
            style={{
              background: "hsl(222 35% 11%)",
              border: "1px solid hsl(222 30% 20%)",
              color: "hsl(45 70% 60%)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Новый поиск
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="card-luxury rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg" style={{background: "hsl(45 80% 55% / 0.12)"}}>
          {icon}
        </div>
        <p className="text-xs tracking-[0.25em] text-[hsl(45_60%_50%)] uppercase font-semibold">
          {label}
        </p>
      </div>
      <p className="text-lg font-semibold text-white/90 leading-snug" style={{fontFamily: "'Playfair Display', serif"}}>
        {value}
      </p>
    </div>
  );
}

function SummaryRow({ label, value, mono, accent }: { label: string; value: string; mono?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-[hsl(222_20%_50%)] uppercase tracking-wider flex-shrink-0">{label}</span>
      <span className={`text-sm font-medium text-right ${
        accent ? "text-[hsl(142_70%_55%)]" :
        mono ? "font-mono text-[hsl(45_70%_55%)] tracking-wider" :
        "text-white/80"
      }`}>
        {value}
      </span>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function RoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
