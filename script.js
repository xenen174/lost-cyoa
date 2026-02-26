let path_id = "z1";

// id: [["possible scene/s"], "image name", "scene text"],      id = id | [["a1"]] = from selected id to next id (scene to scene)
let scene_data = {
    z1: [["a1"], "start-up", "Press button to play."],
    a1: [["b1"], "shelter", "After a heavy rainstorm, a little mouse finds himself lost in a dark, damp forest. The familiar warmth of his cozy burrow feels impossibly faraway."],
    b1: [["c1"], "flooded", "The little mouse approaches the familiar path that should lead him home, but his hopeful expression fades as he stares ahead in shock. The once-clear trail is now a murky, churning flood, stretching out like a river through the trees."],
    c1: [["d1", "d2", "d3"], "fork-path", "Desperate to find another way back, the mouse sets off deeper into the unknown woods, hoping to find a safe path home."],
    d1: [["e1"], "first-path", "So along the left path he went. The path was narrow and looked like it wasn't used very much, but it did the job and it wasn't flooded."],
    d2: [["e2"], "second-path", "The mouse follows the middle path, hoping it leads him home. The woods grow darker and quieter, and the damp scent of rain-soaked earth fills the air."],
    d3: [["e3"], "third-path", "The mouse steps cautiously down the third path, shivering as a chill sets in. His fur is still damp from the rain, and his stomach growls softly."],
    e1: [["f1", "f2"], "calling", "While the mouse walked along the path, suddenly, a voice called out to him."],
    e2: [["f3", "f4"], "shadow", "Suddenly, he feels the prickling sensation of being watched. The little mouse watches the shadow from a distance, debating whether to move forward or run away."],
    e3: [["f5"], "cold", "The little mouse's paws grow tired, his stomach twists with hunger as he presses onward, hoping for any sign of home. Just as he begins to lose hope, he spots a bush up ahead, bursting with dark, plump berries."],
    f1: [["g1"], "mr.owl", "“It's a good thing you chose this path. If you'd gone with the other ones, you would've run into Fox or Cat.” said the owl."],
    f2: [["j2"], "run-away", "Upon seeing the face behind the ominous voice, the mouse bolts down the dark, damp path, taking no chances, especially with an owl—a known predator of tiny mice."],
    f3: [["g2"], "encounter", "Seeing no other way around, he approaches cautiously. The cat's sharp eyes gleam, he settles down, in an inviting gesture. Cat: “Ah, little one! So lost and alone. Fear not — follow me, and I'll lead you to a secret shortcut. A safer way out of these woods."],
    f4: [["g3"], "walk-away", "The mouse freezes, hoping to stay out of sight. Slowly, he sneaks off into the woods. “Trying to sneak past, are we? I don't bite... much,” says the raspy voice from the shadows. Even as he runs, he feels something following him into the woods."],
    f5: [["g4", "g5"], "the-bush-dp", "As the aroma of the berries pull him in, the berry bush rustles. He freezes, his heart pounding. He hesitates, wondering if he should approach the bush to satisfy his hunger, or if it might be safer to press on and ignore the temptation."],
    g1: [["h1"], "owl-and-mouse", "Mr. Owl grows curious about the tiny mouse, noting how dark and treacherous the woods are, especially after a storm."],
    g2: [["h2"], "follow", "“Many paths here are treacherous, you see. Only I know the way out. All you have to do is trust me.” The mouse is lulled into following, even as a tiny voice in his head whispers doubts."],
    g3: [["h3"], "fall", "Their footsteps mirror his, but as the mouse fails to watch ahead, he falls into a ditch. The shadow following behind, a cat, now sitting at the edge of the ditch, smirks as the mouse looks up nervously. “Oh, poor little mouse, stuck all alone. Lucky for you, I'm feeling generous tonight.”"],
    g4: [["h4"], "don't-approach", "The mouse decides to ignore the bush and keeps walking, rapidly, hoping to find another, safer source of food along the way. But as he walks, he notices a shadow trailing him, keeping just out of sight."],
    g5: [["h5"], "approach", "Hunger outweighs his caution as he approaches the bush, sniffing the sweet, slightly tart scent of the berries."],
    h1: [["i1", "i2"], "come", "Mr.Owl and Mouse talk for a bit more, until Mr.Owl offers Mouse to come inside his house for a visit."],
    h2: [["i3"], "dead-end", "The cat leads the mouse to a small clearing, a dead-end surrounded by towering, thorny bushes. The mouse, too focused on the eerie path ahead, didn't notice the cat's movements slowing, nor how it subtly veered off the trail."],
    h3: [["i4"], "riddle", "The cat helps the mouse out of the ditch. But once the mouse is out, the cat doesn't let him go home — only under one condition: a riddle. “What has cities, but no houses; mountains, but no trees; and seas, but no fish?”"],
    h4: [["i5"], "run", "The mouse bolts from the bush, fear replacing his hunger. He runs blindly through the woods, his paws pounding the ground as the shadow trails just behind. His hunger vanishes, replaced by pure instinct to escape, and he pushes himself faster, not daring to look back."],
    h5: [["i6"], "berries", "He reaches out to pluck one. “They're perfect ... just what I needed.” From the bush, without him knowing, big eyes are fixed on him."],
    i1: [["z1"], "tea-time" , "“Ah, yes… trust can be such a dangerous thing.” He turns a page of his book, steam curling gently from the cup, in it persumably tea. Want some?"],
    i2: [["j1"], "run-away", "Sensing danger and feeling uneasy in the owl's presence, the mouse decides to flee. He runs as fast as he can, not stopping until the owl is out of sight."],
    i3: [["z1"], "attack", "“This is it — the safest spot in the forest.” The cat's expression darkens as it steps in front of the only exit. With nowhere to go, the mouse realizes too late that the cat's friendly guidance was nothing but a trap. The mouse's fate is sealed, and never makes it home."],
    i4: [["j3"], "sneak-away", "The cat paced, muttering, “Cities but no houses... Maybe I should make it harder next time.” Its back was turned, tail flicking as it mused over the riddle. The mouse didn't wait. Silent and quick, he darted into the underbrush."],
    i5: [["z1"], "walk-home", "The footsteps stop, no longer mirroring his own, and he pauses, heart racing. Gradually, his heartbeat slows as he recognizes his surroundings—the familiar scent of home and the old oak tree. Without thinking, his paws carry him forward, instinct guiding him to safety. He had made it home."],
    i6: [["j4"], "mr.fox", "As he's going to pluck a berry, the bush rustles, and he freezes - heart pounding. From behind the bush, a figure emerges - a Fox - eyes fixed on him."],
    j1: [["z1"], "home", "A familiar scent fills the air. Behind the bushes, the mouse saw smoke rising into the sky. His heart skipped a beat as the warmth of home reached him. He had made it home"],
    j2: [["z1"], "home", "After running for so long, a familiar scent filled the air. Behind the bushes, the mouse saw smoke rising into the sky. His heart skipped a beat as the warmth of home reached him. He had made it home"],
    j3: [["z1"], "realization", "The forest is suddenly too quiet. “Mouse? You were supposed to answer my riddle!” He looks around, only to see where the mouse once stood - empty. “Ran away, did you?” the cat growls. “Well played, little one. Well played. But we'll meet again...”"],
    j4: [["z1"], "end", "The mouse trying to run-away, the fox, listening and watching intently the mouse it detected. He then leaps high and brings his forelimbs straight down forcibly to pin the mouse to the ground. Ending the journey home for the little one."]
};

    // labels for buttons
    let labels = {
        z1: "Play Again",
        a1: "Start",
        b1: "Next",
        c1: "Next",
        d1: "Take the Left Path",
        d2: "Take the Middle Path",
        d3: "Take the Right Path",
        e1: "Next",
        e2: "Next",
        e3: "Next",
        f1: "Listen to the Voice",
        f2: "Ignore the Voice",
        f3: "Approach",
        f4: "Sneak Away",
        f5: "Next",
        g1: "Next",
        g2: "Next",
        g3: "Next",
        g4: "Don't Approach",
        g5: "Approach",
        h1: "Next",
        h2: "Next",
        h3: "Next",
        h4: "Next",
        h5: "Next",
        i1: "Accept Invite",
        i2: "Run Away",
        i3: "Next",
        i4: "Next",
        i5: "Next",
        i6: "Next",
        j2: "Next",
        j3: "Next",
        j4: "Next"
    };

   // update buttons
function updateButtons(path_id) {
    let nextPaths = scene_data[path_id][0]; // get next paths
    let controlsDiv = $(".controls");

    // clear buttons
    controlsDiv.empty();

    // create new button
    nextPaths.forEach(nextId => {
        let label = labels[nextId] || "Next"; // default label
        let buttonHTML = `
            <button class="ctrl-btn" id="${nextId}">
                <svg width="180px" height="60px" viewBox="0 0 180 60">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>${label}</span>
            </button>
        `;
        controlsDiv.append(buttonHTML);
    });

    // click evt
    $(".ctrl-btn").on("click", function () {
        let nextPathId = $(this).attr("id");
        next(nextPathId);
    });
}

// load next scene
function next(path_id) {
    let scene = scene_data[path_id];
    document.querySelector(".start-img").src = "./images/scene/" + scene[1] + ".png";
    document.querySelector(".text").innerHTML = scene[2]; // update text

    // update btn
    updateButtons(path_id);
}

// first scene
updateButtons("z1");