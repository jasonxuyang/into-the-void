export default function handler(req, res) {
    res.status(200).json({
        locationName: 'Hangar',
        people: [
            {
                name: 'Security Officer',
                imgUrl: '/asset/security-officer.png',
                passages:
                    (<>
                        <p>You: So what do you think is going on?</p>
                        <p>Security Officer: I don’t know. But I know someone on this ship is guilty. And when I find out who it is, I’m gonna kill them.</p>
                        <p>You: Jeez…</p>
                    </>),
                passages_unlocked:
                    (<>
                        <p>*The Navigator and yourself bring the Cook to the Security Officer*</p>
                        <p>*You both tell him everything - he seems confused, shocked, but angry*</p>
                        <p>*He takes the Cook and throws him (literally) in the Brig*</p>
                        <p>*The Security Officer then places something under the Cook’s nose and he immediately jolts awake*</p>
                        <p>Cook: Why the fuck am I in here? He’s the killer!</p>
                        <p>Navigator: Save it. We already told him everything. How do we turn this ship around?</p>
                        <p>Cook: Like I would fucking tell you that.</p>
                        <p>Security Officer: You two should leave. The Cook and I have some talking to do.</p>
                        <p>*The Navigator looks at you, disturbed*</p>
                        <p>*You both leave and wait on the Main Deck*</p>
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
                name: `Captain's Belongings`,
                passages:
                    (<>
                        <p>You walk towards the captain’s main seat. Beside his chair, you see a small compartment under his chair.</p>
                        <p>You look through it and find an empty knife sheath.</p>
                        <p>Why would this be here?</p>
                    </>)
            },
            {
                name: 'Datapad',
                passages:
                    (<>
                        <p>Navigation Officer</p>
                        <p>Last Entry: 1 month, 5 days, 18 hours, 15 minutes, 7 seconds ago</p>
                        <p>PASSWORD REQUIRED</p>
                        <p>Player: This entry is from a month ago… Was the Navigator on his rotation?</p>
                    </>),
                passages_unlocked:
                    (<>
                        <p>Last Entry: 2 hours, 15 minutes, 7 seconds ago -
                            I don’t know how I’m gonna do this. I don’t even know if I can stop it. Rubin has the ship continuing towards the beacon. This may have all been for not.
                        </p>
                        <p>Entry: 1 month, 6 days, 8 hours, 22 minutes, 29 seconds ago -
                            I don’t know what to do. I can’t tell the crew when they wake up. I know there’s a mole on the ship - I just don’t know who. I can’t trust anyone.
                        </p>
                        <p>Entry: 1 month, 9 days, 4 hours, 56 minutes, 51 seconds ago -
                            The Captain is gone. I can’t believe it. I couldn’t let him steer us into oblivion. I did what I had to… now I have to figure out what the next step is.
                        </p>
                        <p>Entry: 1 month, 17 days, 10 hours, 40 minutes, 6 seconds ago -
                            It’s worse than I thought. The Captain told me everything. They’re harvesting us. Turning people into Alien-Human Hybrids using an alien substance they discovered years ago. They want to make us test subjects. Experiment on us and make us into their guinea pigs. I can’t let this happen. He told me he’s led two trips to the Black Site. The ES-SD protects him and he does what they say. He is Death, ferrying souls to their doom. He wanted to make a deal with me… don’t talk and he’d tell the ES-SD not to use me - basically be his sidekick. I told him I’d join him… just to give me time to think.
                        </p>
                        <p>Entry: 1 month, 19 days, 16 hours, 51 minutes, 34 seconds ago -
                            I think I’m going to unfreeze the Captain. Maybe I can convince him to tell me the truth.
                        </p>
                        <p>Entry: 1 montsh, 20 days, 2 hours, 32 minutes, 2 seconds ago -
                            I finally cracked into the Captain’s personal log. I can’t believe what I found. This beacon we’re heading towards is a lie. It’s not of unknown origin. It’s not of unknown intent. The ES-SD has been faking missions to these coordinates for years. It’s an ES-SD Black Site. A few decades ago, the ES-SD discovered debris of alien origin on a moon orbiting a gas giant. They set up shop and built a research facility there about 16 years ago. Since then, they’ve been sending missions there every few years. I don’t know why the hell we’re going there, but I need to find out. I need to speak to the Captain.
                        </p>
                        <p>Entry: 1 month, 25 days, 12 hours, 12 minutes, 42 seconds ago -
                            Something weird is going on. I talked to the Captain just before we took off and he was cagey. His eyes darted. In my experience with him, he’s never acted like that. Not with me. He’s always been an asshole to me. I’m gonna get to the bottom of this. Luckily my cycle is a month before everyone wakes up.
                        </p>
                    </>)
            },
        ]
    })
}
