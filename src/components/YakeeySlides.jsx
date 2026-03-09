import { useState } from "react";

const G = "#203431";
const R = "#BB3F64";
const GLL = "#e8f0ef";
const W = "#ffffff";

const Logo = ({ light = false, size = 20 }) => (
  <div style={{ fontFamily: "Georgia, serif", fontSize: size, fontWeight: 700, color: light ? W : G, letterSpacing: -0.5 }}>
    Yakeey
  </div>
);

const Dash = ({ color = R }) => (
  <span style={{ color, fontWeight: 700, marginRight: 6, flexShrink: 0 }}>—</span>
);

const BulletList = ({ items, light = false, color = R }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 6px" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", fontSize: 11.5, color: light ? "rgba(255,255,255,0.8)" : "#2a2a2a", lineHeight: 1.55, marginBottom: 4 }}>
        <Dash color={color} /><span>{item}</span>
      </li>
    ))}
  </ul>
);

const Tag = ({ children }) => (
  <span style={{ background: G, color: W, fontSize: 9.5, fontWeight: 600, padding: "2px 9px", borderRadius: 20, display: "inline-block" }}>{children}</span>
);

const slides = [
  // 1 — Cover
  () => (
    <div style={{ background: G, height: "100%", display: "flex", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -80, top: -80, width: 380, height: 380, borderRadius: "50%", background: R, opacity: 0.13 }} />
      <div style={{ position: "absolute", right: 50, bottom: -50, width: 200, height: 200, borderRadius: "50%", background: R, opacity: 0.08 }} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "52px 56px" }}>
        <div style={{ marginBottom: 20 }}><Logo light size={22} /></div>
        <div style={{ fontSize: 10, letterSpacing: 3, color: R, marginBottom: 16, fontWeight: 700 }}>SOLUTION D'ACHAT IMMÉDIAT · MAROC</div>
        <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.08, margin: "0 0 20px", color: W }}>
          Vendez <em style={{ color: R, fontStyle: "italic" }}>vite,</em><br />
          vendez <em style={{ color: R, fontStyle: "italic" }}>bien.</em>
        </h1>
        <p style={{ fontSize: 14, maxWidth: 400, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", margin: 0 }}>
          Une offre ferme. Un acheteur institutionnel.<br />
          Zéro risque de désistement. Le iBuying réinvente<br />
          la transaction immobilière au Maroc.
        </p>
      </div>
      <div style={{ width: 250, background: "rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 32px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: W, lineHeight: 1 }}>2,4%</div>
          <div style={{ fontSize: 9.5, letterSpacing: 2.5, color: R, marginTop: 4, fontWeight: 700 }}>COMMISSION CONSEILLER</div>
          <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.6)", marginTop: 8, lineHeight: 1.6 }}>Payée par Yakeey<br />sur chaque transaction</div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 18, textAlign: "center" }}>
          <div style={{ fontSize: 11.5, color: R, fontWeight: 700, marginBottom: 5 }}>✦ OFFRE NET VENDEUR</div>
          <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>Aucune commission<br />à payer côté vendeur</div>
        </div>
      </div>
    </div>
  ),

  // 2 — Parcours
  () => (
    <div style={{ background: GLL, height: "100%", display: "flex", flexDirection: "column", padding: "44px 56px" }}>
      <div style={{ fontSize: 10, letterSpacing: 3, color: R, marginBottom: 28, fontWeight: 700 }}>PARCOURS VENDEUR</div>
      <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 36 }}>
        {[
          { n: 1, label: "Demande\nd'offre en ligne" },
          { n: 2, label: "Visite &\nvalorisation" },
          { n: 3, label: "Offre ferme\nreçue" },
          { n: 4, label: "Acceptation &\nacte définitif" },
          { n: 5, label: "Paiement\ncomptant" },
        ].map((s, i, arr) => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: R, color: W, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, fontWeight: 800 }}>{s.n}</div>
              <div style={{ fontSize: 11.5, textAlign: "center", marginTop: 10, color: G, lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 600 }}>{s.label}</div>
            </div>
            {i < arr.length - 1 && <div style={{ flex: 1, height: 2, background: R, opacity: 0.3, margin: "0 4px", marginBottom: 26 }} />}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, flex: 1, alignItems: "center" }}>
        {[
          { num: "100%", label: "COMPTANT", color: R },
          { num: "0", label: "COMPROMIS DE VENTE", color: G },
          { num: "0%", label: "RISQUE DE DÉSISTEMENT", color: G },
          { num: "2,4%", label: "COMMISSION CONSEILLER TTC", color: R },
        ].map(k => (
          <div key={k.label} style={{ flex: 1, background: W, borderRadius: 12, padding: "22px 14px", textAlign: "center", boxShadow: "0 2px 14px rgba(32,52,49,0.09)", borderBottom: `3px solid ${k.color}` }}>
            <div style={{ fontSize: 38, fontWeight: 900, color: k.color, lineHeight: 1 }}>{k.num}</div>
            <div style={{ fontSize: 9, letterSpacing: 1.5, color: G, marginTop: 6, fontWeight: 600 }}>{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  // 3 — Qui est ciblé
  () => (
    <div style={{ background: W, height: "100%", display: "flex", flexDirection: "column", padding: "36px 56px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${R}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: R, flexShrink: 0 }}>①</div>
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: G }}>Qui est ciblé ?</h2>
      </div>
      <div style={{ display: "flex", gap: 14, flex: 1 }}>
        {[
          { icon: "⏱", label: "Contrainte de timing", need: "Vendre vite",
            items: ["Mutation / départ à l'étranger", "Achat engagé nécessitant une vente rapide", "Succession ou divorce"] },
          { icon: "🔒", label: "Besoin de certitude", need: "Sécuriser la transaction", color: G,
            items: ["Financer un nouveau projet", "Éliminer le risque de désistement", "Éviter visites et négociations"] },
          { icon: "⚖️", label: "Arbitrage prix / simplicité", need: "Réduire la friction",
            items: ["Processus long et incertain refusé", "Transaction rapide acceptée avec décote", "Délégation complète souhaitée"] },
        ].map((col, i) => (
          <div key={i} style={{ flex: 1, background: GLL, borderRadius: 12, padding: "20px 18px", borderTop: `3px solid ${col.color || R}` }}>
            <div style={{ fontSize: 9.5, letterSpacing: 1.5, fontWeight: 800, color: col.color || R, marginBottom: 6, textTransform: "uppercase" }}>{col.icon} {col.label}</div>
            <div style={{ background: col.color || R, color: W, borderRadius: 6, padding: "3px 10px", fontSize: 10.5, fontWeight: 600, marginBottom: 14, display: "inline-block" }}>→ {col.need}</div>
            <BulletList items={col.items} color={col.color || R} />
          </div>
        ))}
      </div>
    </div>
  ),

  // 4 — Avantages vendeur
  () => (
    <div style={{ background: GLL, height: "100%", display: "flex", flexDirection: "column", padding: "36px 56px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${R}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: R, flexShrink: 0 }}>②</div>
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: G }}>Avantages vendeur</h2>
      </div>
      <div style={{ display: "flex", gap: 14, flex: 1 }}>
        {[
          { icon: "🏦", label: "Sécurité Maximale", color: G,
            items: ["Acheteur institutionnel : Umnia Bank", "Zéro risque de désistement lié au financement"] },
          { icon: "⚡", label: "Vente Rapide", color: R,
            items: ["Paiement 100% comptant", "Signature directe de l'acte définitif — pas de compromis"] },
          { icon: "📊", label: "Prix & Simplicité", color: G,
            items: ["Valorisation homologuée par l'administration publique", "Pas de mandat requis pour recevoir une offre", "Parcours encadré et sans surprise"] },
        ].map((col, i) => (
          <div key={i} style={{ flex: 1, background: W, borderRadius: 12, padding: "22px 18px", boxShadow: "0 2px 14px rgba(32,52,49,0.07)", borderTop: `3px solid ${col.color}` }}>
            <div style={{ fontSize: 9.5, letterSpacing: 1.5, fontWeight: 800, color: col.color, marginBottom: 14, textTransform: "uppercase" }}>{col.icon} {col.label}</div>
            {col.items.map((item, j) => (
              <div key={j} style={{ display: "flex", fontSize: 12.5, color: G, lineHeight: 1.55, marginBottom: 8 }}>
                <span style={{ color: R, fontWeight: 700, marginRight: 8, flexShrink: 0 }}>✓</span><span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ),

  // 5 — Biens éligibles
  () => (
    <div style={{ background: W, height: "100%", display: "flex", flexDirection: "column", padding: "32px 56px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${R}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: R, flexShrink: 0 }}>🏢</div>
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: G }}>Biens éligibles</h2>
        <span style={{ background: R, color: W, fontSize: 9.5, fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>Appartement liquide</span>
      </div>
      <div style={{ display: "flex", gap: 14, flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: GLL, borderRadius: 10, padding: "14px 16px", borderTop: `3px solid ${R}` }}>
            <div style={{ fontSize: 9, letterSpacing: 1.5, color: R, fontWeight: 800, marginBottom: 8, textTransform: "uppercase" }}>📍 Quartiers cibles</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {["Hôpitaux","Princesses","Mandarouna","Lekrimate","Maarif ext.","Bourgogne","Gauthier"].map(q => <Tag key={q}>{q}</Tag>)}
            </div>
          </div>
          <div style={{ background: GLL, borderRadius: 10, padding: "14px 16px", borderTop: `3px solid ${G}`, flex: 1 }}>
            <div style={{ fontSize: 9, letterSpacing: 1.5, color: G, fontWeight: 800, marginBottom: 8, textTransform: "uppercase" }}>💰 Budget & Typologie</div>
            <BulletList items={["800 000 – 2 200 000 MAD", "Résidentiel, 2–3 chambres", "Hors rez-de-chaussée"]} />
          </div>
        </div>
        <div style={{ flex: 1, background: GLL, borderRadius: 10, padding: "14px 16px", borderTop: `3px solid ${G}` }}>
          <div style={{ fontSize: 9, letterSpacing: 1.5, color: G, fontWeight: 800, marginBottom: 10, textTransform: "uppercase" }}>✨ Caractéristiques du bien</div>
          <BulletList items={["Bonne luminosité naturelle (Sud / Ouest / Est)", "Vis-à-vis limité", "Agencement standard", "Absence de travaux lourds à prévoir", "Espaces communs propres et entretenus"]} />
        </div>
        <div style={{ flex: 1, background: G, borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontSize: 9, letterSpacing: 1.5, color: R, fontWeight: 800, marginBottom: 10, textTransform: "uppercase" }}>📋 Documents à collecter</div>
          <BulletList light items={["Localisation de l'intérieur du bien", "Certificat de propriété", "Exposition du salon"]} />
        </div>
      </div>
    </div>
  ),

  // 6 — Avantages conseiller
  () => (
    <div style={{ background: G, height: "100%", display: "flex", flexDirection: "column", padding: "36px 56px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -60, bottom: -60, width: 260, height: 260, borderRadius: "50%", background: R, opacity: 0.11 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${R}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: R, flexShrink: 0 }}>③</div>
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: W }}>Avantages conseiller</h2>
      </div>
      <div style={{ display: "flex", gap: 14, flex: 1 }}>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "22px 18px", borderTop: `3px solid ${R}` }}>
          <div style={{ fontSize: 9.5, letterSpacing: 1.5, color: R, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>💰 Revenu sécurisé</div>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div style={{ background: R, color: W, borderRadius: 8, padding: "10px 20px", display: "inline-block", fontSize: 24, fontWeight: 900 }}>2,4 % TTC</div>
            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.6)", marginTop: 10 }}>payé par Yakeey</div>
          </div>
        </div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "22px 18px", borderTop: `3px solid ${R}` }}>
          <div style={{ fontSize: 9.5, letterSpacing: 1.5, color: R, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>🎯 Génération de leads</div>
          <BulletList light color="rgba(255,255,255,0.5)" items={["Bien non éligible ou offre refusée = opportunité de mandat classique", "Flux continu de contacts qualifiés"]} />
        </div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "22px 18px", borderTop: `3px solid ${R}` }}>
          <div style={{ fontSize: 9.5, letterSpacing: 1.5, color: R, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>🤝 Mandats facilités</div>
          <BulletList light color="rgba(255,255,255,0.5)" items={["Travail pédagogique sur la valeur réelle du bien", "Facilite la signature au juste prix de marché"]} />
        </div>
      </div>
      <div style={{ marginTop: 18, textAlign: "center" }}><Logo light size={16} /></div>
    </div>
  ),
];

export default function YakeeySlides() {
  const [cur, setCur] = useState(0);
  const Slide = slides[cur];
  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: G, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 10, letterSpacing: 1 }}>
        SLIDE {cur + 1} / {slides.length}
      </div>
      <div style={{ width: 860, height: 480, borderRadius: 14, overflow: "hidden", boxShadow: "0 16px 56px rgba(0,0,0,0.5)" }}>
        <Slide />
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 18, alignItems: "center" }}>
        <button
          onClick={() => setCur(c => Math.max(0, c - 1))}
          disabled={cur === 0}
          style={{ padding: "9px 26px", borderRadius: 8, border: "none", background: cur === 0 ? "rgba(255,255,255,0.1)" : R, color: W, fontWeight: 700, cursor: cur === 0 ? "default" : "pointer", fontSize: 14 }}>
          ← Prev
        </button>
        {slides.map((_, i) => (
          <div key={i} onClick={() => setCur(i)}
            style={{ width: 9, height: 9, borderRadius: "50%", background: i === cur ? R : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "background 0.2s" }} />
        ))}
        <button
          onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))}
          disabled={cur === slides.length - 1}
          style={{ padding: "9px 26px", borderRadius: 8, border: "none", background: cur === slides.length - 1 ? "rgba(255,255,255,0.1)" : R, color: W, fontWeight: 700, cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 14 }}>
          Next →
        </button>
      </div>
    </div>
  );
}
