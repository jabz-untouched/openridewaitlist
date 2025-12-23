'use client';

export default function TestStyle() {
  return (
    <div className="min-h-screen bg-brand-orange flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-black text-brand-black mb-4">Tailwind CSS Test</h1>
        <p className="text-lg text-gray-600">If you see an orange background with white box, Tailwind is working!</p>
        <div className="mt-6 inline-block bg-brand-light px-6 py-3 rounded-full text-brand-orange font-bold">
          ✓ Styles Applied
        </div>
      </div>
    </div>
  );
}
