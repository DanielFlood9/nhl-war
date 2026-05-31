"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const PLAYERS = [
  { id:1,  nhlId:8478483, name:"Mitch Marner",      team:"VGK", pos:"R", gp:16, g:7,  a:14, pts:21, toi:340, war:2.28, gar:13.68, ev_off:5.10, ev_def:1.94, pp:4.42, pen:0.58, fin:1.64, clutch:0.22, gax:1.20, pct_war:100, pct_evo:88, pct_evd:78, pct_pp:100, pct_fin:84, pct_play:100, pct_trans:88, pct_pen:76, score:97, tier:"Conn Smythe Caliber", tier_color:"#F5A623", insight:["Playoff points leader · 21pts in 16 games","Top 1% PP impact — best in the playoffs","Elite two-way and finishing metrics","Positive penalty differential throughout"], scout:"Marner has been the single most valuable forward in the 2026 playoffs. His PP RAPM leads all skaters and his 5v5 playmaking ranks top 5%. The Conn Smythe conversation starts and ends here — 21 points including a hat trick in Round 2." },
  { id:2,  nhlId:8481604, name:"Pavel Dorofeyev",   team:"VGK", pos:"L", gp:16, g:10, a:4,  pts:14, toi:295, war:2.05, gar:12.30, ev_off:4.88, ev_def:1.52, pp:3.12, pen:0.44, fin:2.34, clutch:0.20, gax:2.10, pct_war:96, pct_evo:84, pct_evd:60, pct_pp:84, pct_fin:96, pct_play:56, pct_trans:80, pct_pen:68, score:90, tier:"Elite Goal Scorer", tier_color:"#22c55e", insight:["Goals co-leader · 10G in 16 games","96th percentile finishing — elite conversion rate","Dangerous PP weapon","Below-average defensive RAPM"], scout:"Dorofeyev's goal-scoring has been the most prolific of the playoffs. His finishing RAPM confirms it's skill not luck — converting at a rate well above expected. Vegas has structured his deployment to compensate for the defensive gap." },
  { id:3,  nhlId:8480762, name:"Brett Howden",      team:"VGK", pos:"C", gp:16, g:10, a:3,  pts:13, toi:285, war:1.95, gar:11.70, ev_off:3.88, ev_def:1.78, pp:2.62, pen:0.68, fin:1.48, clutch:0.18, gax:1.42, pct_war:92, pct_evo:68, pct_evd:68, pct_pp:76, pct_fin:84, pct_play:52, pct_trans:72, pct_pen:80, score:86, tier:"Strong Top-Six", tier_color:"#3b82f6", insight:["Goals co-leader · 10G in 16 games","Positive penalty differential","Reliable PP contributor","Strong two-way presence"], scout:"Howden has been a reliable two-way presence for Vegas. His 10 goals tie the playoff lead and his penalty differential is among the best on the team. His finishing metrics show genuine skill." },
  { id:4,  nhlId:8478403, name:"Jack Eichel",       team:"VGK", pos:"C", gp:16, g:2,  a:16, pts:18, toi:355, war:1.88, gar:11.28, ev_off:5.44, ev_def:2.18, pp:3.28, pen:0.48, fin:0.22, clutch:0.18, gax:0.12, pct_war:88, pct_evo:96, pct_evd:84, pct_pp:88, pct_fin:44, pct_play:96, pct_trans:92, pct_pen:72, score:92, tier:"First-Line Star", tier_color:"#22c55e", insight:["Assists leader · 16 assists in 16 games","Elite EV offense — 96th percentile","Strong two-way impact at 5v5","Dangerous PP weapon"], scout:"Eichel has been the engine behind Vegas's playoff run. His 16 assists lead the entire playoffs and his EV offense RAPM leads all forwards. His playmaking has been historically good — over a point per game with elite underlying metrics." },
  { id:5,  nhlId:8482699, name:"Logan Stankoven",   team:"CAR", pos:"C", gp:16, g:9,  a:6,  pts:15, toi:310, war:1.82, gar:10.92, ev_off:4.88, ev_def:2.42, pp:1.82, pen:0.44, fin:1.74, clutch:0.18, gax:1.62, pct_war:84, pct_evo:84, pct_evd:92, pct_pp:56, pct_fin:92, pct_play:68, pct_trans:88, pct_pen:68, score:88, tier:"Breakout Star", tier_color:"#22c55e", insight:["9 goals — 3rd most in a Hurricanes postseason ever","Elite finisher · 92nd percentile GAX","Shutdown defensive presence · 92nd pct","PP usage below his talent level"], scout:"Stankoven is the breakout story of the 2026 playoffs. His 9 goals rank 3rd most in a single postseason in franchise history. His finishing RAPM and defensive 5v5 suppression rival established elite centers. At 23, his two-way ceiling is elite." },
  { id:6,  nhlId:8447463, name:"Taylor Hall",       team:"CAR", pos:"L", gp:16, g:5,  a:11, pts:16, toi:305, war:1.72, gar:10.32, ev_off:4.62, ev_def:2.08, pp:2.44, pen:0.52, fin:1.12, clutch:0.18, gax:0.92, pct_war:80, pct_evo:80, pct_evd:84, pct_pp:72, pct_fin:72, pct_play:88, pct_trans:80, pct_pen:72, score:85, tier:"First-Line Star", tier_color:"#22c55e", insight:["16 points in 16 games · consistent production","6th player in Hurricanes history: 5G 10A in one postseason","Strong two-way value at even strength","Hall-Stankoven-Blake line: 35% of CAR total points"], scout:"Hall has been quietly outstanding throughout Carolina's run. His line with Stankoven and Blake has accounted for 35% of the Hurricanes' total points this postseason. His defensive value is consistently above average — a complete veteran forward." },
  { id:7,  nhlId:8481618, name:"Jackson Blake",     team:"CAR", pos:"R", gp:16, g:5,  a:10, pts:15, toi:295, war:1.58, gar:9.48,  ev_off:3.94, ev_def:1.88, pp:2.12, pen:0.48, fin:0.70, clutch:0.16, gax:0.58, pct_war:76, pct_evo:72, pct_evd:72, pct_pp:64, pct_fin:52, pct_play:84, pct_trans:76, pct_pen:72, score:78, tier:"Strong Top-Six", tier_color:"#3b82f6", insight:["15 points in 16 games · excellent two-way play","Strong defensive awareness","Key member of CAR's top line","Elite transition game"], scout:"Blake has been one of the most complete young forwards in these playoffs. His two-way metrics rank in the top third of all playoff forwards and his transition play has been exceptional alongside Hall and Stankoven." },
  { id:8,  nhlId:8477492, name:"Nathan MacKinnon",  team:"COL", pos:"C", gp:13, g:7,  a:8,  pts:15, toi:275, war:1.52, gar:9.12,  ev_off:5.62, ev_def:2.30, pp:2.88, pen:0.42, fin:0.96, clutch:0.20, gax:0.80, pct_war:72, pct_evo:100, pct_evd:88, pct_pp:80, pct_fin:68, pct_play:96, pct_trans:92, pct_pen:68, score:88, tier:"Playoff Dynamo", tier_color:"#3b82f6", insight:["#1 EV offense RAPM in the entire playoffs","Dominant two-way · 88th pct defense","15 points in 13 games — elite pace","COL eliminated in R2 despite his performance"], scout:"MacKinnon's 5v5 RAPM leads the entire playoff field despite Colorado's elimination. His 15 points in 13 games represent an elite per-game pace. Colorado's exit was not due to any failing on his part — the EV metrics show a transcendent individual performance." },
  { id:9,  nhlId:8480870, name:"Nick Suzuki",       team:"MTL", pos:"C", gp:18, g:4,  a:12, pts:16, toi:400, war:1.44, gar:8.64,  ev_off:4.08, ev_def:1.92, pp:2.02, pen:0.44, fin:0.42, clutch:0.14, gax:0.38, pct_war:68, pct_evo:76, pct_evd:76, pct_pp:60, pct_fin:44, pct_play:88, pct_trans:76, pct_pen:68, score:74, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["16 points in 18 games leading MTL","Strong EV playmaking metrics","Solid two-way center","Carried Montreal to the ECF"], scout:"Suzuki led Montreal through 18 games and two Game 7 victories to the Eastern Conference Final. His EV metrics are excellent and he showed strong two-way awareness throughout. The Canadiens' run was built on his leadership." },
  { id:10, nhlId:8482703, name:"Lane Hutson",       team:"MTL", pos:"D", gp:18, g:3,  a:13, pts:16, toi:420, war:1.38, gar:8.28,  ev_off:2.08, ev_def:2.12, pp:2.88, pen:0.24, fin:0.36, clutch:0.12, gax:0.28, pct_war:64, pct_evo:36, pct_evd:84, pct_pp:80, pct_fin:40, pct_play:88, pct_trans:52, pct_pen:52, score:68, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["16 points in 18 games · elite rookie D performance","Strong PP quarterback · 3rd in playoff assists","Good defensive value","Playmaking ranks top 15%"], scout:"Hutson has been a revelation for Montreal across 18 playoff games. As a rookie defenseman posting 16 points with strong underlying metrics, he has shown the kind of two-way game that will define this franchise for years to come." },
  { id:11, nhlId:8481533, name:"Quinn Hughes",      team:"MIN", pos:"D", gp:11, g:4,  a:11, pts:15, toi:265, war:1.32, gar:7.92,  ev_off:2.22, ev_def:2.88, pp:3.44, pen:0.28, fin:0.30, clutch:0.14, gax:0.24, pct_war:60, pct_evo:40, pct_evd:96, pct_pp:92, pct_fin:40, pct_play:88, pct_trans:60, pct_pen:56, score:70, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Elite PP quarterback · 92nd percentile","Outstanding defensive value · 96th pct","15 points in just 11 games","MIN eliminated in R2 vs COL"], scout:"Hughes was the best defenseman in these playoffs in terms of per-game impact. His PP RAPM leads all blueliners and his defensive suppression is elite. Minnesota's second-round exit cut short what was an outstanding individual run." },
  { id:12, nhlId:8481533, name:"Alex Newhook",      team:"MTL", pos:"C", gp:18, g:7,  a:4,  pts:11, toi:340, war:1.24, gar:7.44,  ev_off:3.28, ev_def:1.44, pp:1.72, pen:0.32, fin:0.92, clutch:0.28, gax:0.82, pct_war:56, pct_evo:56, pct_evd:56, pct_pp:48, pct_fin:64, pct_play:40, pct_trans:52, pct_pen:52, score:62, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Scored Game 7 OT winner in both R1 and R2","7 goals in 18 games · big-moment scorer","Above-average finishing talent","Clutch performance in elimination games"], scout:"Newhook became the second player in NHL history to score multiple Game 7 overtime winners in a single postseason. His clutch performances — including the series-clinching OT goal against Buffalo — defined Montreal's run to the Eastern Conference Final." },
  { id:13, nhlId:8480801, name:"Tage Thompson",     team:"BUF", pos:"C", gp:13, g:3,  a:10, pts:13, toi:285, war:1.18, gar:7.08,  ev_off:3.62, ev_def:1.74, pp:2.44, pen:0.38, fin:0.20, clutch:0.14, gax:0.14, pct_war:52, pct_evo:64, pct_evd:68, pct_pp:72, pct_fin:36, pct_play:76, pct_trans:68, pct_pen:60, score:64, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["13 points leading Buffalo","BUF's first playoff run since 2011","Solid PP contributor","Above-average EV offense"], scout:"Thompson was the heart of Buffalo's historic playoff return after a 14-year drought. His 13 points led the team and his EV metrics show genuine two-way value. The Sabres' Game 7 loss to Montreal ends a remarkable season." },
  { id:14, nhlId:8481522, name:"Kirill Kaprizov",   team:"MIN", pos:"L", gp:11, g:2,  a:11, pts:13, toi:250, war:1.12, gar:6.72,  ev_off:3.44, ev_def:1.52, pp:1.88, pen:0.28, fin:0.30, clutch:0.12, gax:0.22, pct_war:48, pct_evo:64, pct_evd:60, pct_pp:52, pct_fin:36, pct_play:80, pct_trans:68, pct_pen:48, score:60, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["13 points in 11 games · strong pace","Led MIN in assists with 11","Above-average EV offense","MIN eliminated in R2 vs COL"], scout:"Kaprizov delivered at a strong per-game pace for Minnesota before their second-round exit. His 11 assists rank in the top tier of the playoffs and his playmaking metrics show why he commands the largest contract in Wild history." },
  { id:15, nhlId:8482087, name:"Matt Boldy",        team:"MIN", pos:"L", gp:11, g:7,  a:4,  pts:11, toi:238, war:1.08, gar:6.48,  ev_off:4.12, ev_def:1.64, pp:2.28, pen:0.32, fin:0.92, clutch:0.16, gax:0.78, pct_war:44, pct_evo:76, pct_evd:64, pct_pp:68, pct_fin:64, pct_play:60, pct_trans:60, pct_pen:56, score:58, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["7 goals in 11 games · elite finishing pace","Above-average EV offense","Solid PP contributor","MIN eliminated in R2 vs COL"], scout:"Boldy's 7 goals in 11 games ranked among the playoff leaders in scoring rate. His EV offense metrics rank in the top quarter of all playoff forwards and he showed genuine individual scoring ability independent of his linemates." },
  { id:16, nhlId:8482671, name:"Cole Caufield",     team:"MTL", pos:"R", gp:18, g:6,  a:4,  pts:10, toi:315, war:1.02, gar:6.12,  ev_off:3.48, ev_def:1.22, pp:1.88, pen:0.38, fin:0.96, clutch:0.12, gax:0.88, pct_war:40, pct_evo:64, pct_evd:48, pct_pp:52, pct_fin:64, pct_play:44, pct_trans:56, pct_pen:60, score:55, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Above-average finishing talent","Solid EV offense across 18 games","31st go-ahead goal of regular season and playoffs combined","Positive penalty differential"], scout:"Caufield delivered consistent offensive production across Montreal's full 18-game run. His finishing RAPM ranks in the top third of playoff forwards and his 31st go-ahead goal of the combined regular season and playoffs broke a notable NHL record." },
  { id:17, nhlId:8481600, name:"Juraj Slafkovsky",  team:"MTL", pos:"L", gp:18, g:6,  a:4,  pts:10, toi:298, war:0.95, gar:5.70,  ev_off:2.88, ev_def:1.44, pp:1.42, pen:0.22, fin:0.84, clutch:0.10, gax:0.62, pct_war:36, pct_evo:52, pct_evd:52, pct_pp:44, pct_fin:60, pct_play:40, pct_trans:52, pct_pen:44, score:52, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["6 goals across 18 playoff games","Consistent depth contributor for MTL","Above-average finishing talent","Physical presence on forecheck"], scout:"Slafkovsky provided consistent depth scoring across Montreal's deep playoff run. His 6 goals show his finishing ability and his physical presence on the forecheck created space for linemates throughout all three rounds." },
  { id:18, nhlId:8476453, name:"Gabriel Landeskog", team:"COL", pos:"L", gp:13, g:6,  a:3,  pts:9,  toi:255, war:0.88, gar:5.28,  ev_off:3.22, ev_def:1.62, pp:2.18, pen:0.58, fin:0.44, clutch:0.12, gax:0.38, pct_war:32, pct_evo:56, pct_evd:64, pct_pp:64, pct_fin:48, pct_play:48, pct_trans:56, pct_pen:76, score:50, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Strong physical presence for COL","6 goals across 13 games","Positive penalty differential","Good defensive awareness"], scout:"Landeskog brought the grit and physicality that Colorado needed alongside MacKinnon. His 6 goals and strong penalty differential contributed to COL's run to the second round. His forechecking created opportunities that don't show up on the scoresheet." },
  { id:19, nhlId:8483445, name:"Zach Benson",       team:"BUF", pos:"L", gp:13, g:2,  a:6,  pts:8,  toi:240, war:0.72, gar:4.32,  ev_off:2.88, ev_def:1.48, pp:1.52, pen:0.28, fin:0.22, clutch:0.10, gax:0.18, pct_war:28, pct_evo:48, pct_evd:56, pct_pp:44, pct_fin:28, pct_play:52, pct_trans:44, pct_pen:48, score:46, tier:"Playoff Contributor", tier_color:"#a78bfa", insight:["Key role player for BUF's playoff return","Scored go-ahead PP goal in Game 4 vs MTL on his 21st birthday","Above-average defensive metrics","Part of historic BUF playoff run"], scout:"Benson played a key role in Buffalo's historic 14-year playoff drought ending. His power-play goal in Game 4 against Montreal on his 21st birthday was a highlight of the Sabres' run. A bright future ahead for one of the league's youngest contributors." },
  { id:20, nhlId:8479542, name:"Brandon Hagel",     team:"TBL", pos:"L", gp:7,  g:6,  a:2,  pts:8,  toi:148, war:0.62, gar:3.72,  ev_off:3.12, ev_def:1.62, pp:1.42, pen:0.58, fin:0.32, clutch:0.10, gax:0.28, pct_war:24, pct_evo:52, pct_evd:64, pct_pp:40, pct_fin:40, pct_play:40, pct_trans:48, pct_pen:76, score:44, tier:"Playoff Contributor", tier_color:"#888", insight:["6 goals in just 7 games · elite pace","TBL eliminated by MTL in R1 Game 7","Strong penalty differential","Physical two-way presence"], scout:"Hagel was TBL's best forward in their first-round exit, scoring 6 goals at a remarkable per-game pace. His physical two-way game and penalty differential were positives throughout. Tampa's loss in Game 7 to Montreal cut short what could have been a standout run." },
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

function Headshot({ nhlId, name }: { nhlId: number; name: string }) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()

  if (failed) {
    return (
      <div style={{
        width: 110, height: 130,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#0f0f0f",
        fontFamily: "Georgia, serif", fontSize: 38, fontWeight: 700, color: "#2a2a2a",
      }}>
        {initials}
      </div>
    )
  }

  return (
    <img
      src={`https://assets.nhle.com/mugs/nhl/20252026/${nhlId}.png`}
      alt={`${name} headshot`}
      width={110}
      height={130}
      style={{ objectFit: "cover", objectPosition: "top center", display: "block" }}
      onError={() => setFailed(true)}
    />
  )
}

export default function PlayerPage() {
  const pathname = usePathname()
  const id = Number(pathname?.split("/").pop())
  const player = PLAYERS.find(p => p.id === id)

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
    { label: "EV Offense", value: player.ev_off,  color: "#0072FF" },
    { label: "EV Defense", value: player.ev_def,  color: "#00C6A0" },
    { label: "PP Offense", value: player.pp,      color: "#7B2FBE" },
    { label: "Pen Diff",   value: player.pen,     color: "#F5A623" },
    { label: "Finishing",  value: player.fin,     color: "#E8445A" },
    { label: "Clutch",     value: player.clutch,  color: "#888"    },
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
      <div style={{ background: "#0d0d0d", borderRadius: 16, overflow: "hidden", border: "1px solid #222" }}>
        <div style={{ height: 3, background: "linear-gradient(90deg,#00C6FF,#0072FF,#7B2FBE)" }} />

        {/* Header with headshot */}
        <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", background: "#111", borderBottom: "1px solid #1e1e1e", alignItems: "stretch" }}>
          {/* Headshot */}
          <div style={{ background: "#0a0a0a", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
            <Headshot nhlId={player.nhlId} name={player.name} />
          </div>

          {/* Name + meta */}
          <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 7 }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, margin: 0, lineHeight: 1 }}>{player.name}</h1>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4, border: "1px solid #0072FF", background: "#1a1a2e", color: "#4da6ff" }}>{player.team}</span>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4, border: "1px solid #333", color: "#888" }}>{player.pos}</span>
            </div>
            <div style={{ fontSize: 12, color: "#555" }}>{player.toi} min · {player.gp} GP · {player.g}G {player.a}A {player.pts}P</div>
          </div>

          {/* Score ring */}
          <div style={{ width: 100, background: "#0d0d0d", borderLeft: "1px solid #1e1e1e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, padding: 12 }}>
            <div style={{ position: "relative", width: 80, height: 80 }}>
              <svg width={80} height={80} viewBox="0 0 88 88" style={{ transform: "rotate(-90deg)" }}>
                <circle cx={44} cy={44} r={38} fill="none" stroke="#1e1e1e" strokeWidth={6} />
                <circle cx={44} cy={44} r={38} fill="none" stroke={player.tier_color} strokeWidth={6} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
              </svg>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700 }}>{player.score}</div>
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: player.tier_color, textAlign: "center", maxWidth: 84 }}>{player.tier}</div>
          </div>
        </div>

        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Stat summary */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
            {[
              { label: "WAR",    value: (player.war >= 0 ? "+" : "") + player.war.toFixed(2), color: "#4ade80" },
              { label: "GAR",    value: (player.gar >= 0 ? "+" : "") + player.gar.toFixed(1), color: "#aaa" },
              { label: "Points", value: String(player.pts), color: "#fff" },
              { label: "GAX",    value: (player.gax >= 0 ? "+" : "") + player.gax.toFixed(2), color: player.gax >= 0 ? "#4ade80" : "#ef4444" },
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
                <div key={c.label} style={{ height: "100%", width: `${(c.value / totalPos) * 100}%`, background: c.color, minWidth: 3, borderRadius: 2 }} />
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
          <span>Stats: Hockey-Reference & QuantHockey · Not affiliated with the NHL</span>
        </div>
      </div>
    </div>
  )
}
