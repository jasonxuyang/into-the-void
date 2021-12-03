export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Engineering',
        people: [
            {
                name: 'Engineer',
                imgUrl: '/asset/engineer.png',
                passages:
                    (<>
                        <p>You: So you have no concern for what’s going on?</p>
                        <p>Engineer: Leave me alone.</p>
                        <p>You: ...okay.</p>
                    </>),
                passages_unlocked:
                    (
                        <p>Engineer: Go see what you can find. I’ll take care of the Captain.</p>
                    )
            }
        ],
        objects: [
            {
                name: 'Air Vent',
                passages:
                    (<>
                        <p>Finds the captain’s body. Stabbed a few times. </p>
                        <p>You: Oh fuck.</p>
                        <p>Engineer: Well… shit.</p>
                        <p>You: What do we do?? Why is this happening??</p>
                        <p>Engineer: Well whoever did this probably put him here to hide the smell. It already smells like shit in here. I don’t know man. I’ll um… I’ll take care of him. Go see what you can find out. Somebody on this ship is a killer. Don’t let anyone know you found this.</p>
                        <p>You: The cook said something to me about the vents. That’s what made me look…</p>
                        <p>Engineer: That’s fucking weird.</p>
                    </>)
            }
        ]
    })
}
