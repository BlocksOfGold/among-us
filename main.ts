namespace SpriteKind {
    export const crew = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level26`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level36`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(imposter, assets.tile`myTile0`)
    OrangeCrew.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level22`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level22`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnRandomTile(imposter, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crew, function (sprite, otherSprite) {
    if (otherSprite == OrangeCrew) {
        if (controller.A.isPressed()) {
            Orange += 1
            OrangeCrew.destroy(effects.fire, 500)
        }
    }
    if (otherSprite == BlackCrew) {
        if (controller.A.isPressed()) {
            Black += 1
            BlackCrew.destroy(effects.fire, 500)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(imposter, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level29`)
    if (!(Orange >= 1)) {
        OrangeCrew = sprites.create(assets.image`myImage0`, SpriteKind.crew)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level34`)
    if (!(Black >= 1)) {
        BlackCrew = sprites.create(assets.image`myImage1`, SpriteKind.crew)
    }
})
let Black = 0
let BlackCrew: Sprite = null
let Orange = 0
let OrangeCrew: Sprite = null
let imposter: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
imposter = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(imposter)
tiles.placeOnRandomTile(imposter, assets.tile`myTile0`)
scene.cameraFollowSprite(imposter)
