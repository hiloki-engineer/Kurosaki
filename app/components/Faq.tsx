"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "餃子の香りがするのですか？",
    a: "いいえ、餃子の香りではありません。むしろ餃子や揚げ物の油のニオイをすっきり洗い流すためのシャンプーです。洗い上がりはさっぱりとした清潔感のある香りです。",
  },
  {
    q: "敏感肌でも使えますか？",
    a: "はい。ノンシリコン・低刺激処方で、敏感肌の方にもお使いいただけます。ただし肌に合わない場合は使用を中止してください。",
  },
  {
    q: "リンスは必要ですか？",
    a: "いいえ、リンス不要です。これ1本で指通りなめらかな洗い上がりに仕上がります。",
  },
  {
    q: "髪以外にも使えますか？",
    a: "はい、全身に使えるオールインワンタイプです。旅行や銭湯での持ち運びにも便利です。",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={`faqItem${isOpen ? " open" : ""}`}
          >
            <button
              type="button"
              className="faqQ"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.q}
              <svg className="icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              className="faqA"
              style={{ maxHeight: isOpen ? "200px" : "0" }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
