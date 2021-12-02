export default function handler(req, res) {
  let p1 = <>
    <p>Navigator: We’re running out of time. We nee…</p>
    <p>*You hear screaming. It’s the Cook”</p>
    <p>*It continues for minutes</p>
  </>
  let p2 = <>
    <p>*The Lab personnel burst into the room*</p>
    <p>Doctor: What the hell is that!?</p>
  </>
  let p3 = <>
    <p>Botanist: It’s coming from the Hangar. We tried to get in but it was locked!</p>
    <p>Physicist: Why the hell do you two look so pensive??</p>
    <p>Navigator: Sit down, everyone.</p>
  </>
  let p4 = <>
    <p>*The pilot sits down first, then the rest follow, the agonizing screams continue*</p>
    <p>*The Navigator walks to the intercom*</p>
    <p>Navigator: Hey Tech and Mech, get up to the Deck, ASAP</p>
    <p>Technician (over the intercom): On my way.</p>
    <p>Engineer (over the intercom): Sure.</p>
  </>
  let p5 = <>
    <p>*A minute passes and the Technician  and the Engineer show up and sit down after looking around confused</p>
    <p>*You and the Navigator tell everyone the whole story</p>
  </>
  let p6 = <>
    <p>Physicist: And how the hell are we expected to trust YOU!? You can’t remember shit!</p>
    <p>Engineer: It’s true. The body is in Engineering. I wrapped him up. </p>
  </>
  let p7 = <>
    <p>*The Security Officer walks in, his hands bloodied. He’s carrying a small piece of paper. He hands it to the Technician.</p>
    <p>*The Technician takes it, wary of the blood on the parchment</p>
  </>
  let p8 = <>
    <p>Security Officer: He gave me this. Can you do it?</p>
    <p>Technician: Yeah… I can do this. I’ve already fixed all the hardware he screwed with. With this, I can get Rubin back and we can turn the Revolution around.</p>
    <p>Navigator: Do it. Now!</p>
  </>
  let p9 = <>
    <p>*The Tech leaps from his chair and runs to the ship’s Mainframe</p>
    <p>Pilot: Well I guess that’s my cue, I’ll strap in and wait for the all-clear from the Geek</p>
    <p>*The Navigator nods his head</p>
  </>
  let p10 = <>
    <p>Engineer: So… did you kill him?</p>
    <p>Security Officer: Not yet.</p>
    <p>Navigator: No more people need to die on this trip.</p>
    <p>Botanist: Well what do we do with him?</p>
    <p>Physicist: We can have him answer to the authorities… they’re the ones he works for! Shit… we all work for. They won’t do shit to him, but they’ll kill us!</p>
    <p>Navigator: We’re gonna blow him into the void in one of the LifeBoats. Along with the Captain’s body.</p>
    <p>Doctor: I don’t know…</p>
    <p>Engineer: He would do worse to us!</p>
    <p>Botanist: I’m not comfortable condemning someone like that.</p>
  </>
  res.status(200).json({
    passages: [
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10
    ],
  })
}
