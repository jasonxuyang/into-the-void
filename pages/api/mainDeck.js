export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Barracks',
        people: [
            {
                name: 'Navigator',
                imgUrl: '/asset/navigator.png',
                passages:
                    (<>
                        <p>You: So, you’re in charge now right? What do we do?</p>
                        <p>Navigator: I suppose so. I want to turn this bird around and go home - but Rubin won’t let us. His auto-pilot function didn’t deactivate when it should have. The Tech and the Pilot are trying to figure it out.</p>
                        <p>You: Well what about the mission?</p>
                        <p>Navigator: I don’t care. I don’t like it. There’s more going on here than we understand...</p>
                    </>),
                passages_unlocked:
                    (<>
                        <p>You: Can I speak to you privately?</p>
                        <p>Navigator: Sure.</p>
                        <p>*You both walk to the Nav Station, high above the rest of the Main Deck</p>
                        <p>Navigator: What’s on your mind?</p>
                        <p>You: I know what you did. I know you killed him.</p>
                        <p>Navigator: I’m responsible for the Captain’s disappearance? What are you talking about??</p>
                        <p>You: Don’t play dumb, I found the body. The Engineer is taking care of it. And I read your datapad. You put your journal in my locker so I found the password.</p>
                        <p>Navigator:... Did you read it all?</p>
                        <p>You: Yeah. I did. And I gotta say, that shit is crazy. Is it true?Navigator: All of it. There was too much to write, I couldn’t even put it all in there.</p>
                        <p>You: So you killed him - to what? Save the crew? Why the fuck haven’t you said anything to anyone?</p>
                        <p>Navigator: Because there’s a fucking mole on this ship. One of the crew. A secret ES-SD agent… here to make sure the mission goes according to plan. To ensure everyone but them and the Captain are harvested.</p>
                        <p>You: So you don’t know who it is?</p>
                        <p>Navigator: No. I’ve been trying to figure it out since I kil… killed the Captain.</p>
                        <p>You: Well you did the right thing… but we need to find this mole and turn this fucking ship around.</p>
                        <p>Navigator: I know… how did you find the body?</p>
                        <p>You: I just opened the air vent.</p>
                        <p>Navigator: Yeah, but how did you think to look there? Those are not easy to access.</p>
                        <p>*You ponder your thoughts and recollect an earlier conversation</p>
                        <p>Navigator: Well?</p>
                        <p>You: The cook. I talked to the cook and he said something about an air vent. So it made me think to look into them. I didn’t think I was actually going to find anything.</p>
                        <p>Navigator:... how the hell would he know that?</p>
                        <p>You: Coincidence?</p>
                        <p>Navigator: Maybe he found him… but when? How did he have time to look? And why the hell would he say something to you?</p>
                        <p>You: Let’s go find out.</p>
                    </>),
            },
            {
                name: 'Pilot',
                imgUrl: '/asset/pilot.png',
                passages:
                    (<>
                        <p>Sitting in his Helmsmans chair, the Pilot toils away on his console seeing what he can determine. You can tell he’s frustrated… he has no control of the Revolution.</p>
                        <p>You: How’s it going? Still no control?</p>
                        <p>Pilot: Nope. The geek is in the Mainframe trying to fix Rubin; I’ve been talking to him on the comm but we still can’t seem to disable the AP.</p>
                        <p>You: That doesn’t even make sense. But I can’t remember shit, so...</p>
                        <p>Pilot: Nothing about this mission makes sense. Not even the personnel</p>
                        <p>You: What do you mean?</p>
                        <p>Pilot: *whispers* The Captain and the Navigator go way back - served together a lot. I know they don’t get along. The Cook though? Guy has no record. I did some digging on everyone before the freeze and honestly, it just confused me. Why the hell would they send a Botanist on a mission like this? And a Cook with no flight experience? At least that we know of? I don’t know man, something’s fucky.</p>
                        <p>You: Weird.</p>
                        <p>Pilot: You didn’t hear that from me though.</p>
                    </>)
            },
        ],
        objects: [
            {
                name: 'Nav Station',
                passages:
                    (<>
                        <p>You find a small blood splatter (nearly impossible to detect) on the control panel.</p>
                        <p>As you examine the splatter pattern, you follow its trail, ending with a seemly large swipe of blood (as if someone tried to clean it up in a rush)</p>
                    </>)
            },
            {
                name: 'Ship Directory',
                passages:
                    (<>
                        <p>You find that data has been wiped off the Directory. </p>
                        <p>The main person that uses the directory is the Navigator, as he is also the ship’s Administrator.</p>
                    </>)
            },
            {
                name: 'Air Vent',
                passages:
                    (
                        <p>Empty</p>
                    )
            }
        ]
    })
}
