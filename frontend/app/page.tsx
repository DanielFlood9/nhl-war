"use client"

import Link from "next/link"

const PLAYERS = [
  { id:1,  name:"Mitch Marner",      team:"VGK", pos:"R", war:2.28, gar:13.68, g:7,  a:14, pts:21, gp:13 },
  { id:2,  name:"Jack Eichel",       team:"VGK", pos:"C", war:2.12, gar:12.72, g:5,  a:16, pts:21, gp:13 },
  { id:3,  name:"Nathan MacKinnon",  team:"COL", pos:"C", war:2.08, gar:12.48, g:7,  a:15, pts:22, gp:13 },
  { id:4,  name:"Logan Stankoven",   team:"CAR", pos:"C", war:1.95, gar:11.70, g:9,  a:10, pts:19, gp:13 },
  { id:5,  name:"Taylor Hall",       team:"CAR", pos:"L", war:1.88, gar:11.28, g:6,  a:16, pts:22, gp:13 },
  { id:6,  name:"Pavel Dorofeyev",   team:"VGK", pos:"L", war:1.72, gar:10.32, g:10, a:8,  pts:18, gp:13 },
  { id:7,  name:"Brett Howden",      team:"VGK", pos:"C", war:1.64, gar:9.84,  g:10, a:8,  pts:18, gp:13 },
  { id:8,  name:"Matt Boldy",        team:"MIN", pos:"L", war:1.58, gar:9.48,  g:7,  a:11, pts:18, gp:13 },
  { id:9,  name:"Jackson Blake",     team:"CAR", pos:"R", war:1.52, gar:9.12,  g:6,  a:15, pts:21, gp:13 },
  { id:10, name:"Nick Suzuki",       team:"MTL", pos:"C", war:1.48, gar:8.88,  g:7,  a:16, pts:23, gp:13 },
  { id:11, name:"Quinn Hughes",      team:"MIN", pos:"D", war:1.42, gar:8.52,  g:3,  a:15, pts:18, gp:13 },
  { id:12, name:"Tage Thompson",     team:"BUF", pos:"C", war:1.38, gar:8.28,  g:6,  a:15, pts:21, gp:13 },
  { id:13, name:"Gabriel Landeskog", team:"COL", pos:"L", war:1.24, gar:7.44,  g:6,  a:10, pts:16, gp:11 },
  { id:14, name:"Lane Hutson",       team:"MTL", pos:"D", war:1.18, gar:7.08,  g:4,  a:16, pts:20, gp:13 },
  { id:15, name:"Cole Caufield",     team:"MTL", pos:"R", war:1.12, gar:6.72,  g:6,  a:9,  pts:15, gp:13 },
  { id:16, name:"Alex Newhook",      team:"MTL", pos:"C", war:1.08, gar:6.48,  g:7,  a:9,  pts:16, gp:13 },
  { id:17, name:"Kirill Kaprizov",   team:"MIN", pos:"L", war:1.02, gar:6.12,  g:5,  a:15, pts:20, gp:13 },
  { id:18, name:"Brandon Hagel",     team:"TBL", pos:"L", war:0.96, gar:5.76,  g:6,  a:9,  pts:15, gp:13 },
  { id:19, name:"Nikolaj Ehlers",    team:"CAR", pos:"L", war:0.92, gar:5.52,  g:5,  a:10, pts:15, gp:13 },
  { id:20, name:"Zach Benson",       team:"BUF", pos:"L", war:0.88, gar:5.28,  g:4,  a:10, pts:14, gp:13 },
  { id:21, name:"Connor McDavid",    team:"EDM", pos:"C", war:0.82, gar:4.92,  g:4,  a:11, pts:15, gp:10 },
  { id:22, name:"Leon Draisaitl",    team:"EDM", pos:"C", war:0.78, gar:4.68,  g:5,  a:9,  pts:14, gp:10 },
  { id:23, name:"Jake Evans",        team:"MTL", pos:"C", war:0.74, gar:4.44,  g:3,  a:11, pts:14, gp:13 },
  { id:24, name:"Ross Colton",       team:"COL", pos:"C", war:0.68, gar:4.08,  g:4,  a:8,  pts:12, gp:13 },
  { id:25, name:"Rickard Rakell",    team:"PIT", pos:"C", war:0.58, gar:3.48,  g:3,  a:8,  pts:11, gp:10 },
]

function warColor(v: number) {
  if (v >= 2.0) return "#22c55e"
  if (v >= 1.5) return "#4ade80"
  if (v >= 1.0) return "#86efac"
  if (v >= 0.5) return "#fbbf24"
  if (v >= 0)   return "#fb923c"
  return "#ef4444"
}

export default function Home() {
  const leader = PLAYERS[0]
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem", fontFamily: "system-ui, sans-serif", color: "#fff" }}>

      <div style={{ borderBottom: "1px solid #222", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0072FF", marginBottom: 10 }}>
          2025–26 Stanley Cup Playoffs
        </div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
          NHL WAR Rankings
        </h1>
        <p style={{ color: "#888", marginTop: 10, fontSize: 15 }}>
          Wins Above Replacement for playoff forwards · Ridge RAPM model · Click a player name to view their full card
        </p>
      </div>

      {/* Leader card */}
      <Link href={`/player/${leader.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div style={{ background: "#111", border: "1px solid #0072FF", borderRadius: 14, padding: "20px 24px", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, cursor: "pointer" }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 6 }}>WAR Leader — click to view card</div>
            <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{leader.name}</div>
            <div style={{ color: "#666", marginTop: 6, fontSize: 14 }}>{leader.team} · {leader.pos} · {leader.gp} GP · {leader.pts} pts</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 56, fontWeight: 800, color: "#0072FF", lineHeight: 1 }}>+{leader.war.toFixed(2)}</div>
            <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>Wins Above Replacement</div>
          </div>
        </div>
      </Link>

      {/* Table */}
      <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e1e1e" }}>
                {["#", "Player", "Team", "WAR", "GAR", "G", "A", "Pts", "GP"].map(h => (
                  <th key={h} style={{ padding: "10px 14px", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", textAlign: h === "Player" ? "left" : "right", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PLAYERS.map(p => (
                <tr key={p.id} style={{ borderBottom: "1px solid #1a1a1a" }}>
                  <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: p.id <= 3 ? (p.id === 1 ? "#F5A623" : p.id === 2 ? "#aaa" : "#92400E") : "#444", fontSize: 14 }}>{p.id}</td>
                  <td style={{ padding: "10px 14px", textAlign: "left" }}>
                    <Link href={`/player/${p.id}`} style={{ textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: 14, borderBottom: "1px solid #333" }}>
                      {p.name}
                    </Link>
                    <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{p.pos}</div>
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "right" }}>
                    <span style={{ background: "#1a1a2e", border: "1px solid #0072FF33", color: "#4da6ff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4 }}>{p.team}</span>
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 800, fontSize: 16, color: warColor(p.war) }}>+{p.war.toFixed(2)}</td>
                  <td style={{ padding: "10px 14px", textAlign: "right", color: "#888", fontSize: 13 }}>+{p.gar.toFixed(1)}</td>
                  <td style={{ padding: "10px 14px", textAlign: "right", color: "#ccc", fontSize: 13 }}>{p.g}</td>
                  <td style={{ padding: "10px 14px", textAlign: "right", color: "#ccc", fontSize: 13 }}>{p.a}</td>
                  <td style={{ padding: "10px 14px", textAlign: "right", color: "#fff", fontSize: 13, fontWeight: 600 }}>{p.pts}</td>
                  <td style={{ padding: "10px 14px", textAlign: "right", color: "#666", fontSize: 13 }}>{p.gp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "2rem", fontSize: 12, color: "#333", textAlign: "center" }}>
        NHL WAR Analytics · 2025–26 Playoffs · Not affiliated with the NHL
      </div>
    </div>
  )
}
