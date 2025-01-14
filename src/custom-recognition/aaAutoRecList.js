
import { autoRecMigration } from "./autoRecMerge.js";
export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            search: "",
            melee: {
                0: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemDagger"),
                    animation: 'dagger',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                1: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemFlurryBlows"),
                    animation: 'flurryofblows',
                    variant: 'physical',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                2: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemGreataxe"),
                    animation: 'greataxe',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                3: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemGreatclub"),
                    animation: 'greatclub',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                4: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemGreatsword"),
                    animation: 'greatsword',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                5: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemHandaxe"),
                    animation: 'handaxe',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                6: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemSword"),
                    animation: 'sword',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                7: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemMace"),
                    animation: 'mace',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                8: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemMaul"),
                    animation: 'maul',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                9: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemSpear"),
                    animation: 'spear',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                10: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemRapier"),
                    animation: 'rapier',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
                11: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.itemUnarmedStrike"),
                    animation: 'unarmedstrike',
                    variant: 'physical',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                },
            },
            range: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.crossbow"),
                    animation: 'bolt',
                    variant: 'physical',
                    color: 'orange',
                    repeat: 1,
                    delay: 500,
                    type: "weapon",
                },
                1: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.bow"),
                    animation: 'arrow',
                    variant: 'regular',
                    color: 'regular',
                    repeat: 1,
                    delay: 500,
                    type: "weapon",
                },
                2: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemDisintegrate"),
                    animation: 'disintegrate',
                    variant: '01',
                    color: 'green',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
                3: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemEldritchBlast"),
                    animation: 'eldritchblast',
                    variant: '01',
                    color: 'purple',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
                4: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemFireBolt"),
                    animation: 'firebolt',
                    variant: '01',
                    color: 'orange',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
                5: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemGuidingBolt"),
                    animation: 'guidingbolt',
                    variant: '01',
                    color: 'blueyellow',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
                6: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemMagicMissile"),
                    animation: 'magicmissile',
                    variant: '01',
                    color: 'purple',
                    repeat: 3,
                    delay: 500,
                    type: "spell",
                },
                7: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemRayFrost"),
                    animation: 'rayoffrost',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
                8: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemScorchingRay"),
                    animation: 'scorchingray',
                    variant: '01',
                    color: 'orange',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
                9: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemWitchBolt"),
                    animation: 'witchbolt',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                },
            },
            static: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemCureWounds"),
                    animation: 'curewounds',
                    staticOptions: 'staticSpells',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1.5,
                    below: true,
                    type: "targetDefault",
                },
                1: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemHealingWord"),
                    animation: 'generichealing',
                    staticOptions: 'staticSpells',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1.5,
                    below: true,
                    type: "targetDefault",
                },
                2: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.tollthedead"),
                    animation: 'tollthedead',
                    staticOptions: 'staticSpells',
                    variant: 'complete',
                    color: 'green',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    below: false,
                    type: "target",
                },
                3: {
                    staticOptions: 'creature',
                    animation: "bite",
                    below: false,
                    color: "red",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemBite"),
                    repeat: 1,
                    scale: 1,
                    type: "target",
                    variant: "01",
                },
                4: {
                    staticOptions: 'creature',
                    animation: "claw",
                    below: false,
                    color: "red",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemClaw"),
                    repeat: 1,
                    scale: 1,
                    type: "target",
                    variant: "01",
                },
            },
            templates: {
                0: {
                    animation: "calllightning",
                    below: false,
                    color: 'blueorange',
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.animCallLightning"),
                    occlusionAlpha: 0.7,
                    occlusionMode: "3",
                    opacity: 0.75,
                    overhead: true,
                    persist: true,
                    persistType: 'overheadtile',
                    removeTemplate: true,
                    repeat: 1,
                    type: 'circle',
                    variant: '01',
                },
                1: {
                    animation: "fogcloud",
                    below: false,
                    color: 'white',
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.animFogCloud"),
                    occlusionAlpha: 0.65,
                    occlusionMode: "3",
                    opacity: 0.75,
                    overhead: true,
                    persist: true,
                    persistType: 'overheadtile',
                    removeTemplate: true,
                    repeat: 1,
                    type: 'circle',
                    variant: '01',
                },
                2: {
                    animation: "thunderwave",
                    below: false,
                    color: "blue",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemThunderwave"),
                    opacity: 0.75,
                    persist: false,
                    removeTemplate: true,
                    repeat: 3,
                    type: "rect",
                    variant: "01",
                }
            },
            auras: {
                0: {
                    animation: "spiritguardians",
                    below: false,
                    color: 'darkblue',
                    custom: false,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.animSpiritGuardians"),
                    opacity: 0.75,
                    scale: 3.5,
                    static: false,
                    tint: '#ffffff',
                    variant: '01',
                    ignoretargets: true,
                },
            },
            preset: {
                0: {
                    animateSelf: true,
                    animateTarget: true,
                    animation: "bardicinspiration",
                    below: false,
                    hidden: true,
                    marker: true,
                    name: game.i18n.localize("AUTOANIM.bardicInspiration"),
                    scale: 1,
                    selfAnimation: "music",
                    selfColor: "blue",
                    selfMarkerColor: "greenorange",
                    targetAnimation: "bardicinspiration",
                    targetColor: "greenorange",
                    targetMarkerColor: "greenorange",
                },
                1: {
                    addCTA: false,
                    animation: "bless",
                    below: true,
                    color: "yellow",
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.bless"),
                    scale: 1.5,
                },
                2: {
                    animation: "shieldspell",
                    below: false,
                    color: "blue",
                    endeffect: "outro_explode",
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.shield"),
                    scale: 1,
                    variant: "01",
                },
                3: {
                    animation: "teleportation",
                    below: false,
                    color: "blue",
                    custom: false,
                    hidden: true,
                    hideTemplate: false,
                    name: game.i18n.localize("AUTOANIM.itemMistyStep"),
                    range: 30,
                    scale: 1.5,
                    subAnimation: "mistystep",
                }
            },
            version: 2,
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutorec();