export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Barracks',
        people: [
            {
                name: 'Cook',
                passages:
                    (<>
                        <p>You: What the hell is going on? What do you think happened?</p>
                        <p>Cook: I don&apos;t know man, I just cook and clean. Guy&apos;s probably just hiding in an air vent somewhere… all that space time finally broke him.</p>
                        <p>*This interaction unlocks the ability to check the air vent in each area</p>
                    </>),
                passages_unlocked:
                    (<>
                        <p>Navigator: So we found the Captain.</p>
                        <p>Cook: What!? Where? Is he okay?</p>
                        <p>You: He’s dead. Found him in an air vent.</p>
                        <p>Cook: Whoa whoa whoa, you don’t think I killed him do you!? Jeez… I didn’t know where he was, that was just a guess! A lucky guess! I didn’t kill him!</p>
                        <p>Navigator: We know.</p>
                        <p>Cook:... so what the hell is this?</p>
                        <p>Navigator: You know don’t you? You know what’s at the end of this flight. What’s waiting for us at those coordinates. Well, all of us except for you and the late Captain.</p>
                        <p>*The Cook’s manic expression quickly turns to a calm demeanor*</p>
                        <p>Cook: So what if I do?</p>
                        <p>Navigator: What’s stopping me from killing you like I killed the Captain?</p>
                        <p>Cook: Hmm, so it was you. Should have figured. You two always had beef. Never thought you had the stomach for something like that though.</p>
                        <p>You: What’d you do to Rubin? How do we turn off his auto-pilot program?</p>
                        <p>Cook: Only I can undo it. I made sure of that when I sabotaged it.</p>
                        <p>*The Navigator quickly punches the Cook, a brawl ensues*</p>
                        <p>*You join the fight and the Cook gets knocked out cold*</p>
                        <p>You: Let’s give this piece of shit to the Security Officer. He’ll make him talk.</p>
                    </>)
            }
        ],
        objects: [
            {
                name: 'Air Vent',
                passages:
                    (
                        <p>Empty</p>
                    )
            },
            {
                name: 'Cryo-Pods',
                passages:
                    (<>
                        <p>*You investigate each cryo-pod’s datapad for more information.</p>
                        <p>Player: Seems like the Navigator&apos;s and Captain&apos;s pods were the first ones open. Interesting...</p>
                    </>)
            },
            {
                name: 'Locker',
                passages:
                    (<>
                        <p>By going back to the locker you find a blood soaked journal.</p>
                        <p>You notice that the inside contains the Navigator&apos;s handwriting, which with further reading shows the password to his datapad (which is in the Hangar).</p>
                    </>)
            }
        ]
    })
}
