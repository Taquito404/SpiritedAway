import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

export default function PlotComponent({ openPlot, handleClosePLot }) {
  return (
    <Dialog
      open={openPlot}
      onClose={handleClosePLot}
      scroll="paper"
      id="plotModalStyle"
    >
      <DialogTitle id="scroll-dialog-title">Plot</DialogTitle>
      <DialogContent>
        <p>
          Ten-year-old Chihiro Ogino and her parents are traveling to their new
          home when her father decides to take a shortcut. The family's car
          stops in front of a tunnel leading to what appears to be an abandoned
          amusement park which Chihiro's father insists on exploring, despite
          his daughter's protest. They find a seemingly empty restaurant still
          stocked with food, which Chihiro's parents immediately begin to eat.
          While exploring further, Chihiro reaches an enormous bathhouse and
          meets a boy named Haku, who warns her to return across the riverbed
          before sunset. However, Chihiro discovers too late that her parents
          have metamorphosed into pigs, and she is unable to cross the
          now-flooded river. Haku finds Chihiro and has her ask for a job from
          the bathhouse's boiler-man, Kamaji, a yōkai commanding the susuwatari.
          Kamaji refuses to hire her and asks worker Lin to send Chihiro to
          Yubaba, the witch who runs the bathhouse. Yubaba tries to frighten
          Chihiro away, but she persists, so Yubaba gives Chihiro a contract to
          work for her. Yubaba takes away the second kanji of her name, renaming
          her Sen (千). While visiting her parents' pigpen, Haku gives Sen a
          goodbye card she had with her, and Sen realizes that she had already
          forgotten her real name. Haku warns her that Yubaba controls people by
          taking their names, and that if she forgets hers like he has forgotten
          his, she will not be able to leave the spirit world. Sen faces
          discrimination from the other workers; only Kamaji and Lin show
          sympathy for her. While working, she invites a silent creature named
          No-Face (Kaonashi 顔無し) inside, believing him to be a customer. A
          "stink spirit" arrives as Sen's first customer, and she discovers he
          is the spirit of a polluted river. In gratitude for cleaning him, he
          gives Sen a magic emetic dumpling. Meanwhile, No-Face imitates the
          gold left behind by the stink spirit and tempts a worker with gold,
          then swallows him. He demands food and begins tipping extensively. He
          swallows two more workers when they interfere with his conversation
          with Sen. Sen sees paper Shikigami attacking a dragon and recognizes
          the dragon as Haku metamorphosed. When a grievously injured Haku
          crashes into Yubaba's penthouse, Sen follows him upstairs. A shikigami
          that stowed away on her back shapeshifts into Zeniba, Yubaba's twin
          sister. She turns Yubaba's son, Boh, into a mouse, creates a decoy
          Boh, and mutates Yubaba's harpy into a tiny, flylike bird. Zeniba
          tells Sen that Haku has stolen a magic golden seal from her, and warns
          Sen that it carries a deadly curse. Haku strikes the shikigami, which
          eliminates Zeniba's hologram. He falls into the boiler room with Sen,
          Boh, and the harpy on his back, where Sen feeds him part of the
          dumpling she had intended to give her parents, causing him to vomit
          both the seal and a black slug, which Sen crushes with her foot. With
          Haku unconscious, Sen resolves to return the seal and apologize to
          Zeniba. Sen confronts No-Face, who is now massive, and feeds him the
          rest of the dumpling. No-Face follows Sen out of the bathhouse,
          steadily regurgitating everything that he has eaten. Sen, No-Face,
          Boh, and the harpy travel to see Zeniba with train tickets given to
          her by Kamaji. Meanwhile, Yubaba orders that Sen's parents be
          slaughtered, but Haku reveals that Boh is missing and offers to
          retrieve him if Yubaba releases Sen and her parents. Yubaba agrees,
          but only if Sen can pass a final test. Sen meets with Zeniba, who
          makes her a magic hairband and reveals that Sen's love for Haku broke
          her curse and that Yubaba used the black slug to take control over
          Haku. Haku appears at Zeniba's home in his dragon form and flies Sen,
          Boh, and the harpy to the bathhouse. No-Face decides to stay behind
          and become Zeniba's spinner. In mid-flight, Sen recalls falling years
          ago into the Kohaku River and being washed safely ashore, correctly
          guessing Haku's real identity as the spirit of the Kohaku River
          (ニギハヤミ コハクヌシ, Nigihayami Kohakunushi). When they arrive at
          the bathhouse, Yubaba forces Sen to identify her parents from among a
          group of pigs in order to break their curse. After she answers
          correctly that none of the pigs are her parents, her contract
          disappears and she is given back her real name. Haku takes her to the
          now-dry riverbed and vows to meet her again. Chihiro crosses the
          riverbed to her restored parents, who do not remember anything after
          eating at the restaurant stall. They walk back through the tunnel
          until they reach their car, now covered in dust and leaves. Before
          departing, Chihiro looks back at the tunnel.
        </p>{" "}
      </DialogContent>
    </Dialog>
  );
}
