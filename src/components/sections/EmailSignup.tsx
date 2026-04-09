"use client";

export function EmailSignup() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          color: "var(--color-oat)",
          border: "1.5px solid rgba(255,255,255,0.3)",
          fontFamily: "var(--font-body)",
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 text-sm font-semibold rounded-full transition-all hover:opacity-90"
        style={{
          backgroundColor: "var(--color-oat)",
          color: "var(--color-mulberry)",
          fontFamily: "var(--font-body)",
        }}
      >
        Join the List
      </button>
    </form>
  );
}
