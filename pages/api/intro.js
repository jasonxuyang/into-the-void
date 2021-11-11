// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let p1 = `The year is 2671.
  3 days ago, Earth Systems - Space Division picked up a strange signal coming from deep, uncharted space. The origin and intent of this beacon is unknown.
  The ES-SD has assembled a small crew of top personnel to investigate this phenomenon.
  As part of the crew, you were given extremely short notice of this mission and rushed through the formal standard procedure for pre-deployment. 
  During the briefing by the ES-SD big-wigs, you barely had time to meet the rest of the team. You were given the name of the ship - the Revolution By Night, the facts about the mission (of which there were almost none), and a timeline for the operation.
  Then, as quickly as you knew of the mission, you were gone. Shot into the traverse.
  You’ve been off-world for 3 hours… you and the crew prepare for Cryo-Sleep, where you’ll be in stasis for 7 months while the ship’s artificial intelligence, RBN, auto-pilots the Revolution by Night to the signal’s approximate location.
  As you lay in your pod, trying desperately to fall asleep, all you can think about is what you’ll find on the other end of this journey…
  `
  let p2 = `*Your eyes slowly open…`
  let p3 = `*As you come to, you realize you’re lying on the ground - just outside your pod, with a woman kneeling down right beside you.`
  let p4 = `Doctor: You awake? How do you feel?`
  let p5 = `*There’s others around. Walking, talking, getting dressed… They all look concerned. Like something isn’t right.`
  let p6 = `You: Yeah… I feel dizzy. And nauseous. Where am I? `

  res.status(200).json({
    passages: [
      p1,
      p2,
      p3,
      p4,
      p5,
      p6
    ],
  })
}
