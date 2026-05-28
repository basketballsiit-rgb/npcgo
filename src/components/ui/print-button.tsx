"use client";

export function PrintButton() {
  return (
    <button 
      onClick={() => window.print()} 
      className="print-hidden absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
    >
      🖨️ สั่งพิมพ์
    </button>
  );
}
