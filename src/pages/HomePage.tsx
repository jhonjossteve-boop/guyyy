import { useState, useRef } from "react";
import { useLocation } from "wouter";

export default function HomePage() {
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const trimmed = bookingId.trim();
    if (!trimmed) {
      setError("Пожалуйста, введите номер бронирования");
      inputRef.current?.focus();
      return;
    }
    setError("");
    navigate(`/booking/${trimmed}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(45 80% 55%)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Logo / Brand Header */}
        <div className="mb-10 fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(45_80%_55%)]" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2L24.5 14H38L27.3 21.5L31.8 33.5L20 26L8.2 33.5L12.7 21.5L2 14H15.5L20 2Z" fill="hsl(45 80% 55%)" opacity="0.9"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(45_80%_55%)]" />
          </div>
          <p className="text-xs tracking-[0.4em] text-[hsl(45_60%_50%)] uppercase font-light mb-2">
            Эксклюзивный Сервис
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="gold-gradient">VIP</span>
            <span className="text-white/90 ml-3">Бронирование</span>
          </h1>
          <p className="text-sm tracking-[0.3em] text-[hsl(45_50%_45%)] uppercase mt-2">
            Артистов & Премиум Проживание
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10 fade-in-delayed">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[hsl(45_70%_45%_/_0.4)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(45_80%_55%)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(45_70%_45%)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(45_80%_55%)]" />
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[hsl(45_70%_45%_/_0.4)]" />
        </div>

        {/* Search Card */}
        <div className="card-luxury rounded-2xl p-8 md:p-10 fade-in-up">
          <h2 className="text-xl font-semibold text-white/90 mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
            Проверить Бронирование
          </h2>
          <p className="text-sm text-[hsl(222_20%_55%)] mb-8 leading-relaxed">
            Введите ваш уникальный номер бронирования для просмотра<br />
            подробной информации о вашем VIP-событии
          </p>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(45_70%_45%)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={bookingId}
                onChange={(e) => {
                  setBookingId(e.target.value);
                  setError("");
                }}
                onKeyDown={handleKeyDown}
                placeholder="Введите номер бронирования (например: 011356739)"
                className="w-full bg-[hsl(222_40%_7%)] border border-[hsl(45_50%_30%_/_0.3)] rounded-xl pl-12 pr-4 py-4 text-white/90 placeholder:text-[hsl(222_20%_38%)] focus:outline-none focus:border-[hsl(45_80%_55%_/_0.6)] focus:ring-2 focus:ring-[hsl(45_80%_55%_/_0.15)] transition-all duration-300 text-base"
                style={{fontFamily: "inherit"}}
              />
            </div>

            {error && (
              <p className="text-[hsl(0_70%_60%)] text-sm text-left pl-1 fade-in">
                {error}
              </p>
            )}

            <button
              onClick={handleSearch}
              className="w-full py-4 rounded-xl font-semibold text-base tracking-wide transition-all duration-300 hover:opacity-90 active:scale-[0.98] gold-glow relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, hsl(45 80% 55%) 0%, hsl(38 70% 45%) 50%, hsl(45 80% 50%) 100%)",
                color: "hsl(222 47% 6%)",
              }}
            >
              <span className="shimmer absolute inset-0" />
              <span className="relative flex items-center justify-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                Найти Бронирование
              </span>
            </button>
          </div>

          {/* Quick access hint */}
          <div className="mt-6 pt-6 border-t border-[hsl(222_30%_15%)]">
            <p className="text-xs text-[hsl(222_20%_40%)] text-center">
              Для тестирования введите:{" "}
              <button
                onClick={() => setBookingId("011356739")}
                className="text-[hsl(45_70%_50%)] hover:text-[hsl(45_80%_60%)] transition-colors underline underline-offset-2"
              >
                #011356739
              </button>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-[hsl(222_20%_35%)] fade-in-delayed">
          Все бронирования защищены и конфиденциальны
        </p>
      </div>
    </div>
  );
}
