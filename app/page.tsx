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
              <span className="eyebrow">洗うたびに、食欲そそる艶髪へ</span>
              <h1>
                皮はパリッと、
                <br />
                髪は<span className="accent">もちもち艶髪</span>に。
              </h1>
              <p className="lead">
                餃子職人の&quot;皮づくり&quot;から着想した独自処方。表面はサラッと、内側はもちもち仕上がる新感覚シャンプー「GYOZA
                SHAMPOO」誕生。
              </p>
              <div className="heroActions">
                <a className="btn btnPrimary" href="#pricing">
                  初回50%OFFで試す
                </a>
                <a className="btn btnGhost" href="#ingredients">
                  成分を見る
                </a>
              </div>
              <div className="heroBadges">
                <span>
                  <span className="dot"></span>無添加処方
                </span>
                <span>
                  <span className="dot"></span>国産キャベツ由来成分
                </span>
                <span>
                  <span className="dot"></span>累計30万本突破
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
                  cy="320"
                  rx="70"
                  ry="14"
                  fill="rgba(59,42,26,0.12)"
                />
                <path
                  d="M78 70h64v-24c0-8-6-14-14-14H92c-8 0-14 6-14 14v24Z"
                  fill="#8A4B22"
                />
                <rect x="86" y="18" width="48" height="20" rx="6" fill="#3B2A1A" />
                <path
                  d="M60 70h100c12 0 20 10 20 22v190c0 22-18 34-40 34H80c-22 0-40-12-40-34V92c0-12 8-22 20-22Z"
                  fill="#E4572E"
                />
                <path
                  d="M60 70h100c12 0 20 10 20 22v40H40v-40c0-12 8-22 20-22Z"
                  fill="#D98E3B"
                />
                <rect x="46" y="150" width="128" height="120" rx="18" fill="#FFF8EC" />
                <circle cx="110" cy="188" r="20" fill="#D98E3B" />
                <path
                  d="M92 188c4-8 12-12 18-12s14 4 18 12c-4 8-12 12-18 12s-14-4-18-12Z"
                  fill="#fff"
                />
                <text
                  x="110"
                  y="235"
                  textAnchor="middle"
                  fontFamily="Hiragino Sans, sans-serif"
                  fontSize="15"
                  fontWeight="700"
                  fill="#8A4B22"
                >
                  餃子シャンプー
                </text>
                <text
                  x="110"
                  y="252"
                  textAnchor="middle"
                  fontFamily="Hiragino Sans, sans-serif"
                  fontSize="9"
                  fill="#B08A5F"
                >
                  GYOZA SHAMPOO
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <div className="strip">
          <div className="wrap">
            <div className="item">🥟 モンドセレクション受賞風</div>
            <div className="item">🧴 30日間返金保証</div>
            <div className="item">🌱 無香料モードあり</div>
            <div className="item">🇯🇵 国内工場生産</div>
          </div>
        </div>

        {/* WORRIES */}
        <section id="worries">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">こんなお悩みありませんか？</span>
              <h2>髪のパサつき、ぺたんこ、まとまらない。</h2>
              <p>その悩み、餃子の「皮」と「羽根」の力で解決できるかもしれません。</p>
            </div>
            <div className="worryGrid">
              <div className="worryCard">
                <div className="emoji">😩</div>
                <h3>髪がパサついてまとまらない</h3>
                <p>皮由来のもちもち保湿成分が、髪の内側までしっとり閉じ込めます。</p>
              </div>
              <div className="worryCard">
                <div className="emoji">📉</div>
                <h3>夕方になるとぺたんこに</h3>
                <p>羽根つき仕上げ処方で、根元からふんわり軽やかなボリュームをキープ。</p>
              </div>
              <div className="worryCard">
                <div className="emoji">👃</div>
                <h3>におい残りが心配</h3>
                <p>ご安心を。にんにく・にらは香り成分を除去して配合、爽やかなハーブの香りです。</p>
              </div>
            </div>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section id="ingredients" className="ingredients">
          <div className="wrap">
            <div className="sectionHead">
              <span className="eyebrow">こだわりの配合</span>
              <h2>餃子の&quot;うまみ&quot;を、髪へ。</h2>
              <p>職人が選び抜いた具材由来成分を、頭皮ケア成分として再設計しました。</p>
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
                  <span className="tag">保湿</span>
                  <h3>🥬 国産キャベツ由来成分</h3>
                  <p>皮のもちもち感を生む食物繊維成分をヒントに、髪表面のうるおいベールを形成。</p>
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
                  <span className="tag">頭皮ケア</span>
                  <h3>🌱 ニラ由来エキス</h3>
                  <p>血行促進が期待されるニラエキスを消臭精製し、健やかな地肌環境をサポート。</p>
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
                  <span className="tag">艶感</span>
                  <h3>✨ 香味オイルブレンド</h3>
                  <p>フライパンで焼き上げたような艶とコシを、軽やかなオイルブレンドで実現。</p>
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
                  「洗い上がりのツヤがすごい。ただ毎回夜ご飯に餃子を食べたくなるのが唯一の副作用です（笑）」
                </p>
                <div className="reviewer">
                  <div className="avatar">M</div>30代・美容師
                </div>
              </div>
              <div className="reviewCard">
                <div className="stars">★★★★★</div>
                <p className="quote">
                  「ぺたんこ髪が悩みでしたが、羽根つき仕上げ処方のおかげで夕方までふんわり続きます。」
                </p>
                <div className="reviewer">
                  <div className="avatar">K</div>20代・営業職
                </div>
              </div>
              <div className="reviewCard">
                <div className="stars">★★★★☆</div>
                <p className="quote">
                  「においが心配でしたが、実際は爽やかなハーブの香り。安心してオフィスにも行けます。」
                </p>
                <div className="reviewer">
                  <div className="avatar">S</div>40代・会社員
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
                今だけ限定オファー
              </span>
              <h2>初回限定・お試しセット</h2>
              <div className="priceRow">
                <span className="old">¥4,980</span>
                <span className="new">¥2,480</span>
                <span className="unit">/ 本（税込）</span>
              </div>
              <p className="note">送料無料・いつでも解約OK・30日間全額返金保証付き</p>
              <a className="btn btnPrimary" href="#top">
                今すぐ購入して試してみる
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
            <span>本サイトはデモ用に制作されたフィクションのLPです。</span>
          </div>
        </div>
      </footer>
    </>
  );
}
