// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Barracks',
        people: [
            {
                name: 'Nav Station',
                passages: 
                    (<>
                        <p>You find a small blood splatter (nearly impossible to detect) on the control panel.</p>
                        <p>As you examine the splatter pattern, you follow its trail, ending with a seemly large swipe of blood (as if someone tried to clean it up in a rush)</p>
                    </>)
                
            }
        ],
        objects: [
            {
                name: 'Navigator',
                passages: 
                    (<>
                        <p>Player: So, you’re in charge now right? What do we do?</p>
                        <p>I suppose so. I want to turn this bird around and go home - but Rubin won’t let us. His auto-pilot function didn’t deactivate when it should have. The Tech and the Pilot are trying to figure it out.</p>
                        <p>Player: Well what about the mission?</p>
                        <p>Navigator: I don’t care. I don’t like it. There’s more going on here than we understand...</p>
                    </>)
                
            },
            {
                name: 'Pilot',
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
