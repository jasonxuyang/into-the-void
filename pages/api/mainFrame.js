export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Main Frame',
        people: [
            {
                name: 'RBN',
                passages:
                    (<>
                        <p>You: Hey Rubin, How’s the weather outside today?</p>
                        <p>RBN: Haha, very amusing. Is there anything I can assist you with?</p>
                        <p>You: Yeah actually, what the hell is going on?</p>
                        <p>RBN: You’ll have to be more specific; what are you referring to?</p>
                        <p>You: The Captain. Where is he?</p>
                        <p>RBN: According to my logs, the Captains pod was opened *pause* bvlkiahdcIYHGOUazxljhgv jhkabsc kjabsxckjlabx KHSBXouY</p>
                        <p>You: What?</p>
                        <p>RBN: Error accessing this information.</p>
                        <p>Technician: He’s glitched out every time I ask him something about the Captain.</p>
                        <p>You: That’s not suspicious at all</p>
                    </>)
            },
            {
                name: 'Technician',
                passages:
                    (<>
                        <p>You: Hey.</p>
                        <p>Technician: Hey.</p>
                        <p>You: Any idea what’s going on with Rubin?</p>
                        <p>Technician: Not quite sure yet. Seems that his operating system is acting abnormal. Executions and commands are performing the way they should. Some of them anyway.</p>
                        <p>You: Why? Is that fixable?</p>
                        <p>Technician: I have no idea why. I could; if I had the access codes to some of this stuff. A lot of these problems seem to be rooted at a higher level than even I have access to.</p>
                        <p>You: You can’t hack it or get in through a backdoor or something?</p>
                        <p>Technician: Theoretically I could, but that’s illegal. And time consuming.</p>
                        <p>You: Shit.</p>
                        <p>Technician: Yeah and the Navigator is on me about fixing it ASAP but… I don’t know. He’s weird. Kinda too concerned. We’re going where we need to go… can’t we complete the mission and then turn around? It’s off to me.</p>
                        <p>You: Hmmm</p>
                    </>)
            },
        ],
        objects: [
            {
                name: 'Cut Wire',
                passages:
                    (<>
                        <p>After looking around for a bit, you notice that there is a loose colored wire towards the back of the room behind the main computer.</p>
                        <p>As you get closer and squat down, you can see that it wasn&apos;t just a loose piece of wire but in fact it was cut.</p>
                        <p>The technician notices you bent over in the corner and walks towards you.</p>
                        <p>You show them the cut wire.</p>
                        <p>The technician explains that that wire connects RBN to the main control panel in the main deck.</p>
                        <p>They questioned it for a second and were murmuring something under their breath but you didn&apos;t catch it.</p>
                        <p>They ask you to move so the repairs can be started, which will take a while to fix.</p>
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
