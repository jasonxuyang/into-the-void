// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Barracks',
        people: [
            {
                name: 'Cook',
                passages: [
                    (<>
                        <p>Player: What the hell is going on? What do you think happened?</p>
                        <p>Cook: I don’t know man, I just cook and clean. Guy’s probably just hiding in an air vent somewhere… all that space time finally broke him.</p>
                        <p>*This interaction unlocks the ability to check the air vent in each area</p>
                    </>)
                ]
            }
        ],
        objects: [
            {
                name: 'Air Vent',
                passages: [
                    (
                        <p>Empty</p>
                    )
                ]
            },
            {
                name: 'Cryo-Pods',
                passages: [
                    (<>
                        <p>*You investigate each cryo-pod’s datapad for more information.</p>
                        <p>Player: Seems like the Navigator's and Captain's pods were the first ones open. Interesting...</p>
                    </>)
                ]
            },
            {
                name: 'Datapad',
                passages: [
                    (<>
                        <p>Navigation Officer</p>
                        <p>Last Entry: 1 month, 5 days, 18 hours, 15 minutes, 7 seconds ago</p>
                        <p>PASSWORD REQUIRED</p>
                        <p>Player: This entry is from a month ago… Was the Navigator on his rotation?</p>
                    </>)
                ]
            }
        ]
    })
}
