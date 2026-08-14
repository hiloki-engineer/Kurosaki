import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#top">
            <svg className="mark" viewBox="0 0 48 48" fill="none">
              <path
                d="M6 26c0-11 8-19 18-19s18 8 18 19c0 8-6 14-14 14H20c-8 0-14-6-14-14Z"
                fill="#D98E3B"
              />
              <path
                d="M8 26c1.5-1 3-1.6 4.4-.6 1.4 1 2.8 1 4.2 0 1.4-1 2.8-1 4.2 0 1.4 1 2.8 1 4.2 0 1.4-1 2.8-1 4.2 0 1.4 1 2.8 1 4.2 0 1.4-1 3-.4 4.6.6"
                stroke="#8A4B22"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            GYOZA SHAMPOO
          </a>
          <ul className="navLinks">
            <li>
              <a href="#worries">お悩み</a>
            </li>
            <li>
              <a href="#ingredients">成分</a>
            </li>
            <li>
              <a href="#steps">使い方</a>
            </li>
            <li>
              <a href="#reviews">口コミ</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
          <div className="navCta">
            <a className="btn btnPrimary" href="#pricing">
              今すぐ購入
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <span className="eyebrow">宇都宮生まれ、話題沸騰中</span>
              <h1>
                餃子を楽しんだあとも、
                <br />
                髪も体も<span className="accent">サッパリ</span>に。
              </h1>
              <p className="lead">
                全身洗えてリンスもいらない、敏感肌にもやさしいオールインワンシャンプー「GYOZA
                SHAMPOO」。餃子や揚げ物の油のニオイもしっかり洗い流します。
              </p>
              <div className="heroActions">
                <a className="btn btnPrimary" href="#pricing">
                  ¥880で購入する
                </a>
                <a className="btn btnGhost" href="#ingredients">
                  特長を見る
                </a>
              </div>
              <div className="heroBadges">
                <span>
                  <span className="dot"></span>ノンシリコン
                </span>
                <span>
                  <span className="dot"></span>リンスがいらない
                </span>
                <span>
                  <span className="dot"></span>全身洗えるオールインワン
                </span>
              </div>
            </div>
            <div className="heroVisual">
              <div className="plateRing"></div>
              <svg
                className="steam"
                width="26"
                height="60"
                viewBox="0 0 26 60"
                fill="none"
              >
                <path
                  d="M13 2C6 12 20 18 13 28C6 38 20 44 13 58"
                  stroke="#D98E3B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="steam s2"
                width="20"
                height="46"
                viewBox="0 0 26 60"
                fill="none"
              >
                <path
                  d="M13 2C6 12 20 18 13 28C6 38 20 44 13 58"
                  stroke="#D98E3B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="steam s3"
                width="20"
                height="50"
                viewBox="0 0 26 60"
                fill="none"
              >
                <path
                  d="M13 2C6 12 20 18 13 28C6 38 20 44 13 58"
                  stroke="#D98E3B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="bottle" viewBox="0 0 220 340" fill="none">
                <ellipse
                  cx="110"
                  cy="322"
                  rx="72"
                  ry="14"
                  fill="rgba(59,42,26,0.12)"
                />
                {/* pouch spout & cap */}
                <rect x="94" y="18" width="32" height="24" rx="7" fill="#3B2A1A" />
                <rect x="86" y="38" width="48" height="20" rx="10" fill="#8A4B22" />
                {/* pouch body */}
                <path
                  d="M50 66 C50 58 56 52 64 52 H156 C164 52 170 58 170 66 V276 C170 300 150 316 122 316 H98 C70 316 50 300 50 276 Z"
                  fill="#FBEFD9"
                  stroke="#E4C9A0"
                  strokeWidth="2"
                />
                <ellipse
                  cx="82"
                  cy="130"
                  rx="16"
                  ry="58"
                  fill="#fff"
                  opacity="0.35"
                  transform="rotate(-8 82 130)"
                />
                {/* label */}
                <rect x="64" y="146" width="92" height="108" rx="14" fill="#fff" stroke="#E4572E" strokeWidth="3" />
                <path d="M64 160 V160 a14 14 0 0 1 14 -14 h64 a14 14 0 0 1 14 14 v10 H64 Z" fill="#E4572E" />
                <text
                  x="110"
                  y="167"
                  textAnchor="middle"
                  fontFamily="Hiragino Sans, sans-serif"
                  fontSize="9"
                  fontWeight="700"
                  fill="#fff"
                >
                  宇都宮限定
                </text>
                <text
                  x="110"
                  y="205"
                  textAnchor="middle"
                  fontFamily="Hiragino Sans, sans-serif"
                  fontSize="17"
                  fontWeight="700"
                  fill="#8A4B22"
                >
                  餃子シャンプー
                </text>
                <text
                  x="110"
                  y="223"
                  textAnchor="middle"
                  fontFamily="Hiragino Sans, sans-serif"
                  fontSize="9"
                  fill="#B08A5F"
                >
                  GYOZA SHAMPOO
                </text>
                <text
                  x="110"
                  y="244"
                  textAnchor="middle"
                  fontFamily="Hiragino Sans, sans-serif"
                  fontSize="12"
                  fontWeight="700"
                  fill="#E4572E"
                >
                  ¥880
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <div className="strip">
          <div className="wrap">
            <div className="item">🥟 宇都宮限定パッケージ</div>
            <div className="item">🧴 全身に使える</div>
            <div className="item">🌱 敏感肌にもやさしい処方</div>
            <div className="item">🇯🇵 国内生産</div>
          </div>
        </div>

        {/* WORRIES */}
        <section id="worries">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">こんなお悩みありませんか？</span>
              <h2>髪や体についた、油・ニオイが気になる。</h2>
              <p>そのお悩み、宇都宮生まれの「GYOZA SHAMPOO」がスッキリ解決します。</p>
            </div>
            <div className="worryGrid">
              <div className="worryCard">
                <div className="emoji">🥟</div>
                <h3>餃子や揚げ物のあと、ニオイが気になる</h3>
                <p>油汚れをしっかり洗い流し、気になるニオイをオフします。</p>
              </div>
              <div className="worryCard">
                <div className="emoji">⏱️</div>
                <h3>お風呂の時間を短縮したい</h3>
                <p>リンス不要の1本で、洗う手間も時間もぐっと時短に。</p>
              </div>
              <div className="worryCard">
                <div className="emoji">🌿</div>
                <h3>肌が弱くてシャンプー選びに困る</h3>
                <p>ノンシリコン・敏感肌にも使えるやさしい処方です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section id="ingredients" className="ingredients">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">こだわりのポイント</span>
              <h2>1本で、洗う。それだけでいい。</h2>
              <p>髪も体も、これ1本でサッパリ仕上がるオールインワン処方です。</p>
            </div>
            <div className="ingGrid">
              <div className="ingCard">
                <div className="iconArea">
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <ellipse cx="32" cy="32" rx="26" ry="20" fill="#F4E4C8" />
                    <path
                      d="M14 32c4-3 8-4 10-1 2 3 6 3 8 0 2-3 6-3 8 0 2 3 6 2 10 1"
                      stroke="#D98E3B"
                      strokeWidth="2.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="body">
                  <span className="tag">時短</span>
                  <h3>🧴 リンスがいらない</h3>
                  <p>洗い流すだけで指通りなめらか。忙しい日のバスタイムを時短します。</p>
                </div>
              </div>
              <div className="ingCard">
                <div className="iconArea">
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <rect x="16" y="14" width="32" height="36" rx="10" fill="#DCEBC8" />
                    <path
                      d="M24 24v16M32 20v20M40 24v16"
                      stroke="#6B8E4E"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="body">
                  <span className="tag">全身</span>
                  <h3>🚿 全身洗えるオールインワン</h3>
                  <p>髪はもちろん、体まで洗えるタイプ。旅行や銭湯にも便利です。</p>
                </div>
              </div>
              <div className="ingCard">
                <div className="iconArea">
                  <svg width="64" height="64" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="18" fill="#F6D9C4" />
                    <circle cx="32" cy="32" r="6" fill="#E4572E" />
                  </svg>
                </div>
                <div className="body">
                  <span className="tag">低刺激</span>
                  <h3>🌱 敏感肌にも・ノンシリコン</h3>
                  <p>やさしい洗い上がりで、敏感肌の方にもお使いいただけます。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section id="steps">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">使い方はかんたん3ステップ</span>
              <h2>まるで餃子を仕込むように。</h2>
            </div>
            <div className="steps">
              <div className="step">
                <div className="num">1</div>
                <h3>皮をふやかす（予洗い）</h3>
                <p>ぬるま湯で1分ほどしっかり予洗いし、髪と地肌をやわらかくほぐします。</p>
              </div>
              <div className="step">
                <div className="num">2</div>
                <h3>包み込むように泡立て</h3>
                <p>500円玉大を手に取り、具材を包むようにやさしく頭皮をマッサージ。</p>
              </div>
              <div className="step">
                <div className="num">3</div>
                <h3>羽根つきで仕上げすすぎ</h3>
                <p>しっかりすすいで乾かせば、パリッともちもちの艶髪が完成。</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="ingredients">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">お客様の声</span>
              <h2>使うたびに、ちょっとお腹が空く。</h2>
            </div>
            <div className="reviewGrid">
              <div className="reviewCard">
                <div className="stars">★★★★★</div>
                <p className="quote">
                  「リンスがいらないので本当に時短。敏感肌の私でも突っ張らずに使えました。」
                </p>
                <div className="reviewer">
                  <div className="avatar">M</div>30代・美容師
                </div>
              </div>
              <div className="reviewCard">
                <div className="stars">★★★★★</div>
                <p className="quote">
                  「宇都宮で餃子を食べまくった帰り道、これで洗ったらニオイもスッキリ。全身に使えるのも便利です。」
                </p>
                <div className="reviewer">
                  <div className="avatar">K</div>20代・営業職
                </div>
              </div>
              <div className="reviewCard">
                <div className="stars">★★★★☆</div>
                <p className="quote">
                  「主人の頭皮のニオイ対策に購入。加齢臭にも良いと聞いて試してみたら効果を実感しました。」
                </p>
                <div className="reviewer">
                  <div className="avatar">S</div>40代・主婦
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing">
          <div className="wrap">
            <div className="pricing">
              <span
                className="eyebrow"
                style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
              >
                宇都宮限定・数量限定
              </span>
              <h2>GYOZA SHAMPOO</h2>
              <div className="priceRow">
                <span className="new">¥880</span>
                <span className="unit">（税込・1個）</span>
              </div>
              <p className="note">宇都宮の一部店舗限定販売・おひとり様5個まで</p>
              <a className="btn btnPrimary" href="#top">
                店舗で購入する
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">よくあるご質問</span>
              <h2>購入前に気になること</h2>
            </div>
            <Faq />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footerGrid">
            <a className="logo" href="#top">
              <svg className="mark" viewBox="0 0 48 48" fill="none">
                <path
                  d="M6 26c0-11 8-19 18-19s18 8 18 19c0 8-6 14-14 14H20c-8 0-14-6-14-14Z"
                  fill="#D98E3B"
                />
              </svg>
              GYOZA SHAMPOO
            </a>
            <div className="footerCols">
              <div>
                <h4>コンテンツ</h4>
                <ul>
                  <li>
                    <a href="#worries">お悩み</a>
                  </li>
                  <li>
                    <a href="#ingredients">成分</a>
                  </li>
                  <li>
                    <a href="#reviews">口コミ</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>サポート</h4>
                <ul>
                  <li>
                    <a href="#faq">よくある質問</a>
                  </li>
                  <li>
                    <a href="#pricing">ご購入</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <span>© 2026 GYOZA SHAMPOO. All rights reserved.</span>
            <span>
              本サイトは宇都宮限定「餃子シャンプー」を参考に制作した非公式デモLPです。
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
