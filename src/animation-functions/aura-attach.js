import { buildFile } from "./file-builder/build-filepath.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function auras(handler, animationData) {

    //const gridSize = canvas.grid.size
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    //const targetFX = animationData.targetFX;

    if (data.isAuto) {
        data.size = data.scale * 2;
    } else {
        data.size = data.auraRadius * 2;
    }

    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']

    const sourceToken = handler.sourceToken;
    const aura = await buildFile(true, data.animation, "static", data.variant, data.color, data.customPath);

    if (handler.debug) { aaDebugger("Aura Animation Start", animationData, aura) }
    if (handler.allTargets.length === 0 || data.ignoreTargets) {
        selfAura()
    } else {
        targetAura();
    }


    async function selfAura() {
        const randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]
        let checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.item.uuid }).length > 0
        //let playPersist = !checkAnim ? true : false;
        let aaSeq = new Sequence()
        if (!checkAnim) {
            if (data.playMacro && data.macro.playWhen === "1") {
                let userData = data.macro.args;
                aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
                    .play()
            }
            aaSeq.addSequence(sourceFX.sourceSeq)
            aaSeq.effect()
                .persist()
                .origin(handler.item.uuid)
                .size(data.size, { gridUnits: true })
                .belowTokens(data.below)
                .file(aura.file)
                .attachTo(sourceToken)
                .name(sourceToken.name)
                .opacity(data.opacity)
                .animateProperty("sprite", "width", { from: 0, to: data.size, duration: 2500, ease: randomEase, gridUnits: true })
                .animateProperty("sprite", "height", { from: 0, to: data.size, duration: 2500, ease: randomEase, gridUnits: true })
                .fadeIn(2500)
                .fadeOut(500)
            if (data.playMacro && data.macro.playWhen === "0") {
                let userData = data.macro.args;
                new Sequence()
                    .macro(data.macro.name, handler.workflow, handler, [...userData])
                    .play()
            }
            AAanimationData.howToDelete("sequencerground")
        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        aaSeq.play()
    }

    async function targetAura() {

        let randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]

        let aaSeq = new Sequence()
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
        }
        aaSeq.addSequence(sourceFX.sourceSeq)
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0

            if (!checkAnim) {
                aaSeq.effect()
                    .attachTo(target)
                    .persist()
                    .origin(handler.item.uuid)
                    .name(`${target.name}-${handler.itemName}`)
                    .size(data.size, { gridUnits: true })
                    .belowTokens(data.below)
                    .file(aura.file)
                    .animateProperty("sprite", "width", { from: 0, to: data.size, duration: 2500, ease: randomEase, gridUnits: true })
                    .animateProperty("sprite", "height", { from: 0, to: data.size, duration: 2500, ease: randomEase, gridUnits: true })
                    .fadeIn(2500)
                    .fadeOut(500)
            }

        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        // Macro if Concurrent
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, [...userData])
                .play()
        }
        aaSeq.play()
        AAanimationData.howToDelete("sequencerground")
    }
}