"use client"


import Link from "next/link"

const PLAYERS = [
  { id:1,  name:"Mitch Marner",      team:"VGK", pos:"R", gp:13, g:7,  a:14, pts:21, toi:235, war:2.28, gar:13.68, ev_off:5.10, ev_def:1.94, pp:4.42, pen:0.58, fin:1.64, clutch:0.22, gax:1.20, pct_war:100, pct_evo:88, pct_evd:78, pct_pp:100, pct_fin:84, pct_play:100, pct_trans:88, pct_pen:76, score:97, tier:"Conn Smythe Caliber", tier_color:"#F5A623", insight:["Playoff points leader · 21pts in 13 games","Top 1% PP impact — best in the playoffs","Elite two-way and finishing metrics","Positive penalty differential throughout"], scout:"Marner has been the single most valuable forward in the 2026 playoffs. His PP RAPM leads all skaters and his 5v5 playmaking ranks top 5%. The Conn Smythe conversation starts and ends here." },
  { id:2,  name:"Jack Eichel",       team:"VGK", pos:"C", gp:13, g:5,  a:16, pts:21, toi:228, war:2.12, gar:12.72, ev_off:5.44, ev_def:2.18, pp:3.28, pen:0.48, fin:1.34, clutch:0.20, gax:0.98, pct_war:96, pct_evo:96, pct_evd:84, pct_pp:88, pct_fin:76, pct_play:96, pct_trans:92, pct_pen:72, score:95, tier:"First-Line Star", tier_color:"#22c55e", insight:["Assists leader · 16 assists in 13 games","Elite EV offense — 96th percentile","Strong two-way impact at 5v5","Dangerous PP weapon"], scout:"Eichel has been the engine behind Vegas' playoff run. His EV offense RAPM leads all forwards and his playmaking has been historically good, averaging over a point per game with elite underlying metrics." },
  { id:3,  name:"Nathan MacKinnon",  team:"COL", pos:"C", gp:13, g:7,  a:15, pts:22, toi:222, war:2.08, gar:12.48, ev_off:5.62, ev_def:2.30, pp:2.88, pen:0.42, fin:0.96, clutch:0.20, gax:0.80, pct_war:92, pct_evo:100, pct_evd:88, pct_pp:80, pct_fin:68, pct_play:96, pct_trans:92, pct_pen:68, score:95, tier:"Conn Smythe Favourite", tier_color:"#22c55e", insight:["#1 EV offense in the entire playoffs","Dominant two-way · 88th pct defense","Above-average finishing talent","Strong PP contributor"], scout:"MacKinnon's 5v5 RAPM leads the entire playoff field. His ability to drive shot quality and suppress chances defensively is unmatched. The Conn Smythe favourite — no forward will have contributed more total value if Colorado wins." },
  { id:4,  name:"Logan Stankoven",   team:"CAR", pos:"C", gp:13, g:9,  a:10, pts:19, toi:210, war:1.95, gar:11.70, ev_off:4.88, ev_def:2.42, pp:1.82, pen:0.44, fin:1.74, clutch:0.18, gax:1.62, pct_war:88, pct_evo:84, pct_evd:92, pct_pp:56, pct_fin:92, pct_play:72, pct_trans:88, pct_pen:68, score:90, tier:"Breakout Star", tier_color:"#22c55e", insight:["Elite finisher · 92nd pct goals above expected","Shutdown defensive presence · 92nd pct","Strong EV offense generation","PP usage below his talent level"], scout:"Stankoven is the breakout story of the 2026 playoffs. His finishing RAPM ranks 2nd among all forwards and his defensive 5v5 suppression rivals established shutdown centers. At 23, his two-way ceiling puts him in elite company." },
  { id:5,  name:"Taylor Hall",       team:"CAR", pos:"L", gp:13, g:6,  a:16, pts:22, toi:205, war:1.88, gar:11.28, ev_off:4.62, ev_def:2.08, pp:2.44, pen:0.52, fin:1.12, clutch:0.18, gax:0.92, pct_war:84, pct_evo:80, pct_evd:84, pct_pp:72, pct_fin:72, pct_play:92, pct_trans:80, pct_pen:72, score:88, tier:"First-Line Star", tier_color:"#22c55e", insight:["22 points in 13 games · elite production","Strong two-way value at even strength","Reliable PP contributor","Positive penalty differential"], scout:"Hall has been quietly outstanding throughout Carolina's run. His even-strength playmaking ranks top 20% and his defensive value is consistently above average. A complete forward performing at his peak." },
  { id:6,  name:"Pavel Dorofeyev",   team:"VGK", pos:"L", gp:13, g:10, a:8,  pts:18, toi:198, war:1.72, gar:10.32, ev_off:4.22, ev_def:1.52, pp:2.88, pen:0.44, fin:2.06, clutch:0.16, gax:1.88, pct_war:80, pct_evo:76, pct_evd:60, pct_pp:80, pct_fin:96, pct_play:60, pct_trans:84, pct_pen:68, score:86, tier:"Elite Goal Scorer", tier_color:"#3b82f6", insight:["Goals leader · 10G in 13 playoff games","96th pct finishing · elite conversion rate","Dangerous PP weapon","Below-average defensive RAPM"], scout:"Dorofeyev's goal-scoring has been the most prolific of the playoffs and his finishing RAPM confirms it's skill not luck — converting at a rate well above expected. Vegas has structured his deployment to compensate for the defensive gap." },
  { id:7,  name:"Brett Howden",      team:"VGK", pos:"C", gp:13, g:10, a:8,  pts:18, toi:192, war:1.64, gar:9.84,  ev_off:3.88, ev_def:1.78, pp:2.62, pen:0.68, fin:1.48, clutch:0.16, gax:1.42, pct_war:76, pct_evo:68, pct_evd:68, pct_pp:76, pct_fin:84, pct_play:56, pct_trans:76, pct_pen:80, score:82, tier:"Strong Top-Six", tier_color:"#3b82f6", insight:["10 goals in 13 games · elite finisher","Positive penalty differential","Reliable PP contributor","Benefits from elite linemates"], scout:"Howden has been the beneficiary of elite setup work from Marner and Eichel, but his finishing metrics show genuine skill. His penalty differential is among the best on the team and he's been a reliable two-way presence." },
  { id:8,  name:"Matt Boldy",        team:"MIN", pos:"L", gp:13, g:7,  a:11, pts:18, toi:188, war:1.58, gar:9.48,  ev_off:4.12, ev_def:1.64, pp:2.28, pen:0.32, fin:0.92, clutch:0.16, gax:0.78, pct_war:72, pct_evo:76, pct_evd:64, pct_pp:68, pct_fin:64, pct_play:76, pct_trans:72, pct_pen:56, score:79, tier:"Strong Top-Six", tier_color:"#3b82f6", insight:["18 points in 13 games · excellent production","Above-average EV offense","Solid PP contributor","Consistent performer throughout"], scout:"Boldy has been Minnesota's most consistent offensive threat. His EV offense metrics rank in the top quarter of all playoff forwards and he's shown an ability to generate chances independently of his linemates." },
  { id:9,  name:"Jackson Blake",     team:"CAR", pos:"R", gp:13, g:6,  a:15, pts:21, toi:182, war:1.52, gar:9.12,  ev_off:3.94, ev_def:1.88, pp:2.12, pen:0.48, fin:0.70, clutch:0.16, gax:0.58, pct_war:68, pct_evo:72, pct_evd:72, pct_pp:64, pct_fin:52, pct_play:84, pct_trans:76, pct_pen:72, score:76, tier:"Strong Top-Six", tier_color:"#3b82f6", insight:["21 points in 13 games · excellent playmaker","Strong defensive awareness","Consistent two-way presence","Elite transition game"], scout:"Blake has emerged as one of the most complete young forwards in these playoffs. His 21 points rank top-5 and his defensive metrics show genuine two-way ability. Carolina's most pleasant surprise." },
  { id:10, name:"Nick Suzuki",       team:"MTL", pos:"C", gp:13, g:7,  a:16, pts:23, toi:178, war:1.48, gar:8.88,  ev_off:4.08, ev_def:1.92, pp:2.02, pen:0.44, fin:0.42, clutch:0.14, gax:0.38, pct_war:64, pct_evo:76, pct_evd:76, pct_pp:60, pct_fin:44, pct_play:88, pct_trans:76, pct_pen:68, score:74, tier:"Strong Top-Six", tier_color:"#3b82f6", insight:["Points leader on MTL · 23 points in 13GP","Strong EV playmaking metrics","Solid two-way center","Below-average finishing talent"], scout:"Suzuki has carried Montreal's offense with 23 points — the most of any player in these playoffs. His playmaking metrics are excellent and he's shown strong two-way awareness, though his finishing has been below expected." },
  { id:11, name:"Quinn Hughes",      team:"MIN", pos:"D", gp:13, g:3,  a:15, pts:18, toi:240, war:1.42, gar:8.52,  ev_off:2.22, ev_def:2.88, pp:3.44, pen:0.28, fin:0.30, clutch:0.14, gax:0.24, pct_war:60, pct_evo:40, pct_evd:96, pct_pp:92, pct_fin:40, pct_play:88, pct_trans:60, pct_pen:56, score:72, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Elite PP quarterback · 92nd percentile","Outstanding defensive value · 96th pct","15 assists in 13 games","Workhorse minutes — 240 TOI"], scout:"Hughes has been the best defenseman in these playoffs. His PP RAPM leads all blueliners and his defensive suppression at 5v5 is elite. The 240 minutes of ice time show the trust his coaching staff places in him." },
  { id:12, name:"Tage Thompson",     team:"BUF", pos:"C", gp:13, g:6,  a:15, pts:21, toi:172, war:1.38, gar:8.28,  ev_off:3.62, ev_def:1.74, pp:2.44, pen:0.38, fin:0.20, clutch:0.14, gax:0.14, pct_war:56, pct_evo:64, pct_evd:68, pct_pp:72, pct_fin:36, pct_play:76, pct_trans:68, pct_pen:60, score:69, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["21 points leading Buffalo","Solid PP contributor","Above-average EV offense","Below-average finishing this run"], scout:"Thompson has been the heart of Buffalo's surprising playoff run. His 21 points lead the team and his EV metrics show genuine two-way value. The finishing numbers have been below his regular season standard but his overall contribution remains strong." },
  { id:13, name:"Gabriel Landeskog", team:"COL", pos:"L", gp:11, g:6,  a:10, pts:16, toi:162, war:1.24, gar:7.44,  ev_off:3.22, ev_def:1.62, pp:2.18, pen:0.58, fin:0.44, clutch:0.12, gax:0.38, pct_war:52, pct_evo:56, pct_evd:64, pct_pp:64, pct_fin:48, pct_play:52, pct_trans:60, pct_pen:76, score:65, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Strong physical presence","Positive penalty differential","Reliable PP contributor","Good defensive awareness"], scout:"Landeskog has brought the grit and physicality that Colorado needs alongside MacKinnon. His penalty differential is among the team's best and his forechecking creates opportunities that don't show up in the scoresheet." },
  { id:14, name:"Lane Hutson",       team:"MTL", pos:"D", gp:13, g:4,  a:16, pts:20, toi:225, war:1.18, gar:7.08,  ev_off:2.08, ev_def:2.12, pp:2.88, pen:0.24, fin:0.36, clutch:0.12, gax:0.28, pct_war:48, pct_evo:36, pct_evd:84, pct_pp:80, pct_fin:40, pct_play:84, pct_trans:52, pct_pen:52, score:62, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["20 points in 13 games · elite for a rookie D","Strong PP quarterback","Good defensive value","Playmaking ranks top 20%"], scout:"Hutson has been a revelation for Montreal. As a rookie defenseman posting 20 points with strong underlying metrics, he's shown the kind of two-way game that will make him a cornerstone of this franchise for years to come." },
  { id:15, name:"Cole Caufield",     team:"MTL", pos:"R", gp:13, g:6,  a:9,  pts:15, toi:158, war:1.12, gar:6.72,  ev_off:3.48, ev_def:1.22, pp:1.88, pen:0.38, fin:0.96, clutch:0.12, gax:0.88, pct_war:44, pct_evo:64, pct_evd:48, pct_pp:52, pct_fin:64, pct_play:44, pct_trans:56, pct_pen:60, score:60, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Above-average finishing talent","Solid EV offense generation","Positive penalty differential","Below-average defensive metrics"], scout:"Caufield brings elite goal-scoring instincts to Montreal's top six. His finishing RAPM ranks in the top third of playoff forwards and his ability to convert in high-danger areas makes him dangerous in any situation." },
]

function pctColor(p: number) {
  if (p >= 95) return "#22c55e"
  if (p >= 80) return "#4ade80"
  if (p >= 65) return "#86efac"
  if (p >= 50) return "#bef264"
  if (p >= 35) return "#fbbf24"
  if (p >= 20) return "#fb923c"
  return "#ef4444"
}

interface PageProps {
  params: { id: string }
}

export default function PlayerPage({ params }: PageProps) {
  const id = (params as any).id
  const player = PLAYERS.find(p => p.id === Number(id))

  if (!player) {
    return (
      <div style={{ maxWidth: 600, margin: "4rem auto", textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#fff" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏒</div>
        <h1 style={{ fontSize: 24, marginBottom: 12 }}>Player not found</h1>
        <Link href="/" style={{ color: "#0072FF", textDecoration: "none" }}>← Back to leaderboard</Link>
      </div>
    )
  }

  const comps = [
    { label: "EV Offense", value: player.ev_off,  color: "#0072FF", max: 7 },
    { label: "EV Defense", value: player.ev_def,  color: "#00C6A0", max: 4 },
    { label: "PP Offense", value: player.pp,      color: "#7B2FBE", max: 5 },
    { label: "Pen Diff",   value: player.pen,     color: "#F5A623", max: 2 },
    { label: "Finishing",  value: player.fin,     color: "#E8445A", max: 3 },
    { label: "Clutch",     value: player.clutch,  color: "#888",    max: 1 },
  ]

  const metrics = [
    { label: "WAR",        value: player.pct_war  },
    { label: "EV Offense", value: player.pct_evo  },
    { label: "EV Defense", value: player.pct_evd  },
    { label: "PP Impact",  value: player.pct_pp   },
    { label: "Finishing",  value: player.pct_fin  },
    { label: "Playmaking", value: player.pct_play },
    { label: "Transition", value: player.pct_trans },
    { label: "Pen. Diff",  value: player.pct_pen  },
  ]

  const totalPos = comps.filter(c => c.value > 0).reduce((s, c) => s + c.value, 0)
  const circ = 2 * Math.PI * 38
  const offset = circ - (player.score / 100) * circ

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "1.5rem 1rem 4rem", fontFamily: "system-ui, sans-serif", color: "#fff" }}>

      <div style={{ marginBottom: 16 }}>
        <Link href="/" style={{ color: "#555", textDecoration: "none", fontSize: 13 }}>← Back to leaderboard</Link>
      </div>

      {/* Card */}
      <div style={{ background: "#0d0d0d", borderRadius: 16, overflow: "hidden", border: "1px solid #222" }}>

        {/* Top accent bar */}
        <div style={{ height: 3, background: "linear-gradient(90deg,#00C6FF,#0072FF,#7B2FBE)" }} />

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", background: "#111", borderBottom: "1px solid #1e1e1e", alignItems: "center", padding: "20px 22px", gap: 16 }}>
          <div>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, margin: "0 0 8px", lineHeight: 1 }}>{player.name}</h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4, border: "1px solid", background: "#1a1a2e", borderColor: "#0072FF", color: "#4da6ff" }}>{player.team}</span>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4, border: "1px solid #333", color: "#888" }}>{player.pos}</span>
            </div>
            <div style={{ fontSize: 13, color: "#555" }}>{player.toi} min · {player.gp} GP · {player.g}G {player.a}A {player.pts}P</div>
          </div>

          {/* Score ring */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ position: "relative", width: 88, height: 88 }}>
              <svg width={88} height={88} viewBox="0 0 88 88" style={{ transform: "rotate(-90deg)" }}>
                <circle cx={44} cy={44} r={38} fill="none" stroke="#1e1e1e" strokeWidth={6} />
                <circle cx={44} cy={44} r={38} fill="none" stroke={player.tier_color} strokeWidth={6} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
              </svg>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700 }}>{player.score}</div>
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: player.tier_color, textAlign: "center", maxWidth: 88 }}>{player.tier}</div>
          </div>
        </div>

        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>

          {/* Stat summary */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {[
              { label: "WAR",  value: (player.war >= 0 ? "+" : "") + player.war.toFixed(2), color: "#4ade80" },
              { label: "GAR",  value: (player.gar >= 0 ? "+" : "") + player.gar.toFixed(1), color: "#aaa" },
              { label: "Points", value: player.pts, color: "#fff" },
              { label: "GAX",  value: (player.gax >= 0 ? "+" : "") + player.gax.toFixed(2), color: player.gax >= 0 ? "#4ade80" : "#ef4444" },
            ].map(s => (
              <div key={s.label} style={{ background: "#1a1a1a", borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#444", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* WAR breakdown */}
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#383838", marginBottom: 10 }}>WAR breakdown</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
              <div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, lineHeight: 1, color: "#4ade80" }}>{player.war >= 0 ? "+" : ""}{player.war.toFixed(2)}</div>
                <div style={{ fontSize: 9, color: "#444", textTransform: "uppercase", letterSpacing: "0.06em" }}>Wins above replacement</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 600, color: "#888" }}>{player.gar >= 0 ? "+" : ""}{player.gar.toFixed(1)}</div>
                <div style={{ fontSize: 9, color: "#444", textTransform: "uppercase", letterSpacing: "0.06em" }}>GAR</div>
              </div>
            </div>
            <div style={{ height: 7, borderRadius: 4, display: "flex", overflow: "hidden", gap: 1, marginBottom: 10, background: "#1a1a1a" }}>
              {comps.filter(c => c.value > 0).map(c => (
                <div key={c.label} style={{ height: "100%", width: `${(c.value / totalPos) * 100}%`, background: c.color, minWidth: 3, borderRadius: 2 }} title={`${c.label}: +${c.value.toFixed(2)}`} />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px" }}>
              {comps.map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#555" }}>
                  <div style={{ width: 7, height: 7, borderRadius: 2, background: c.value < 0 ? "#ef4444" : c.color }} />
                  {c.label}
                  <span style={{ color: "#888", fontWeight: 600 }}>{c.value >= 0 ? "+" : ""}{c.value.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Percentile bars */}
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#383838", marginBottom: 12 }}>Percentile rankings vs all 2026 playoff forwards</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {metrics.map(m => {
                const col = pctColor(m.value)
                return (
                  <div key={m.label} style={{ display: "grid", gridTemplateColumns: "90px 1fr 28px", alignItems: "center", gap: 10 }}>
                    <div style={{ fontSize: 11, color: "#666" }}>{m.label}</div>
                    <div style={{ height: 5, background: "#1a1a1a", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${m.value}%`, background: col, borderRadius: 3 }} />
                    </div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: 12, fontWeight: 700, textAlign: "right", color: col }}>{m.value}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Insights */}
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#383838", marginBottom: 10 }}>Scouting verdict</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
              {player.insight.map((ins, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 7, background: "#0d2010", border: "1px solid #22c55e22", fontSize: 11, color: "#ccc" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                  {ins}
                </div>
              ))}
            </div>
            <div style={{ background: "#0f0f0f", borderLeft: "3px solid #0072FF", borderRadius: "0 7px 7px 0", padding: "9px 12px", fontSize: 12, color: "#777", lineHeight: 1.6, fontStyle: "italic" }}>
              {player.scout}
            </div>
          </div>

        </div>

        <div style={{ padding: "10px 16px", borderTop: "1px solid #181818", display: "flex", justifyContent: "space-between", fontSize: 10, color: "#2a2a2a" }}>
          <span>NHL WAR · 2026 Playoffs</span>
          <span>Not affiliated with the NHL</span>
        </div>
      </div>
    </div>
  )
}
