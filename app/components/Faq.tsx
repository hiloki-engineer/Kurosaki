"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "頭皮がにんにく臭くなりませんか？",
    a: "いいえ。配合するニンニク・ニラ由来成分は香り成分を独自技術で除去済みのため、洗い上がりは爽やかなハーブの香りです。",
  },
  {
    q: "敏感肌でも使えますか？",
    a: "アレルギーテスト済み・無添加処方です。ただし肌に合わない場合がございますので、心配な方はパッチテストをおすすめします。",
  },
  {
    q: "解約はいつでもできますか？",
    a: "回数縛りなし、マイページからいつでも解約・休止いただけます。",
  },
  {
    q: "本当に餃子は食べられませんか？",
    a: "本製品は食品ではありません。シャンプーとしてのみご使用ください（が、良い香りで食欲は刺激するかもしれません）。",
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
