// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Main Frame',
        people: [
            {
                name: 'RBN',
                passages: [
                    (<>
                        <p>You: Hey Rubin, How’s the weather outside today?</p>
                        <p>Haha, very amusing. Is there anything I can assist you with?</p>
                        <p>Yeah actually, what the hell is going on?</p>
                        <p>You’ll have to be more specific; what are you referring to?</p>
                        <p>The Captain. Where is he?</p>
                        <p>According to my logs, the Captains pod was opened *pause* bvlkiahdcIYHGOUazxljhgv jhkabsc kjabsxckjlabx KHSBXouY</p>
                        <p>What?</p>
                        <p>Error accessing this information.</p>
                        <p>He’s glitched out every time I ask him something about the Captain.</p>
                        <p>That’s not suspicious at all...</p>
                    </>)
                ]
            }
        ],
        objects: [
            {
                name: 'Cut Wire',
                passages: [
                    (<>
                        <p>After looking around for a bit, you notice that there is a loose colored wire towards the back of the room behind the main computer.</p>
                        <p>As you get closer and squat down, you can see that it wasn't just a loose piece of wire but in fact it was cut.</p>
                        <p>The technician notices you bent over in the corner and walks towards you.</p>
                        <p>You show them the cut wire.</p>
                        <p>The technician explains that that wire connects RBN to the main control panel in the main deck.</p>
                        <p>They questioned it for a second and were murmuring something under their breath but you didn't catch it.</p>
                        <p>They ask you to move so the repairs can be started, which will take a while to fix.</p>
                    </>)
                ]
            },
            {
                name: 'Air Vent',
                passages: [
                    (
                        <p>Empty</p>
                    )
                ]
            },
            {
                name: 'Technician',
                passages: [
                    (<>
                        <p>Doesn’t talk much because they’re trying to figure out why RBN is on Autopilot</p>
                        <p>Does bring up the fact that the Navigator was very adamant that they fix RBN at all cost </p>
                    </>)
                ]
            },
        ]
    })
}
