export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Lab',
        people: [
            {
                name: 'Botanist',
                imgUrl: '/asset/botanist.png',
                passages:
                    (<>
                        <p>You: What’s going on down here? Any guesses as to what the hell is going on?</p>
                        <p>Botanist: Nope.</p>
                        <p>Physicist: Nope.</p>
                        <p>Doctor: Nope.</p>
                        <p>Botanist: We’ve all been trying to figure out how this has even happened… haven’t even moved on to why or who.</p>
                        <p>You: Yeah, I’ve been going over it all in my head too. I can’t seem to make sense of it.</p>
                        <p>Doctor: How are you feeling? Anything coming back yet? You couldn’t even remember why you were here, let alone the mystery as to what’s going on.</p>
                        <p>You: Still foggy. Things are starting to occur to me but I really can’t put a lot together.</p>
                        <p>Doctor: Give it time. You’ll come around.</p>
                        <p>*I hope so, this is all too much</p>
                        <p>Physicist: ya know I was in a coma once.</p>
                        <p>Everyone in the room: Really!?</p>
                        <p>Physicist: Yeah it only lasted 3 days, but damn. Trying to piece together my memories and surroundings after that was a nightmare. Took weeks for me to feel normal again.</p>
                        <p>Botanist: What happened?</p>
                        <p>Physicist: Bike accident.</p>
                        <p>Doctor: I knew it.</p>
                        <p>Physicist: Yeah its always some stupid shit like that with those kinda things.</p>
                        <p>You: Well, I hope it doesn’t take weeks for me.</p>
                        <p>Doctor: It shouldn’t.</p>
                    </>)

            },
            {
                name: 'Physicist',
                imgUrl: '/asset/physicist.png',
                passages:
                    (<>
                        <p>You: What’s going on down here? Any guesses as to what the hell is going on?</p>
                        <p>Botanist: Nope.</p>
                        <p>Physicist: Nope.</p>
                        <p>Doctor: Nope.</p>
                        <p>Botanist: We’ve all been trying to figure out how this has even happened… haven’t even moved on to why or who.</p>
                        <p>You: Yeah, I’ve been going over it all in my head too. I can’t seem to make sense of it.</p>
                        <p>Doctor: How are you feeling? Anything coming back yet? You couldn’t even remember why you were here, let alone the mystery as to what’s going on.</p>
                        <p>You: Still foggy. Things are starting to occur to me but I really can’t put a lot together.</p>
                        <p>Doctor: Give it time. You’ll come around.</p>
                        <p>*I hope so, this is all too much</p>
                        <p>Physicist: ya know I was in a coma once.</p>
                        <p>Everyone in the room: Really!?</p>
                        <p>Physicist: Yeah it only lasted 3 days, but damn. Trying to piece together my memories and surroundings after that was a nightmare. Took weeks for me to feel normal again.</p>
                        <p>Botanist: What happened?</p>
                        <p>Physicist: Bike accident.</p>
                        <p>Doctor: I knew it.</p>
                        <p>Physicist: Yeah its always some stupid shit like that with those kinda things.</p>
                        <p>You: Well, I hope it doesn’t take weeks for me.</p>
                        <p>Doctor: It shouldn’t.</p>
                    </>)

            },
            {
                name: 'Doctor',
                imgUrl: '/asset/doctor.png',
                passages:
                    (<>
                        <p>You: What’s going on down here? Any guesses as to what the hell is going on?</p>
                        <p>Botanist: Nope.</p>
                        <p>Physicist: Nope.</p>
                        <p>Doctor: Nope.</p>
                        <p>Botanist: We’ve all been trying to figure out how this has even happened… haven’t even moved on to why or who.</p>
                        <p>You: Yeah, I’ve been going over it all in my head too. I can’t seem to make sense of it.</p>
                        <p>Doctor: How are you feeling? Anything coming back yet? You couldn’t even remember why you were here, let alone the mystery as to what’s going on.</p>
                        <p>You: Still foggy. Things are starting to occur to me but I really can’t put a lot together.</p>
                        <p>Doctor: Give it time. You’ll come around.</p>
                        <p>*I hope so, this is all too much</p>
                        <p>Physicist: ya know I was in a coma once.</p>
                        <p>Everyone in the room: Really!?</p>
                        <p>Physicist: Yeah it only lasted 3 days, but damn. Trying to piece together my memories and surroundings after that was a nightmare. Took weeks for me to feel normal again.</p>
                        <p>Botanist: What happened?</p>
                        <p>Physicist: Bike accident.</p>
                        <p>Doctor: I knew it.</p>
                        <p>Physicist: Yeah its always some stupid shit like that with those kinda things.</p>
                        <p>You: Well, I hope it doesn’t take weeks for me.</p>
                        <p>Doctor: It shouldn’t.</p>
                    </>)

            }
        ],
        objects: [
            {
                name: 'Hydroponic Garden',
                passages:
                    (<>
                        <p>Found buried in the soil of one of the Botanist’s planters, you find a knife. It’s covered in blood and dirt…</p>
                        <p>You: So… this is interesting.</p>
                        <p>Physicist: Oh fuck</p>
                        <p>Botanist: In my garden!? What the fuck, thta’s how we get our oxygen on this damn ship.</p>
                        <p>Doctor: Oh no… bring it here.</p>
                        <p>*You walk towards her, being extra careful with the knife.</p>
                        <p>*Everyone in the lab gathers around the Doc and her station</p>
                        <p>*She takes it from you, wearing gloves. She shakes off the excess dirt.</p>
                        <p>Doctor: I’m no detective, but I bet this has something to do with our missing Captain.</p>
                        <p>Physicist: Who do you think did it? Shit it could be any one of us! Of you!!</p>
                        <p>Doctor: Calm down, we don&apos;t know anything yet. I&apos;m gonna run some tests on this. We can guess that this is our Captain&apos;s blood here, but until I&apos;m done with it, we won&apos;t know for sure.</p>
                        <p>Botanist: Yeah I&apos;m sure that&apos;s someone else&apos;s blood.</p>
                        <p>Doctor: Shut up. I just want to verify.</p>
                        <p>Botanist: Hmmm.</p>
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
